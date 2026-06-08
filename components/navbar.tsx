'use client'
import Link from 'next/link'
import { ChevronDown } from "lucide-react";


import { useState, useEffect, useRef } from 'react'
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
 
  return (
    <nav className={`lp-nav ${scrolled ? 'lp-nav--scrolled' : ''}`}>
      <div className="lp-nav__inner">
        {/* Logo */}
        <div className="lp-nav__main">
        <Link href="/" className="lp-logo">
          StartoOne
        </Link>
 
        {/* Desktop links */}
        <div className="lp-nav__links">
          <div className="lp-nav__dropdown">
            <button className="lp-nav__link">
  Products
  <ChevronDown className="lp-chevron" />
</button>
          </div>
          <div className="lp-nav__dropdown">
            <button className="lp-nav__link">
  Solutions
  <ChevronDown className="lp-chevron" />
</button>
          </div>
          <button className="lp-nav__link">Pricing</button>
          <div className="lp-nav__dropdown">
            <button className="lp-nav__link">
  Resources
  <ChevronDown className="lp-chevron" />
</button>
          </div>
          <div className="lp-nav__dropdown">
            <button className="lp-nav__link">
              Company
  <ChevronDown className="lp-chevron" />
</button>
          </div>
        </div>
        </div>
 
        {/* CTA */}
        <div className="lp-nav__cta">
          <Link href="/login" className="lp-nav__signin">
  Login
</Link>
          <Link href="/signup" className="lp-btn lp-btn--primary lp-btn--sm">Get Started</Link>
        </div>
 
        {/* Hamburger */}
        <button className="lp-hamburger" onClick={() => setMenuOpen(p => !p)}>
          <span /><span /><span />
        </button>
      </div>
 
      {/* Mobile menu */}
      {menuOpen && (
        <div className="lp-mobile-menu">
          {['Products','Solutions','Pricing','Resources','Campaigns'].map(l => (
            <button key={l} className="lp-mobile-menu__link">{l}</button>
          ))}
          <Link href="/login" className="lp-mobile-menu__link">Login</Link>
          <Link href="/signup" className="lp-btn lp-btn--primary" style={{ marginTop: 8 }}>Get Started</Link>
        </div>
      )}
    </nav>
  )
}