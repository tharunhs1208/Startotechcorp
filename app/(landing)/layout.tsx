import type { Metadata } from 'next'
import './landing.css'

export const metadata: Metadata = {
  title: 'StartoCRM — One Platform For Every Department',
  description: 'Manage HR, Sales, IT, Finance and more in one unified platform for growing businesses.',
}

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return children
}