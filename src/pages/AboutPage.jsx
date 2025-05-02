
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Lightbulb, HeartHandshake as Handshake } from 'lucide-react';

const AboutPage = () => {
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
        initial="hidden"
        animate="visible"
        className="py-16 px-4 rounded-lg gradient-bg-secondary dark:bg-secondary text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Cognivanta</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Driving innovation and empowering businesses through expert IT services and strategic consulting.
        </p>
      </motion.section>

      {/* Our Story */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded by a group of experienced IT professionals, Cognivanta was born from a shared vision: to bridge the gap between complex technology and tangible business results. We saw a need for a partner who not only understands technology deeply but also prioritizes client success and long-term relationships.
          </p>
          <p className="text-muted-foreground">
            Since our inception, we've helped numerous organizations across various industries navigate their digital transformation journeys, implement cutting-edge solutions, and achieve sustainable growth. Our commitment is to be more than just a vendor; we aim to be your trusted technology advisor.
          </p>
        </div>
        <div>
          <img  class="rounded-lg shadow-lg w-full h-auto object-cover" alt="Timeline graphic showing company growth" src="https://images.unsplash.com/photo-1627899045097-e478157bb638" />
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <motion.div variants={fadeIn}>
          <Card className="h-full glassmorphism">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-6 w-6 mr-2 text-primary" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To empower businesses with innovative and reliable IT solutions, enabling them to achieve their strategic objectives and thrive in an ever-evolving digital landscape.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={fadeIn}>
          <Card className="h-full glassmorphism">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-6 w-6 mr-2 text-primary" /> Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the leading IT services and consulting partner, recognized for our expertise, integrity, and unwavering commitment to client success and technological advancement.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: <Users className="h-8 w-8 text-primary mb-2" />, title: 'Client-Centricity', desc: 'Your success is our priority. We listen, understand, and deliver.' },
            { icon: <Lightbulb className="h-8 w-8 text-primary mb-2" />, title: 'Innovation', desc: 'Continuously exploring new technologies to provide cutting-edge solutions.' },
            { icon: <Handshake className="h-8 w-8 text-primary mb-2" />, title: 'Integrity', desc: 'Operating with transparency, honesty, and ethical practices.' },
            { icon: <Target className="h-8 w-8 text-primary mb-2" />, title: 'Excellence', desc: 'Striving for the highest quality in everything we do.' },
          ].map((value, index) => (
            <motion.div variants={fadeIn} key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow duration-300">
              {value.icon}
              <h3 className="text-lg font-semibold mb-1">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Team Snippet (Optional) */}
      {/*
      <motion.section variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Experts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          { Add team member cards here }
        </div>
      </motion.section>
      */}

    </motion.div>
  );
};

export default AboutPage;
