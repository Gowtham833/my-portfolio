import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-16 h-1 rounded-full mb-10" style={{ background: "var(--gradient-primary)" }} />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        {[
          { icon: Mail, label: "Email", value: "kotagowtham3@gmail.com", href: "mailto:kotagowtham3@gmail.com" },
          { icon: Phone, label: "Phone", value: "+91 7095036833", href: "tel:+917095036833" },
          { icon: Github, label: "GitHub", value: "github.com/Gowtham833", href: "https://github.com/Gowtham833" },
          { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/gowtham-kota", href: "https://www.linkedin.com/in/gowtham-kota-6ab14425a/" },
        ].map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="gradient-border rounded-xl p-5 flex items-center gap-4 hover:glow-primary transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
              <item.icon size={22} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="font-medium text-sm">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground text-sm">
        © 2025 Kota Gowtham. All rights reserved.
      </div>
    </div>
  </section>
);

export default ContactSection;
