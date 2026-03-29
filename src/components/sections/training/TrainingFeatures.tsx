import React from 'react';
import {
    FaHistory,
    FaSuitcase,
    FaHandshake,
    FaLaptopCode,
    FaUserCheck,
    FaRegIdCard,
    FaChalkboardTeacher,
    FaAward
} from 'react-icons/fa';

interface FeatureItem {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
}

const features: FeatureItem[] = [
    {
        id: 1,
        icon: FaHistory,
        title: "15+ Years Experience",
        description: "Benefit from our deep industry knowledge and proven track record of market excellence."
    },
    {
        id: 2,
        icon: FaHandshake,
        title: "Top Company Tie-ups",
        description: "Exclusive placement partnerships with leading tech companies and global enterprises."
    },
    {
        id: 3,
        icon: FaLaptopCode,
        title: "Live Projects",
        description: "Gain hands-on experience by working on real-world projects used in the industry."
    },
    {
        id: 4,
        icon: FaUserCheck,
        title: "Interview Preparation",
        description: "Comprehensive mock interviews and resume building to help you stand out."
    },
    {
        id: 5,
        icon: FaChalkboardTeacher,
        title: "Expert Mentors",
        description: "Learn directly from seasoned professionals with years of domain expertise."
    },
    {
        id: 6,
        icon: FaRegIdCard,
        title: "Internship Opportunities",
        description: "Bridge the gap between learning and working with our dedicated internship programs."
    },
    {
        id: 7,
        icon: FaSuitcase,
        title: "Placement Process",
        description: "A structured, step-by-step placement drive to ensure your career takes off smoothly."
    },
    {
        id: 8,
        icon: FaAward,
        title: "Industry Certification",
        description: "Earn an industry-recognized certificate to validate your skills and boost your resume."
    }
];

const TrainingFeatures: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-headline tracking-tight mb-4">
                        Why Choose <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ef7b01] to-orange-400">Us</span>
                    </h2>
                    <p className="text-lg text-subtext max-w-2xl mx-auto font-nobile">
                        We provide a comprehensive learning ecosystem designed to accelerate your career growth and ensure you land your dream job.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-[#ef7b01]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-xl bg-orange-100 text-[#ef7b01] flex items-center justify-center mb-6 group-hover:bg-[#ef7b01] group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <feature.icon className="text-2xl" />
                                </div>

                                <h3 className="text-xl font-bold text-headline mb-3 font-sans">
                                    {feature.title}
                                </h3>

                                <p className="text-subtext font-nobile leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingFeatures;
