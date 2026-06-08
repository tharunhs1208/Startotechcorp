'use client'

import Link from 'next/link'
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {DashboardChart} from "@/components/StatCard";
import {
  TrendingUp,
  Calculator,
  Scale,
  Cpu,
  Building,
  DraftingCompass,
  Users,
  PenTool,
  Megaphone
} from "lucide-react"
import { useState, useEffect, useRef } from 'react'

/* ── tiny hook: is element in viewport ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}




/* ── What is StartoCRM ── */
function WhatIs() {
  
  const { ref, visible } = useInView()
  
const modules = [
  { name: "Finance", Icon: TrendingUp },
  { name: "HR", Icon: Users },
  { name: "IT", Icon: Cpu },
  { name: "Civil", Icon: Building },
  { name: "Accounts", Icon: Calculator },
  { name: "Legal", Icon: Scale },
  { name: "Architecture", Icon: DraftingCompass },
  { name: "Design", Icon: PenTool },
  { name: "Marketing", Icon: Megaphone },
]
 
const iconMap = [
  "Finance",
  "HR",
  "IT",
  "Civil",
  "Accounts",
  "Legal",
  "Architecture",
  "Design"
]
 
  const images = [
    '/Property 1=Default (1).svg',
    '/Property 1=Variant2 (1).svg',
    '/Property 1=Variant3 (1).svg',
    '/Property 1=Variant4.svg',
    '/Property 1=Variant5.svg',
  ]

  const [currentImage, setCurrentImage] = useState(0)
  const radiusX = 220
const radiusY = 120
const angleStep = (2 * Math.PI) / modules.length
const [time, setTime] = useState(0)
const [activeIndex, setActiveIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % modules.length)
  }, 2500)

  return () => clearInterval(interval)
}, [])
useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % 8)
  }, 2500)

  return () => clearInterval(interval)
}, [])

 useEffect(() => {
  const interval =setInterval(() => {
  setCurrentImage((prev) => (prev + 1) % images.length)
}, 4000); // 4 seconds instead of 2

  return () => clearInterval(interval);
}, []);
  return (
    <section className="lp-section lp-whatis" ref={ref}>
      <div className={`lp-container lp-fade ${visible ? 'lp-fade--in' : ''}`}>
        <div className="lp-whatis__content">
  <p className="lp-section__eyebrow">
    Strato The Business <span className="lp-highlight">Operating System</span> <br/>
    for Modern Organizations
  </p>

  <p className="lp-section__body lp-whatis__body">
   StratoOne is the operational layer that connects your people, processes, workflows, departments, and business activities into one unified environment.
Instead of managing multiple disconnected platforms, organizations can oversee operations from a single ecosystem designed to scale alongside their structure.
  </p>

  <Link href="/contact" className="lp-btn lp-btn--primary lp-btn--cta">
  Contact Sales
  <span className="lp-btn__icon">↗</span>
</Link>
</div>

        {/* Logo marquee */}
      {/* <div className="lp-marquee-wrap">
          <div className="lp-marquee">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="lp-marquee__item">
                <div className="lp-marquee__logo" />
              </div>
            ))}
          </div>
        </div> */}
        <div className="component-wrapper">
  {/* The Elliptical Curve */}
  <div className="arc-line"></div>

  {/* The Content following the curve */}
 <div className="content-overlay">
  <div
    className="moving-indicator"
    style={{ transform: `translateX(${activeIndex * 80}px)` }}
  />

  {/* icons */}
  <div className="icon-unit item-1"><div className="circle"><TrendingUp /></div></div>
  <div className="icon-unit item-2"><div className="circle"><Users /></div></div>
  <div className="icon-unit item-3"><div className="circle"><Cpu /></div></div>
  <div className="icon-unit item-4"><div className="circle"><Building /></div></div>
  <div className="icon-unit item-5"><div className="circle"><Calculator /></div></div>
  <div className="icon-unit item-6"><div className="circle"><Scale /></div></div>
  <div className="icon-unit item-7"><div className="circle"><DraftingCompass /></div></div>
  <div className="icon-unit item-8"><div className="circle"><Megaphone /></div></div>

  
  {/* Left Side */}
  <div className={`icon-unit item-1 ${activeIndex === 0 ? "active" : ""}`}>
  <div className="circle">
    <TrendingUp size={22} />
  </div>
</div>

  <div className={`icon-unit item-2 ${activeIndex === 1 ? "active" : ""}`}>
  <div className="circle">
    <Users size={22} />
  </div>
</div>

  <div className={`icon-unit item-3 ${activeIndex === 2 ? "active" : ""}`}>
  <div className="circle">
    <Cpu size={22} />
  </div>
</div>

  <div className={`icon-unit item-4 ${activeIndex === 3 ? "active" : ""}`}>
  <div className="circle">
    <Building size={22} />
  </div>
</div>

  <div className="pill-unit">
  <div className="pill-label">
    {modules[activeIndex]?.Icon && (
      <>
        {(() => {
          const ActiveIcon = modules[activeIndex].Icon

          return (
            <>
              <ActiveIcon size={20} strokeWidth={2} className="ll"/>
              <span>{modules[activeIndex].name}</span>
            </>
          )
        })()}
      </>
    )}
  </div>
</div>

  {/* Right Side */}
  <div className={`icon-unit item-5 ${activeIndex === 4 ? "active" : ""}`}>
  <div className="circle">
    <Calculator size={22} />
  </div>
</div>

  <div className={`icon-unit item-6 ${activeIndex === 5 ? "active" : ""}`}>
  <div className="circle">
    <Scale size={22} />
  </div>
</div>

  <div className={`icon-unit item-7 ${activeIndex === 6 ? "active" : ""}`}>
  <div className="circle">
    <DraftingCompass size={22} />
  </div>
</div>

  <div className={`icon-unit item-8 ${activeIndex === 7 ? "active" : ""}`}>
  <div className="circle">
    <PenTool size={22} />
  </div>
</div>

</div>
</div>
      </div>
    </section>
  )
}

/* ── One Platform Multiple Functions ── */
function Platform() {
  const { ref, visible } = useInView()
  const modules = [
    'IT & Development Suite',
    'Human Resources',
    'Project Management',
    'Leadership & Management',
    'Design',
  ]
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggleModule = (i: number) => {
  setActiveIndex((prev) => (prev === i ? null : i));
};
useEffect(() => {
  const el = document.querySelector(
    ".lp-platform__list"
  ) as HTMLElement | null;

  if (!el) return;

  const itemHeight = 60;
  const gap = 1;

  if (activeIndex === null) {
    el.style.setProperty("--active-height", "0px");
  } else {
    const height =
      (activeIndex + 1) * itemHeight +
      activeIndex * gap;

    el.style.setProperty(
      "--active-height",
      `${height - 30}px`
    );
  }
}, [activeIndex]);
  return (
    <section className="lp-section lp-platform" ref={ref}
    style={{
    backgroundImage: "url('/Property 1=Variant2 (3).svg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
      <div className="lp-container">

    {/* Header */}
    <div className="lp-platform__header">
      <p className="lp-platform__heading">
        <span className="lp-platform__highlight">Every tool</span> your organization needs<br />
        Already connected
      </p>

      <p className="lp-section__desc">
        StratoOne is modular by design — giving each department precisely what they need while keeping leadership connected to<br/>
         the full picture.
      </p>
    </div>

    {/* Content Row */}
    <div className="lp-platform__grid">
      <div className="lp-platform__left">
  <ul className="lp-platform__list">
    {modules.map((m, i) => (
      <li
        key={i}
        className={`lp-platform__item ${activeIndex === i ? "active" : ""}`}
        onClick={() => toggleModule(i)}
      >
        <div className="lp-platform__title">{m}</div>

        <div className="lp-platform__desc">
          Modular system layer connected to the core platform intelligence.
        </div>
      </li>
    ))}
  </ul>
</div>

      <div className="lp-platform__right">
        <div className="lp-platform__screen">
            <div className="lp-platform__screen-inner">
  <div className="lp-ph-full" />
  <img src="/image 36.svg" className="lp-ph-image" alt="" />
</div>

      </div>
    </div>
</div>
  </div>
</section>
  )
}

/* ── How Strato One Helps ── */
function HowHelps() {
  const { ref, visible } = useInView()
  const cards = [
    { title: 'Centralize Operations', body: 'Manage multiple departments, workflows, and processes from a single platform.', shape: 'triangle', path: "M25,8 L43,38 C45,42 43,47 38,47 L12,47 C7,47 5,42 7,38 L25,8 Z" },
    { title: 'Improve Team Visibility', body: 'Track tasks, approvals, attendance, and performance in real time.', shape: 'pentagon', path: "M25,5 L45,20 L38,45 L12,45 L5,20 Z" },
    { title: 'Reduce Manual Work', body: 'Automate repetitive processes and eliminate unnecessary follow-ups.', shape: 'diamond', path: "M25,5 L45,25 L25,45 L5,25 Z" },
    { title: 'Scale Without Complexity', body: 'Add teams, modules, and workflows as your organization grows.', shape: 'hexagon', path: "M37,5 L48,25 L37,45 L13,45 L2,25 L13,5 Z" },
  ]
  return (
    <section className="lp-section lp-helps" ref={ref}>
      <div className={`lp-container lp-fade ${visible ? 'lp-fade--in' : ''}`}>
        <p className="lp-section__eyebrow">Stop managing tools<br/>
         Start managing your <span className="kk">business</span></p>
        <p className="lp-section__sub">
          StratoOne eliminates the friction that slows modern organizations down — so your teams can operate with speed, clarity, and confidence.
        </p>
        <div className="lp-helps__grid">
          {cards.map((c, i) => (
            <div key={i} className={`lp-helps__card ${c.shape}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="lp-helps__content">
                <div className="lp-helps__title">{c.title}</div>
                <div className="lp-helps__body">{c.body}</div>
              </div>
              
              <div className="shape-container">
                {/* Outer Shape: Rotates 30deg CW on hover */}
                <svg viewBox="0 0 50 50" className="shape-element outer">
                  <path d={c.path} />
                </svg>
                {/* Inner Shape: Rotates -30deg CCW on hover */}
                <svg viewBox="0 0 50 50" className="shape-element inner">
                  <path d={c.path} />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
/* ── See the Impact ── */
function Impact() {
  const { ref, visible } = useInView()
  return (
    <section className="lp-section lp-impact" ref={ref}>
      <div className={`lp-container lp-fade ${visible ? 'lp-fade--in' : ''}`}>
        <p className="lp-section__eyebrow">What changes when operations actually work</p>
        <p className="lp-section__sub">
          See how StratoOne transforms the everyday realities of running a growing organization.
        </p>
        {/* Flow diagram placeholder */}
        <div className="lp-impact__diagram video-container">
          <video
  
  
    className="lp-impact__video"
  autoPlay
  muted
  loop
  playsInline
  
  
>
  <source
    src="/saas-demo.mp4"
    type="video/mp4"
  />
</video>
          
        </div>
      </div>
    </section>
  )
}

/* ── Security ── */
function Security() {
  const { ref, visible } = useInView()
  const pillars = [
    {  title: 'Role-Based Access', body: 'Granularly create domain-specific role-based access controls, role-based permissions, and structured hierarchies.' },
    {  title: 'Data Security', body: 'Strato One captures and stores your business data with encryption to prevent data loss or corruption.' },
    {  title: 'Audit & Accountability', body: 'Track activity, approvals and user changes with a complete audit log of all actions.' },
    {  title: 'Scalable Infrastructure', body: 'Support growing teams with infrastructure that scales to any size.' },
  ]
  return (
    <section className="lp-section lp-security" ref={ref}>
      <div className={`lp-container lp-fade ${visible ? 'lp-fade--in' : ''}`}>
        <h2 className="lp-section__title lp-security__title">
          Security <span className="kk">built in</span>, not bolted on
        </h2>
        <p className="lp-section__sub">
          Your business data deserves enterprise-grade protection. Strato One is designed with secure access controls, role-based permissions, and scalable infrastructure to support organizations of any size.
        </p>
        <div className="lp-security__grid">
          {pillars.map((p, i) => (
            <div key={i} className="lp-security__card">
              <div className="lp-security__icon-wrap">
                
              <div className="lp-security__card-title">{p.title}</div>
              <div className="lp-security__card-body">{p.body}</div>
              
                <div className="lp-security__shape-wrap">
    <span className="shape shape-1"></span>
    <span className="shape shape-2"></span>
  </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Testimonials ── */
function Testimonials() {
  const { ref, visible } = useInView()
  const reviews = [
    { quote: '"Real-time visibility changed how we manage work."', sub: 'We no longer run into situations where decisions are made without accurate data. The dashboards are clear, real-time, and actionable.' },
    { quote: '"Simple for teams. Powerful for management."', sub: 'The hierarchical structure with role-based access makes it easy for us to manage permissions without constant IT involvement.'},
    { quote: '"Everything finally works together."', sub: 'Before Strato One, we were using six different tools. Now everything from attendance to payroll is in one place and it all talks to each other.' },
    { quote: '"Real-time visibility changed how we manage work."', sub: 'We no longer run into situations where decisions are made without accurate data. The dashboards are clear, real-time, and actionable.' },
    { quote: '"Real-time visibility changed how we manage work."', sub: 'We no longer run into situations where decisions are made without accurate data.'},
    { quote: '"Simple for teams. Powerful for management."', sub: 'The hierarchical structure makes it easy for us to manage permissions without constant IT involvement.'},
    { quote: '"Everything Really works together."', sub: 'Before Strato One, we were using six different tools. Now everything is in one place'},
    { quote: '"Real-time visibility changed how we manage work."', sub: 'We no longer run into situations where decisions are made without accurate data. The dashboards are clear, real-time, and actionable.' },
  ]
  const topReviews = reviews.slice(0, Math.ceil(reviews.length / 2))
const bottomReviews = reviews.slice(Math.ceil(reviews.length / 2))
  return (
    <section className="lp-section lp-testimonials" ref={ref}>
      <div className={`lp-container lp-fade ${visible ? 'lp-fade--in' : ''}`}>
        <h2 className="lp-section__title"><span className="kk">Trusted</span> by operations leaders <br/>
who've been there.</h2>
        <p className="lp-section__sub">
          See how organizations simplify operations, improve visibility, and scale faster with Strato One.
        </p>
        <div className="lp-testi__marquee">

 <div className="lp-testi__track lp-testi__track--left">
  {[...topReviews, ...topReviews].map((r, i) => (
    <div key={i} className="lp-testi__card">
      <p className="lp-testi__quote">{r.quote}</p>
      <p className="lp-testi__body">{r.sub}</p>

      <div className="lp-testi__brand">
        <div className="lp-testi__brandmark" />
      </div>
    </div>
  ))}
</div>

<div className="lp-testi__track lp-testi__track--right">
  {[...bottomReviews, ...bottomReviews].map((r, i) => (
    <div key={i} className="lp-testi__card">
      <p className="lp-testi__quote">{r.quote}</p>
      <p className="lp-testi__body">{r.sub}</p>

      <div className="lp-testi__brand">
        <div className="lp-testi__brandmark" />
      </div>
    </div>
  ))}
</div>

</div>
      </div>
    </section>
  )
}

/* ── CTA Banner ── */
function CtaBanner() {
  const { ref, visible } = useInView()
  return (
    <section className="lp-cta-banner" ref={ref}>
      <div className="lp-cta-banner__blob lp-cta-banner__blob--1" />
      <div className="lp-cta-banner__blob lp-cta-banner__blob--2" />
      <div className={`lp-container lp-fade ${visible ? 'lp-fade--in' : ''}`}>
        
        <h2 className="lp-cta-banner__title">
          Your organization <span className="kk">deserves better</span><br/>
than scattered tools and missed visibility
        </h2>
        <p className="loki">
          Unify your departments, automate your workflows, and give your teams the clarity to operate at their best — starting today.
        </p>
        <p className="lp-cta-banner__sub">
          Ready to transform how you operate?
        </p>
        <Link href="/signup" className="lp-btn lp-btn--white lp-btn--lg" 
        style={{ marginTop: "24px" }}
        >
          Start Free Trial ↗
        </Link>
        {/* Dashboard preview placeholder */}
        <div className="lp-cta-banner__preview">
          <DashboardChart/>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  const cols = [
    { heading: 'Product',    links: ['Features','Pricing','Integrations','Changelog','Roadmap'] },
    { heading: 'Company',   links: ['About Us','Careers','Blog','Press','Contact'] },
    { heading: 'Resources', links: ['Documentation','Help Center','API Reference','Status','Community'] },
    { heading: 'Privacy',   links: ['Privacy Policy','Terms of Service','Cookie Policy','GDPR','Security'] },
  ]
  return (
    <footer className="lp-footer">
      <div className="lp-container">
        <div className="lp-footer__top">
          <div className="lp-footer__brand">
            <div className="lp-logo">
              <img src="/Frame 2147237796.svg" alt=""/>
              <span className="lp-logo__dot" />StartoCRM
            </div>
            <p className="lp-footer__tagline">
              One platform to run every department of your growing business.
            </p>
            <div className="lp-footer__socials">
              {['𝕏','in','f','▶'].map((s,i) => (
                <a key={i} href="#" className="lp-footer__social">{s}</a>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.heading} className="lp-footer__col">
              <div className="lp-footer__col-head">{col.heading}</div>
              {col.links.map(l => (
                <a key={l} href="#" className="lp-footer__link">{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="lp-footer__bottom">
          <span>© 2026 StartoCRM. All rights reserved.</span>
          <span>Made with by Fortune Groups</span>
        </div>
      </div>
    </footer>
  )
}

/* ══════════════════════════════════════════════════════════
   Main page export
════════════════════════════════════════════════════════════ */
export default function LandingPage() {
  return (
    <div className="lp-root">
      <Navbar />
      <Hero />
      <WhatIs />
      <Platform />
      <HowHelps />
      <Impact />
      <Security />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </div>
  )
}