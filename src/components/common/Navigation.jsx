import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Settings, GraduationCap, Briefcase, Users2, Heart, Mail } from 'lucide-react';
import { navItems } from '../../utils/constants';

const icons = { Globe, Settings, GraduationCap, Briefcase, Users2, Heart, Mail };

export default function Navigation({ current, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 w-full bg-black/10 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => onChange('home')}>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cognivanta</span>
        </div>
        <div className="hidden lg:flex space-x-6">
          {navItems.map(item => {
            const Icon = icons[item.icon];
            return (
              <motion.button
                key={item.id}
                onClick={() => onChange(item.id)}
                className={`flex items-center px-3 py-2 rounded-full transition-all ${
                  current === item.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" /><span className="ml-1 text-sm">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-black/20 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-2">
              {navItems.map(item => {
                const Icon = icons[item.icon];
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => { onChange(item.id); setOpen(false); }}
                    className={`flex items-center w-full px-4 py-3 rounded-xl transition-all ${
                      current === item.id ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'text-gray-300 hover:bg-white/10'
                    }`}
                    whileHover={{ x: 10 }}
                  >
                    <Icon className="w-5 h-5" /><span className="ml-2">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}