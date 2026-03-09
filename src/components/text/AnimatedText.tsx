import { useRef } from "react"
import { gsap } from "gsap"

export const AnimatedText = ({ text, className }) => {
  const textRef = useRef(null)

  const handleEnter = () => {
    const letters = textRef.current.querySelectorAll("span")

    gsap.to(letters, {
      y: -10,
      opacity: 0,
      stagger: 0.03,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        gsap.fromTo(
          letters,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.03,
            duration: 0.3,
            ease: "power2.out"
          }
        )
      }
    })
  }

  return (
    <div
      ref={textRef}
      onMouseEnter={handleEnter}
      className={`inline-block overflow-hidden cursor-pointer ${className}`}
    >
      {text.split("").map((letter, i) => (
        <span key={i} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  )
}

export default AnimatedText;