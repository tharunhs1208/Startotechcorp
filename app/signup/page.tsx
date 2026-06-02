'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import StepIndicator from '@/components/StepIndicator'
import { authApi, ApiError } from '@/lib/api'

/* ── helpers ── */
function getStrength(pw: string): { score: number; hint: string } {
  let score = 0
  if (pw.length >= 8)            score++
  if (/[A-Z]/.test(pw))          score++
  if (/[0-9]/.test(pw))          score++
  if (/[^A-Za-z0-9]/.test(pw))   score++
  const hints = [
    'Use 8+ characters with letters, numbers & symbols',
    'Add uppercase letters',
    'Add numbers or symbols',
    'Almost there — add symbols',
    '✓ Strong password',
  ]
  return { score, hint: pw.length === 0 ? hints[0] : hints[Math.max(0, score - 1)] }
}

const barClass = (score: number, idx: number): string => {
  if (idx >= score) return 'pw-bar'
  if (score === 1)  return 'pw-bar weak'
  if (score === 2)  return 'pw-bar fair'
  return 'pw-bar strong'
}

/* ── types ── */
interface FormValues {
  firstName: string
  lastName:  string
  company:   string
  email:     string
  phone:     string
  password:  string
}
interface FormErrors {
  firstName?: string
  lastName?:  string
  company?:   string
  email?:     string
  password?:  string
}

/* ── Eye icons ── */
const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)
const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
)
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

/* ══════════════════════════════════════════════════════ */
export default function SignupPage() {
  const router = useRouter()

  const [values, setValues] = useState<FormValues>({
    firstName: '', lastName: '', company: '', email: '', phone: '', password: '',
  })
  const [errors,   setErrors]   = useState<FormErrors>({})
  const [showPw,   setShowPw]   = useState(false)
  const [loading,  setLoading]  = useState(false)

  const { score, hint } = getStrength(values.password)

  /* field change */
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  /* validation */
  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!values.firstName.trim())                             e.firstName = 'First name is required'
    if (!values.lastName.trim())                              e.lastName  = 'Last name is required'
    if (!values.company.trim())                               e.company   = 'Company name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))    e.email     = 'Enter a valid email address'
    if (values.password.length < 8)                           e.password  = 'Password must be at least 8 characters'
    return e
  }

  /* submit */
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    try {
      await authApi.signup({
        firstName: values.firstName,
        lastName:  values.lastName,
        company:   values.company,
        email:     values.email,
        phone:     values.phone || undefined,
        password:  values.password,
      })
      router.push('/verify')
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 409) {
          setErrors({ email: err.message })
        } else if (err.errors?.length) {
          const fieldErrs: FormErrors = {}
          err.errors.forEach(e => {
            if (e.field in fieldErrs || e.field === 'firstName') fieldErrs.firstName = e.message
            if (e.field === 'lastName')  fieldErrs.lastName  = e.message
            if (e.field === 'company')   fieldErrs.company   = e.message
            if (e.field === 'email')     fieldErrs.email     = e.message
            if (e.field === 'password')  fieldErrs.password  = e.message
          })
          setErrors(fieldErrs)
        } else {
          setErrors({ email: err.message })
        }
      }
      setLoading(false)
    }
  }

  return (
    <>
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />

      <div className="page-wrapper">
        <div className="card">
          {/* Logo */}
          <div className="logo">
            <span className="logo-dot" />
            StartoCRM
          </div>

          <StepIndicator current="account" />

          <h1 className="page-title">Create your workspace</h1>
          <p className="page-subtitle">Set up your StartoCRM account and take your team to the next level.</p>

          {/* Google OAuth */}
          <button type="button" className="btn-social">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="divider">or sign up with email</div>

          {/* Form */}
          <form onSubmit={onSubmit} noValidate>
            {/* Name row */}
            <div className="input-group">
              <div className="field">
                <label className="label">First name</label>
                <input
                  className={`input ${errors.firstName ? 'input-error' : ''}`}
                  type="text" name="firstName" placeholder="Riya"
                  autoComplete="given-name" value={values.firstName} onChange={onChange}
                />
                {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
              </div>
              <div className="field">
                <label className="label">Last name</label>
                <input
                  className={`input ${errors.lastName ? 'input-error' : ''}`}
                  type="text" name="lastName" placeholder="Sharma"
                  autoComplete="family-name" value={values.lastName} onChange={onChange}
                />
                {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
              </div>
            </div>

            {/* Company */}
            <div className="field">
              <label className="label">Company / Organisation name</label>
              <input
                className={`input ${errors.company ? 'input-error' : ''}`}
                type="text" name="company" placeholder="Starto Technologies"
                autoComplete="organization" value={values.company} onChange={onChange}
              />
              {errors.company && <span className="error-msg">{errors.company}</span>}
            </div>

            {/* Email */}
            <div className="field">
              <label className="label">Work email</label>
              <input
                className={`input ${errors.email ? 'input-error' : ''}`}
                type="email" name="email" placeholder="riya@startotechnologies.com"
                autoComplete="email" value={values.email} onChange={onChange}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            {/* Phone */}
            <div className="field">
              <label className="label">
                Phone number <span style={{ color: 'var(--text-3)' }}>(optional)</span>
              </label>
              <input
                className="input" type="tel" name="phone"
                placeholder="+91 98765 43210" autoComplete="tel"
                value={values.phone} onChange={onChange}
              />
            </div>

            {/* Password */}
            <div className="field">
              <label className="label">Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  className={`input ${errors.password ? 'input-error' : ''}`}
                  style={{ paddingRight: 40 }}
                  type={showPw ? 'text' : 'password'}
                  name="password" placeholder="Create a strong password"
                  autoComplete="new-password" value={values.password} onChange={onChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPw(p => !p)}
                  style={{
                    position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', color: 'var(--text-3)',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0,
                    transition: 'color 0.2s',
                  }}
                >
                  {showPw ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {/* Strength bars */}
              <div className="pw-strength">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className={barClass(score, i)} />
                ))}
              </div>
              <div className="pw-hint">{hint}</div>
              {errors.password && <span className="error-msg">{errors.password}</span>}
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-4"
              disabled={loading}
            >
              <ArrowIcon />
              {loading ? 'Creating account…' : 'Create account'}
            </button>
          </form>

          <p className="terms">
            By creating an account, you agree to our{' '}
            <Link href="#" className="link">Terms of Service</Link> and{' '}
            <Link href="#" className="link">Privacy Policy</Link>.
          </p>

          <p className="text-sm text-center mt-4">
            Already have an account? <Link href="/login" className="link">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  )
}