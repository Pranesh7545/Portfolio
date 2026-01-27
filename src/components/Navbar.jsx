import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-sm"
          : "bg-white/70"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">
        {/* Left spacer (no branding) */}
        <div className="w-6" />

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -1 }}
              className="text-slate-600 hover:text-slate-900 relative group transition-colors"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-600 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-700 hover:text-slate-900 transition-colors"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
