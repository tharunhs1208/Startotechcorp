// lib/api.ts
// All API calls go through here. Import this in your page components.

const BASE = process.env.NEXT_PUBLIC_API_URL 

/* ── Token helpers (client-side only) ── */
export function getToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('startocrm_token')
}
export function saveToken(token: string) {
  localStorage.setItem('startocrm_token', token)
}
export function clearToken() {
  localStorage.removeItem('startocrm_token')
}

/* ── Typed API error ── */
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

/* ── Core fetch wrapper ── */
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

  const res  = await fetch(`${BASE}${path}`, { ...options, headers })
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
  id:        string
  firstName: string
  lastName:  string
  email:     string
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
   Auth API  →  /api/auth/*
════════════════════════════════════════════════════════════ */
export const authApi = {
  signup: async (payload: SignupPayload) => {
    const data = await request<{ success: boolean; token: string; user: User }>(
      '/api/signup',
      { method: 'POST', body: JSON.stringify(payload) }
    )
    saveToken(data.token)
    return data
  },

  verifyOtp: async (code: string) => {
    return request<{ success: boolean; message: string }>(
      '/api/verify-otp',
      { method: 'POST', body: JSON.stringify({ code }) },
      true
    )
  },

  resendOtp: async () => {
    return request<{ success: boolean; message: string }>(
      '/api/resend-otp',
      { method: 'POST' },
      true
    )
  },

  login: async (email: string, password: string) => {
    const data = await request<{ success: boolean; token: string; user: User }>(
      '/api/login',
      { method: 'POST', body: JSON.stringify({ email, password }) }
    )
    saveToken(data.token)
    return data
  },

  me: async () => {
    return request<{ success: boolean; user: User }>('/api/auth/me', {}, true)
  },

  logout: () => clearToken(),
}

/* ══════════════════════════════════════════════════════════
   Onboarding API  →  /api/onboarding/*
════════════════════════════════════════════════════════════ */
export const onboardingApi = {
  saveModules: async (modules: ModulePayload[]) => {
    return request<{ success: boolean; message: string; workspace: unknown }>(
      '/api/onboarding/modules',
      { method: 'POST', body: JSON.stringify({ modules }) },
      true
    )
  },

  getModules: async () => {
    return request<{ success: boolean; workspace: unknown }>(
      '/api/onboarding/modules',
      {},
      true
    )
  },
}