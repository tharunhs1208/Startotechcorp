
'use client'
import { useEffect, useRef,useState } from "react"
import { ArrowUp, ShoppingCart,UserPlus,DollarSign ,ArrowDown,Package} from 'lucide-react'
import {DashboardChart} from "@/components/StatCard";
import SalesOverview from "@/components/SalesOverview";
import Link from "next/link";
export default function Hero() {
  const heroConRef = useRef<HTMLDivElement | null>(null);

  

  useEffect(() => {
  const handleResize = () => {
    if (!heroConRef.current) return;

    const baseWidth = 1169;
    const viewport = window.innerWidth;

    const responsiveScale = Math.min(1, viewport / baseWidth);

    heroConRef.current.style.transform = `scale(${responsiveScale})`;
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () =>
    window.removeEventListener("resize", handleResize);
}, []);
  return (
    <section className="lp-hero">
      
     
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
       
      
      
      
      <div className="lp-hero__content">
        <div className="lp-hero__headline">
          <p className="lp-hero__title"><span className="ol">Run Your Entire Business From</span></p>
          <p className="lp-hero__badge">One Platform</p>
  </div>
        <p className="lp-hero__sub">
          Manage IT, Finance, Design, Civil Engineering, Architecture, Operations, HR, and <br className="lp-br" />
          more  all inside one intelligent ecosystem built for growing businesses.
        </p>
        <div className="lp-hero__actions">
          <Link href="/signup" className="lp-btn lp-btn--primary lp-btn--lg">Start Free Trial</Link>
          <Link href="#demo" className="lp-btn lp-btn--secondary lp-btn--lg">Get Demo</Link>
        </div>

        {/* Stats row */}
        <div ref={heroConRef} className="lp-hero_con">
          <div className="lp-hero__stats ">
          <div className="lp-stat-card"
      style={{
 
  borderRadius: '13.25px',
  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
  padding: '12px 16px',
  display: 'flex',
  justifyContent: 'space-between', // ✅
  alignItems: 'center',
  color: 'white',
  fontFamily: 'sans-serif',
  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)'
}}
    >
      {/* Left Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontSize: '11px', opacity: 0.9, fontWeight: 500 }}>
          Total Sales
        </span>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '26px', fontWeight: '700', lineHeight: 1 }}>
            2500
          </span>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.2)', 
            padding: '2px 6px', 
            borderRadius: '10px', 
            display: 'flex', 
            alignItems: 'center',
            fontSize: '9px'
          }}>
            <ArrowUp size={8} strokeWidth={3} />
            <span style={{ marginLeft: '2px' }}>4.9%</span>
          </div>
        </div>

        <span style={{ fontSize: '10px', opacity: 0.8, marginTop: '4px' }}>
          Last month: <span style={{ fontWeight: 600 }}>2345</span>
        </span>
      </div>

      {/* Right Icon */}
      <div style={{
  width: '42px',
  height: '42px',
  backgroundColor: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}}>
        <ShoppingCart size={20} color="#7c3aed" />
      </div>
    </div>
          <div className="lp-stat-card"
      style={{
  
  borderRadius: '13.25px',
  background: '#FFFFFF',
  padding: '12px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#1a1a1a',
  fontFamily: 'Inter, sans-serif',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  border: '0.5px solid #E5E7EB',
}}
    >
      {/* Left Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontSize: '11px', color: '#6B7280', fontWeight: 500 }}>
          New Customer
        </span>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
          <span style={{ fontSize: '26px', fontWeight: '800', lineHeight: 1 }}>
            110
          </span>
          <div style={{ 
            background: '#EEF2FF', 
            padding: '2px 6px', 
            borderRadius: '10px', 
            display: 'flex', 
            alignItems: 'center',
            fontSize: '9px',
            color: '#4F46E5',
            fontWeight: 600
          }}>
            <ArrowUp size={8} strokeWidth={3} />
            <span style={{ marginLeft: '2px' }}>7.5%</span>
          </div>
        </div>

        <span style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '6px' }}>
          Last month: <span style={{ fontWeight: 600, color: '#4B5563' }}>89</span>
        </span>
      </div>

      {/* Right Icon - Dark Circle */}
      <div style={{
    width: '42px',
    height: '42px',
    background: 'linear-gradient(135deg, #0064f0 0%, #0051ff 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  }}>
        <UserPlus size={18} color="white" />
      </div>
    </div>
          <div className="lp-stat-card"
      style={{
  
  borderRadius: '13.25px',
  background: 'linear-gradient(135deg, #fcfcfc 0%, #ffffff 100%)',
  padding: '12px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'black',
  fontFamily: 'Mona Sans, sans-serif',
  boxShadow: '0 4px 15px rgba(109, 40, 217, 0.2)',
}}
    >
      {/* Left Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontSize: '11px', opacity: 0.9, fontWeight: 500 }}>
          Total Profit
        </span>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '26px', fontWeight: '700', lineHeight: 1 }}>
            $12.5k
          </span>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.2)', 
            padding: '2px 6px', 
            borderRadius: '10px', 
            display: 'flex', 
            alignItems: 'center',
            fontSize: '9px'
          }}>
            <ArrowUp size={8} strokeWidth={3} />
            <span style={{ marginLeft: '2px' }}>12%</span>
          </div>
        </div>

        <span style={{ fontSize: '10px', opacity: 0.8, marginTop: '4px' }}>
          Last month: <span style={{ fontWeight: 600 }}>$10.2k</span>
        </span>
      </div>

      {/* Right Icon - White Circle */}
      <div style={{
  width: '42px',
  height: '42px',
  backgroundColor:' #0064f0' ,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}}>
        <DollarSign size={20} color="#ffffff" />
      </div>
    </div>
  
          <div className="lp-stat-card"
      style={{ 
  
  borderRadius: '13.25px',
  background: '#FFFFFF',
  padding: '12px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#111827',
  fontFamily: 'Inter, sans-serif',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  border: '0.5px solid #E5E7EB',
}}
    >
      {/* Left Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontSize: '11px', color: '#6B7280', fontWeight: 500 }}>
          Return Products
        </span>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
          <span style={{ fontSize: '26px', fontWeight: '800', lineHeight: 1 }}>
            72
          </span>
          <div style={{ 
            background: '#FEF2F2', 
            padding: '2px 6px', 
            borderRadius: '10px', 
            display: 'flex', 
            alignItems: 'center',
            fontSize: '9px',
            color: '#EF4444',
            fontWeight: 600
          }}>
            <ArrowDown size={8} strokeWidth={3} />
            <span style={{ marginLeft: '2px' }}>6.0%</span>
          </div>
        </div>

        <span style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '6px' }}>
          Last month: <span style={{ fontWeight: 600, color: '#4B5563' }}>60</span>
        </span>
      </div>

      {/* Right Icon - Blue Circle */}
      <div style={{
  width: '42px',
  height: '42px',
  background: '#3B82F6',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  boxShadow: '0 4px 10px rgba(59, 130, 246, 0.2)',
}}>
        <Package size={18} color="white" />
      </div>
    </div>
          
        </div>

        {/* Dashboard mockup */}
        <div className="lp-hero__mockup">
        <DashboardChart/>
         <SalesOverview/>
        </div>
        </div>
      </div>
      
    </section>
  )
} 