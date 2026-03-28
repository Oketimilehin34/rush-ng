"use client"; // Required for the mobile menu toggle
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    // { name: 'Register', path: '/register' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Orders', path: '/orders' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-rush-dark/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        

     {/* NAVBAR LOGO & STATUS */}
    <div className="flex items-center gap-4">
    <Link href="/" className="flex flex-col group">
        <h1 className="text-2xl font-black italic tracking-tighter text-white uppercase leading-none">
        RUSH <span className="text-rush-bronze">NG</span>
        </h1>
        <span className="text-[8px] text-gray-500 font-bold tracking-[0.3em] uppercase">Logistics</span>
    </Link>

     {/* NEW: Live Status Indicator */}
    <div className="hidden sm:flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
        <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-[9px] font-black uppercase tracking-widest text-green-500 italic">
        Lagos Live
        </span>
    </div>
    </div>

        {/* DESKTOP MENU (Visible on md screens and up) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className="text-xs font-black uppercase italic tracking-widest text-gray-400 hover:text-rush-bronze transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/register">
            <button className="bg-amber-gradient text-black text-[10px] font-black px-6 py-2 rounded-sm uppercase italic shadow-lg hover:opacity-90 transition-all">
              Join Team
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON (Visible only on small screens) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-rush-surface border-b border-white/5 flex flex-col p-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-sm font-black uppercase italic text-gray-400 hover:text-rush-bronze"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}