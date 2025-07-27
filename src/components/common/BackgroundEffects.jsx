import React from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../../hooks/useMousePosition';

export default function BackgroundEffects() {
  const { x, y } = useMousePosition();
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
      <motion.div
        className="absolute w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-50"
        animate={{ x: x - 16, y: y - 16 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
    </div>
  );
}