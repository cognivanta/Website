import React from 'react'
import subtextVideo from "../../../assets/heroSubtextHomePage.mp4"
import video1 from '../../../assets/hero-Homepage-video-1.mp4'
import video2 from '../../../assets/hero-Homepage-video-2.mp4'

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-background flex flex-col lg:justify-between py-6 sm:py-10 section-padding">

      {/* hero top text */}
      <div className="relative flex flex-col">
        {/* "we are Cognivanta" label */}
        <div className="font-nobile text-xs sm:text-sm tracking-widest uppercase text-[#1F1D1E]/60 mb-4 sm:mb-6">
          we are Cognivanta
        </div>

        {/* Main headline */}
        <div
          className="flex flex-col font-semibold uppercase text-right
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
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
      <div className="sticky top-10 flex flex-col-reverse sm:flex-row lg:flex-row-reverse items-start sm:items-center justify-between gap-6 mt-16 sm:mt-0 lg:mt-0 z-10 lg:pt-16 sm:pt-0 md:pt-0 lg:pt-0 pb-24">

        {/* Subtext video */}
        {/* Sticky video wrapper */}
        <div className="lg:w-[32rem] lg:top-24 lg:self-start">
          <video
            src={subtextVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto sm:w-[60%] sm:h-[70px] lg:w-[32rem] lg:h-[18rem] object-cover flex-shrink-0"
          />
        </div>

        {/* Description text */}
        <div className="font-nobile flex flex-col gap-1 w-full sm:w-[35%] lg:w-[40%] text-lg sm:text-lg text-subtext sm:text-right lg:text-left leading-[1.5]">

          <p>
            At <b>Cognivanta</b>, we empower organizations with <b>next-generation technology solutions</b> that drive transformation, enhance operational excellence, and create sustainable competitive advantage.
          </p>
          <p>
            We design and develop <b>bespoke software solutions</b> that streamline complex processes, optimize resources, reduce costs, and unlock new growth opportunities.
          </p>
          <p>
            Our commitment is not just to deliver software — but to <b>deliver measurable business impact</b>.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default Hero