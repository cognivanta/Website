import frontendImg from '../../../../assets/training/frontend-cover.webp';
import backendImg from '../../../../assets/training/backend-cover.webp';
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
        title: "Java Training Program",
        description: "Master enterprise-level development and build robust backend systems with our comprehensive Java track.",
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
                title: "Module 1: Java",
                topics: ["Java Syntax & Structure","Variables, Data Types & Operators","Control Statements","Methods and Parameter Passing","Exception Handling","Multithreading"]
            },
            {
                title: "Module 2: Object-Oriented Programming (OOP) Concepts",
                topics: ["Classes and Objects","Encapsulation","Inheritance","Polymorphism","Abstraction","Constructors and Access Modifiers"]
            },
            {
                title: "Module 3: Collections Framework",
                topics: ["List Interface", "Set Interface","Map Interface","Iterators and Enhanced For Loop","Collection Utility Methods"]
            },
            {
                title: "Module 4: JDBC (Java Database Connectivity)",
                topics: ["JDBC Architecture and Drivers","Establishing Database Connection","Statement, PreparedStatement & CallableStatement","Executing Queries (CRUD Operations)","Transaction Management"]
            },
            {
                title: "Module 5: Spring Boot",
                topics: ["Spring Boot Architecture & Auto Configuration","Creating REST Applications with Spring Boot","Dependency Injection & Spring Beans","Spring Boot Annotations","Spring Boot with Database","Application Properties & Configuration"]
            },
            {
                title: "Module 6: REST APIs",
                topics: ["REST Architecture Principles","HTTP Methods (GET, POST, PUT, DELETE)","Request & Response Handling (JSON)","Status Codes & Error Handling","API Testing using Postman","Path Variables & Request Parameters"]
            },
            {
                title: "Module 7: Live Project Integration",
                topics: ["Frontend–Backend Integration","Database Integration","CRUD Operations Implementation","API Testing and Debugging","Error Handling and Validation","Deployment"]
            },
            {
                title: "Module : Real-World Projects",
                topics: ["Employee Management System","Banking Application"]
            }
        ]
    },
    {
        id: "frontend-development",
        imageSrc: frontendImg,
        imageAlt: "Frontend Development",
        title: "Python Training Program",
        description: "Learn the fundamentals of one of the world's most versatile languages to build scalable web applications.",
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
                title: "Module 1: Python Basics",
                topics: ["Python Syntax and Indentation","Variables and Data Types","Operators and Expressions","Conditional Statements","Loops","Functions and Arguments"]
            },
            {
                title: "Module 2: Object-Oriented Programming (OOP)",
                topics: ["Classes and Objects","Encapsulation","Inheritance","Polymorphism","Abstraction","Constructors (__init__ method)"]
            },
            {
                title: "Module 3: File Handling",
                topics: ["Opening and Closing Files","Reading Files","Writing and Appending Data","File Modes","Working with CSV / Text Files","Exception Handling in File Operations"]
            },
            {
                title: "Module 4: Django Framework",
                topics: ["Django Project and App Structure","Models and Database Migration","URL Routing and Views","Templates and Template Language","Django Admin Panel","Forms and Validation"]
            },
            {
                title: "Module 5: API Development",
                topics: ["REST API Concepts","Creating APIs using Django REST Framework","Serializers and Data Validation","Handling HTTP Methods","API Authentication and Permissions","Testing APIs using Postman"]
            },
            {
                title: "Module 6: Real-Time Web Project",
                topics: ["Project Requirement Analysis","Database Design and Models","Backend API Integration","Frontend–Backend Communication","Deployment and Testing"]
            },
            {
                title: "Module 7: Real-World Projects",
                topics: ["E-commerce Website","Student Portal"]
            }
        ]
    },
    {
        id: "backend-development",
        imageSrc: backendImg,
        imageAlt: "Backend Development",
        title: "AI & Machine Learning Program",
        description: "Dive into the future of technology by learning how to design and build intelligent, data-driven systems.",
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
                title: "Module 1: Python for AI",
                topics: ["Python Libraries for AI (NumPy, Pandas, Matplotlib)","Data Preprocessing and Data Cleaning","Working with Arrays and DataFrames","Data Visualization Techniques","Feature Engineering Basics","Using Python for Model Training"]
            },
            {
                title: "Module 2: Machine Learning Fundamentals",
                topics: ["Types of Machine Learning (Supervised, Unsupervised, Reinforcement)","Regression Algorithms","Classification Algorithms","Model Training and Evaluation","Overfitting and Underfitting","Model Performance Metrics"]
            },
            {
                title: "Module 3: Deep Learning",
                topics: ["Introduction to Neural Networks","Activation Functions","Convolutional Neural Networks","Recurrent Neural Networks","Training Deep Learning Models with TensorFlow / PyTorch","Model Optimization Techniques"]
            },
            {
                title: "Module 4: Natural Language Processing (NLP)",
                topics: ["Text Preprocessing (Tokenization, Stopwords Removal, Stemming, Lemmatization)","Text Vectorization","Sentiment Analysis","Named Entity Recognition","Language Models and Word Embeddings","Text Classification"]
            },
            {
                title: "Module 5: Chatbot Development",
                topics: ["Rule-Based Chatbot Design","NLP-Based Chatbot Architecture","Intent Recognition and Entity Extraction","Integrating Chatbots with APIs","Chatbot Training and Testing","Deployment on Web Platforms"]
            },
            {
                title: "Module 6: AI Real-Time Projects",
                topics: ["Chatbot for Customer Support","Sentiment Analysis System","Image Classification Application","Recommendation System","AI-Based Text Summarization Tool","Deployment of AI Models in Web Applications"]
            },
            {
                title: "Module 7: Real-World Projects",
                topics: ["AI Resume Screener","Intelligent AI Chatbot","Smart Recommendation System"]
            }
        ]
    }
];
