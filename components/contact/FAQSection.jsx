

'use client';
import Link from "next/link";
import {Reveal} from "./Reveal";
import{ faqs} from './data';
import { useState } from 'react';


 export function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 80}>
      <div
        className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
          open ? 'border-[#7A3206] bg-orange-50' : 'border-gray-200 bg-white hover:border-orange-300'
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center justify-between px-6 py-5 gap-4">
          <p className={`font-bold text-sm leading-snug ${open ? 'text-[#7A3206]' : 'text-gray-800'}`}>
            {faq.q}
          </p>
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black transition-all duration-300 ${
              open ? 'bg-[#7A3206] text-white rotate-45' : 'bg-gray-100 text-gray-500'
            }`}
          >
            +
          </div>
        </div>
        {open && (
          <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-orange-100 pt-4">
            {faq.a}
          </div>
        )}
      </div>
    </Reveal>
  );
}

 export function FAQSection() {
  return (
    <section className="bg-[#fdf8f3] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <span>❓</span> FAQ
            </div>
            <h2 className="text-5xl font-black text-gray-900">
              Frequently Asked <span className="text-[#7A3206]">Questions</span>
            </h2>
            <p className="text-gray-500 mt-4">Quick answers to the things people ask us most.</p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}