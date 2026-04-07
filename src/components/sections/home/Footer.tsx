import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa"
import AnimatedText from "../../text/AnimatedText"

const FooterRight: React.FC = () => {
  const navigate = useNavigate()
  return (
    < div className="flex-1 flex flex-col wrap-normal" >

      <div className="w-fit">
        <AnimatedText
          text="GET IN TOUCH"
          onClick={() => navigate('/contact')}
          className="cursor-pointer text-4xl lg:text-6xl font-light tracking-wide text-gray-200"
        />

        <div className="w-full font-nobile flex flex-row pt-2">
          <div className="flex-1 flex flex-col sm:gap-2 md:gap-2 text-sm text-gray-400">
            <h1>Sco 72, First Floor</h1>
            <h1>Modern City Plaza</h1>
            <h1>Kharar, Punjab</h1>
            <h1>India 140301</h1>
          </div>
          <div className="flex-1 flex flex-col items-center sm:gap-2 md:gap-2 text-sm text-gray-400">
            <div className='flex flex-col gap-2'>
              <h1 onClick={() => navigate('/#services')} className='cursor-pointer'>Services</h1>
              <h1 onClick={() => navigate('/#about')} className='cursor-pointer'>About us</h1>
              <h1 onClick={() => navigate('/careers')} className='cursor-pointer'>Careers</h1>
              <h1 onClick={() => navigate('/contact')} className='cursor-pointer'>Contact us</h1>
            </div>
          </div>
          <div className="flex-1 flex flex-row justify-end items-end sm:gap-2 md:gap-2 text-xl text-gray-400">
            <FaLinkedinIn className="hover:text-white transition cursor-pointer" />
            <FaFacebookF className="hover:text-white transition cursor-pointer" />
            <FaInstagram className="hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>

    </div >

  )
}

const FooterLeft: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col wrap-normal">
      <div className="w-fit">
        <h2 className="text-6xl mb-10 font-semibold tracking-tight text-white">
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
    <footer className=" w-full bg-black text-gray-300">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-4 w-full p-9">

        <FooterLeft />

        <FooterRight />

        {/* Footer Bottom */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center mt-40 gap-8">
          <div className="text-sm text-gray-500">
            COGNIVANTA© 2025
          </div>
        </div> */}

      </div>
      <div className="w-full items-center text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Cognivanta. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer