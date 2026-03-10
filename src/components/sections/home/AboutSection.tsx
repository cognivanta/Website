import React from 'react'
import { aboutSections } from './AboutSectionContent'

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full min-h-screen font-sans bg-background section-padding">
      {aboutSections.map((section, index) => (
        <AboutCard key={section.id} data={section} index={index} />
      ))}
    </section>
  )
}

interface AboutCardProps {
  data: {
    videoSrc: string;
    title: string[];
    description: string[];
  };
  index: number;
}

const AboutCard: React.FC<AboutCardProps> = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={
      isEven
        ? "sticky top-0 flex flex-col md:flex-row md:gap-[3rem] items-stretch bg-background border-border border-t-2 py-12"
        : "sticky top-0 flex flex-col md:flex-row-reverse md:gap-[3rem] items-stretch bg-background border-border border-t-2 py-12 justify-between"
    }>
      <video
        src={data.videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:flex object-cover flex-shrink-0
          md:w-[18rem] md:h-[24rem]
          lg:w-[24rem] lg:h-auto lg:self-stretch"
      />

      <div>
        <div className="uppercase sm:text-4xl text-3xl md:4xl text-center break-words font-semibold">
          {data.title.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <div className="font-nobile text-left break-words text-subtext
            sm:text-xl md:4xl font-light
            sm: pt-[2rem]"
        >
          {data.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutSection