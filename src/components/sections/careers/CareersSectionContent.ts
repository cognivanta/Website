export interface JobListing {
    id: number
    title: string
    department: string
    location: string
    type: string
    description: string
}

export const jobs: JobListing[] = [
    {
        id: 1,
        title: 'Full-Stack Developer',
        department: 'Engineering',
        location: 'Mohali',
        type: 'Full-time',
        description:
            "Build cutting-edge web applications using modern frameworks. You'll own features end-to-end — from database design to polished UI — and collaborate closely with our design and product teams.",
    },
    {
        id: 2,
        title: 'UI/UX Designer',
        department: 'Design',
        location: 'Mohali',
        type: 'Full-time',
        description:
            "Shape the visual identity and interaction patterns of our products. You'll translate complex requirements into intuitive, beautiful interfaces that delight users and drive engagement.",
    },
    {
        id: 3,
        title: 'DevOps Engineer',
        department: 'Infrastructure',
        location: 'Hybrid',
        type: 'Full-time',
        description:
            "Architect and maintain our cloud infrastructure, CI/CD pipelines, and observability stack. You'll keep our systems reliable, secure, and ready to scale.",
    },
    {
        id: 4,
        title: 'Business Development Executive',
        department: 'Sales',
        location: 'Mohali',
        type: 'Full-time',
        description:
            "Identify and develop new business opportunities, build relationships with enterprise clients, and help expand Cognivanta's footprint across markets.",
    },
]
