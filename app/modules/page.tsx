'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import StepIndicator from '@/components/StepIndicator'
import ModuleCard from '@/components/ModuleCard'
import { MODULES } from './data'
import type { AllModuleState, ModuleState } from './types'
import { onboardingApi, ApiError } from '@/lib/api'

/* Build default state for all modules */
function buildDefaultState(): AllModuleState {
  const state: AllModuleState = {}
  MODULES.forEach(mod => {
    const radios:  Record<string, string>   = {}
    const checks:  Record<string, Set<string>> = {}
    const selects: Record<string, string>   = {}

    mod.sections.forEach(sec => {
      if (sec.type === 'radio')    radios[sec.label]  = sec.options[0]
      if (sec.type === 'checkbox') checks[sec.label]  = new Set(sec.options) // all checked by default
      if (sec.type === 'select')   selects[sec.label] = sec.options[0]
    })

    state[mod.id] = { enabled: false, expanded: false, radios, checks, selects }
  })
  return state
}

export default function ModulesPage() {
  const router = useRouter()
  const [moduleState, setModuleState] = useState<AllModuleState>(buildDefaultState)
  const [launching,   setLaunching]   = useState(false)

  /* Derived count */
  const enabledCount = Object.values(moduleState).filter(s => s.enabled).length
  const progress     = (enabledCount / MODULES.length) * 100

  /* ── State updaters ── */
  const update = (id: string, patch: Partial<ModuleState>) =>
    setModuleState(prev => ({ ...prev, [id]: { ...prev[id], ...patch } }))

  const handleToggle = (id: string, enabled: boolean) =>
    update(id, { enabled, expanded: enabled })

  const handleExpand = (id: string) => {
    const cur = moduleState[id]
    if (!cur.enabled) {
      update(id, { enabled: true, expanded: true })
    } else {
      update(id, { expanded: !cur.expanded })
    }
  }

  const handleRadio = (id: string, sectionLabel: string, value: string) =>
    update(id, { radios: { ...moduleState[id].radios, [sectionLabel]: value } })

  const handleCheck = (id: string, sectionLabel: string, option: string) => {
    const cur = new Set(moduleState[id].checks[sectionLabel])
    cur.has(option) ? cur.delete(option) : cur.add(option)
    update(id, { checks: { ...moduleState[id].checks, [sectionLabel]: cur } })
  }

  const handleSelect = (id: string, sectionLabel: string, value: string) =>
    update(id, { selects: { ...moduleState[id].selects, [sectionLabel]: value } })

  /* ── Launch ── */
  const handleLaunch = async () => {
    if (enabledCount === 0) {
      alert('Please select at least one module to continue.')
      return
    }
    setLaunching(true)
    try {
      const payload = MODULES
        .filter(m => moduleState[m.id].enabled)
        .map(m => {
          const s = moduleState[m.id]
          return {
            moduleId: m.id,
            name:     m.name,
            config: {
              radios:  s.radios,
              checks:  Object.fromEntries(
                Object.entries(s.checks).map(([k, v]) => [k, [...v]])
              ),
              selects: s.selects,
            },
          }
        })
      await onboardingApi.saveModules(payload)
      router.push('/dashboard')
    } catch (err) {
      if (err instanceof ApiError) {
        alert(err.message)
      } else {
        alert('Something went wrong. Please try again.')
      }
      setLaunching(false)
    }
  }

  return (
    <>
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />

      <div className="module-page-wrapper">
        {/* ── Header ── */}
        <div className="module-page-header">
          <div className="logo">
            <span className="logo-dot" />
            StartoCRM
          </div>

          <StepIndicator current="modules" />

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <h1 className="page-title" style={{ fontSize: '1.5rem' }}>Choose your modules</h1>
          <p className="page-subtitle" style={{ marginBottom: 0 }}>
            Toggle on the departments you want, then configure each one.
            You can always change this later.
          </p>
        </div>

        {/* ── Module list ── */}
        <div className="module-body-scroll">
          {enabledCount >= 3 && (
            <div className="complete-banner">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Great! You&apos;ve selected <strong style={{ margin: '0 4px' }}>{enabledCount}</strong> modules.
              Hit &ldquo;Launch workspace&rdquo; when you&apos;re ready.
            </div>
          )}

          <div className="module-grid">
            {MODULES.map(mod => (
              <ModuleCard
                key={mod.id}
                mod={mod}
                state={moduleState[mod.id]}
                onToggle={handleToggle}
                onExpand={handleExpand}
                onRadio={handleRadio}
                onCheck={handleCheck}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Sticky footer ── */}
      <div className="module-footer">
        <div className="selected-count">
          <span>{enabledCount}</span> modules selected
        </div>
        <div className="footer-actions">
          <button className="btn btn-ghost" onClick={() => router.back()}>
            ← Back
          </button>
          <button
            className="btn btn-primary"
            style={{ width: 'auto', padding: '12px 28px' }}
            onClick={handleLaunch}
            disabled={launching}
          >
            {launching ? (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Setting up…
              </>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                Launch workspace
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}