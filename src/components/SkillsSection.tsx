import { motion } from "framer-motion";
import { Cloud, Code, Terminal, Globe } from "lucide-react";
import { 
  FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker, FaHackerrank,
  FaServer, FaDatabase, FaShieldAlt, FaSitemap, FaCode, FaObjectGroup, 
  FaBalanceScale, FaChartLine, FaEnvelope, FaBrain 
} from "react-icons/fa";
import { SiC, SiLeetcode, SiCodechef } from "react-icons/si";

const skills = [
  {
    category: "Programming Languages",
    icon: Code,
    items: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    category: "AWS Cloud Services",
    icon: Cloud,
    items: [
      { name: "EC2", icon: FaServer, color: "#FF9900" },
      { name: "IAM", icon: FaShieldAlt, color: "#FF9900" },
      { name: "VPC", icon: FaSitemap, color: "#FF9900" },
      { name: "Lambda", icon: FaCode, color: "#FF9900" },
      { name: "API Gateway", icon: FaSitemap, color: "#FF9900" },
      { name: "S3", icon: FaObjectGroup, color: "#FF9900" },
      { name: "DynamoDB", icon: FaDatabase, color: "#FF9900" },
      { name: "RDS", icon: FaDatabase, color: "#FF9900" },
      { name: "Load Balancer", icon: FaBalanceScale, color: "#FF9900" },
      { name: "Auto Scaling", icon: FaChartLine, color: "#FF9900" },
      { name: "SES", icon: FaEnvelope, color: "#FF9900" },
      { name: "SageMaker", icon: FaBrain, color: "#FF9900" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Terminal,
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "MATLAB", icon: null, color: "#E16737" },
    ],
  },
  {
    category: "Coding Profiles",
    icon: Globe,
    items: [
      { name: "LeetCode", icon: SiLeetcode, color: "#FFA116" },
      { name: "CodeChef", icon: SiCodechef, color: "#5B4638" },
      { name: "HackerRank", icon: FaHackerrank, color: "#00EA64" },
    ],
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
                <span key={item.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-secondary text-foreground border border-border">
                  {item.icon && <item.icon className="w-4 h-4" style={{ color: item.color }} />}
                  {item.name}
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
