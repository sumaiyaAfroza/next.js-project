
'use client';
import Reveal from "./Reveal";
import { team} from "./data";

export function TeamSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <span>👥</span> Meet The Team
            </div>
            <h2 className="text-5xl font-black text-gray-900">
              The People Behind <span className="text-[#7A3206]">The Flavors</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              A passionate team of chefs, nutritionists, and food lovers who pour their heart into every recipe.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group text-center">
                {/* Avatar */}
                <div className={`relative mx-auto w-36 h-36 rounded-3xl bg-gradient-to-br ${member.bg} flex items-center justify-center text-6xl mb-5 shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-400 border border-orange-100`}>
                  {member.emoji}
                  {/* Online dot */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow" />
                </div>

                <h3 className="text-gray-900 font-bold text-lg">{member.name}</h3>
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm italic">{member.quote}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}