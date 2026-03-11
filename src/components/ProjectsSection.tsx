import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Serverless Job Application Tracking System (ATS)",
    type: "Team Project",
    desc: "Cloud-native, event-driven serverless system to manage large-scale recruitment workflows with role-based access control and strict workflow state transitions.",
    tech: ["AWS Lambda", "API Gateway", "Step Functions", "SQS", "SES", "Cognito"],
    github: "https://github.com/Gowtham833/serverless-job-application-tracking-system.git",
  },
  {
    title: "AI Resume Role Predictor",
    type: "Personal Project",
    desc: "Intelligent resume analysis system that predicts top 3 suitable job roles using ML classification with scikit-learn. Supports PDF and DOCX uploads.",
    tech: ["Python", "scikit-learn", "Machine Learning", "NLP"],
    github: "https://github.com/Gowtham833/resume_analysis",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 rounded-full mb-10" style={{ background: "var(--gradient-primary)" }} />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="gradient-border rounded-xl p-6 group hover:glow-primary transition-shadow duration-300"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">{project.type}</span>
            <h3 className="font-display text-xl font-semibold mt-2 mb-3">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
            >
              <Github size={16} /> View on GitHub <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
