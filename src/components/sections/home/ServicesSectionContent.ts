export interface ServiceData {
    id: string
    tag: string
    title1: string
    title2: string
    subtitle: string
    desc1: string
    desc2: string
    theme: 'dark' | 'brand' | 'light'
}

export const servicesData: ServiceData[] = [
    {
        id: "01",
        tag: "Specialized Outsourcing",
        title1: "SPECIALIZED",
        title2: "OUTSOURCING",
        subtitle: "FOR SEAMLESS INTEGRATION AND ENHANCED EFFICIENCY.",
        desc1: "Integrate highly skilled IT professionals directly into your teams.",
        desc2: "Ensure seamless collaboration, enhanced operational efficiency, and specialized technical expertise aligned with your business objectives.",
        theme: "dark",
    },
    {
        id: "02",
        tag: "Team as a Service (TaaS)",
        title1: "TEAM AS A SERVICE",
        title2: "(TAAS)",
        subtitle: "FOR FLEXIBLE, SCALABLE PROJECT EXECUTION.",
        desc1: "We provide flexible, scalable teams tailored to your project requirements.",
        desc2: "Our TaaS model delivers the agility and depth of knowledge you need, without the constraints of long-term commitments, enabling faster and more adaptive project execution.",
        theme: "brand",
    },
    {
        id: "03",
        tag: "Managed Services",
        title1: "MANAGED",
        title2: "SERVICES",
        subtitle: "FOR OPTIMIZED IT OPERATIONS AND CORE BUSINESS FOCUS.",
        desc1: "We take full responsibility for the management and operation of your IT systems.",
        desc2: "Allowing your internal teams to focus on core business activities while our proactive approach ensures system performance, scalability, and continuous optimization.",
        theme: "light",
    },
    {
        id: "04",
        tag: "Project-Based Delivery",
        title1: "PROJECT-BASED",
        title2: "DELIVERY",
        subtitle: "FOR SUCCESSFUL, ON-TIME, AND ON-BUDGET IT PROJECTS.",
        desc1: "We deliver end-to-end IT projects with clearly defined scopes, timelines, and deliverables.",
        desc2: "Ensure seamless collaboration, enhanced operational efficiency, and specialized technical expertise aligned with your business objectives.",
        theme: "dark",
    },
    {
        id: "05",
        tag: "Strategic Team Augmentation",
        title1: "STRATEGIC TEAM",
        title2: "AUGMENTATION",
        subtitle: "FOR ENHANCED CAPABILITIES AND LONG-TERM CONTINUITY.",
        desc1: "Strengthen your internal capabilities with dedicated, high-performing teams tailored to your needs.",
        desc2: "Our adaptive model ensures seamless collaboration and long-term continuity, supporting your growth over time.",
        theme: "brand",
    },
    {
        id: "06",
        tag: "Digital Transformation Consulting",
        title1: "Digital Transformation",
        title2: "Consulting",
        subtitle: "DRIVING INNOVATION, STRATEGY, AND SUSTAINABLE GROWTH.",
        desc1: "More than just executing projects, we position ourselves as strategic partners, supporting the definition of IT strategies",
        desc2: "the implementation of innovation initiatives, and the continuous evolution of digital capabilities.",
        theme: "light",
    }
]
