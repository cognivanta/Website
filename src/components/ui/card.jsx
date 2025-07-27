import React from 'react';
export default function Card({ children, className }) {
  return <div className={`bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 ${className}`}>{children}</div>;
}