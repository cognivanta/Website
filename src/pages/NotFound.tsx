import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import NavBar from '../components/navigation/NavBar'
import Footer from '../components/sections/home/Footer'

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = wrapperRef.current?.children
      if (!children) return

      gsap.fromTo(
        Array.from(children),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
        }
      )
    }, wrapperRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="h-full w-full bg-background overflow-x-clip flex flex-col min-h-screen">
      <NavBar />

      {/* Main content — vertically centred, fits one viewport */}
      <main className="flex-1 flex flex-col items-center justify-center section-padding py-16 text-center">
        <div ref={wrapperRef} className="flex flex-col items-center gap-4">

          {/* Brand label */}
          <p className="font-nobile text-xs sm:text-sm tracking-widest uppercase text-lighttext">
            BEYOND CODE. COGNIVANTA.
          </p>

          {/* Large faint 404 — in-flow so it never overlaps */}
          <div
            className="select-none font-semibold leading-none text-[clamp(5rem,12vw,10rem)] text-headline opacity-[0.08] pointer-events-none"
            aria-hidden="true"
          >
            404
          </div>

          {/* Headline */}
          <h1 className="font-semibold uppercase text-headline text-4xl md:text-6xl leading-tight -mt-2">
            Page Not Found
          </h1>

          {/* Sub-copy */}
          <p className="font-nobile text-subtext text-base sm:text-lg max-w-sm sm:max-w-md leading-relaxed">
            Looks like you've wandered into uncharted territory. The page you're
            looking for doesn't exist — but we've got plenty of&nbsp;
            <b>modern IT solutions</b> waiting for you back home.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={() => navigate('/')}
              className="cursor-pointer px-8 py-3 bg-headline text-text-inverse font-nobile text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
            >
              Back to Home
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="cursor-pointer px-8 py-3 border border-headline text-headline font-nobile text-sm tracking-widest uppercase hover:bg-headline hover:text-text-inverse transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound
