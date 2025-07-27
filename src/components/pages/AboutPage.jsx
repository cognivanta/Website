import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Heart, Target, Eye, Rocket } from 'lucide-react';
import { fadeIn } from '../../utils/animations';

export default function AboutPage() {
  return (
    <div className="space-y-20 px-6">
      <section className="text-center py-20">
        <motion.h1 variants={fadeIn} initial="hidden" whileInView="visible" className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Cognivanta
        </motion.h1>
        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" transition={{ delay:0.2 }} className="text-xl text-gray-300 max-w-4xl mx-auto">
          Pioneering the future of technology with passion, expertise, and unwavering commitment.
        </motion.p>
      </section>
      <section className="lg:grid lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className="space-y-6 text-lg text-gray-300">
          <p>Founded by visionary technologists, Cognivanta emerged from a bold dream...</p>
          <p>Since our inception, we've partnered with forward-thinking organizations...</p>
        </motion.div>
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className="relative">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Team collaboration" className="rounded-2xl w-full h-96 object-cover" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Rocket className="w-12 h-12 text-white" />
          </div>
        </motion.div>
      </section>
      <section className="grid lg:grid-cols-2 gap-12">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <Target className="w-8 h-8 text-purple-400 mb-3" /><h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300">To empower businesses with innovative and reliable IT solutions...</p>
        </motion.div>
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" transition={{ delay:0.2 }} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <Eye className="w-8 h-8 text-pink-400 mb-3" /><h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
          <p className="text-gray-300">To be the leading IT services and consulting partner...</p>
        </motion.div>
      </section>
      <section className="text-center">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" className="text-4xl font-bold text-white mb-16">Our Core Values</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Users />, title: 'Client-Centricity', desc: 'Your success is our priority.' },
            { icon: <Lightbulb />, title: 'Innovation', desc: 'Continuously exploring cutting-edge technologies.' },
            { icon: <Heart />, title: 'Integrity', desc: 'Operating with transparency and honesty.' },
            { icon: <Target />, title: 'Excellence', desc: 'Striving for perfection.' }
          ].map((v,i)=>(
            <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" transition={{ delay: i*0.1 }} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 text-white mx-auto">{v.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
              <p className="text-gray-300 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}