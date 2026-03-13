import React, { useState, useRef, useEffect } from 'react'
import logo from "../../assets/cognivanta.svg"
import AnimatedText from '../text/AnimatedText';
import { useLenis } from 'lenis/react';

type NavLinkProps = {
  label: string;
  href: string;
}

const NavBar: React.FC = () => {
  const NAV_LINKS = [
    { label: "About", href: "/#about" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/contact" },
    { label: "Training", href: "/training" },
    { label: "Careers", href: "/careers" },
  ];

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 5) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true);  // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
    const lenis = useLenis();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Check if it's an anchor link and we're on the homepage
      if (href.startsWith('/#') && window.location.pathname === '/') {
        const targetId = href.substring(2); // Remove '/#'
        const element = document.getElementById(targetId);
        if (element) {
          e.preventDefault();
          lenis?.scrollTo(element);
        }
      }
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        className="group inline-flex flex-col overflow-hidden text-[1rem] h-[1.15rem] leading-[1.15rem] no-underline text-headline hover:text-hovernavlink"
      >
        <span
          className="flex font-normal tracking-wide uppercase whitespace-nowrap"
        >
          <AnimatedText text={label} className="text-xs tracking-[0.2em] block" />
        </span>
      </a>
    );
  }

  return (
    <>
      {/* Nav bar */}
      <header
        className={`sticky top-0 w-full inset-x-0 z-50 border-0 bg-background h-18
        transition-transform duration-400 delay-100 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-100"}
        `}

      >
        <div className="section-padding">
          <div className="flex items-center justify-between gap-8 pt-5">

            {/* Logo */}
            <a href="/" className="relative w-12 shrink-0 text-neutral-900 no-underline">
              <img src={logo} />
            </a>

            {/* Desktop Navlinks */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center list-none gap-7">
                {NAV_LINKS.map((link) => (
                  <NavLink key={link.label} label={link.label} href={link.href} />
                ))}
              </ul>

            </div>


          </div>
        </div>
      </header>
    </>
  )
}

export default NavBar;
