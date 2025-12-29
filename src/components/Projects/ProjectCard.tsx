import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface Props {
  project: {
    title: string;
    category: string;
    description: string;
    problem: string;
    solution: string;
    impact: string;
    tech: string[];
    live: string;
    github: string;
    color: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group rounded-2xl border relative overflow-hidden"
        style={{
          borderColor: 'rgb(var(--border-default))',
          backgroundColor: 'rgb(var(--card-bg))',
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, rgba(${project.color}, 0.1), transparent 70%)`,
          }}
        />

        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="absolute top-0 left-0 right-0 h-1 origin-left"
          style={{
            background: `linear-gradient(to right, rgb(${project.color}), transparent)`,
          }}
        />

        <div className="relative p-6">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.1 }}
            className="flex items-center gap-2"
          >
            <Sparkles size={14} style={{ color: `rgb(${project.color})` }} />
            <span 
              className="text-xs font-medium"
              style={{ color: `rgb(${project.color})` }}
            >
              {project.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="mt-3 text-xl font-semibold"
            style={{ color: 'rgb(var(--text-primary))' }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="mt-3 text-sm leading-relaxed"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="rounded-full border px-3 py-1 text-xs"
                style={{
                  borderColor: 'rgb(var(--border-default))',
                  color: 'rgb(var(--text-muted))',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.6 }}
            className="mt-6 flex items-center gap-4"
          >
            {/* View Case Study */}
            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium flex items-center gap-1.5"
              style={{ color: `rgb(${project.color})` }}
            >
              View Case Study
              <motion.span
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.button>

            {/* Links */}
            <div className="flex items-center gap-3 ml-auto">
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg border transition-colors duration-200"
                  style={{
                    borderColor: 'rgb(var(--border-default))',
                    color: 'rgb(var(--text-muted))',
                  }}
                  title="Live Demo"
                >
                  <ExternalLink size={16} />
                </motion.a>
              )}
              
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg border transition-colors duration-200"
                  style={{
                    borderColor: 'rgb(var(--border-default))',
                    color: 'rgb(var(--text-muted))',
                  }}
                  title="Source Code"
                >
                  <Github size={16} />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Corner Glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 0.2 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: `rgb(${project.color})` }}
        />
      </motion.div>

      <ProjectModal
        open={open}
        setOpen={setOpen}
        project={project}
      />
    </>
  );
};

export default ProjectCard;