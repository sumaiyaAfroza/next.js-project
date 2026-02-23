'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a0a00]">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #c85a1e 0%, transparent 70%)', animation: 'float1 8s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)', animation: 'float2 10s ease-in-out infinite' }}
        />
        <div
          className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)', animation: 'float1 6s ease-in-out infinite reverse' }}
        />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
            style={{
              top: `${15 + i * 15}%`,
              left: '-10%',
              width: '120%',
              transform: `rotate(-8deg)`,
              opacity: 0.5 - i * 0.06,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <div className="inline-flex items-center gap-2 border border-orange-700/50 text-orange-400 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8 backdrop-blur-sm bg-orange-950/30">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Our Story
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white mb-8 tracking-tight">
              We Cook.
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '2px #f97316' }}
              >
                We Share.
              </span>
              <br />
              <span className="text-orange-400">We Love.</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">
              Born from a passion for authentic flavors and a belief that everyone
              deserves access to great food — we have been on a mission to make
              cooking joyful, accessible, and deeply satisfying since 2012.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-[#7A3206] hover:bg-[#5e2605] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-orange-900/50 hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Our Menu →
              </Link>
              <a
                href="#story"
                className="border border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              >
                Read Our Story
              </a>
            </div>
          </div>
        </div>

        {/* Right: Visual card stack */}
        <div
          className="relative flex justify-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0) rotate(0deg)' : 'translateX(40px)',
            transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
          }}
        >
          {/* Background cards */}
          <div className="absolute top-4 left-4 w-72 h-80 bg-orange-900/30 rounded-3xl border border-orange-800/40 rotate-6" />
          <div className="absolute top-2 left-2 w-72 h-80 bg-orange-800/20 rounded-3xl border border-orange-700/30 rotate-3" />

          {/* Main card */}
          <div className="relative w-72 h-80 bg-gradient-to-br from-[#7A3206] to-[#c85a1e] rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-4 p-8 border border-orange-600/40">
            <div className="text-7xl">🍜</div>
            <div className="text-center">
              <p className="text-white font-black text-2xl">Taste The</p>
              <p className="text-orange-200 font-black text-2xl">Difference</p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-300 text-xl">★</span>
              ))}
            </div>
            <p className="text-orange-200/70 text-xs text-center">Trusted by 200K+ food lovers worldwide</p>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 font-black text-xs px-3 py-2 rounded-full rotate-12 shadow-lg">
            🏆 #1 Platform
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 font-bold text-xs px-3 py-2 rounded-full -rotate-6 shadow-lg">
            ✅ 340+ Recipes
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(25px) scale(0.95); }
        }
      `}</style>
    </section>
  );
}