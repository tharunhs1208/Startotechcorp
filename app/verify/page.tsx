'use client'

import { useState, useRef, useEffect, KeyboardEvent, ClipboardEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import StepIndicator from '@/components/StepIndicator'
import { authApi, ApiError } from '@/lib/api'

const RESEND_SECONDS = 60

export default function VerifyPage() {
  const router = useRouter()

  const [otp,      setOtp]      = useState<string[]>(Array(6).fill(''))
  const [status,   setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errMsg,   setErrMsg]   = useState('')
  const [timer,    setTimer]    = useState(RESEND_SECONDS)
  const [canResend,setCanResend] = useState(false)

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  /* Focus first box on mount */
  useEffect(() => { inputRefs.current[0]?.focus() }, [])

  /* Countdown timer */
  useEffect(() => {
    if (timer <= 0) { setCanResend(true); return }
    const id = setTimeout(() => setTimer(t => t - 1), 1000)
    return () => clearTimeout(id)
  }, [timer])

  /* Change handler for a single box */
  const handleChange = (idx: number, val: string) => {
    const digit = val.replace(/\D/g, '').slice(-1)
    const next = [...otp]
    next[idx] = digit
    setOtp(next)
    setErrMsg('')
    if (digit && idx < 5) inputRefs.current[idx + 1]?.focus()
  }

  /* Backspace / arrow navigation */
  const handleKeyDown = (idx: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus()
    }
    if (e.key === 'ArrowLeft'  && idx > 0) inputRefs.current[idx - 1]?.focus()
    if (e.key === 'ArrowRight' && idx < 5) inputRefs.current[idx + 1]?.focus()
  }

  /* Paste handler */
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const next = [...otp]
    text.split('').forEach((ch, i) => { next[i] = ch })
    setOtp(next)
    inputRefs.current[Math.min(text.length, 5)]?.focus()
  }

  /* Resend */
  const handleResend = () => {
    if (!canResend) return
    setCanResend(false)
    setTimer(RESEND_SECONDS)
    setOtp(Array(6).fill(''))
    setStatus('idle')
    setErrMsg('')
    inputRefs.current[0]?.focus()
    authApi.resendOtp().catch(err => {
      console.error('[resend-otp]', err)
    })
  }

  /* Verify */
  const handleVerify = async () => {
    const code = otp.join('')
    if (code.length < 6) {
      setErrMsg('Please enter all 6 digits.')
      return
    }
    setStatus('loading')
    try {
      await authApi.verifyOtp(code)
      setStatus('success')
      setTimeout(() => router.push('/modules'), 1000)
    } catch (err) {
      setStatus('error')
      if (err instanceof ApiError) {
        setErrMsg(err.message)
      } else {
        setErrMsg('Verification failed. Please try again.')
      }
    }
  }

  const inputBorderStyle = (idx: number): string => {
    if (status === 'success') return 'otp-input success'
    if (status === 'error' || errMsg) return 'otp-input error'
    return 'otp-input'
  }

  return (
    <>
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />

      <div className="page-wrapper">
        <div className="card">
          <div className="logo">
            <span className="logo-dot" />
            StartoCRM
          </div>

          <StepIndicator current="verify" />

          {/* Envelope */}
          <div style={{ textAlign: 'center' }}>
            <div className="envelope">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>

            <h1 className="page-title">Check your inbox</h1>
            <p className="page-subtitle">
              We&apos;ve sent a 6-digit verification code to your email address.
            </p>

            <div className="email-badge" style={{ display: 'inline-flex' }}>
              <div className="email-dot" />
              {/* TODO: pass real email from signup state/session */}
              <span>riya@startotechnologies.com</span>
            </div>
          </div>

          {/* OTP boxes */}
          <div className="otp-wrap">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={el => { inputRefs.current[idx] = el }}
                className={inputBorderStyle(idx)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(idx, e.target.value)}
                onKeyDown={e => handleKeyDown(idx, e)}
                onPaste={handlePaste}
                disabled={status === 'success' || status === 'loading'}
              />
            ))}
          </div>

          {errMsg && (
            <p style={{ textAlign: 'center', color: 'var(--red)', fontSize: '0.82rem', marginBottom: 8 }}>
              {errMsg}
            </p>
          )}
          {status === 'success' && (
            <p style={{ textAlign: 'center', color: 'var(--green)', fontSize: '0.82rem', marginBottom: 8 }}>
              ✓ Code verified! Redirecting…
            </p>
          )}

          <button
            className="btn btn-primary"
            onClick={handleVerify}
            disabled={status === 'loading' || status === 'success'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            {status === 'loading' ? 'Verifying…' : 'Verify email'}
          </button>

          {/* Resend */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 20 }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-3)' }}>Didn&apos;t receive it?</span>
            <button
              onClick={handleResend}
              disabled={!canResend}
              style={{
                background: 'none', border: 'none',
                color: canResend ? 'var(--accent)' : 'var(--text-3)',
                fontSize: '0.85rem', fontWeight: 500,
                cursor: canResend ? 'pointer' : 'default',
                fontFamily: 'var(--font-body)',
              }}
            >
              {canResend ? 'Resend code' : `Resend code (${timer}s)`}
            </button>
          </div>

          <p className="text-sm text-center mt-4">
            <Link href="/signup" className="link">← Back to sign up</Link>
          </p>
        </div>
      </div>
    </>
  )
}