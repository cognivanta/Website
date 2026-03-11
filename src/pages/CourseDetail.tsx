import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../components/sections/training/data/CourseData';
import SyllabusAccordion from '../components/sections/training/SyllabusAccordion';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/sections/home/Footer';
import { IoMdArrowBack, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { BsClock, BsBarChart, BsPerson } from 'react-icons/bs';

const CourseDetail: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const course = coursesData.find((c) => c.id === courseId);
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
    const maxScroll = 600; // Complete transition after 300px of scrolling
    const progress = Math.min(scrollY / maxScroll, 1);

    // White: rgb(255, 255, 255) to bg-background: rgb(219, 209, 195)
    const r = Math.round(255 - (255 - 219) * progress);
    const g = Math.round(255 - (255 - 209) * progress);
    const b = Math.round(255 - (255 - 195) * progress);
    const svgFillColor = `rgb(${r}, ${g}, ${b})`;

    // White: rgb(255, 255, 255) to border-border: rgb(203, 191, 175)
    const strokeR = Math.round(255 - (255 - 203) * progress);
    const strokeG = Math.round(255 - (255 - 191) * progress);
    const strokeB = Math.round(255 - (255 - 175) * progress);
    const svgStrokeColor = `rgb(${strokeR}, ${strokeG}, ${strokeB})`;

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [courseId]);

    if (!course) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Course Not Found</h2>
                <Link to="/training" className="text-[#ef7b01] hover:underline flex items-center gap-2">
                    <IoMdArrowBack /> Back to Training
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-background overflow-x-clip flex flex-col font-sans">
            <NavBar />

            {/* Themed Hero Section */}
            <div className="relative pt-8 pb-40 lg:pt-16 lg:pb-70 w-full flex flex-col items-center justify-center overflow-hidden min-h-[50vh]">
                {/* Back button fixed to the top left of the hero, matching NavBar logo alignment */}
                <div className="absolute top-4 lg:top-8 left-0 w-full z-20">
                    <div className="section-padding flex">
                        <Link to="/training" className="text-subtext hover:text-headline inline-flex items-center gap-2 transition-colors text-sm font-medium">
                            <IoMdArrowBack className="text-lg" /> Back to all courses
                        </Link>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                    <div className="max-w-4xl mx-auto flex flex-col items-center mt-12 md:mt-4">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-[#ef7b01]/10 text-[#ef7b01] border border-[#ef7b01]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                {course.level || 'All Levels'}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-headline mb-6 leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-subtext mb-8 leading-relaxed font-nobile">
                            {course.description}
                        </p>

                        {/* Metadata Row */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-subtext font-medium">
                            {course.rating && (
                                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 shadow-sm">
                                    <div className="flex text-yellow-500 text-lg">
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                    <span className="font-bold text-headline">{course.rating}</span>
                                    <span>({course.reviews} reviews)</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* SVG Flow Wave Bottom Transition */}
                <div className="absolute bottom-0 w-full flex flex-col overflow-hidden leading-none shrink-0 pointer-events-none z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 179" fill="none" className="hidden md:block w-full drop-shadow-sm transition-colors duration-75" style={{ color: svgFillColor, stroke: svgStrokeColor, strokeWidth: '2px' }}>
                        <path d="M605.979 0.190357C610.607 0.190357 615.04 2.0504 618.283 5.35031L651.587 39.2403C654.831 42.5403 659.265 44.3988 663.892 44.3988L1423.3 44.3988C1432.83 44.3988 1440.55 52.1226 1440.55 61.6498L1440.55 178.633L1436.16 178.633L0.30162 178.633L0.301634 20.1911C0.301635 9.14546 9.25598 0.191186 20.3016 0.191171L605.979 0.190357Z" fill="currentColor"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 725 118" fill="none" className="block md:hidden w-full drop-shadow-sm transition-colors duration-75" style={{ color: svgFillColor, stroke: svgStrokeColor, strokeWidth: '2px' }}>
                        <path d="M259.082 0.629842C263.71 0.629843 268.143 2.48988 271.386 5.7898L304.69 39.6798C307.934 42.9797 312.368 44.8382 316.995 44.8382L712.384 44.8382C719.011 44.8382 724.384 50.2109 724.384 56.8383L724.383 115.001L0.275625 117.123L0.275816 20.6306C0.275878 9.5849 9.2301 0.630655 20.2758 0.630619L259.082 0.629842Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            {/* Main Layout Area */}
            <div className="-mt-0.5 grow w-full relative z-20 transition-colors duration-75" style={{ backgroundColor: svgFillColor }}>
                <div className="flex flex-col w-full text-headline text-center gap-4 py-12">
                    <p className="w-full text-center text-5xl font-bold">Industry-Aligned Syllabus</p>
                    <p className="w-full text-center text-5xl font-bold">Week by Week</p>
                    <p className="w-full text-center text-2xl font-nobile font-bold text-subtext mt-2">Every module maps directly to real job requirements</p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12 w-full">
                    {/* Left Column: Content */}
                    <div className="flex-1 lg:max-w-[800px]">
                        {/* Course Summary Image (Mobile only, hidden on lg since sidebar has it) */}
                        <div className="block lg:hidden rounded-3xl overflow-hidden mb-10 border-2 border-border bg-background">
                            <img src={course.imageSrc} alt={course.imageAlt} className="w-full h-auto object-cover max-h-[300px]" />
                            <div className="p-6">

                                <button className="w-full bg-headline text-text-inverse py-4 rounded-xl font-bold uppercase text-lg transition-all hover:bg-headline/90 mb-3">
                                    Enroll Now
                                </button>
                                <button className="w-full bg-transparent hover:bg-border/20 text-headline border-2 border-border py-3 rounded-xl font-bold uppercase transition-all mb-4">
                                    Enquire Now
                                </button>
                            </div>
                        </div>

                        {/* What you'll learn / Features */}
                        <div className="bg-background rounded-3xl p-8 mb-10 border-2 border-border">
                            <h2 className="text-2xl font-bold text-headline mb-6">What you'll get</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {course.features?.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <IoMdCheckmarkCircleOutline className="text-green-500 text-xl shrink-0 mt-0.5" />
                                        <span className="text-subtext font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Syllabus Section */}
                        <div className="mb-10 w-full" id="syllabus">
                            <SyllabusAccordion modules={course.syllabus} />
                        </div>
                    </div>

                    {/* Right Column: Sticky Sidebar Sales Widget */}
                    <div className="hidden lg:block w-full lg:w-[400px]">
                        <div className="sticky top-28 bg-background rounded-3xl border-2 border-border overflow-hidden">
                            {/* Course Image */}
                            <div className="w-full h-56 relative rounded-t-3xl overflow-hidden">
                                <img src={course.imageSrc} alt={course.imageAlt} className="w-full h-full object-cover" />
                            </div>

                            <div className="p-8">


                                <button className="w-full bg-headline hover:bg-headline/90 hover:scale-[1.02] active:scale-[0.98] text-text-inverse py-4 rounded-xl font-extrabold uppercase text-lg transition-all mb-3 flex justify-center items-center">
                                    Enroll Now
                                </button>
                                <button className="w-full bg-transparent hover:bg-border/20 active:scale-[0.98] text-headline border-2 border-border py-3 rounded-xl font-bold uppercase transition-all mb-6 flex justify-center items-center">
                                    Enquire Now
                                </button>

                                {/* Course Quick Stats List */}
                                <div className="space-y-4 pt-4 border-t-2 border-border">
                                    <h4 className="font-bold text-headline">This course includes:</h4>

                                    <div className="flex items-center justify-between text-subtext text-sm">
                                        <div className="flex items-center gap-3"><BsClock className="text-headline" /> Duration</div>
                                        <strong className="text-headline">{course.duration}</strong>
                                    </div>
                                    <div className="flex items-center justify-between text-subtext text-sm">
                                        <div className="flex items-center gap-3"><BsBarChart className="text-headline" /> Level</div>
                                        <strong className="text-headline">{course.level}</strong>
                                    </div>
                                    <div className="flex items-center justify-between text-subtext text-sm">
                                        <div className="flex items-center gap-3"><IoMdCheckmarkCircleOutline className="text-headline" /> Certificate</div>
                                        <strong className="text-headline">Yes</strong>
                                    </div>
                                    <div className="flex items-center justify-between text-subtext text-sm">
                                        <div className="flex items-center gap-3"><BsPerson className="text-headline" /> Mentorship</div>
                                        <strong className="text-headline">1-on-1</strong>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge Area */}
                            <div className="bg-transparent p-4 border-t-2 border-border text-center text-xs text-subtext font-medium">
                                🔒 30-Day Money-Back Guarantee
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CourseDetail;
