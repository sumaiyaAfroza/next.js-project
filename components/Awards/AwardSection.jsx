'use client';

import { useEffect, useRef, useState } from 'react';

const awards = [
  {
    id: 1,
    icon: '🏆',
    year: '2024',
    title: 'Best Food Platform',
    organization: 'Global Culinary Awards',
    description: 'Recognized as the best online food platform for exceptional quality and service.',
    badge: 'GOLD',
    badgeColor: 'from-yellow-400 to-amber-500',
  },
  {
    id: 2,
    icon: '⭐',
    year: '2024',
    title: 'Customer Delight Award',
    organization: 'South Asia Food Festival',
    description: 'Achieved the highest customer satisfaction rating across all food service platforms.',
    badge: 'PLATINUM',
    badgeColor: 'from-slate-300 to-slate-500',
  },
  {
    id: 3,
    icon: '🍽️',
    year: '2023',
    title: 'Innovation in Food Tech',
    organization: 'Tech & Taste Summit',
    description: 'Special recognition for innovative solutions in the food technology space.',
    badge: 'SILVER',
    badgeColor: 'from-gray-300 to-gray-400',
  },
  {
    id: 4,
    icon: '🌟',
    year: '2023',
    title: 'Top Rated Recipes',
    organization: 'Foodie Choice Awards',
    description: 'Awarded for maintaining the highest quality ratings among thousands of recipes.',
    badge: 'GOLD',
    badgeColor: 'from-yellow-400 to-amber-500',
  },
  {
    id: 5,
    icon: '🎖️',
    year: '2022',
    title: 'Community Impact Award',
    organization: 'National Food Council',
    description: 'Outstanding contribution to preserving and promoting local food culture.',
    badge: 'SPECIAL',
    badgeColor: 'from-rose-400 to-orange-500',
  },
  {
    id: 6,
    icon: '🥇',
    year: '2022',
    title: 'Best UI/UX Experience',
    organization: 'Digital Excellence Awards',
    description: 'Honored for delivering the most intuitive and delightful user experience.',
    badge: 'GOLD',
    badgeColor: 'from-yellow-400 to-amber-500',
  },
];

const stats = [
  { value: '50+', label: 'Awards Won', icon: '🏅' },
  { value: '8', label: 'Years of Experience', icon: '📅' },
  { value: '200K+', label: 'Happy Customers', icon: '😊' },
  { value: '15', label: 'Countries Served', icon: '🌍' },
];

 export function useInView(threshold = 0.1) { // threshold একটু কমিয়ে ০.১ করে দিন
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // এলিমেন্টটি স্ক্রিনে আছে কি না তা চেক করার জন্য Observer
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target); // একবার ইন-ভিউ হলে অবজার্ভ করা বন্ধ করে দিবে (পারফরম্যান্স ভালো হবে)
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // এটি এলিমেন্টটি আসার ৫০ পিক্সেল আগেই ট্রিগার করবে
      }
    );

    const currentRef = ref.current;
    if (currentRef) obs.observe(currentRef);

    return () => {
      if (currentRef) obs.unobserve(currentRef);
    };
  }, [threshold]);

  return [ref, inView];
}
export function AwardCard({ award, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 border border-orange-100"
    >
      {/* Top accent line */}
      <div className={`h-1 w-full bg-gradient-to-r ${award.badgeColor}`} />

      {/* Badge */}
      <div className={`absolute top-4 right-4 bg-gradient-to-br ${award.badgeColor} text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full shadow`}>
        {award.badge}
      </div>

      <div className="p-6 pt-5">
        {/* Icon + Year */}
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
            {award.icon}
          </div>
          <span className="text-xs font-bold text-orange-400 tracking-widest bg-orange-50 px-2 py-1 rounded-full">
            {award.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#7A3206] transition-colors duration-300 leading-snug">
          {award.title}
        </h3>

        {/* Organization */}
        <p className="text-xs text-orange-500 font-semibold uppercase tracking-wider mb-3">
          {award.organization}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          {award.description}
        </p>
      </div>

      {/* Shimmer on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
    </div>
  );
}

function StatCard({ stat, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 120}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.7s ease',
      }}
      className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl py-8 px-4 hover:bg-white/20 transition-colors duration-300"
    >
      <span className="text-4xl mb-3">{stat.icon}</span>
      <span className="text-4xl font-black text-white mb-1">{stat.value}</span>
      <span className="text-sm text-orange-200 font-medium">{stat.label}</span>
    </div>
  );
}

export default function AwardSection() {
  const [headerRef, headerInView] = useInView(0.2);

  return (
    <section className="bg-[#fdf8f3] py-24 overflow-hidden">

      {/* ── Header ── */}
      <div
        ref={headerRef}
        className="text-center px-6 mb-16"
        style={{
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? 'translateY(0)' : 'translateY(-30px)',
          transition: 'all 0.8s ease',
        }}
      >
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
          <span>🏅</span> Our Achievements
        </div>

        <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-4">
          Awards &{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#7A3206]">Recognition</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
            >
              <path
                d="M0,8 Q50,0 100,8 Q150,16 200,8"
                stroke="#f97316"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg mt-3 leading-relaxed">
          Our commitment to quality and excellence has been recognized time and
          again on the world stage — and we are just getting started.
        </p>
      </div>

      {/* ── Award Cards Grid ── */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {awards.map((award, i) => (
          <AwardCard key={award.id} award={award} index={i} />
        ))}
      </div>

      {/* ── Stats Banner ── */}
      <div className="relative mx-6 md:mx-12 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A3206] via-[#a04010] to-[#c85a1e]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl" />

        <div className="relative z-10 py-16 px-8">
          <p className="text-center text-orange-300 text-sm font-bold uppercase tracking-widest mb-10">
            By The Numbers
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="text-center mt-16 px-6">
        <p className="text-gray-400 text-sm mb-4">Join us on our journey</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#7A3206] hover:bg-[#5e2605] text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-orange-200/50 hover:shadow-xl hover:-translate-y-0.5"
        >
          Learn More About Us
          <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  );
}