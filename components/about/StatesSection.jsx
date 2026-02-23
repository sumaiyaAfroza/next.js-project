'use client'
import Reveal from './Reveal';
import { stats } from './data';

export default function StatesSection() {
  return (
    <section className="bg-[#fdf8f3] py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="text-center bg-white rounded-2xl py-10 px-6 shadow-sm border border-orange-100 hover:shadow-lg transition hover:-translate-y-1">
              <div className="text-4xl mb-4">{s.icon}</div>
              <p className="text-5xl font-black text-[#7A3206]">{s.value}</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}