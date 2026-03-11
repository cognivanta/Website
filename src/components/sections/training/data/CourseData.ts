import frontendImg from '../../../../assets/training/frontend-cover.webp';
import backendImg from '../../../../assets/training/backend-cover.webp';
import fullstackImg from '../../../../assets/training/fullstack-cover.webp';
import uiUxImg from '../../../../assets/training/ui-ux-cover.webp';
import javaSpringBootImg from '../../../../assets/training/java-spring-boot-cover.webp';

export interface SyllabusModule {
    title: string;
    topics: string[];
}

export interface CourseData {
    id: string; // Helpful for finding the right course on the next page
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    link: string;
    syllabus?: SyllabusModule[]; // Accordion data

    // New premium fields
    duration?: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

    rating?: number;
    reviews?: number;
    features?: string[];
}

export const coursesData: CourseData[] = [
    {
        id: "java-spring-boot",
        imageSrc: javaSpringBootImg,
        imageAlt: "Java Spring Boot Development",
        title: "Java Spring Boot Backend",
        description: "Master Java, Spring Core, Spring Boot, Hibernate, and Microservices architecture.",
        link: "/training/java-spring-boot",
        duration: "16 Weeks",
        level: "Intermediate",
        rating: 4.8,
        reviews: 215,
        features: [
            "Industry Projects",
            "Mock Interviews",
            "Placement Assistance",
            "Microservices Architecture",
            "Lifetime Access"
        ],
        syllabus: [
            {
                title: "Module 1: Java Core & OOPS",
                topics: ["Java 8+ Features", "Collections Framework", "Multithreading & Concurrency", "Exception Handling"]
            },
            {
                title: "Module 2: Spring Core & Data JPA",
                topics: ["Dependency Injection (IoC)", "Spring Beans & Scopes", "Hibernate ORM", "Spring Data JPA Repository"]
            },
            {
                title: "Module 3: Spring Boot & REST APIs",
                topics: ["Spring Boot Auto Configuration", "Building RESTful APIs", "Exception Handling (@ControllerAdvice)", "Validation"]
            },
            {
                title: "Module 4: Security & Microservices",
                topics: ["Spring Security & JWT", "OAuth2 Integration", "Microservices Concepts", "Eureka Service Discovery"]
            }
        ]
    },
    {
        id: "frontend-development",
        imageSrc: frontendImg,
        imageAlt: "Frontend Development",
        title: "Frontend Development",
        description: "HTML, CSS, JavaScript, React. Build responsive websites.",
        link: "/training/frontend-development",
        duration: "12 Weeks",
        level: "Beginner",
        rating: 4.8,
        reviews: 245,
        features: [
            "Industry Projects",
            "Mock Interviews",
            "Placement Assistance",
            "1-on-1 Mentorship",
            "Lifetime Access"
        ],
        syllabus: [
            {
                title: "Module 1: HTML & CSS Basics",
                topics: ["Introduction to HTML", "Semantic Tags", "CSS Selectors", "Flexbox & Grid"]
            },
            {
                title: "Module 2: Advanced JavaScript",
                topics: ["ES6+ Features", "Promises & Async/Await", "DOM Manipulation API"]
            },
            {
                title: "Module 3: React Fundamentals",
                topics: ["Components & Props", "State & Lifecycle", "Hooks (useState, useEffect)", "React Router"]
            }
        ]
    },
    {
        id: "backend-development",
        imageSrc: backendImg,
        imageAlt: "Backend Development",
        title: "Backend Development",
        description: "Node.js, Express, Databases. Build robust APIs.",
        link: "/training/backend-development",
        duration: "14 Weeks",
        level: "Intermediate",
        rating: 4.9,
        reviews: 182,
        features: [
            "Industry Projects",
            "Mock Interviews",
            "Placement Assistance",
            "AWS Deployment",
            "Lifetime Access"
        ],
        syllabus: [
            {
                title: "Module 1: Node.js & Express Basics",
                topics: ["Introduction to Node.js", "Express Routing", "Middlewares", "RESTful API Design"]
            },
            {
                title: "Module 2: Databases & MongoDB",
                topics: ["NoSQL Concepts", "Mongoose ORM", "CRUD Operations", "Aggregation Framework"]
            },
            {
                title: "Module 3: Authentication & Authorization",
                topics: ["JWT Tokens", "Role-based Access", "OAuth Integration", "Security Best Practices"]
            }
        ]
    },
    {
        id: "fullstack-development",
        imageSrc: fullstackImg,
        imageAlt: "Fullstack Development",
        title: "Fullstack Development",
        description: "MERN Stack. Build end-to-end web applications.",
        link: "/training/fullstack-development",
        duration: "24 Weeks",
        level: "Beginner",
        rating: 4.7,
        reviews: 310,
        features: [
            "Industry Projects",
            "Mock Interviews",
            "Placement Assistance",
            "Full Stack Deployment",
            "Lifetime Access"
        ],
        syllabus: [
            {
                title: "Module 1: Frontend Foundation",
                topics: ["React Deep Dive", "State Management (Redux/Zustand)", "Performance Optimization"]
            },
            {
                title: "Module 2: Backend Integration",
                topics: ["Connecting React to Express", "Handling CORS", "Data Fetching Strategies"]
            },
            {
                title: "Module 3: Advanced Topics",
                topics: ["WebSockets", "Docker Basics", "CI/CD Pipelines", "System Design Intro"]
            }
        ]
    },
    {
        id: "ui-ux-design",
        imageSrc: uiUxImg,
        imageAlt: "UI/UX Design",
        title: "UI/UX Design",
        description: "Figma, Prototyping, Wireframing. Design beautiful interfaces.",
        link: "/training/ui-ux-design",
        duration: "8 Weeks",
        level: "All Levels",
        rating: 4.9,
        reviews: 405,
        features: [
            "Industry Projects",
            "Mock Interviews",
            "Placement Assistance",
            "Portfolio Review",
            "Lifetime Access"
        ],
        syllabus: [
            {
                title: "Module 1: Design Principles",
                topics: ["Color Theory", "Typography", "Spacing & Alignment", "Visual Hierarchy"]
            },
            {
                title: "Module 2: Figma Mastery",
                topics: ["Components & Variants", "Auto Layout", "Design Systems", "Prototyping"]
            },
            {
                title: "Module 3: UX Research & Strategy",
                topics: ["User Personas", "Wireframing", "Usability Testing", "Hand-off to Developers"]
            }
        ]
    }
];
