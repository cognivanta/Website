import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa"
import AnimatedText from "../../text/AnimatedText"

const FooterRight: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="flex-1 flex flex-col">

      <div className="w-full">
        <AnimatedText
          text="GET IN TOUCH"
          onClick={() => navigate('/contact')}
          className="cursor-pointer font-light tracking-wide text-gray-200"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3.75rem)' }}
        />

        <div className="w-full font-nobile flex flex-wrap gap-y-6 pt-4">
          <div className="w-1/2 sm:flex-1 flex flex-col gap-2 text-sm text-gray-400">
            <h1>Sco 72, First Floor</h1>
            <h1>Modern City Plaza</h1>
            <h1>Kharar, Punjab</h1>
            <h1>India 140301</h1>
          </div>
          <div className="w-1/2 sm:flex-1 flex flex-col gap-2 text-sm text-gray-400">
            <h1 onClick={() => navigate('/#services')} className='cursor-pointer'>Services</h1>
            <h1 onClick={() => navigate('/#about')} className='cursor-pointer'>About us</h1>
            <h1 onClick={() => navigate('/careers')} className='cursor-pointer'>Careers</h1>
            <h1 onClick={() => navigate('/contact')} className='cursor-pointer'>Contact us</h1>
          </div>
          <div className="w-full sm:flex-1 flex flex-row sm:justify-end items-end gap-4 text-xl text-gray-400">
            <a href="https://www.linkedin.com/in/cognivanta-technologies-834178364/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-white transition cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575358813487" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-white transition cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/cognivanta_technologies/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white transition cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

    </div>

  )
}

const FooterLeft: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-10 font-semibold tracking-tight text-white">
          Cognivanta
        </h2>

        <p className="text-sm text-gray-400">At Cognivanta, we don’t just deliver services –</p>
        <p className="text-sm text-gray-400">we create relationships that stand the test of time.</p>
      </div>
    </div>
  )
}

const Footer: React.FC = () => {

  return (
    <footer className="w-full bg-black text-gray-300">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full px-6 sm:px-9 py-10">

        <FooterLeft />

        <FooterRight />

      </div>
      <div className="w-full text-center text-sm text-gray-500 pb-6">
        © {new Date().getFullYear()} Cognivanta. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer