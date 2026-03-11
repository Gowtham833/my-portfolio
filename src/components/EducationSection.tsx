import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  { degree: "B.Tech in Electronics and Communication Engineering", school: "Aditya Engineering College, Surampalem", year: "2023 – 2027", grade: "CGPA: 8.05" },
  { degree: "Intermediate (MPC)", school: "M.P.S Junior College, Mandapeta", year: "2021 – 2023", grade: "CGPA: 9.5" },
  { degree: "SSC", school: "Mandapeta Public School, Mandapeta", year: "2021", grade: "CGPA: 10" },
];

const certifications = [
  { name: "AWS Certified Developer – Associate", org: "Amazon Web Services", url: "https://www.credly.com/badges/f3aaa8f7-436b-498a-b4bb-03855f24212c/public_url" },
  { name: "Generative AI Leader Track", org: "Google Cloud", url: "https://drive.google.com/file/d/1ZO-myVqJ1zgZ6XC9oidWWBs_i9OB6mDB/view" },
  { name: "Cloud Foundations", org: "AWS Academy", url: "https://www.credly.com/badges/7b9d9f61-9cd0-41f0-b730-d1d5ceb7db7c/public_url" },
  { name: "Cloud Developing", org: "AWS Academy", url: "https://www.credly.com/badges/e74ba315-6e18-44bb-b929-b6b21096d825/public_url" },
  { name: "Introduction to Internet of Things", org: "NPTEL", url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs147/Course/NPTEL25CS147S105930057110590950.pdf" },
  { name: "Cloud Computing", org: "NPTEL", url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S95750005204239355.pdf" },
];

const EducationSection = () => (
  <section id="education" className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          Education & <span className="gradient-text">Certifications</span>
        </h2>
        <div className="w-16 h-1 rounded-full mb-10" style={{ background: "var(--gradient-primary)" }} />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-primary" size={24} />
            <h3 className="font-display text-xl font-semibold">Academic Background</h3>
          </div>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="gradient-border rounded-xl p-5"
              >
                <p className="text-xs text-accent font-medium">{edu.year}</p>
                <h4 className="font-display font-semibold mt-1">{edu.degree}</h4>
                <p className="text-muted-foreground text-sm">{edu.school}</p>
                <p className="text-primary text-sm font-medium mt-1">{edu.grade}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-accent" size={24} />
            <h3 className="font-display text-xl font-semibold">Certifications</h3>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="gradient-border rounded-xl p-4 block hover:glow-primary transition-shadow"
              >
                <h4 className="font-display font-semibold text-sm">{cert.name}</h4>
                <p className="text-muted-foreground text-xs mt-0.5">{cert.org}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
