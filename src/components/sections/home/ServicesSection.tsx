import React from 'react'
import { servicesData, type ServiceData } from './ServicesSectionContent'

const getThemeClasses = (theme: string, prevTheme?: string) => {
    let bgContent = ''
    let textColor = ''
    let waveColor = ''
    let prevWaveBg = ''

    if (theme === 'dark') {
        bgContent = 'bg-headline'
        textColor = 'text-text-inverse'
        waveColor = 'text-headline'
    } else if (theme === 'brand') {
        bgContent = 'bg-hovernavlink'
        textColor = 'text-text-inverse'
        waveColor = 'text-hovernavlink'
    } else {
        bgContent = 'bg-background'
        textColor = 'text-headline'
        waveColor = 'text-background'
    }

    // Determine previous background for the SVG container to make a seamless wave
    if (prevTheme === 'dark') prevWaveBg = 'bg-headline'
    else if (prevTheme === 'brand') prevWaveBg = 'bg-hovernavlink'
    else prevWaveBg = 'bg-background'

    return { bgContent, textColor, waveColor, prevWaveBg }
}

const WaveSVG = ({ waveColor, flip = false }: { waveColor: string, prevWaveBg?: string, flip?: boolean }) => (
    <div className={`w-full flex flex-col overflow-hidden leading-none shrink-0 bg-transparent ${waveColor} -mt-px -mb-px ${flip ? '-scale-x-100' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 179" fill="none" className="hidden md:block w-full">
            <path d="M605.979 0.190357C610.607 0.190357 615.04 2.0504 618.283 5.35031L651.587 39.2403C654.831 42.5403 659.265 44.3988 663.892 44.3988L1423.3 44.3988C1432.83 44.3988 1440.55 52.1226 1440.55 61.6498L1440.55 178.633L1436.16 178.633L0.30162 178.633L0.301634 20.1911C0.301635 9.14546 9.25598 0.191186 20.3016 0.191171L605.979 0.190357Z" fill="currentColor"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 725 118" fill="none" className="block md:hidden w-full">
            <path d="M259.082 0.629842C263.71 0.629843 268.143 2.48988 271.386 5.7898L304.69 39.6798C307.934 42.9797 312.368 44.8382 316.995 44.8382L712.384 44.8382C719.011 44.8382 724.384 50.2109 724.384 56.8383L724.383 115.001L0.275625 117.123L0.275816 20.6306C0.275878 9.5849 9.2301 0.630655 20.2758 0.630619L259.082 0.629842Z" fill="currentColor"></path>
        </svg>
    </div>
)

interface ServiceCardProps {
    data: ServiceData;
    index: number;
    totalCount: number;
    prevTheme?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data, index, totalCount, prevTheme }) => {
    const { bgContent, textColor, waveColor, prevWaveBg } = getThemeClasses(data.theme, prevTheme)
    const isLastSection = index === totalCount - 1

    const displayId = (index + 1).toString().padStart(2, '0');
    const displayTotal = totalCount.toString().padStart(2, '0');

    return (
        <section key={data.id} className="sticky min-h-screen w-full flex flex-col overflow-hidden" style={{ top: `${(index + 1) * 0.5}rem` }}>
            <WaveSVG waveColor={waveColor} prevWaveBg={prevWaveBg} flip={index % 2 !== 0} />

            {/* The outer div has the background colors and takes up the remaining height */}
            <div className={`${bgContent} ${textColor} -mt-0.5 w-full flex-grow flex flex-col items-center z-10 overflow-hidden`}>

                {/* Inner container limits width to 1440px and adds padding/centering */}
                <div className="section-padding w-full h-full flex flex-col justify-start pb-12 sm:pb-24 overflow-y-auto">
                    {/* Tags Row */}
                    <div className="flex flex-row items-center uppercase font-semibold text-[0.65rem] sm:text-xs tracking-widest mb-6 lg:mb-12 w-full shrink-0">
                        <div className="px-3 py-1 border border-current rounded-full whitespace-nowrap">Service Model</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29 28" fill="none" className="opacity-70 mx-2 shrink-0">
                            <g>
                                <rect x="18.8486" y="5.14191" width="6.13043" height="6.13043" transform="rotate(45 18.8486 5.14191)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                                <rect x="9.65625" y="14.3343" width="6.13043" height="6.13043" transform="rotate(45 9.65625 14.3343)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                                <rect x="18.8486" y="14.4399" width="6.13043" height="6.13043" transform="rotate(45 18.8486 14.4399)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                                <rect x="9.5498" y="5.14191" width="6.13043" height="6.13043" transform="rotate(45 9.5498 5.14191)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                            </g>
                        </svg>
                        <div className="px-3 py-1 border border-current rounded-full truncate">{data.tag}</div>
                        <div className="ml-auto flex flex-row font-medium pl-4 shrink-0">
                            <span>{displayId}</span>
                            <span className="mx-1">/</span>
                            <span className="opacity-50">{displayTotal}</span>
                        </div>
                    </div>

                    {/* Title Section */}
                    <div className="mb-6 lg:mb-12 shrink-0">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold uppercase mb-4 flex flex-wrap items-center gap-x-4 gap-y-3 leading-none">
                            <span>{data.title1}</span>
                            {data.video != "" && (
                                <video
                                    className="w-24 sm:w-32 md:w-40 lg:w-[12rem] h-10 sm:h-12 md:h-16 lg:h-[4rem] object-cover rounded-full"
                                    src={data.video}
                                    autoPlay loop muted playsInline
                                />
                            )}
                            {/* placeholder for video to have gap between title1 and title2 */}
                            {data.video == "" && (
                                <div className="w-24 sm:w-32 md:w-40 lg:w-[12rem] h-10 sm:h-12 md:h-16 lg:h-[4rem] object-cover rounded-full"></div>
                            )}
                            <span>{data.title2}</span>
                        </h2>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase max-w-3xl opacity-90 leading-snug">{data.subtitle}</h3>
                    </div>

                    {/* Two Column details with icon */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 items-start w-full shrink-0">
                        {/* SVG Icon Square */}
                        <div className="hidden md:flex shrink-0 items-center justify-center opacity-70 w-16 h-16 lg:w-20 lg:h-20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 69 69" fill="none" className="w-[69px] h-[69px] text-current">
                                <g opacity="0.7">
                                    <rect x="68" y="67.5948" width="22.1982" height="22.1982" transform="rotate(180 68 67.5948)" stroke="currentColor" fill="none"></rect>
                                    <rect x="45.8018" y="45.3966" width="22.1982" height="22.1982" transform="rotate(180 45.8018 45.3966)" stroke="currentColor" fill="none"></rect>
                                    <rect x="68" y="23.1982" width="22.1982" height="22.1982" transform="rotate(180 68 23.1982)" stroke="currentColor" fill="none"></rect>
                                    <rect x="23.6035" y="23.1984" width="22.1982" height="22.1982" transform="rotate(180 23.6035 23.1984)" stroke="currentColor" fill="none"></rect>
                                </g>
                            </svg>
                        </div>

                        {/* Text cols */}
                        <div className="flex-1 font-nobile text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">
                            <p>{data.desc1}</p>
                        </div>
                        <div className="flex-1 font-nobile text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">
                            <p>{data.desc2}</p>
                        </div>
                    </div>

                    {/* Conditionally render the big GET IN TOUCH link on the last section */}
                    {isLastSection && (
                        <div className="mt-8 md:mt-16 w-full shrink-0">
                            <a href="/contact" className="inline-block group transition-all duration-300">
                                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-bold tracking-tight border-b-4 lg:border-b-8 border-transparent group-hover:border-current pb-2 transition-all duration-300">
                                    GET IN TOUCH
                                </h2>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

const ServicesSection: React.FC = () => {
    return (
        <div id="services" className="w-full flex flex-col font-sans relative">
            {servicesData.map((data, index) => (
                <ServiceCard
                    key={data.id}
                    data={data}
                    index={index}
                    totalCount={servicesData.length}
                    prevTheme={index > 0 ? servicesData[index - 1].theme : undefined}
                />
            ))}
        </div>
    )
}

export default ServicesSection
