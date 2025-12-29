import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-6 py-28 lg:px-20 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: `radial-gradient(circle, rgba(var(--accent-primary), 0.4), transparent)`,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 mb-6 rounded-full"
            style={{
              background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
            }}
          />

          <h2 
            className="text-4xl font-bold"
            style={{ color: 'rgb(var(--text-primary))' }}
          >
            Projects & Case Studies
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-lg"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            Selected projects showcasing real-world problem solving,
            architecture, and deployment experience.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid gap-8 sm:grid-cols-2"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;