
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Database, Code, Users } from 'lucide-react';

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      {/* Hero Section */}
      <motion.section
        variants={fadeIn}
        initial="visible"
        animate="visible"
        className="text-center py-20 px-4 rounded-lg gradient-bg text-primary-foreground"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Empowering Your Digital Transformation
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Cognivanta delivers cutting-edge IT services and consulting to drive innovation and efficiency in your business.
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <Link to="/services">Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button
          size="lg"
          variant="outline"
          className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
          asChild
        >
          <Link to="/contact">Get In Touch</Link>
        </Button>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Cloud className="h-10 w-10 text-primary mb-4" />, title: 'Cloud Solutions', desc: 'Scalable and secure cloud infrastructure management.' },
            { icon: <Database className="h-10 w-10 text-primary mb-4" />, title: 'Data Analytics', desc: 'Unlock insights from your data for better decision-making.' },
            { icon: <Code className="h-10 w-10 text-primary mb-4" />, title: 'Software Development', desc: 'Custom software tailored to your specific business needs.' },
            { icon: <Users className="h-10 w-10 text-primary mb-4" />, title: 'IT Consulting', desc: 'Strategic guidance to optimize your IT landscape.' },
          ].map((service, index) => (
            <motion.div variants={fadeIn} key={index}>
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300 glassmorphism">
                <CardHeader>
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
         <div className="text-center">
            <Button variant="link" asChild>
                <Link to="/services">Explore All Services <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
         </div>
      </motion.section>

      {/* About Snippet */}
       <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-8 rounded-lg gradient-bg-secondary dark:bg-secondary"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
             <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
             <p className="text-muted-foreground mb-6">
                Cognivanta is a team of passionate technologists and strategists dedicated to helping businesses thrive in the digital age. We combine deep industry expertise with innovative solutions to tackle your most complex challenges.
             </p>
             <Button variant="secondary" asChild>
                <Link to="/about">Learn More About Us</Link>
             </Button>
          </div>
          <div>
             <img  class="rounded-lg shadow-lg w-full h-auto object-cover" alt="Team collaborating in a modern office" src="https://images.unsplash.com/photo-1566833546763-672775492199" />
          </div>
        </div>
       </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center py-16"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Let's discuss how Cognivanta can tailor solutions to meet your unique goals.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">Contact Us Today</Link>
        </Button>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
