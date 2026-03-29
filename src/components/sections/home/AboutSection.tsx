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
      <div className='hidden lg:flex h-full self-end'>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" fill="none" className="decor-tesseract">
          <g stroke="#7467FF" strokeLinejoin="round">
            <polygon points="15,15 85,15 85,85 15,85" strokeWidth="2" />
            <polygon points="35,35 65,35 65,65 35,65" strokeWidth="1.5" />
            <polygon points="43,43 57,43 57,57 43,57" strokeWidth="1" opacity="0.6" />
            <line x1="15" y1="15" x2="35" y2="35" strokeWidth="1.5" />
            <line x1="85" y1="15" x2="65" y2="35" strokeWidth="1.5" />
            <line x1="85" y1="85" x2="65" y2="65" strokeWidth="1.5" />
            <line x1="15" y1="85" x2="35" y2="65" strokeWidth="1.5" />
            <line x1="50" y1="15" x2="50" y2="35" strokeDasharray="2 4" strokeWidth="1.5" opacity="0.7" />
            <line x1="50" y1="85" x2="50" y2="65" strokeDasharray="2 4" strokeWidth="1.5" opacity="0.7" />
            <line x1="15" y1="50" x2="35" y2="50" strokeDasharray="2 4" strokeWidth="1.5" opacity="0.7" />
            <line x1="85" y1="50" x2="65" y2="50" strokeDasharray="2 4" strokeWidth="1.5" opacity="0.7" />
            <circle cx="50" cy="50" r="3" fill="#7467FF" stroke="none" />
          </g>
        </svg>


      </div>
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
        <div className="uppercase sm:text-4xl text-3xl md:4xl text-center break-words font-semibold text-left">
          {data.title.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <div className="font-nobile text-justify break-words text-subtext
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