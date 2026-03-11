import { motion } from "framer-motion";
import { Cloud, Code, Terminal, Globe } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    icon: Code,
    items: ["Python", "C", "HTML", "CSS"],
  },
  {
    category: "AWS Cloud Services",
    icon: Cloud,
    items: ["EC2", "IAM", "VPC", "Lambda", "API Gateway", "S3", "DynamoDB", "RDS", "Load Balancer", "Auto Scaling", "SES", "SageMaker"],
  },
  {
    category: "Tools & Platforms",
    icon: Terminal,
    items: ["Git", "GitHub", "Docker", "MATLAB"],
  },
  {
    category: "Coding Profiles",
    icon: Globe,
    items: ["LeetCode", "CodeChef", "HackerRank"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 rounded-full mb-10" style={{ background: "var(--gradient-primary)" }} />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="gradient-border rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <skill.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full text-sm bg-secondary text-foreground border border-border">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
