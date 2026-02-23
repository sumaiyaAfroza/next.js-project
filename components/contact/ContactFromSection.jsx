
'use client';
import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";


 export function ContactFormSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('success');
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">

        {/* ── Left: Form ── */}
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span>💬</span> Send a Message
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">
              We&apos;d Love to <span className="text-[#7A3206]">Hear From You</span>
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-green-700 mb-2">Message Sent!</h3>
                <p className="text-green-600 text-sm mb-6">
                  Thanks for reaching out! We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="bg-[#7A3206] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#5e2605] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A3206] focus:border-transparent focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A3206] focus:border-transparent focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A3206] focus:border-transparent focus:bg-white transition-all appearance-none"
                  >
                    <option value="">Select a topic...</option>
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Recipe Question</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    required
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A3206] focus:border-transparent focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#7A3206] hover:bg-[#5e2605] text-white py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-orange-200/40 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message <span className="text-lg">→</span></>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>

        {/* ── Right: Visual ── */}
        <Reveal delay={150}>
          <div className="space-y-6">
            {/* Map placeholder */}
            <div className="relative rounded-3xl overflow-hidden h-72 bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200 flex items-center justify-center shadow-inner">
              <div className="text-center">
                <div className="text-6xl mb-3">🗺️</div>
                <p className="text-gray-600 font-semibold">123 Flavor Street</p>
                <p className="text-gray-400 text-sm">Old Dhaka, Bangladesh</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-xs font-bold text-[#7A3206] border border-[#7A3206] px-4 py-2 rounded-full hover:bg-[#7A3206] hover:text-white transition-all"
                >
                  Open in Google Maps →
                </a>
              </div>
              <div className="absolute top-6 right-6 bg-[#7A3206] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                📍 We&apos;re Here
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#1a0a00] rounded-2xl p-7 border border-orange-900/40">
              <h3 className="text-white font-bold text-lg mb-5">Follow Our Flavors</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Facebook',  icon: '📘', handle: '@foodproject', color: 'hover:border-blue-500 hover:text-blue-400' },
                  { name: 'Instagram', icon: '📸', handle: '@foodproject', color: 'hover:border-pink-500 hover:text-pink-400' },
                  { name: 'YouTube',   icon: '▶️', handle: '@foodproject', color: 'hover:border-red-500  hover:text-red-400'  },
                  { name: 'TikTok',    icon: '🎵', handle: '@foodproject', color: 'hover:border-teal-500 hover:text-teal-400' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`flex items-center gap-3 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 ${s.color}`}
                  >
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <p className="text-white text-xs font-bold">{s.name}</p>
                      <p className="text-gray-500 text-xs">{s.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Promise card */}
            <div className="bg-gradient-to-br from-[#7A3206] to-[#c85a1e] rounded-2xl p-6 text-white flex items-center gap-5">
              <div className="text-4xl flex-shrink-0">⚡</div>
              <div>
                <p className="font-black text-lg">Quick Response Guaranteed</p>
                <p className="text-orange-200 text-sm mt-1">Our team replies within 24 hours on all business days.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}