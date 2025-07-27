import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, GraduationCap, Users2, Star } from 'lucide-react';

const testimonials = [
  { name: "Sarah Johnson", role: "CTO, TechCorp", text: "Cognivanta's AI solutions transformed our business operations completely!" },
  { name: "Michael Chen", role: "CEO, DataFlow", text: "Their training programs prepared our team for real-world challenges." },
  { name: "Emily Rodriguez", role: "Startup Founder", text: "The internship program helped us find talented developers!" }
];

export default function HomePage({ onNavigate }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => { const iv = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 4000); return () => clearInterval(iv); }, []);
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center max-w-6xl mx-auto px-6">
          <motion.h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3 }}>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">IT Solutions</span><br />
            <span className="text-white">&</span><br />
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Training Hub</span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            We provide cutting-edge <span className="text-purple-400 font-semibold">IT solutions</span>, comprehensive <span className="text-pink-400 font-semibold">training programs</span>, internships, and real-time project development.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}>
            <motion.button onClick={() => onNavigate('services')} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold flex items-center space-x-2 hover:shadow-purple-500/25 transition-all" whileHover={{ scale: 1.05, rotate: 1 }} whileTap={{ scale: 0.95 }}>
              <Settings className="w-5 h-5" /><span>IT Services</span>
            </motion.button>
            <motion.button onClick={() => onNavigate('training')} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold flex items-center space-x-2 hover:shadow-blue-500/25 transition-all" whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.95 }}>
              <GraduationCap className="w-5 h-5" /><span>Training Programs</span>
            </motion.button>
            <motion.button onClick={() => onNavigate('internships')} className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold flex items-center space-x-2 hover:bg-white/10 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Users2 className="w-5 h-5" /><span>Internships</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-16 text-white">
            What Our Clients & Students Say
          </motion.h2>
          <motion.div key={idx} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <div className="flex justify-center mb-6">{[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}</div>
            <p className="text-xl text-gray-300 mb-8 italic">"{testimonials[idx].text}"</p>
            <div><p className="text-lg font-semibold text-white">{testimonials[idx].name}</p><p className="text-purple-400">{testimonials[idx].role}</p></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}