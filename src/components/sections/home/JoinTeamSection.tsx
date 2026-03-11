import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import backgroundVideo from "../../../assets/joinTeamSection-background.mp4"

gsap.registerPlugin(ScrollTrigger)

const JoinTeamSection: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=150%", // Controls total scroll duration for the pin
                    pin: true,
                    scrub: true, // true binds this 1:1 exactly with no 1-second lag delay
                }
            });

            // 2. Animate Content: Slide up directly bound to scroll
            tl.fromTo(contentRef.current,
                {
                    y: "100vh", // Start completely offscreen bottom
                },
                {
                    y: 0,
                    duration: 1,
                    ease: "none", // 1:1 linear progression
                },
                // Overlap with the previous animation - start when scaling is halfway done!
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full flex min-h-screen items-center justify-center overflow-hidden bg-background font-sans">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src={backgroundVideo}
                />
            </div>

            {/* SVG Animation */}


            <div ref={contentRef} className="flex flex-col items-center justify-center w-full min-h-[50vh] p-0.5 relative z-10 bg-transparent ">
                {/* Top details SVG */}
                <div className="w-[80%] lg:w-[60%] overflow-hidden leading-none pointer-events-none translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" preserveAspectRatio="none" viewBox="0 0 1440 179" fill="none" className="hidden md:block w-full">
                        <path d="M605.979 0.190357C610.607 0.190357 615.04 2.0504 618.283 5.35031L651.587 39.2403C654.831 42.5403 659.265 44.3988 663.892 44.3988L1423.3 44.3988C1432.83 44.3988 1440.55 52.1226 1440.55 61.6498L1440.55 178.633L1436.16 178.633L0.30162 178.633L0.301634 20.1911C0.301635 9.14546 9.25598 0.191186 20.3016 0.191171L605.979 0.190357Z" className="fill-background"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" preserveAspectRatio="none" viewBox="0 0 725 118" fill="none" className="block md:hidden w-full">
                        <path d="M259.082 0.629842C263.71 0.629843 268.143 2.48988 271.386 5.7898L304.69 39.6798C307.934 42.9797 312.368 44.8382 316.995 44.8382L712.384 44.8382C719.011 44.8382 724.384 50.2109 724.384 56.8383L724.383 115.001L0.275625 117.123L0.275816 20.6306C0.275878 9.5849 9.2301 0.630655 20.2758 0.630619L259.082 0.629842Z" className="fill-background"></path>
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-center w-[80%] lg:w-[60%] bg-background overflow-hidden leading-none pointer-events-none">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" className="text-hovernavlink w-5 h-5 md:w-6 md:h-6">
                            <g opacity="0.9">
                                <rect x="23.181" y="18.9905" width="6.13043" height="6.13043" transform="rotate(135 23.181 18.9905)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                                <rect x="13.9886" y="9.7981" width="6.13043" height="6.13043" transform="rotate(135 13.9886 9.7981)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                                <rect x="13.8831" y="18.9905" width="6.13043" height="6.13043" transform="rotate(135 13.8831 18.9905)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                                <rect x="23.181" y="9.69238" width="6.13043" height="6.13043" transform="rotate(135 23.181 9.69238)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                            </g>
                        </svg>
                        <h2 className="text-xs md:text-sm font-nobile uppercase tracking-widest text-headline font-nobile font-semibold">Join Our Team</h2>
                    </div>
                    <div className='flex flex-col text-center sm:text-2xl text-4xl wrap-break-word'>
                        <h2>We're building something</h2>
                        <h2>great — and we want</h2>
                        <h2>you to be part of it</h2>
                    </div>
                    <a
                        href="https://localhost/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block w-full mt-4 group transition-all duration-300 pointer-events-auto"
                    >
                        <h2 className="w-full pb-[10%] text-center text-5xl md:text-7xl lg:text-8xl uppercase font-bold text-headline transition-all duration-300">
                            Open Jobs
                        </h2>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default JoinTeamSection
