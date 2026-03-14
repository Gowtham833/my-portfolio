import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mlgplpdw");

  const contactDetails = [
    { icon: Mail, label: "Email", value: "kotagowtham3@gmail.com", href: "mailto:kotagowtham3@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7095036833", href: "tel:+917095036833" },
    { icon: Github, label: "GitHub", value: "github.com/Gowtham833", href: "https://github.com/Gowtham833" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/gowtham-kota", href: "https://www.linkedin.com/in/gowtham-kota-6ab14425a/" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 rounded-full mb-10" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8"
            style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
          >
            {state.succeeded ? (
              <div className="text-center p-8 border border-green-500/30 bg-green-500/10 rounded-xl">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thanks for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
                </div>

                <div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full px-6 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 text-lg font-semibold rounded-lg text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Details Below Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-4 mt-8"
          >
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border rounded-xl p-5 flex items-center gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
                  <item.icon size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-sm">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © 2025 Kota Gowtham. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
