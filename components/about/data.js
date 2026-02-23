
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
export const stats = [
  { value: '12+', label: 'Years of Passion', icon: '🔥' },
  { value: '340+', label: 'Unique Recipes', icon: '📖' },
  { value: '200K', label: 'Happy Foodies', icon: '❤️' },
  { value: '98%', label: 'Satisfaction Rate', icon: '⭐' },
];

export const values = [
  {
    icon: '🌿',
    title: 'Farm Fresh Ingredients',
    desc: 'We source only the finest seasonal produce directly from local farmers, ensuring every dish starts with nature\'s best.',
  },
  {
    icon: '👨‍🍳',
    title: 'Crafted with Expertise',
    desc: 'Every recipe is tested, refined, and perfected by our culinary team before it reaches your table.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    desc: 'We believe food brings people together. Our platform is built around a vibrant, supportive food-loving community.',
  },
  {
    icon: '♻️',
    title: 'Sustainable Practices',
    desc: 'From packaging to sourcing, we make conscious choices to reduce our footprint and protect the planet.',
  },
];

export const team = [
  {
    name: 'Ariana West',
    role: 'Head Chef & Founder',
    emoji: '👩‍🍳',
    quote: '"Food is the language of love."',
    bg: 'from-amber-100 to-orange-100',
  },
  {
    name: 'Marcus Lee',
    role: 'Executive Pastry Chef',
    emoji: '🧁',
    quote: '"Every dessert tells a story."',
    bg: 'from-rose-100 to-pink-100',
  },
  {
    name: 'Priya Sharma',
    role: 'Nutrition Specialist',
    emoji: '🥗',
    quote: '"Health and flavor are not opposites."',
    bg: 'from-green-100 to-emerald-100',
  },
  {
    name: 'James Okafor',
    role: 'Recipe Director',
    emoji: '📝',
    quote: '"A great recipe is a gift to the world."',
    bg: 'from-sky-100 to-blue-100',
  },
];

export const milestones = [
  { year: '2012', event: 'Founded in a tiny home kitchen with a dream and a wooden spoon.' },
  { year: '2015', event: 'Launched our online platform — 10,000 users in the first month.' },
  { year: '2018', event: 'Expanded to 15 countries and won our first Global Culinary Award.' },
  { year: '2021', event: 'Reached 100K community members and launched the mobile app.' },
  { year: '2024', event: 'Celebrating 200K foodies and counting — the journey continues.' },
];
