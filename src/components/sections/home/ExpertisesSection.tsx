import React from 'react'
import video1 from "../../../assets/expertiseSection-video-1.mp4"
import video2 from "../../../assets/expertiseSection-video-2.mp4"

const heroContant: string = "we have the right solution for you"
var heroDesWords: string[] = heroContant.split(" ")

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col uppercase gap-y-1.5 pb-20 text-center items-center">
      <p className=" text-sm font-nobile font-light pb-[1rem]">experties</p>
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

const ExpertisesSection: React.FC = () => {

  return (
    <section id="feature" className="relative flex-col w-full min-h-screen font-sans bg-background section-padding">
      <Hero />
    </section>
  )
}

export default ExpertisesSection