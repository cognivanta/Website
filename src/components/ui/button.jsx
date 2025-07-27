import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, onClick, className, ...props }) {
  return (
    <motion.button onClick={onClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-4 py-2 rounded-xl font-semibold ${className}`} {...props}>
      {children}
    </motion.button>
  );
}