// lib/api.ts
// Central API client — all fetch calls go through here.
// Base URL is read from .env.local → NEXT_PUBLIC_API_URL

const BASE = process.env.NEXT_PUBLIC_API_URL || 'https://app.stratocrm.com/api'

/* ── Token helpers (browser only) ───────────────────────── */
export function getToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('startocrm_token')
}
export function saveToken(token: string): void {
  localStorage.setItem('startocrm_token', token)
}
export function clearToken(): void {
  localStorage.removeItem('startocrm_token')
}

/* ── Typed API error ─────────────────────────────────────── */
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public errors?: { field: string; message: string }[]
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

/* ── Core fetch wrapper ──────────────────────────────────── */
async function request<T>(
  path: string,
  options: RequestInit = {},
  requiresAuth = false
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  }

  if (requiresAuth) {
    const token = getToken()
    if (!token) throw new ApiError('Not authenticated', 401)
    headers['Authorization'] = `Bearer ${token}`
  }

  const url = `${BASE}${path}`
  const res  = await fetch(url, { ...options, headers })
  const data = await res.json()

  if (!res.ok) {
    throw new ApiError(data.message || 'Request failed', res.status, data.errors)
  }
  return data as T
}

/* ══════════════════════════════════════════════════════════
   Types
════════════════════════════════════════════════════════════ */
export interface User {
  id:          string
  firstName:   string
  lastName:    string
  email:       string
  phone?:      string
  company?:    string
  isVerified?: boolean
}

export interface SignupPayload {
  firstName: string
  lastName:  string
  company:   string
  email:     string
  phone?:    string
  password:  string
}

export interface ModulePayload {
  moduleId: string
  name:     string
  config: {
    radios:  Record<string, string>
    checks:  Record<string, string[]>
    selects: Record<string, string>
  }
}

/* ══════════════════════════════════════════════════════════
   Auth API  →  /auth/*
════════════════════════════════════════════════════════════ */
export const authApi = {

  /** POST /auth/signup — creates account, saves JWT */
  signup: async (payload: SignupPayload) => {
    const data = await request<{ success: boolean; token: string; user: User }>(
      '/auth/signup',
      { method: 'POST', body: JSON.stringify(payload) }
    )
    saveToken(data.token)
    return data
  },

  /** POST /auth/verify-otp — validates 6-digit code */
  verifyOtp: async (code: string) => {
    return request<{ success: boolean; message: string }>(
      '/auth/verify-otp',
      { method: 'POST', body: JSON.stringify({ code }) },
      true
    )
  },

  /** POST /auth/resend-otp — sends a fresh OTP */
  resendOtp: async () => {
    return request<{ success: boolean; message: string }>(
      '/auth/resend-otp',
      { method: 'POST' },
      true
    )
  },

  /** POST /auth/login — returns JWT for verified users */
  login: async (email: string, password: string) => {
    const data = await request<{ success: boolean; token: string; user: User }>(
      '/auth/login',
      { method: 'POST', body: JSON.stringify({ email, password }) }
    )
    saveToken(data.token)
    return data
  },

  /** GET /auth/me — returns the current user profile */
  me: async () => {
    return request<{ success: boolean; user: User }>('/auth/me', {}, true)
  },

  /** Clears token from localStorage (client logout) */
  logout: (): void => clearToken(),
}

/* ══════════════════════════════════════════════════════════
   Onboarding API  →  /onboarding/*
════════════════════════════════════════════════════════════ */
export const onboardingApi = {

  /** POST /onboarding/modules — saves selected modules + config */
  saveModules: async (modules: ModulePayload[]) => {
    return request<{ success: boolean; message: string; workspace: unknown }>(
      '/onboarding/modules',
      { method: 'POST', body: JSON.stringify({ modules }) },
      true
    )
  },

  /** GET /onboarding/modules — fetches saved workspace config */
  getModules: async () => {
    return request<{ success: boolean; workspace: unknown }>(
      '/onboarding/modules',
      {},
      true
    )
  },
}