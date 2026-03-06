import React from 'react'
import videoTop from "../../../assets/aboutSection-video-1.mp4"
import videoBottom from "../../../assets/aboutSection-video-2.mp4"

const AboutSection: React.FC = () => {
  

  return (
    <section id="about" className="relative w-full min-h-screen font-sans bg-background section-padding">
      <div className="sticky top-0 flex flex-col md:flex-row md:gap-[3rem] items-stretch bg-background
            border-border border-t-2
            py-12"
      >
        <video
          src={videoTop}
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:flex object-cover flex-shrink-0
            md:w-[18rem] md:h-[24rem]
            lg:w-[24rem] lg:h-auto lg:self-stretch"
        />

        <div>
          <div className="uppercase sm:text-4xl text-3xl md:4xl text-left break-words font-semibold">
            <p>Deep Market</p>
            <p>Expertise,</p>
            <p>Real-World Impact.</p>
          </div>
          <div className="font-nobile text-left break-words text-subtext
              sm:text-xl md:4xl font-light
              sm: pt-[2rem]"
          >
            <p>Our team brings to the table, several years of hands-on experience</p>
            <p>across the IT landscape, enabling us to respond quickly and deliver</p>
            <p>practical, high-value solutions.</p>
            <p>We operate with technical excellence, agility, and a strong focus on</p>
            <p>business results.</p>
          </div>
        </div>
      </div>

      <div className="sticky top-0 flex flex-col md:flex-row-reverse md:gap-[3rem] items-stretch bg-background
            border-border border-t-2
            py-12 justify-between"
      >
        <video
          src={videoBottom}
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:flex object-cover flex-shrink-0
            md:w-[18rem] md:h-[24rem]
            lg:w-[24rem] lg:h-auto lg:self-stretch"
        />

        <div>
          <div className="uppercase sm:text-4xl text-3xl md:4xl text-left break-words font-bold">
            <p>Deep Market</p>
            <p>Expertise,</p>
            <p>Real-World Impact.</p>
          </div>
          <div className="font-nobile text-left break-words text-subtext
              sm:text-xl md:4xl font-light
              sm: pt-[2rem]"
          >
            <p>Our team brings to the table, several years of hands-on experience</p>
            <p>across the IT landscape, enabling us to respond quickly and deliver</p>
            <p>practical, high-value solutions.</p>
            <p>We operate with technical excellence, agility, and a strong focus on</p>
            <p>business results.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection