import React, { useState, useRef, useEffect } from 'react'
import logo from "../../assets/cognivanta.svg"
import AnimatedText from '../text/AnimatedText';
import { useLenis } from 'lenis/react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';

type NavLinkProps = {
  label: string;
  href: string;
  onClick?: () => void;
}

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
  { label: "Training", href: "/training" },
  { label: "Careers", href: "/careers" },
];

const NavBar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 5) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const NavLink: React.FC<NavLinkProps> = ({ label, href, onClick }) => {
    const lenis = useLenis();
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      trackEvent('click_nav_link', {
        link_url: href,
        link_text: label
      });

      if (href.startsWith('/#')) {
        e.preventDefault();
        const sectionId = href.substring(2);

        if (window.location.pathname === '/') {
          const element = document.getElementById(sectionId);
          if (element) {
            lenis?.scrollTo(element);
          }
        } else {
          navigate('/', { state: { scrollTo: sectionId } });
        }
      }

      onClick?.();
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        className="group inline-flex flex-col overflow-hidden text-[1rem] h-[1.15rem] leading-[1.15rem] no-underline text-headline hover:text-hovernavlink"
      >
        <span className="flex font-normal tracking-wide uppercase whitespace-nowrap">
          <AnimatedText text={label} className="text-xs tracking-[0.2em] block" />
        </span>
      </a>
    );
  };

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
            <a
              href="/"
              onClick={() => trackEvent("click_button", { button_name: 'Home Logo', clicked_from_route: location.pathname })}
              className="relative w-12 shrink-0 text-neutral-900 no-underline"
            >
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

            {/* Hamburger Button — mobile & tablet only */}
            <button
              id="hamburger-btn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-md focus:outline-none group"
            >
              {/* Top bar */}
              <span
                className={`block w-6 h-[2px] bg-headline rounded-full transition-all duration-300 ease-in-out origin-center
                  ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              {/* Middle bar */}
              <span
                className={`block w-6 h-[2px] bg-headline rounded-full transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              {/* Bottom bar */}
              <span
                className={`block w-6 h-[2px] bg-headline rounded-full transition-all duration-300 ease-in-out origin-center
                  ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 bg-headline/20 backdrop-blur-sm transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] bg-background
          flex flex-col pt-24 px-8 pb-10
          shadow-2xl
          transition-transform duration-400 ease-in-out
          lg:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button inside drawer */}
        <button
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-md text-headline hover:text-hovernavlink transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Mobile nav links */}
        <nav>
          <ul className="flex flex-col gap-6 list-none">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.label}
                style={{
                  transitionDelay: menuOpen ? `${i * 50 + 80}ms` : '0ms',
                }}
                className={`transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
              >
                <NavLink
                  label={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="mt-auto pt-6 border-t border-border">
          <p className="text-xs text-lighttext tracking-widest uppercase">Cognivanta</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
