import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-display text-xl font-bold gradient-text">Gowtham.</span>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-sm font-medium transition-colors ${
                active === link ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
