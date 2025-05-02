
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-secondary/50">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Code className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted-foreground">
            &copy; {currentYear} Cognivanta. All rights reserved.
          </span>
        </div>
        <nav className="flex space-x-4 mb-4 md:mb-0">
          <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          {/* Add Privacy Policy / Terms links if needed */}
        </nav>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
