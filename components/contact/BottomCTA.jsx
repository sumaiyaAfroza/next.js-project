'use client';
import Link from "next/link";
import {Reveal }from "./Reveal";


export function BottomCTA() {
  return (
    <section className="bg-[#1a0a00] py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-orange-900/30 rounded-full blur-3xl" />
      </div>
      <Reveal>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="text-5xl mb-6">🍽️</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Hungry for Something <span className="text-orange-400">Delicious?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Browse our full menu and find your next favorite meal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="bg-[#7A3206] hover:bg-[#5e2605] text-white px-8 py-4 rounded-full font-black text-sm transition-all duration-300 shadow-lg hover:shadow-orange-900/50 hover:-translate-y-0.5"
            >
              Explore Our Menu →
            </Link>
            <Link
              href="/about"
              className="border border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
