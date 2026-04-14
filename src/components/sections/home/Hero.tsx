import React from 'react'
import subtextVideo from "../../../assets/heroSubtextHomePage.webm"
import video1 from '../../../assets/hero-Homepage-video-1.webm'
import video2 from '../../../assets/hero-Homepage-video-2.webm'
import heroSvg from '../../../assets/hero.svg'

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-background flex flex-col md:justify-between py-6 sm:py-10 section-padding">
      <img src={heroSvg} alt="" className='absolute z-0  w-[50%] h-[50%] opacity-60 mt-8 rotate-25' />

      {/* hero top text */}
      <div className="relative flex flex-col">
        {/* "we are Cognivanta" label */}
        <div className="font-nobile text-xs sm:text-sm xl:text-xs tracking-widest uppercase mb-4 sm:mb-6">
          BEYOND CODE. COGNIVANTA.
        </div>

        {/* Main headline */}
        <div
          className="flex flex-col font-semibold uppercase text-right
            text-4xl md:text-7xl
            text-[#1F1D1E]"
        >
          {/* Row 1: "we [video] Design" */}
          <div className="flex flex-row items-baseline justify-end gap-2 sm:gap-4">
            <video
              src={video1}
              autoPlay
              muted
              loop
              playsInline
              className="rounded-[1.5rem] sm:rounded-[3rem]
                h-[clamp(2rem,4vw+1rem,8.75rem)]
                w-auto object-cover self-center"
            />
            <p>Modern IT</p>
          </div>

          {/* Row 2: "Smart software" */}
          <div className="flex flex-row justify-end">
            <p>Solutions</p>
          </div>
          <div className="flex flex-row justify-end">
            <p>Built Around</p>
          </div>
          {/* Row 3: "for [video] impact" */}
          <div className="flex flex-row items-baseline justify-end gap-2 sm:gap-4">
            <video
              src={video2}
              autoPlay
              muted
              loop
              playsInline
              className="rounded-[1.5rem] sm:rounded-[3rem]
                h-[clamp(2rem,4vw+1rem,8.75rem)]
                w-auto object-cover self-center"
            />
            <p>People</p>
          </div>
        </div>
      </div>

      {/* hero bottom: description + video */}
      <div className="sticky top-10 flex flex-col-reverse sm:flex-row md:flex-row-reverse items-start sm:items-center justify-between gap-6 mt-16 sm:mt-0 md:mt-0 z-10 md:pt-16 sm:pt-0 md:pt-0 md:pt-0 pb-24">

        {/* Subtext video */}
        {/* Sticky video wrapper */}
        <div className="md:w-[32rem] md:top-24 md:self-start">
          <video
            src={subtextVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto sm:w-[60%] sm:h-[70px] md:w-[32rem] md:h-[18rem] object-cover flex-shrink-0"
          />
        </div>

        {/* Description text */}
        <div className="font-nobile flex flex-col gap-1 w-full sm:w-[35%] md:w-[40%] text-sm text-subtext sm:text-right md:text-justify leading-[1.5]">

          <p>
            At Cognivanta, we empower organizations with next-generation technology solutions that drive transformation, enhance operational excellence, and create sustainable competitive advantage.
          </p>
          <p>
            We design and develop bespoke software solutions that streamline complex processes, optimize resources, reduce costs, and unlock new growth opportunities.
          </p>
          <p>
            Our commitment is not just to deliver software — but to deliver measurable business impact.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default Hero