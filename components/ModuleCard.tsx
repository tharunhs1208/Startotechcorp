'use client'

import type { ModuleDef, ModuleState } from '@/app/modules/types'

interface ModuleCardProps {
  mod:      ModuleDef
  state:    ModuleState
  onToggle: (id: string, enabled: boolean)                              => void
  onExpand: (id: string)                                                => void
  onRadio:  (id: string, sectionLabel: string, value: string)          => void
  onCheck:  (id: string, sectionLabel: string, option: string)         => void
  onSelect: (id: string, sectionLabel: string, value: string)          => void
}

export default function ModuleCard({
  mod, state, onToggle, onExpand, onRadio, onCheck, onSelect,
}: ModuleCardProps) {
  const { enabled, expanded, radios, checks, selects } = state

  return (
    <div className={`module-card ${enabled ? 'active' : ''}`}>
      {/* Header row */}
      <div className="module-header" onClick={() => onExpand(mod.id)}>
        <div className="module-header-left">
          <div className={`module-icon ${mod.iconClass}`}>{mod.icon}</div>
          <div>
            <div className="module-name">{mod.name}</div>
            <div className="module-desc">{mod.desc}</div>
          </div>
        </div>

        {/* Toggle switch — stop propagation so clicking it doesn't also expand */}
        <label
          className={`toggle ${enabled ? 'toggle-on' : ''}`}
          onClick={e => e.stopPropagation()}
        >
          <input
            type="checkbox"
            checked={enabled}
            onChange={e => onToggle(mod.id, e.target.checked)}
          />
          <div className="toggle-track" />
          <div className="toggle-thumb" />
        </label>
      </div>

      {/* Body — only shown when enabled & expanded */}
      {enabled && expanded && (
        <div className="module-body open">
          {mod.sections.map((sec, si) => (
            <div key={sec.label}>
              {si > 0 && <div className="body-divider" />}
              <div className="body-section">
                <div className="body-label">{sec.label}</div>

                {/* ── Radio ── */}
                {sec.type === 'radio' && (
                  <div className="radio-group">
                    {sec.options.map(opt => (
                      <label
                        key={opt}
                        className={`radio-opt ${radios[sec.label] === opt ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name={`${mod.id}_${sec.label}`}
                          value={opt}
                          checked={radios[sec.label] === opt}
                          onChange={() => onRadio(mod.id, sec.label, opt)}
                          style={{ display: 'none' }}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}

                {/* ── Checkbox ── */}
                {sec.type === 'checkbox' && (
                  <div className="check-group">
                    {sec.options.map(opt => {
                      const checked = checks[sec.label]?.has(opt) ?? false
                      return (
                        <label
                          key={opt}
                          className={`check-opt ${checked ? 'checked' : ''}`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => onCheck(mod.id, sec.label, opt)}
                            style={{ display: 'none' }}
                          />
                          {checked ? '✓ ' : ''}{opt}
                        </label>
                      )
                    })}
                  </div>
                )}

                {/* ── Select ── */}
                {sec.type === 'select' && (
                  <select
                    className="select"
                    value={selects[sec.label] ?? sec.options[0]}
                    onChange={e => onSelect(mod.id, sec.label, e.target.value)}
                  >
                    {sec.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}