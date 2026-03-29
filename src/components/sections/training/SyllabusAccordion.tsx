import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsBook } from 'react-icons/bs';
import { type SyllabusModule } from './data/CourseData';

interface SyllabusAccordionProps {
    modules?: SyllabusModule[];
}

const AccordionItem: React.FC<{ module: SyllabusModule; isOpen: boolean; onClick: () => void; index: number }> = ({
    module,
    isOpen,
    onClick,
    index,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    return (
        <div className={`border-2 border-border rounded-3xl mb-4 overflow-hidden bg-background transition-all duration-300 ${isOpen ? 'shadow-md border-headline ring-1 ring-headline/10' : 'shadow-none hover:border-headline/50'}`}>
            <button
                type="button"
                className={`cursor-pointer w-full text-left px-6 py-5 flex justify-between items-center bg-background hover:bg-border/10 transition-colors ${isOpen ? 'bg-border/20' : ''}`}
                onClick={onClick}
            >
                <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-colors ${isOpen ? 'bg-headline text-text-inverse' : 'bg-border text-subtext'}`}>
                        {index + 1}
                    </div>
                    <div>
                        <span className={`font-bold block text-lg transition-colors ${isOpen ? 'text-headline' : 'text-subtext'}`}>
                            {module.title}
                        </span>
                        <span className="text-sm text-lighttext font-medium">{module.topics.length} topics</span>
                    </div>
                </div>

                <IoMdArrowDropdown
                    className={`text-subtext text-3xl transition-transform duration-300 ${isOpen ? 'rotate-180 text-headline' : 'rotate-0'}`}
                />
            </button>

            <div
                ref={contentRef}
                style={{ maxHeight: contentHeight }}
                className="transition-all duration-300 ease-in-out overflow-hidden bg-background"
            >
                <div className="px-6 pb-6 pt-2 ml-14">
                    <ul className="space-y-4 pt-2 border-t-2 border-border/50">
                        {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-3 group">
                                <BsBook className="text-lighttext mt-1 shrink-0 group-hover:text-headline transition-colors" />
                                <span className="arrow-cursor text-subtext font-medium group-hover:text-headline transition-colors">
                                    {topic}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const SyllabusAccordion: React.FC<SyllabusAccordionProps> = ({ modules }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Default to first open

    if (!modules || modules.length === 0) {
        return (
            <div className="bg-background border-2 border-border rounded-3xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-border/20 mb-4">
                    <BsBook className="text-2xl text-subtext" />
                </div>
                <h3 className="text-xl font-bold text-headline mb-2">Curriculum in Development</h3>
                <p className="text-subtext max-w-sm mx-auto">The detailed syllabus for this course is currently being finalized. Check back soon!</p>
            </div>
        );
    }

    const handleToggle = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-8 text-headline flex items-center gap-3">
                Course Curriculum
                <span className="text-sm font-medium bg-headline text-text-inverse px-3 py-1 rounded-full">{modules.length} Modules</span>
            </h2>
            <div className="space-y-2">
                {modules.map((module, index) => (
                    <AccordionItem
                        key={index}
                        index={index}
                        module={module}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SyllabusAccordion;
