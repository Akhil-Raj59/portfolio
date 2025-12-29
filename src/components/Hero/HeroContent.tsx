import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React & Node Specialist",
];

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center space-y-6">
      
      {/* Name */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-text-muted text-sm tracking-wide"
      >
        Hi, I’m Akhil Raj
      </motion.p>

      {/* Role Animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-semibold leading-tight lg:text-5xl"
      >
        <span className="text-text-primary">I build </span>
        <motion.span
          className="text-accent-primary"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          {roles[0]}
        </motion.span>
      </motion.h1>

      {/* Summary */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-xl text-text-muted"
      >
        Full Stack Web Developer experienced in building scalable, production-ready
        applications using React, Node.js, and MongoDB, with real-world deployment
        experience.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="rounded-lg bg-accent-primary px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          View Projects
        </a>

        <a
          href="/Akhil_Raj_Resume.pdf"
          className="rounded-lg border border-border px-6 py-3 text-sm text-text-primary transition hover:bg-bg-secondary"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default HeroContent;
