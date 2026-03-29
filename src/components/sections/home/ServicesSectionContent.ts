

export interface ServiceData {
    id: string
    tag: string
    title1: string
    title2: string
    subtitle: string
    desc1: string
    desc2: string
    theme: 'dark' | 'brand' | 'light'
    video?: string // for no video just leave the field empty
}

export const servicesData: ServiceData[] = [
    {
        id: "01",
        tag: "QUALITY ASSURANCE",
        title1: "QUALITY",
        title2: "ASSURANCE",
        subtitle: "FOR FLAWLESS RELEASES AND SUPERIOR PRODUCT RELIABILITY.",
        desc1: "Implement rigorous testing frameworks and automated protocols to validate every software iteration and ensure code integrity from the start.",
        desc2: "Guarantee high-performance standards, eliminate critical bugs, and deliver a seamless user experience that aligns perfectly with your market expectations and business objectives.",
        theme: "dark",
        video: "",
    },
    {
        id: "02",
        tag: "WEB & APP DEVELOPMENT",
        title1: "NEXT-GEN",
        title2: "APPLICATIONS",
        subtitle: "FOR SCALABLE, CLOUD-NATIVE SOLUTIONS AND INTUITIVE USER INTERFACES.",
        desc1: "Architect high-performance, cross-platform solutions utilizing advanced cloud-native frameworks and modern tech stacks to ensure future-proof stability and rapid deployment.",
        desc2: "Deliver high-fidelity, responsive digital experiences that bridge the gap between web and mobile, ensuring consistent performance and intuitive navigation for every user.",
        theme: "brand",
    },
    {
        id: "03",
        tag: "ARTIFICIAL INTELLIGENCE",
        title1: "INTELLIGENT",
        title2: "SYSTEMS",
        subtitle: "FOR DATA-DRIVEN INSIGHTS AND AUTONOMOUS PROCESS OPTIMIZATION.",
        desc1: "Leverage advanced machine learning models and neural networks to transform raw data into actionable intelligence and predictive foresight.",
        desc2: "Seamlessly integrate AI-driven automation into your existing workflows to enhance decision-making, increase accuracy, and drive unprecedented operational efficiency.",
        theme: "dark",
    },
    {
        id: "04",
        tag: "TRAINING & INTERNSHIPS",
        title1: "TALENT",
        title2: "INCUBATION",
        subtitle: "FOR CULTIVATING NEXT-GENERATION EXPERTISE AND BRIDGING THE SKILL GAP.",
        desc1: "Empower emerging professionals through hands-on, industry-aligned training modules designed to transform theoretical knowledge into practical, real-world mastery.",
        desc2: "Our immersive internship programs offer direct exposure to enterprise-level projects, fostering the technical agility and professional mindset required to excel in the global tech landscape.",
        theme: "brand"
    }
]
