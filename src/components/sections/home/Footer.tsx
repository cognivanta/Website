import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaMapPin } from 'react-icons/fa'
import logoFooter from '../../../assets/logo-footer.svg'
import { FaLocationDot } from 'react-icons/fa6'

const PinIcon = () => (
  <svg className="shrink-0 mt-0.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)


const capabilities = [
  'AI & Data',
  'Software Development',
  'Infrastructure Management',
  'AI Opportunities Assessment',
  'Technical Debt Assessment',
]

const Footer: React.FC = () => {
  const navigate = useNavigate()
  const lenis = useLenis()

  const handleNavClick = (to: string) => {
    if (to.startsWith('/#')) {
      const sectionId = to.substring(2)
      if (window.location.pathname === '/') {
        const element = document.getElementById(sectionId)
        if (element) lenis?.scrollTo(element, { offset: -80 })
      } else {
        navigate('/', { state: { scrollTo: sectionId } })
      }
    } else {
      navigate(to)
    }
  }

  return (
    <footer className="w-full bg-black text-gray-300">

      {/* ── main 4-column grid ─────────────────────────────────── */}
      <div className="w-full px-8 sm:px-12 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* Col 1 — Our Capabilities */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-xs font-semibold uppercase tracking-widest mb-2">
            Our Capabilities
          </p>
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-default leading-snug"
            >
              {cap}
            </span>
          ))}
        </div>

        {/* Col 2 — About / Quick Links */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-xs font-semibold uppercase tracking-widest mb-2">
            Cognivanta
          </p>
          {[
            { label: 'About Us', to: '/#about' },
            { label: 'Services', to: '/#services' },
            { label: 'Careers', to: '/careers' },
            { label: 'Contact Us', to: '/contact' },
          ].map(({ label, to }) => (
            <span
              key={label}
              onClick={() => handleNavClick(to)}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer w-fit"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Col 3 — Offices + social icons */}
        <div className="flex flex-col gap-4">
          <p className="text-white text-xs font-semibold uppercase tracking-widest mb-1">
            Our Offices
          </p>

          {/* India */}
          <a className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 flex items-center justify-center shrink-0 border border-gray-700 rounded-full group-hover:border-white transition-all">
                <FaLocationDot size={12} />
              </span>
              Sco 72, First Floor, Modern City Plaza, Kharar, Punjab, India
            </div>
          </a>
          {/* Phone */}
            <a href="tel:+916239673214" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
              <span className="w-7 h-7 flex items-center justify-center shrink-0 border border-gray-700 rounded-full group-hover:border-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l1-1.01a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              +91 62396 73214
            </a>

          {/* Belgium */}
          <a className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
            <span className="w-7 h-7 flex items-center justify-center shrink-0 border border-gray-700 rounded-full group-hover:border-white transition-all">
              <FaLocationDot size={12} />
            </span>
            Vandijckstraat 1, Oostende, 8400, Belgium, France, Europe
          </a>

          {/* Phone */}
            <a href="tel:+32485555918" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
              <span className="w-7 h-7 flex items-center justify-center shrink-0 border border-gray-700 rounded-full group-hover:border-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l1-1.01a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              +32 485 55 59 18
            </a>

          {/* Contact + Social rows */}
          <div className="flex flex-col gap-2.5 mt-2">

            {/* Email */}
            <a href="mailto:hr.cognivanta@gmail.com" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
              <span className="w-7 h-7 flex items-center justify-center shrink-0 border border-gray-700 rounded-full group-hover:border-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" />
                </svg>
              </span>
              hr.cognivanta@gmail.com
            </a>

            

            {/* <a href="https://www.linkedin.com/in/cognivanta-technologies-834178364/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
              <span className="w-7 h-7 flex items-center justify-center shrink-0 border border-gray-700 rounded-full group-hover:border-white transition-all">
                <FaLinkedinIn size={12} />
              </span>
              linkedin.com/cognivanta
            </a>

            <a href="https://www.facebook.com/profile.php?id=61575358813487" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
              <span className="w-7 h-7 flex items-center justify-center shrink-0 border border-gray-700 rounded-full group-hover:border-white transition-all">
                <FaFacebookF size={12} />
              </span>
              facebook.com/cognivanta
            </a>

            <a href="https://www.instagram.com/cognivanta_technologies/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
              <span className="w-7 h-7 flex items-center justify-center shrink-0 border border-gray-700 rounded-full group-hover:border-white transition-all">
                <FaInstagram size={12} />
              </span>
              instagram.com/cognivanta_technologies
            </a> */}

            <div className='flex flex-col'>
              {/* <p className='text-sm text-gray-400 hover:text-white transition-colors group'>Follow us on</p> */}
              <div className='flex gap-6'>
                <a href="https://www.linkedin.com/in/cognivanta-technologies-834178364/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
                  <span className="w-9 h-9 flex items-center justify-center shrink-0 border border-gray-700 rounded-full group-hover:border-white transition-all">
                    <FaLinkedinIn size={18} />
                  </span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61575358813487" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
                  <span className="w-9 h-9 flex items-center justify-center shrink-0 border border-gray-700 rounded-full group-hover:border-white transition-all">
                    <FaFacebookF size={18} />
                  </span>
                </a>
                <a href="https://www.instagram.com/cognivanta_technologies/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
                  <span className="w-9 h-9 flex items-center justify-center shrink-0 border border-gray-700 rounded-full group-hover:border-white transition-all">
                    <FaInstagram size={18} />
                  </span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Col 4 — Logo + tagline */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-start gap-4">
            <img
              src={logoFooter}
              alt="Cognivanta"
              className="w-36 sm:w-40 object-contain"
            />
            <p className="text-3xl  justify-center text-gray-300 font-medium tracking-wide">
              Cognivanta
            </p>
          </div>
        </div>


      </div>

      {/* ── bottom bar ─────────────────────────────────────────── */}
      <div className="border-t border-gray-800 px-8 sm:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Cognivanta Technologies. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span
            onClick={() => navigate('/contact')}
            className="hover:text-gray-300 transition-colors cursor-pointer"
          >
            Contact
          </span>
          <span
            onClick={() => navigate('/careers')}
            className="hover:text-gray-300 transition-colors cursor-pointer"
          >
            Careers
          </span>
        </div>
      </div>

    </footer>
  )
}

export default Footer