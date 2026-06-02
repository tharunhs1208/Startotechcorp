'use client'

type Step = 'account' | 'verify' | 'modules'

interface StepIndicatorProps {
  current: Step
}

const STEPS: { key: Step; label: string }[] = [
  { key: 'account', label: 'Account' },
  { key: 'verify',  label: 'Verify'  },
  { key: 'modules', label: 'Modules' },
]

const ORDER: Record<Step, number> = { account: 0, verify: 1, modules: 2 }

export default function StepIndicator({ current }: StepIndicatorProps) {
  const currentIdx = ORDER[current]

  return (
    <div className="steps">
      {STEPS.map((step, i) => {
        const isDone   = i < currentIdx
        const isActive = i === currentIdx
        return (
          <div key={step.key} style={{ display: 'contents' }}>
            <div className={`step-item ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}`}>
              <div className="step-num">{isDone ? '✓' : i + 1}</div>
              <span>{step.label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`step-line ${isDone ? 'done' : ''}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}