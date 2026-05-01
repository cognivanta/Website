import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
  { label: "Training", href: "/training" },
  { label: "Careers", href: "/careers" },
];

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    setOpen(false);

    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);

      if (window.location.pathname === "/") {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/", { state: { scrollTo: sectionId } });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden relative z-50 w-8 h-6 flex flex-col justify-between mt-6 ml-8"
      >
        <span
          className={`block h-1 bg-black transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-1 bg-black transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-1 bg-black transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Menu Content */}
        <div className="flex flex-col justify-center h-full px-8 gap-8">

          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              className="text-left text-lg uppercase tracking-widest hover:text-gray-400 transition"
            >
              {link.label}
            </button>
          ))}

        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;