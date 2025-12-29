import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Lightbulb, Rocket, Target } from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  project: {
    title: string;
    category: string;
    problem: string;
    solution: string;
    impact: string;
    tech: string[];
    live: string;
    github: string;
    color: string;
  };
}

const ProjectModal = ({ open, setOpen, project }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(var(--bg-primary), 0.8)' }}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="relative w-full max-w-3xl rounded-2xl border overflow-hidden"
                style={{
                  backgroundColor: 'rgb(var(--card-bg))',
                  borderColor: 'rgb(var(--border-default))',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top Gradient Bar */}
                <div 
                  className="h-1.5"
                  style={{
                    background: `linear-gradient(to right, rgb(${project.color}), rgba(${project.color}, 0.3))`,
                  }}
                />

                {/* Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xs font-medium"
                        style={{ color: `rgb(${project.color})` }}
                      >
                        {project.category}
                      </motion.span>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="mt-2 text-2xl font-bold"
                        style={{ color: 'rgb(var(--text-primary))' }}
                      >
                        {project.title}
                      </motion.h3>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setOpen(false)}
                      className="p-2 rounded-lg border transition-colors duration-200"
                      style={{
                        borderColor: 'rgb(var(--border-default))',
                        color: 'rgb(var(--text-muted))',
                      }}
                    >
                      <X size={20} />
                    </motion.button>
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 flex gap-3"
                  >
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border font-medium text-sm transition-colors duration-200"
                        style={{
                          borderColor: `rgb(${project.color})`,
                          color: `rgb(${project.color})`,
                        }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                    
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border font-medium text-sm transition-colors duration-200"
                        style={{
                          borderColor: 'rgb(var(--border-default))',
                          color: 'rgb(var(--text-muted))',
                        }}
                      >
                        <Github size={16} />
                        Source Code
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="px-8 pb-8 space-y-6">
                  {/* Problem */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb 
                        size={18} 
                        style={{ color: `rgb(${project.color})` }}
                      />
                      <h4 
                        className="font-semibold"
                        style={{ color: 'rgb(var(--text-primary))' }}
                      >
                        Problem
                      </h4>
                    </div>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgb(var(--text-muted))' }}
                    >
                      {project.problem}
                    </p>
                  </motion.div>

                  {/* Solution */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Rocket 
                        size={18} 
                        style={{ color: `rgb(${project.color})` }}
                      />
                      <h4 
                        className="font-semibold"
                        style={{ color: 'rgb(var(--text-primary))' }}
                      >
                        Solution
                      </h4>
                    </div>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgb(var(--text-muted))' }}
                    >
                      {project.solution}
                    </p>
                  </motion.div>

                  {/* Impact */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Target 
                        size={18} 
                        style={{ color: `rgb(${project.color})` }}
                      />
                      <h4 
                        className="font-semibold"
                        style={{ color: 'rgb(var(--text-primary))' }}
                      >
                        Impact
                      </h4>
                    </div>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgb(var(--text-muted))' }}
                    >
                      {project.impact}
                    </p>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 
                      className="font-semibold mb-3"
                      style={{ color: 'rgb(var(--text-primary))' }}
                    >
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.45 + i * 0.05 }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: `rgba(${project.color}, 0.1)`,
                            borderColor: `rgb(${project.color})`,
                          }}
                          className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200"
                          style={{
                            borderColor: 'rgb(var(--border-default))',
                            color: 'rgb(var(--text-muted))',
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;