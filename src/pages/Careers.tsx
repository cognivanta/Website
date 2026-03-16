import React, { useState } from 'react'
import NavBar from '../components/navigation/NavBar'
import Footer from '../components/sections/home/Footer'
import { useNavigate } from 'react-router-dom'
import { jobs, type JobListing } from '../components/sections/careers/CareersSectionContent'

// ─── Diamond SVG icon (same as JoinTeamSection) ───────────────────────────────
const DiamondIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" className={`w-5 h-5 md:w-6 md:h-6 ${className}`}>
        <g opacity="0.9">
            <rect x="23.181" y="18.9905" width="6.13043" height="6.13043" transform="rotate(135 23.181 18.9905)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272" />
            <rect x="13.9886" y="9.7981" width="6.13043" height="6.13043" transform="rotate(135 13.9886 9.7981)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272" />
            <rect x="13.8831" y="18.9905" width="6.13043" height="6.13043" transform="rotate(135 13.8831 18.9905)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272" />
            <rect x="23.181" y="9.69238" width="6.13043" height="6.13043" transform="rotate(135 23.181 9.69238)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272" />
        </g>
    </svg>
)

// ─── Wave SVG (same shape as ServicesSection / JoinTeamSection) ───────────────
const WaveTop: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div className={`w-full flex flex-col overflow-hidden leading-none shrink-0 -mt-px -mb-px ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 179" fill="none" className="hidden md:block w-full">
            <path d="M605.979 0.190357C610.607 0.190357 615.04 2.0504 618.283 5.35031L651.587 39.2403C654.831 42.5403 659.265 44.3988 663.892 44.3988L1423.3 44.3988C1432.83 44.3988 1440.55 52.1226 1440.55 61.6498L1440.55 178.633L1436.16 178.633L0.30162 178.633L0.301634 20.1911C0.301635 9.14546 9.25598 0.191186 20.3016 0.191171L605.979 0.190357Z" fill="currentColor" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 725 118" fill="none" className="block md:hidden w-full">
            <path d="M259.082 0.629842C263.71 0.629843 268.143 2.48988 271.386 5.7898L304.69 39.6798C307.934 42.9797 312.368 44.8382 316.995 44.8382L712.384 44.8382C719.011 44.8382 724.384 50.2109 724.384 56.8383L724.383 115.001L0.275625 117.123L0.275816 20.6306C0.275878 9.5849 9.2301 0.630655 20.2758 0.630619L259.082 0.629842Z" fill="currentColor" />
        </svg>
    </div>
)

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
const CareersHero: React.FC = () => {
    const navigate = useNavigate()
    return (
        <section className="relative w-full min-h-screen bg-background flex flex-col md:justify-between py-6 sm:py-10 section-padding">

            {/* Eyebrow */}
            <div className="font-nobile text-xs sm:text-sm tracking-widest uppercase text-lighttext mb-4 sm:mb-6">
                BEYOND CODE. COGNIVANTA.
            </div>

            {/* Main headline */}
            <div className="flex flex-col font-semibold uppercase text-right text-5xl md:text-8xl text-headline">
                <div className="flex flex-row items-baseline justify-end gap-2 sm:gap-4">
                    <p>Shape the</p>
                </div>
                <div className="flex flex-row justify-end">
                    <p>Future</p>
                </div>
                <div className="flex flex-row items-baseline justify-end gap-2 sm:gap-4">
                    <p>With Us</p>
                </div>
            </div>

            {/* Bottom: description + CTA */}
            <div className="flex flex-col-reverse sm:flex-row md:flex-row-reverse items-start sm:items-center justify-between gap-6 mt-16 sm:mt-0 md:mt-0 pb-24">

                {/* Decorative tesseract SVG */}
                <div className="hidden md:flex items-center justify-center opacity-40 w-[18rem] h-72">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" fill="none">
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

                {/* Description */}
                <div className="font-nobile flex flex-col gap-4 w-full sm:w-[40%] md:w-[45%] text-lg sm:text-lg text-subtext sm:text-right md:text-justify leading-normal">
                    <p>
                        At <b>Cognivanta</b>, we are focused on building technology that makes a difference. We seek ambitious individuals who are ready to push boundaries, solve meaningful problems, and grow with purpose.
                    </p>
                    <p>
                        Be part of a team where <b>innovation, ownership, and impact</b> define the way we work.
                    </p>
                    <p><i>
                        We don't just hire for what someone knows today; we invest in what they are capable of doing tomorrow.</i></p>
                    {/* Scroll cue */}
                    <div
                        onClick={() => {
                            const el = document.getElementById('open-positions')
                            el?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="cursor-pointer inline-flex items-center gap-2 mt-4 self-start sm:self-end"
                    >
                        <div
                            onClick={() => navigate('/careers/#open-positions')}
                            className="cursor-pointer flex items-center justify-center bg-headline text-text-inverse py-3 px-6"
                        >
                            <span className="uppercase font-bold text-sm tracking-widest">View Open Roles</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─── CULTURE SECTION ──────────────────────────────────────────────────────────
const cultureValues = [
    {
        id: 1,
        emoji: '🚀',
        title: 'Innovation & Excellence',
        desc: 'We move with purpose and focus on delivering high-quality work. Speed matters, but excellence always comes first.',
    },
    {
        id: 2,
        emoji: '🤝',
        title: 'Integrity & Trust',
        desc: 'We build honest relationships through transparency, reliability, and ethical practices. Every solution we deliver prioritizes security, trust, and long-term confidence.',
    },
    {
        id: 3,
        emoji: '🌱',
        title: 'Growth & Learning',
        desc: 'We encourage curiosity, continuous learning, and the sharing of knowledge. Through mentorship and collaboration, we help people grow professionally and technically.',
    },
    {
        id: 4,
        emoji: '💡',
        title: 'Impact & Client-Centricity',
        desc: 'Our success is measured by the value and results we deliver to our clients. We build purposeful solutions that solve real problems and support shared success.',
    },
]

const WorkCultureSection: React.FC = () => (
    <section id="culture" className="relative w-full font-sans">
        {/* Wave transition from beige → dark */}
        <WaveTop className="text-headline bg-background" />

        <div className="bg-headline text-text-inverse w-full">
            <div className="section-padding py-16 sm:py-24">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-10">
                    <DiamondIcon className="text-hovernavlink" />
                    <h2 className="text-xs md:text-sm font-nobile uppercase tracking-widest font-semibold">Our Culture</h2>
                </div>

                {/* Section headline */}
                <div className="mb-12 md:mb-20">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight max-w-3xl">
                        Where passion meets purpose and <span className="text-hovernavlink">ideas come to life</span>.
                    </h2>
                </div>

                {/* 2×2 culture grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-2 border-border/30">
                    {cultureValues.map((value, i) => (
                        <div
                            key={value.id}
                            className={`py-10 px-6 md:px-8 border-b-2 border-border/30 ${i % 2 === 0 ? 'md:border-r-2 md:border-border/30' : ''}`}
                        >
                            <div className="text-4xl mb-5">{value.emoji}</div>
                            <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 tracking-tight">{value.title}</h3>
                            <p className="font-nobile text-base md:text-lg text-text-inverse/75 leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom statement */}
                <div className="mt-16 border-t-2 border-border/30 pt-10">
                    <p className="font-nobile text-xl md:text-2xl text-text-inverse/80 max-w-2xl leading-relaxed">
                        We're a diverse, distributed team united by one thing: a relentless drive to <b>build what matters</b>.
                    </p>
                </div>
            </div>
        </div>

        {/* Wave transition from dark → beige */}
        <WaveTop className="text-background bg-headline -scale-x-100" />
    </section>
)


// ─── JOB LISTINGS ─────────────────────────────────────────────────────────────
// Job data is sourced from CareersSectionContent.ts


const JobCard: React.FC<{ job: JobListing }> = ({ job }) => {
    const navigate = useNavigate()
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="border-t-2 border-border py-8 group">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Left: title & tags */}
                <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-4 tracking-tight text-headline">
                        {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {/* Department tag */}
                        <span className="px-3 py-1 border border-headline/30 rounded-full text-xs font-nobile uppercase tracking-widest text-subtext">
                            {job.department}
                        </span>
                        {/* Location tag */}
                        <span className="px-3 py-1 border border-headline/30 rounded-full text-xs font-nobile uppercase tracking-widest text-subtext">
                            📍 {job.location}
                        </span>
                        {/* Type tag */}
                        <span className="px-3 py-1 bg-hovernavlink/10 border border-hovernavlink/30 rounded-full text-xs font-nobile uppercase tracking-widest text-hovernavlink">
                            {job.type}
                        </span>
                    </div>

                    {/* Expandable description */}
                    <div className={`font-nobile text-subtext text-base leading-relaxed overflow-hidden transition-all duration-300 ${expanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p>{job.description}</p>
                    </div>
                </div>

                {/* Right: actions */}
                <div className="flex flex-row md:flex-col items-center md:items-end gap-3 shrink-0">
                    <button
                        onClick={() => navigate('/contact?subject=Career Enquiry for - ' + job.title)}
                        className="cursor-pointer flex items-center justify-center bg-headline text-text-inverse py-3 px-6 hover:bg-hovernavlink transition-colors duration-300"
                    >
                        <span className="uppercase font-bold text-sm tracking-widest whitespace-nowrap">Apply Now</span>
                    </button>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="cursor-pointer font-nobile text-sm text-lighttext uppercase tracking-widest hover:text-hovernavlink transition-colors duration-300"
                    >
                        {expanded ? 'Hide ↑' : 'Details ↓'}
                    </button>
                </div>
            </div>
        </div>
    )
}

const OpenPositionsSection: React.FC = () => {
    const navigate = useNavigate()
    return (
        <section id="open-positions" className="relative w-full bg-background font-sans section-padding py-16 sm:py-24">

            {/* Eyebrow */}
            <div className="w-full flex justify-center gap-3 mb-10">
                <DiamondIcon className="text-hovernavlink" />
                <h2 className="text-xs md:text-sm font-nobile uppercase tracking-widest font-semibold text-headline">Open Positions</h2>
            </div>

            {/* Section headline */}
            <div className="w-full flex flex-col justify-center items-center mb-4 gap-6">
                <h2 className="w-full text-base text-center text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-headline">
                    Find Your Opportunity
                </h2>
                <p className="w-full text-center font-nobile text-subtext text-base md:text-lg max-w-xl leading-relaxed">
                    Great talent doesn’t always fit into predefined roles. If you believe you can make an impact, connect with us.
                </p>
            </div>

            {/* Job list */}
            <div className="w-full border-b-2 border-border">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

            {/* General application CTA */}
            <div
                onClick={() => navigate('/contact?subject=Career Enquiry')}
                className="cursor-pointer mt-16 w-full group"
            >
                <h2 className="w-full py-5 text-center text-3xl sm:text-5xl md:text-7xl uppercase font-bold text-headline border-b-4 border-transparent group-hover:border-headline transition-all duration-300">
                    Drop Us Your CV
                </h2>
            </div>
        </section>
    )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
const Careers: React.FC = () => (
    <div className="h-full w-full bg-background overflow-x-clip">
        <NavBar />
        <CareersHero />
        <WorkCultureSection />
        <OpenPositionsSection />
        <Footer />
    </div>
)

export default Careers
