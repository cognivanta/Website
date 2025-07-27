import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

export default function ProjectsPage() {
  return (
    <div className="space-y-20 px-6">
      <section className="text-center py-20">
        <motion.h1 variants={fadeIn} initial="hidden" whileInView="visible" className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Our Projects
        </motion.h1>
        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" transition={{ delay:0.2 }} className="text-xl text-gray-300 max-w-4xl mx-auto">
          Explore our recent work in AI, Web Development, Cloud Migrations, and more.
        </motion.p>
      </section>
      {/* Project cards or gallery here */}
    </div>
  );
}