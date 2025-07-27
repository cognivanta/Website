import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

export default function InternshipsPage() {
  return (
    <div className="space-y-20 px-6">
      <section className="text-center py-20">
        <motion.h1 variants={fadeIn} initial="hidden" whileInView="visible" className="text-6xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Internship Programs
        </motion.h1>
        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" transition={{ delay:0.2 }} className="text-xl text-gray-300 max-w-4xl mx-auto">
          Join our internship to gain real-world experience and mentorship from experts.
        </motion.p>
      </section>
      {/* Internship listings or application form here */}
    </div>
  );
}