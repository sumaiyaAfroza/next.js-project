'use client';
import Link from "next/link";
import Reveal from "./Reveal";


export function CTASection() {
  return (
    <section className="bg-[#fdf8f3] py-28 px-6">
      <Reveal>
        <div className="max-w-4xl mx-auto relative">
          {/* Background card */}
          <div className="relative bg-gradient-to-br from-[#7A3206] via-[#a04010] to-[#c85a1e] rounded-3xl p-16 text-center overflow-hidden shadow-2xl">
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-orange-500/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <p className="text-5xl mb-6">🍽️</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                Ready to Experience
                <br />
                <span className="text-orange-200">Extraordinary Food?</span>
              </h2>
              <p className="text-orange-200/80 text-lg mb-10 max-w-xl mx-auto">
                Join over 200,000 food lovers who have discovered the joy of cooking with us.
                Your next favorite dish is just one click away.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/products"
                  className="bg-white text-[#7A3206] hover:bg-orange-50 px-8 py-4 rounded-full font-black text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Browse Our Menu →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white/40 text-white hover:border-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}