import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ExperienceItem from "./ExperienceItem";
import { experienceData } from "../../data/experience";

const Experience = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative px-6 py-28 lg:px-20 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: `radial-gradient(circle, rgba(var(--accent-primary), 0.3), transparent)`,
          }}
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: `radial-gradient(circle, rgba(var(--accent-secondary), 0.3), transparent)`,
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 mx-auto mb-6 rounded-full"
            style={{
              background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
            }}
          />
          
          <h2 
            className="text-4xl font-bold"
            style={{ color: 'rgb(var(--text-primary))' }}
          >
            Experience
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            Real-world experience building and deploying production applications
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line with Progress */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 hidden lg:block overflow-hidden">
            <div 
              className="w-full h-full"
              style={{ backgroundColor: 'rgb(var(--border-default))' }}
            />
            <motion.div
              style={{ 
                height: lineHeight,
                background: `linear-gradient(to bottom, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
              }}
              className="absolute top-0 left-0 w-full origin-top"
            />
          </div>

          <div className="flex flex-col gap-24">
            {experienceData.map((item, index) => (
              <ExperienceItem
                key={index}
                {...item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* End Marker */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          className="mt-24 flex justify-center"
        >
          <div 
            className="w-3 h-3 rounded-full"
            style={{
              background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
              boxShadow: `0 0 20px rgba(var(--accent-primary), 0.5)`,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
