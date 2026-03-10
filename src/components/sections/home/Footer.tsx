import React, { type FormEvent, useState } from 'react'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaArrowRight } from "react-icons/fa"
import AnimatedText from "../../text/AnimatedText"

const Footer: React.FC = () => {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    // Mock subscription handling
    setEmail("")
  }

  return (
    <footer className="w-full bg-[#0a0a0a] text-gray-300 font-sans border-t border-white/5 relative overflow-hidden">
      {/* Premium subtle gradient glow in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-hovernavlink/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-12 relative z-10">

        {/* Top Section - Let's Work Together */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-tight">
              Let's create something <br />
              <span className="italic text-gray-400 font-light">extraordinary.</span>
            </h2>
          </div>
          <button className="group flex items-center gap-4 text-xl md:text-2xl text-white border-b border-white/30 pb-2 hover:border-hovernavlink transition-colors duration-300 cursor-pointer">
            <span>Get in touch</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-hovernavlink transition-all duration-300 transform group-hover:translate-x-2">
              <FaArrowRight className="text-sm" />
            </div>
          </button>
        </div>

        <div className="h-px bg-white/10 w-full mb-20"></div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">

          {/* Brand & Description */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-white mb-6">
                cognivanta
              </h3>
              <p className="text-base leading-relaxed text-gray-400 max-w-sm">
                At Cognivanta, we don’t just deliver services –
                we create relationships that stand the test of time, driven by innovation and excellence.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <AnimatedText text="NAVIGATION" className="text-xs tracking-[0.2em] text-gray-500 mb-8 block" />
            <ul className="flex flex-col gap-4 text-base">
              {['Home', 'Services', 'Our Work', 'About Us', 'Careers'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-hovernavlink transition-colors duration-300 inline-block relative group">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-hovernavlink transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedText text="CONTACT" className="text-xs tracking-[0.2em] text-gray-500 mb-8 block" />
            <ul className="flex flex-col gap-4 text-base text-gray-400">
              <li>
                <a href="mailto:contact@cognivanta.com" className="hover:text-white transition-colors duration-300">
                  contact@cognivanta.com
                </a>
              </li>
              <li>
                <a href="tel:+919853694032" className="hover:text-white transition-colors duration-300">
                  +91 98536 94032
                </a>
              </li>
              <li className="mt-2 text-sm leading-relaxed">
                Shivjot, Kharar<br />
                Mohali Distict<br />
                Punjab, 140301
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <AnimatedText text="NEWSLETTER" className="text-xs tracking-[0.2em] text-gray-500 mb-8 block" />
            <p className="text-sm text-gray-400 mb-6">
              Subscribe to our newsletter for insights, news, and updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#7467FF] hover:border-white/30 transition-colors duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-[#7467FF] hover:text-white rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Cognivanta. All rights reserved.
          </div>

          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-hovernavlink transform hover:-translate-y-1 transition-all duration-300">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="hover:text-hovernavlink transform hover:-translate-y-1 transition-all duration-300">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-hovernavlink transform hover:-translate-y-1 transition-all duration-300">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-hovernavlink transform hover:-translate-y-1 transition-all duration-300">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer