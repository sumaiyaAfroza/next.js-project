'use client';
import Reveal from "./Reveal";
import { values } from "./data";

 export function Value() {
  return (
    <section className="bg-[#1a0a00] py-28 overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-orange-800/60 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <span>💡</span> What We Stand For
            </div>
            <h2 className="text-5xl font-black text-white">
              Values That Drive <span className="text-orange-400">Every Dish</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-orange-600/40 transition-all duration-400 hover:-translate-y-2">
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
