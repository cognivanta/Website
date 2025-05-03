
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Code, Briefcase, Info, Mail } from 'lucide-react';

const Header = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: <Code className="h-4 w-4 mr-1" /> },
    { path: '/services', label: 'Services', icon: <Briefcase className="h-4 w-4 mr-1" /> },
    { path: '/about', label: 'About Us', icon: <Info className="h-4 w-4 mr-1" /> },
    { path: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4 mr-1" /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <img src="./logo.png" alt="Logo" className="h-12 w-auto" />
        <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
           <Button asChild variant="outline" size="sm">
             <Link to="/contact">Get a Quote</Link>
           </Button>
           {/* Add Mobile Menu Trigger Here if needed */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
