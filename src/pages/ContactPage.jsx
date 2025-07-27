
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission (using localStorage for now)
    try {
      const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      const newMessage = { ...formData, timestamp: new Date().toISOString() };
      localStorage.setItem('contactMessages', JSON.stringify([...existingMessages, newMessage]));

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
        variant: "default", // Use default variant for success
      });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error("Failed to save message:", error);
      toast({
        title: "Submission Failed",
        description: "Could not send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

   const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Get In Touch</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We're here to help. Contact us for inquiries, support, or to discuss your next project.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll respond as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Inquiry Subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="space-y-6 pt-8 md:pt-0"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground">Address</h3>
                <p>Cognivanta Singapore Pte. Ltd.
                  Level 39, Marina Bay Financial Centre Tower 2
                  10 Marina Boulevard
                  Singapore 018983
                  Republic of Singapore</p>
                <p>Plot No. C‑36, Industrial Area Phase 2, Sector 58
                    Mohali, Punjab 160055
                    India</p>  
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground">Phone</h3>
                <p>+91 9899478431</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <p>info@cognivanta.com</p>
              </div>
            </div>
          </div>
           {/* Optional: Add a simple map embed here if needed */}
           {/* <div className="mt-6 h-64 bg-secondary rounded-lg"> Map Placeholder </div> */}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
