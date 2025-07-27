import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); setFormData({ name: '', email: '', subject: '', message: '' }); setTimeout(() => setSubmitted(false), 3000); }, 1500);
  };

  return (
    <div className="space-y-20 px-6">
      <section className="text-center py-20">
        <motion.h1 initial={{ opacity:0,y:50 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8 }} className="text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </motion.h1>
        <motion.p initial={{ opacity:0,y:30 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8, delay:0.2 }} className="text-xl text-gray-300 max-w-4xl mx-auto">
          Ready to transform your business? Let's start the conversation
        </motion.p>
      </section>
      <section className="lg:grid lg:grid-cols-2 gap-16">
        <motion.div initial={{ opacity:0,x:-50 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.8 }} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
          <AnimatePresence>
            {submitted ? (
              <motion.div initial={{ opacity:0,scale:0.8 }} animate={{ opacity:1,scale:1 }} exit={{ opacity:0,scale:0.8 }} className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <motion.form initial={{ opacity:1 }} exit={{ opacity:0 }} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-white font-semibold mb-2">Name</label><input name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors" placeholder="Your Name" /></div>
                  <div><label className="block text-white font-semibold mb-2">Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors" placeholder="your.email@example.com" /></div>
                </div>
                <div><label className="block text-white font-semibold mb-2">Subject</label><input name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors" placeholder="How can we help?" /></div>
                <div><label className="block text-white font-semibold mb-2">Message</label><textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..." /></div>
                <motion.button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold disabled:opacity-50 transition-all" whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div initial={{ opacity:0,x:50 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.8, delay:0.2 }} className="space-y-8">
          <div><h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            {[
              { icon: <MapPin />, title: 'Address', info: '2010, GBP Crest, Kharar, Mohali' },
              { icon: <Phone />, title: 'Phone', info: '+91 9899478431' },
              { icon: <Mail />, title: 'Email', info: 'info@cognivanta.com' }
            ].map((c,i)=>(
              <div key={i} className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="text-purple-400 mt-1">{c.icon}</div><div><h3 className="text-white font-semibold mb-1">{c.title}</h3><p className="text-gray-300">{c.info}</p></div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3><p className="text-gray-300 mb-6">Schedule a free consultation to discuss your project and explore how we can help transform your business.</p>
            <motion.button className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Schedule Consultation</motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}