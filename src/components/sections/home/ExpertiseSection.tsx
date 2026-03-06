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

const ExpertiseSection: React.FC = () => {

  return (
    <section id="feature" className="relative flex-col w-full min-h-screen font-sans bg-background section-padding">
      <div className="mt-[5rem]">
        <Hero />

      </div>


      <div className="flex flex-col md:flex-row w-full min-h-screen">
        {/* side bar */}
        <div className="sticky bg-red-500 w-full md:w-[25%] hidden md:block">
          <div className="flex flex-col w-full h-full text-left">
            <div className="self-start">
              01/05
            </div>

            <div className="">
              <p>text 1 11</p>
              <p>text 1 11</p>
              <p>text 1 11</p>
              <p>text 1 11</p>
              <p>text 1 11</p>
            </div>

            <div className="self-end">
              Get in Touch
            </div>

          </div>
        </div>

        {/* list */}
        <div className="flex bg-green-500 w-full md:w-[50%] min-h-[50vh]">
          j
        </div>

        {/* sticky image */}
        <div className="sticky items-center w-full md:w-[25%] h-[50vh] md:h-screen">
          <div className="flex items-center justify-center w-full h-full">
            <video
              src={video2}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[70%]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default ExpertiseSection