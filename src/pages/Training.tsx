import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/sections/training/CourseCard';
import { coursesData } from '../components/sections/training/data/CourseData';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/sections/home/Footer';
import TrainingFeatures from '../components/sections/training/TrainingFeatures';

const Training: React.FC = () => {
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);

    // Track scroll position for hero SVG color transition
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        // Call it once on mount to set initial state correctly
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Color interpolation constants
    const maxScroll = 800; // Complete transition after 300px of scrolling
    const progress = Math.min(scrollY / maxScroll, 1);

    // White: rgb(116, 103, 255) to bg-background: rgb(219, 209, 195)
    const r = Math.round(116 - (116 - 219) * progress);
    const g = Math.round(103 - (103 - 209) * progress);
    const b = Math.round(255 - (255 - 195) * progress);
    const svgFillColor = `rgb(${r}, ${g}, ${b})`;

    // White: rgb(116, 103, 255) to border-border: rgb(203, 191, 175)
    const strokeR = Math.round(116 - (116 - 203) * progress);
    const strokeG = Math.round(103 - (103 - 191) * progress);
    const strokeB = Math.round(255 - (255 - 175) * progress);
    const svgStrokeColor = `rgb(${strokeR}, ${strokeG}, ${strokeB})`;

    return (
        <div className="min-h-screen w-full bg-background overflow-x-clip flex flex-col font-sans">
            <NavBar />

            {/* Hero Section */}
            <div className="relative min-h-[50vh] w-full flex items-center justify-center overflow-hidden pb-40 lg:pb-70">
                <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center z-10 pt-24 lg:pt-32">
                    <h1 className="text-4xl md:text-5xl md:w-[75%] mx-auto font-extrabold tracking-tight text-headline mb-6">
                        Talent Incubation:  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ef7b01] to-orange-400"> Building Tomorrow's Experts Today</span>
                    </h1>
                    {/* <p className="mt-6 max-w-2xl text-lg md:text-xl text-subtext mx-auto mb-10 leading-relaxed font-nobile">
                        Our Talent Incubation program is designed to develop strong, industry-ready professionals through focused training and real-world learning. We equip individuals with the technical skills, practical knowledge, and confidence needed to succeed in a fast-evolving technology landscape.
                    </p> */}
                    <p className="mt-6 max-w-4xl text-lg md:text-xl justify-center text-subtext mx-auto mb-10 leading-relaxed font-nobile">
                        {/* <b>Our Incubation Philosophy</b> */}
                        <br></br>
                        <i>Whether you're launching your tech career or accelerating it, our training ecosystem is built to close skill gaps, sharpen expertise, and deliver results that industry demands.</i>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="cursor-pointer w-full sm:w-auto px-8 py-3.5 bg-[#ef7b01] hover:bg-orange-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1"
                        >
                            Explore Our Courses
                        </button>
                        <button onClick={() => navigate(`/contact?subject=Enquire About Training`)} className="cursor-pointer w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-headline text-headline hover:text-white border border-headline rounded-xl font-bold text-lg transition-all hover:-translate-y-1">
                            Enquire Now
                        </button>
                    </div>
                </div>

                {/* SVG Flow Wave Bottom Transition */}
                <div className="absolute bottom-0 w-full flex flex-col overflow-hidden leading-none shrink-0 pointer-events-none z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 179" fill="none" className="hidden md:block w-full drop-shadow-sm" style={{ color: svgFillColor, stroke: svgStrokeColor, strokeWidth: '2px' }}>
                        <path d="M605.979 0.190357C610.607 0.190357 615.04 2.0504 618.283 5.35031L651.587 39.2403C654.831 42.5403 659.265 44.3988 663.892 44.3988L1423.3 44.3988C1432.83 44.3988 1440.55 52.1226 1440.55 61.6498L1440.55 178.633L1436.16 178.633L0.30162 178.633L0.301634 20.1911C0.301635 9.14546 9.25598 0.191186 20.3016 0.191171L605.979 0.190357Z" fill="currentColor"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 725 118" fill="none" className="block md:hidden w-full drop-shadow-sm" style={{ color: svgFillColor, stroke: svgStrokeColor, strokeWidth: '2px' }}>
                        <path d="M259.082 0.629842C263.71 0.629843 268.143 2.48988 271.386 5.7898L304.69 39.6798C307.934 42.9797 312.368 44.8382 316.995 44.8382L712.384 44.8382C719.011 44.8382 724.384 50.2109 724.384 56.8383L724.383 115.001L0.275625 117.123L0.275816 20.6306C0.275878 9.5849 9.2301 0.630655 20.2758 0.630619L259.082 0.629842Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            {/* Courses Grid Container (Flows below wave) */}
            <div className="-mt-0.5 grow w-full relative z-20" style={{ backgroundColor: svgFillColor }}>
                <TrainingFeatures />
                <div id="courses-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="flex flex-col items-center justify-center w-full mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" className="text-[#ef7b01] w-5 h-5 md:w-6 md:h-6">
                                <g opacity="0.9">
                                    <rect x="23.181" y="18.9905" width="6.13043" height="6.13043" transform="rotate(135 23.181 18.9905)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                                    <rect x="13.9886" y="9.7981" width="6.13043" height="6.13043" transform="rotate(135 13.9886 9.7981)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                                    <rect x="13.8831" y="18.9905" width="6.13043" height="6.13043" transform="rotate(135 13.8831 18.9905)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                                    <rect x="23.181" y="9.69238" width="6.13043" height="6.13043" transform="rotate(135 23.181 9.69238)" fill="currentColor" stroke="currentColor" strokeWidth="0.444272"></rect>
                                </g>
                            </svg>
                            <h2 className="text-xs md:text-sm font-nobile uppercase tracking-widest text-headline font-semibold">Our Courses</h2>
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-headline text-center mb-4">
                            Explore Our Courses
                        </h3>
                        <p className="text-lg text-subtext text-center max-w-2xl mx-auto">
                            Comprehensive training modules designed to help you master the most in-demand industry skills.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {coursesData.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Training;