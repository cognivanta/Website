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
        title: 'Junior Full-Stack Developer',
        department: 'Engineering',
        location: 'Mohali',
        type: 'Full-time',
        description:
            "Build cutting-edge web applications using modern frameworks. You'll own features end-to-end — from database design to polished UI — and collaborate closely with our design and product teams.",
    },
    {
        id: 2,
        title: 'Junior UI/UX Designer',
        department: 'Design',
        location: 'Mohali',
        type: 'Full-time',
        description:
            "Shape the visual identity and interaction patterns of our products. You'll translate complex requirements into intuitive, beautiful interfaces that delight users and drive engagement.",
    },
    
]
