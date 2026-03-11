import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 rounded-full mb-8" style={{ background: "var(--gradient-primary)" }} />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a motivated Electronics and Communication Engineering student at Aditya Engineering College
              with a strong passion for software development and cloud computing.
            </p>
            <p>
              I have hands-on experience building cloud-native applications using AWS services and developing
              scalable solutions through real-world projects. I'm an AWS Certified Developer – Associate.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects", value: "5+" },
              { label: "AWS Certified", value: "Yes" },
              { label: "Projects", value: "2+" },
              { label: "Languages", value: "English, Telugu" },
            ].map((item) => (
              <div key={item.label} className="gradient-border rounded-xl p-4 text-center">
                <p className="font-display text-2xl font-bold gradient-text">{item.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
