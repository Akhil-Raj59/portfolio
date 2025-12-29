import { motion } from "framer-motion";
import type { ReactNode } from 'react';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const TechIcon = ({ children }: { children: ReactNode }) => (
  <div className="rounded-xl bg-bg-secondary p-4 text-accent-primary">
    {children}
  </div>
);

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="relative flex items-center justify-center"
    >
      {/* Glow */}
      <div className="absolute -inset-1 rounded-2xl bg-accent-primary opacity-20 blur-2xl" />

      {/* Card */}
      <div className="relative rounded-2xl border border-border bg-card p-8">
        <h3 className="mb-6 text-sm text-text-muted">
          Tech Stack I Work With
        </h3>

        <div className="grid grid-cols-2 gap-6">
          <TechIcon><SiReact size={32} /></TechIcon>
          <TechIcon><SiNodedotjs size={32} /></TechIcon>
          <TechIcon><SiMongodb size={32} /></TechIcon>
          <TechIcon><SiTailwindcss size={32} /></TechIcon>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroVisual;
