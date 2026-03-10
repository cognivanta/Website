import React, { useState, useEffect, useRef } from 'react'
import video1 from "../../../assets/expertiseSection-video-1.mp4"
import video2 from "../../../assets/expertiseSection-video-2.mp4"
import { sections } from './ExpertiseSectionContent';

const heroContant: string = "Turning  Imagination  into  Innovation  and  Innovation  into  Global  Impact."
const heroDesWords: string[] = heroContant.split(" ")

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col uppercase gap-y-1.5 pb-20 text-center items-center">
      <p className="text-lg md:text-xl font-nobile font-light pb-[1.5rem] tracking-[0.25em] opacity-80">OUR VISION</p>
      <div
        className="md:w-[70%] w-[95%] flex justify-center flex-wrap gap-x-[1rem] uppercase text-4xl
          font-bold"
      >
        {heroDesWords.map((word, index) => {
          // Insert video after specific word (e.g., after "right")
          if (word === "right") {
            return (
              <React.Fragment key={index}>
                <p className="m-0">{word}</p>
                <video
                  src={video1}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="relative h-[3rem] sm:h-[4rem] md:h-[5rem] w-auto object-cover rounded-md"
                />
              </React.Fragment>
            )
          }
          return <p key={index} className="m-0">{word}</p>
        })}

      </div>
    </div>
  )
}


const ServicesScroll: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the index of the visible section and update state
            const target = entry.target as HTMLElement;
            setActiveIndex(Number(target.dataset.index));
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' } // Triggers when section is in the middle 20% of screen
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row bg-background">

      {/* 1. STICKY SIDEBAR */}
      <div className="sticky top-0 h-screen sm:w-full md:w-1/4 flex flex-col justify-center z-10 bg-background">
        <div className='flex flex-col w-[90%] h-[70vh]'>
          {/* Counter */}
          <div className="flex flex-row text-3xl self-start">
            <p>0{activeIndex}/</p>
            <p className="text-lighttext">0{sections.length}</p>
            {/* 0{activeIndex}/0{sections.length} */}
          </div>
          {/* Anchor Links */}
          <div className="hidden md:flex flex-col gap-4 mt-auto mb-[5rem]">
            {sections.map((sec) => (
              <div
                key={sec.id}
                className={`font-nobile transition-opacity duration-300 ${activeIndex === sec.id ? 'opacity-100' : 'opacity-20'}`}
              >
                {sec.title}
              </div>
            ))}
          </div>
          {/* Get In Touch Button */}
          <div className='w-full bg-headline text-text-inverse py-3'>
            <button className='w-full uppercase text-center font-bold'>get in touch</button>
          </div>
        </div>
      </div>

      {/* 2. SCROLLING CONTENT */}
      <div className="w-1/2 relative z-10 pb-[50vh]">
        {sections.map((sec, i) => (
          <div
            key={sec.id}
            data-index={sec.id}
            ref={el => { sectionRefs.current[i] = el; }}
            className="min-h-screen flex flex-col justify-center p-10 border-b-2 border-border"
          >
            <h2 className="text-4xl font-bold uppercase mb-6 text-left">{sec.title}</h2>
            <div className="flex flex-col gap-4 font-nobile text-justify">
              {sec.content.map((paragraph, index) => (
                <p key={index} className="text-xl max-w-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. STICKY BACKGROUND VIDEO */}
      <div className="hidden md:flex justify-center items-center sticky top-0 h-screen w-1/4">
        <video
          src={video2}
          className="w-[90%] h-[70%] object-cover"
          autoPlay loop muted playsInline
        />
      </div>

    </div>
  );
}


const ExpertiseSection: React.FC = () => {

  return (
    <section id="feature" className="relative flex-col w-full min-h-screen font-sans bg-background section-padding">
      <div className="mt-[5rem]">
        <Hero />
      </div>
      <ServicesScroll />



    </section>
  )
}

export default ExpertiseSection