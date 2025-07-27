import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

export default function TrainingPage() {
  return (
    <div className="space-y-20 px-6">
      <section className="text-center py-20">
        <motion.h1 variants={fadeIn} initial="hidden" whileInView="visible" className="text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Training Programs
        </motion.h1>
        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" transition={{ delay:0.2 }} className="text-xl text-gray-300 max-w-4xl mx-auto">
          Hands-on training from industry experts in AI, Cloud, DevOps, and more.
        </motion.p>
      </section>
      {/* Add course listings or program details here */}
    </div>
  );
}