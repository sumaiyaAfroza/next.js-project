'use client';
import Reveal from "./Reveal";
import { milestones } from './data';

export function TimelineSection() {
  return (
    <section className="bg-[#fdf8f3] py-28">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <span>🗓️</span> Our Journey
            </div>
            <h2 className="text-5xl font-black text-gray-900">
              Milestones That <span className="text-[#7A3206]">Define Us</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-300 via-[#7A3206] to-orange-300 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Card */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100 hover:shadow-lg hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
                      <span className="inline-block bg-[#7A3206] text-white text-xs font-black tracking-wider px-3 py-1 rounded-full mb-3">
                        {m.year}
                      </span>
                      <p className="text-gray-700 leading-relaxed">{m.event}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-5 h-5 bg-[#7A3206] rounded-full border-4 border-orange-100 shadow-lg flex-shrink-0 relative z-10" />

                  {/* Empty side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
