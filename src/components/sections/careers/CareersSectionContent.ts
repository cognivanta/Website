export interface JobListing {
    id: number
    title: string
    department: string
    location: string
    type: string
    description: string
    experience: string
    skills: string[]
    responsibilities: string[]
}

export const jobs: JobListing[] = [
    {
        id: 1,
        title: 'Full Stack Java Developer',
        department: 'Engineering',
        location: 'Mohali (Onsite)',
        type: 'Full-time',
        experience: '2 Years',
        description:
            "We are looking for a passionate Full Stack Java Developer with 2 years of hands-on experience to join our growing team at Cognivanta. You will work on scalable web applications across both frontend and backend, collaborate with cross-functional teams, and contribute to high-quality software delivery in an agile environment.",
        skills: [
            'Java',
            'Spring Boot',
            'Hibernate',
            'RESTful APIs',
            'React / Angular',
            'JavaScript',
            'HTML',
            'CSS',
            'MySQL / PostgreSQL / MongoDB',
            'Docker',
            'Git',
            'CI/CD Pipelines'
        ],
        responsibilities: [
            'Develop and maintain scalable web applications',
            'Work on both frontend and backend modules',
            'Collaborate with cross-functional teams',
            'Participate in code reviews and agile processes'
        ]
    }

]
