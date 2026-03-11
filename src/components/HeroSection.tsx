import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import profileImg from "@/assets/profile.png";

const socials = [
  { icon: Github, href: "https://github.com/Gowtham833" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gowtham-kota-6ab14425a/" },
  { icon: Mail, href: "mailto:kotagowtham3@gmail.com" },
];

const roles = ["Cloud & Software Developer", "AWS Certified Developer", "Full Stack Enthusiast"];

const useTypingEffect = (texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

const HeroSection = () => {
  const typedText = useTypingEffect(roles);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-foreground text-lg mb-2">Hello, It's Me</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">
            Kota Gowtham
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            And I'm a <span className="gradient-text">{typedText}</span>
            <span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-pulse" />
          </h2>
          <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
            Motivated ECE student with strong interest in software development and cloud computing.
            Experienced in building cloud-native applications using AWS services.
          </p>
          <div className="flex gap-4 mb-8">
            {socials.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <a
            href="mailto:kotagowtham3@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary-foreground transition-all hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            Contact Me <ExternalLink size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              className="w-72 h-72 md:w-80 md:h-80 hex-clip animate-float"
              style={{ background: "var(--gradient-glow)", padding: "3px" }}
            >
              <div className="w-full h-full hex-clip bg-card overflow-hidden">
                <img src={profileImg} alt="Gowtham Kota" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -inset-4 hex-clip opacity-20 animate-pulse-glow" style={{ background: "var(--gradient-glow)" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
