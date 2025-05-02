
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Cloud, Database, Code, Users, ShieldCheck, Network, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom'; // Added import
import { Button } from '@/components/ui/button'; // Added import

const ServicesPage = () => {
  const services = [
    {
      icon: <Cloud className="h-12 w-12 text-primary mb-4" />,
      title: 'Cloud Solutions & Migration',
      description: 'Leverage the power of the cloud with our expert migration, management, and optimization services across AWS, Azure, and GCP.',
      details: ['Cloud Strategy & Consulting', 'Infrastructure as Code (IaC)', 'Serverless Computing', 'Cloud Security & Compliance']
    },
    {
      icon: <Database className="h-12 w-12 text-primary mb-4" />,
      title: 'Data Engineering & Analytics',
      description: 'Transform raw data into actionable insights. We design, build, and manage robust data pipelines and analytics platforms.',
      details: ['Data Warehousing', 'ETL/ELT Pipelines', 'Business Intelligence Dashboards', 'Machine Learning Integration']
    },
    {
      icon: <Code className="h-12 w-12 text-primary mb-4" />,
      title: 'Custom Software Development',
      description: 'From web applications to complex enterprise systems, we build scalable, high-performance software tailored to your needs.',
      details: ['Full-Stack Development', 'API Design & Integration', 'Microservices Architecture', 'DevOps & CI/CD Implementation']
    },
    {
      icon: <Users className="h-12 w-12 text-primary mb-4" />,
      title: 'IT Consulting & Strategy',
      description: 'Gain a competitive edge with strategic IT planning, digital transformation roadmaps, and technology assessments.',
      details: ['Technology Roadmapping', 'Digital Transformation Strategy', 'IT Governance & Risk Management', 'Vendor Selection & Management']
    },
     {
      icon: <ShieldCheck className="h-12 w-12 text-primary mb-4" />,
      title: 'Cybersecurity Services',
      description: 'Protect your valuable assets with comprehensive security solutions, threat detection, and compliance management.',
      details: ['Vulnerability Assessment', 'Penetration Testing', 'Security Audits & Compliance (SOC 2, ISO 27001)', 'Managed Security Services']
    },
     {
      icon: <Network className="h-12 w-12 text-primary mb-4" />,
      title: 'Managed IT Services',
      description: 'Ensure the smooth operation of your IT infrastructure with our proactive monitoring, support, and maintenance services.',
      details: ['24/7 Monitoring & Support', 'Network Management', 'Help Desk Services', 'Infrastructure Management']
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <section className="text-center py-12 gradient-bg text-primary-foreground rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Services</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Comprehensive IT solutions designed to accelerate your growth and innovation.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 glassmorphism">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2 text-sm text-primary">Key Areas:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

       <section className="text-center py-12 border-t mt-12">
         <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
         <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We understand that every business is unique. Contact us to discuss your specific requirements and how we can tailor our services for you.
         </p>
         <Link to="/contact">
            <Button size="lg">Get a Personalized Quote</Button>
         </Link>
       </section>
    </motion.div>
  );
};

export default ServicesPage;
