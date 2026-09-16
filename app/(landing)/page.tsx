'use client'

import Link from 'next/link'
import Hero from "@/components/hero";
import img67 from "@/public/image-67.svg";
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
   StratoOne brings your teams, workflows, departments, and business operations together in one unified platform, giving you complete visibility and control as your organization grows.
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
          <div className="integration-flow">
  
  
  
  <svg viewBox="0 0 814 368" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      

        <linearGradient id="pulseGlow" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="120" y2="0">

            <stop offset="0%" stop-color="#212eee" />
            <stop offset="20%" stop-color="#0f53ac" />
            <stop offset="40%" stop-color="#495aee" />
            <stop offset="60%" stop-color="#4d95d8" />
            <stop offset="80%" stop-color="#1c63fd" />
            <stop offset="100%" stop-color="#2642e0" />

            <animateTransform attributeName="gradientTransform" type="translate" from="-120 0" to="0 0" dur="3s"
                repeatCount="indefinite" />
        </linearGradient>

    </defs>


    <g clip-path="url(#clip1_1158_26720)">
        
        <image
    href="/image-58.svg"
    x="71"
    y="0"
    width="38"
    height="40"
    preserveAspectRatio="xMidYMid meet"
  />
    </g>
   
   <g>
  <image
    href="/image-58.svg"
    x="705"
    y="1"
    width="38.0952"
    height="38.0952"
    preserveAspectRatio="xMidYMid meet"
  />
</g>
  
    <g>
  <image
    href="/image-58.svg"
    x="0"
    y="89"
    width="40"
    height="40"
    preserveAspectRatio="xMidYMid meet"
  />
</g>
   
    <g>
  <image
    href="/image-58.svg"
    x="774"
    y="89"
    width="40"
    height="40"
    preserveAspectRatio="xMidYMid meet"
  />
</g>
   
    <g clipPath="url(#clip2_1158_26720)">
  <image
    href="/image-58.svg"
    x="0"
    y="239"
    width="40"
    height="40"
    preserveAspectRatio="xMidYMid meet"
  />
</g>
    
    <g clipPath="url(#clip0_1158_26720)">
  <image
    href="/image-58.svg"
    x="774"
    y="241"
    width="40"
    height="37"
    preserveAspectRatio="xMidYMid meet"
  />
</g>
  
    <g>
  <image
    href="/image-58.svg"
    x="67"
    y="326"
    width="44"
    height="44"
    preserveAspectRatio="xMidYMid meet"
  />
</g>
    
    <g>
  <image
    href="/image-58.svg"
    x="705"
    y="328"
    width="40"
    height="40"
    preserveAspectRatio="xMidYMid meet"
  />
</g>
    
    <path id="path-logo-1"
        d="M407 184H325.641C290.294 184 261.641 155.346 261.641 120V84C261.641 48.6538 232.987 20 197.641 20H109"
        stroke="#808080" stroke-dasharray="4 4" />
    
    <path d="M407 184H325.641C290.294 184 261.641 155.346 261.641 120V84C261.641 48.6538 232.987 20 197.641 20H109"
        stroke="url(#pulseGlow)" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="30 1000"
        stroke-dashoffset="0">
        <animate attributeName="stroke-dashoffset" from="1000" to="0" begin="0" dur="3s" repeatCount="indefinite" />
    </path>

    
    <path id="path-logo-2"
        d="M407 184H488.359C523.706 184 552.359 155.346 552.359 120V84C552.359 48.6538 581.013 20 616.359 20H705"
        stroke="#808080" stroke-dasharray="4 4" />
    
    <path d="M407 184H488.359C523.706 184 552.359 155.346 552.359 120V84C552.359 48.6538 581.013 20 616.359 20H705"
        stroke="url(#pulseGlow)" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="30 1000"
        stroke-dashoffset="0">
        <animate attributeName="stroke-dashoffset" from="1000" to="0" begin="0" dur="3s" repeatCount="indefinite" />
    </path>

    
    <path id="path-logo-3"
        d="M407 184H236.563C215.852 184 199.063 167.211 199.063 146.5C199.063 125.789 182.274 109 161.563 109H40"
        stroke="#808080" stroke-dasharray="4 4" />
    
    <path d="M407 184H236.563C215.852 184 199.063 167.211 199.063 146.5C199.063 125.789 182.274 109 161.563 109H40"
        stroke="url(#pulseGlow)" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="30 1000"
        stroke-dashoffset="0">
        <animate attributeName="stroke-dashoffset" from="1000" to="0" begin=".5" dur="3s" repeatCount="indefinite" />
    </path>

    
    <path id="path-logo-4"
        d="M407 184H577.437C598.148 184 614.937 167.211 614.937 146.5C614.937 125.789 631.726 109 652.437 109H774"
        stroke="#808080" stroke-dasharray="4 4" />
   
    <path d="M407 184H577.437C598.148 184 614.937 167.211 614.937 146.5C614.937 125.789 631.726 109 652.437 109H774"
        stroke="url(#pulseGlow)" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="30 1000"
        stroke-dashoffset="0">
        <animate attributeName="stroke-dashoffset" from="1000" to="0" begin=".5" dur="3s" repeatCount="indefinite" />
    </path>

    
    <path id="path-logo-5"
        d="M407 184H236.563C215.852 184 199.063 200.789 199.063 221.5C199.063 242.211 182.274 259 161.563 259H40"
        stroke="#808080" stroke-dasharray="4 4" />
    
    <path d="M407 184H236.563C215.852 184 199.063 200.789 199.063 221.5C199.063 242.211 182.274 259 161.563 259H40"
        stroke="url(#pulseGlow)" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="30 1000"
        stroke-dashoffset="0">
        <animate attributeName="stroke-dashoffset" from="1000" to="0" begin=".5" dur="3s" repeatCount="indefinite" />
    </path>

    
    <path id="path-logo-6"
        d="M407 184H577.437C598.148 184 614.937 200.789 614.937 221.5C614.937 242.211 631.726 259 652.437 259H774"
        stroke="#808080" stroke-dasharray="4 4" />
   
    <path d="M407 184H577.437C598.148 184 614.937 200.789 614.937 221.5C614.937 242.211 631.726 259 652.437 259H774"
        stroke="url(#pulseGlow)" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="30 1000"
        stroke-dashoffset="0">
        <animate attributeName="stroke-dashoffset" from="1000" to="0" begin=".5" dur="3s" repeatCount="indefinite" />
    </path>

  
    <path id="path-logo-7"
        d="M407 184H325.641C290.294 184 261.641 212.654 261.641 248V284C261.641 319.346 232.987 348 197.641 348H109"
        stroke="#808080" stroke-dasharray="4 4" />
    
    <path d="M407 184H325.641C290.294 184 261.641 212.654 261.641 248V284C261.641 319.346 232.987 348 197.641 348H109"
        stroke="url(#pulseGlow)" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="30 1000"
        stroke-dashoffset="0">
        <animate attributeName="stroke-dashoffset" from="1000" to="0" begin="0" dur="3s" repeatCount="indefinite" />
    </path>

    
    <path id="path-logo-8"
        d="M407 184H488.359C523.706 184 552.359 212.654 552.359 248V284C552.359 319.346 581.013 348 616.359 348H705"
        stroke="#808080" stroke-dasharray="4 4" />

    <path d="M407 184H488.359C523.706 184 552.359 212.654 552.359 248V284C552.359 319.346 581.013 348 616.359 348H705"
        stroke="url(#pulseGlow)" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="30 1000"
        stroke-dashoffset="0">
        <animate attributeName="stroke-dashoffset" from="1000" to="0" begin="0" dur="3s" repeatCount="indefinite" />
    </path>

    <g clip-path="url(#clip3_1158_26720)">
        
         <image
  href="/image-67.svg"
  x="367"
  y="140"
  width="80"
  height="80"
/>
      
        
    </g>
    <defs>
        <filter id="filter0_g_1158_26720" x="342.49" y="119.491" width="129.02" height="129.019"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feTurbulence type="fractalNoise" baseFrequency="1 1" numOctaves="3" seed="4601" />
            <feDisplacementMap in="shape" scale="16" xChannelSelector="R" yChannelSelector="G" result="displacedImage"
                width="100%" height="100%" />
            <feMerge result="effect1_texture_1158_26720">
                <feMergeNode in="displacedImage" />
            </feMerge>
        </filter>
        
        
        <clipPath id="clip0_1158_26720">
            <rect width="40" height="37" fill="white" transform="translate(774 241)" />
        </clipPath>
        <clipPath id="clip1_1158_26720">
            <rect width="38.0952" height="40" fill="white" transform="translate(71)" />
        </clipPath>
        <clipPath id="clip2_1158_26720">
            <rect width="40" height="40" fill="white" transform="translate(0 239)" />
        </clipPath>
        <clipPath id="clip3_1158_26720">
            <rect width="120" height="120" fill="white" transform="translate(347 124)" />
        </clipPath>
    </defs>
  

</svg>
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
    'Finance',
    'Project Management',
    'Leadership & Management',
    'Design',
  ]
  const listRef = useRef<HTMLDivElement>(null);
const [activeIndex, setActiveIndex] = useState<number | null>(null);
const moduleImages = [
  "/image 32.svg",
  "/image 36.svg",
  "/image 28 (1).svg",
  "/image 28 (1).svg",
  "/image 36.svg",
  "/image 33.svg",
];
useEffect(() => {
  const el = listRef.current;
  if (!el) return;

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();

    setActiveIndex((prev) => {
      const current = prev ?? 0;

      if (e.deltaY > 0) {
        return Math.min(current + 1, modules.length - 1);
      }

      return Math.max(current - 1, 0);
    });
  };

  el.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    el.removeEventListener("wheel", handleWheel);
  };
}, [modules.length]);
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
    <section className="lp-section lp-hero lp-platform" ref={ref}
   >
     <div className="lp-bg">
         
       <div className="blob blob-1" />
  <div className="blob blob-2" />
  <div className="blob blob-3" />
  <div className="blob blob-4" />
  <div className="blob blob-5" />
  <div className="blob blob-6" />
  <div className="blob blob-7" />
<div className="blob blob-8" />
  
      </div>
      <div className="lp-container">
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
      <div className="lp-platform__left" ref={listRef}  onMouseLeave={() => setActiveIndex(null)}>
  <ul >
    {modules.map((m, i) => (
      <li
        key={i}
        className={`lp-platform__list lp-platform__item ${activeIndex === i ? "active" : ""}`}
        onClick={() => toggleModule(i)}
        onMouseEnter={() => setActiveIndex(i)}
      >
        <div className="lp-platform__title">{m}</div>

        <div className="lp-platform__desc">
          <ul>
            <li>Project Management</li>
            <li>DevOps Tracking</li>  
            <li>Team Collaboration</li>
          </ul>
        </div>
      </li>
    ))}
  </ul>
</div>

      <div className="lp-platform__right">
        <div className="lp-platform__screen">
            <div className="lp-platform__screen-inner">
  <div className="lp-ph-full" />
  <img
  src={moduleImages[activeIndex ?? 0]}
  className="lp-ph-image"
  alt=""
/>
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
   const [activeCard, setActiveCard] = useState(0);
  const cards = [
    { title: 'Centralize Operations', body: 'Manage multiple departments, workflows, and processes from a single platform.', shape: 'triangle', path: "M25,8 L43,38 C45,42 43,47 38,47 L12,47 C7,47 5,42 7,38 L25,8 Z" },
    { title: 'Improve Team Visibility', body: 'Track tasks, approvals, attendance, and performance in real time.', shape: 'pentagon', path: "M25,5 L45,20 L38,45 L12,45 L5,20 Z" },
    { title: 'Reduce Manual Work', body: 'Automate repetitive processes and eliminate unnecessary follow-ups.', shape: 'diamond', path: "M25,5 L45,25 L25,45 L5,25 Z" },
    { title: 'Scale Without Complexity', body: 'Add teams, modules, and workflows as your organization grows.', shape: 'hexagon', path: "M37,5 L48,25 L37,45 L13,45 L2,25 L13,5 Z" },
  ]
  return (
    <section className=" lp-helps" ref={ref}>
      <div className={`lp-container lp-fade ${visible ? 'lp-fade--in' : ''}`}>
        <p className="lp-section__eyebrow">Stop managing tools<br/>
         Start managing your <span className="kk">business</span></p>
        <p className="lp-section__sub">
          StratoOne eliminates the friction that slows modern organizations down — so your teams can operate with speed, clarity, and confidence.
        </p>
        <div className="lp-helps__grid" onMouseLeave={() => setActiveCard(0)}>
          {cards.map((c, i) => (
            <div key={i} className={`lp-helps__card ${c.shape} ${
  activeCard === i ? "active" : ""
}`} onMouseEnter={() => setActiveCard(i)} style={{ animationDelay: `${i * 0.1}s` }}>
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


/* ── CTA Banner ── */
function CtaBanner() {
  const { ref, visible } = useInView()
  return (
    <section className="lp-cta-banner" ref={ref}>
      
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
        
      
        <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginTop: "24px",
    flexWrap: "wrap",
  }}
>
  <Link
    href="/signup"
    className="lp-btn lp-btn--white lp-btn--lg"
  >
    Start Free Trial ↗
  </Link>

  <Link
    href="/signin"
    className="lp-btn lp-btn--primary lp-btn--lg"
  >
    Sign In
  </Link>
</div>
        {/* Dashboard preview placeholder */}
        
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
              <span className="lp-logo__dot" />StratoOne
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
      
      <CtaBanner />
      <Footer />
    </div>
  )
}