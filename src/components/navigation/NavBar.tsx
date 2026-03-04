import React, { useState, useRef, useEffect } from 'react'
import logo from "../../assets/cognivanta.svg"

type NavLinkProps = {
  label: string;
  href: string;
}

const NavBar: React.FC = () => {
  const NAV_LINKS = [
    { label: "About",     href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Services",  href: "#services" },
    { label: "Contact",   href: "/contact" },
    { label: "Open Jobs", href: "https://brix-it.factorialhr.pt/", external: true },
  ];

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
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


  const NavLink: React.FC<NavLinkProps> = ({label, href}) => {
    return(
      <a
      href={href}
      className="group inline-flex flex-col overflow-hidden text-[1rem] h-[1.15em] leading-[1.15em] no-underline text-neutral-900"
      >
        <span
          className="flex font-normal tracking-wide uppercase whitespace-nowrap
                     transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]
                     group-hover:-translate-y-full"
        >
          { label }
        </span>
        <span
          className="flex font-normal tracking-wide uppercase whitespace-nowrap text-hovernavlink
                     transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]
                     group-hover:-translate-y-full"
          aria-hidden
        >
          {label}
        </span>
      </a>
    );
  }

  return (
    <>
      {/* Nav bar */}
      <header
        className="fixed inset-x-0 top-0 z-50 border-0 bg-background transition-transform duration-500 ease-in-out"
        style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}

      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="flex items-center justify-between h-[68px] gap-8">

            {/* Logo */}
            <a href="/" className="relative w-[105px] shrink-0 text-neutral-900 no-underline">
              <img src={logo} />
            </a>

            {/* Desktop Navlinks */}
            <div className="hidden lg:flex items-center gap-8">
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
