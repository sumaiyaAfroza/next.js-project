'use client';
import Reveal from "./Reveal";

export function Story() {
  return (
    <section id="story" className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Visual */}
          <Reveal>
            <div className="relative">
              {/* Big background circle */}
              <div className="absolute -top-10 -left-10 w-80 h-80 bg-orange-50 rounded-full -z-10" />

              {/* Main visual box */}
              <div className="bg-gradient-to-br from-[#7A3206] to-[#c85a1e] rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <p className="text-6xl mb-6">🍳</p>
                <blockquote className="text-2xl font-bold leading-tight mb-4">
                  "We started with a single recipe and a passion to share it with the world."
                </blockquote>
                <p className="text-orange-200 text-sm">— Ariana West, Founder</p>
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-5 -right-5 bg-amber-400 text-amber-900 font-black text-sm px-5 py-3 rounded-2xl shadow-xl rotate-2">
                Est. 2012 🌟
              </div>

              {/* Small decoration card */}
              <div className="absolute -top-6 right-8 bg-white border border-orange-100 rounded-xl px-4 py-3 shadow-lg text-xs font-semibold text-gray-700 flex items-center gap-2">
                <span>🥘</span> 340+ Recipes Created
              </div>
            </div>
          </Reveal>

          {/* Right: Text */}
          <Reveal delay={150}>
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <span>📖</span> Our Story
              </div>
              <h2 className="text-5xl font-black text-gray-900 leading-tight mb-6">
                From a Home Kitchen
                <br />
                <span className="text-[#7A3206]">to the World's Table</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  It all began in 2012 when our founder, Ariana West, quit her corporate job to
                  pursue one dream: make authentic, nourishing food accessible to everyone. Armed
                  with decades of family recipes and a fierce love for flavor, she started cooking —
                  and sharing.
                </p>
                <p>
                  What began as a small blog quickly became a thriving community of passionate home
                  cooks, professional chefs, and food adventurers from every corner of the globe.
                  Today, we are proud to serve over 200,000 food lovers across 15 countries.
                </p>
                <p>
                  Our philosophy is simple: great food should be made with love, shared generously,
                  and enjoyed by everyone. That belief is baked into everything we do — from the
                  recipes we craft to the community we nurture.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}