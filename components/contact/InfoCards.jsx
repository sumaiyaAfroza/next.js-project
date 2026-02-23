

'use client';
import Link from "next/link";
import{ Reveal }from "./Reveal";
import{ contactInfo} from './data';



 export function InfoCards() {
  return (
    <section className="bg-[#fdf8f3] py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {contactInfo.map((c, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className={`group bg-gradient-to-br ${c.bg} rounded-2xl p-7 border border-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-default`}>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{c.icon}</div>
              <h3 className={`font-bold text-base mb-2 ${c.accent}`}>{c.title}</h3>
              {c.lines.map((l, j) => (
                <p key={j} className="text-gray-700 text-sm leading-relaxed">{l}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
