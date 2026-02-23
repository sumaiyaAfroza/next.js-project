'use client';

import Link from "next/link";
import { useState, useEffect } from "react";


export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  return (
    <section className="relative bg-[#1a0a00] py-36 overflow-hidden flex items-center justify-center min-h-[55vh]">
      {/* Orbs */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c85a1e, transparent 70%)', animation: 'floatA 9s ease-in-out infinite' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)', animation: 'floatB 7s ease-in-out infinite' }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
            style={{ top: `${10 + i * 18}%`, left: '-10%', width: '120%', transform: 'rotate(-6deg)', opacity: 0.5 - i * 0.07 }}
          />
        ))}
      </div>

      <div
        className="relative z-10 text-center px-6"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(-30px)',
          transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="inline-flex items-center gap-2 border border-orange-700/50 text-orange-400 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-7 backdrop-blur-sm bg-orange-950/30">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          Get In Touch
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
          Let&apos;s <span className="text-orange-400">Talk</span>
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #f97316' }}>Food.</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
          Whether you have a question, a suggestion, or just want to share your favorite dish —
          we&apos;d love to hear from you. We are always just a message away.
        </p>
      </div>

      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-28px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(22px)} }
      `}</style>
    </section>
  );
}
