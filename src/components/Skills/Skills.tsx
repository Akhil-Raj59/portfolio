import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Shadcn UI"],
    icon: "⚛️",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Webhooks", "Sharding"],
    icon: "⚙️",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Auth & APIs",
    items: ["JWT", "OAuth", "REST APIs", "Swagger", "WebSocket"],
    icon: "🔐",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Tools & Practices",
    items: ["Git", "Git Flow", "Debugging", "3rd-party Integration"],
    icon: "🛠️",
    gradient: "from-orange-500 to-red-500",
  },
];

const SkillCard = ({ title, items, icon, gradient, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.6, 0.05, 0.01, 0.9]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-2xl border cursor-pointer overflow-hidden"
      styleObject={{
        borderColor: 'rgb(var(--border-default))',
        backgroundColor: 'rgb(var(--card-bg))',
      }}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-xl`}
      />
      
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(var(--accent-primary), 0.15), transparent 40%)`,
        }}
      />

      {/* Card content */}
      <div className="relative p-6" style={{ transform: "translateZ(20px)" }}>
        {/* Icon with floating animation */}
        <motion.div
          animate={{
            y: isHovered ? [-2, 2, -2] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="mb-4 text-4xl"
        >
          {icon}
        </motion.div>

        {/* Title with gradient on hover */}
        <motion.h3
          className="mb-5 text-lg font-semibold"
          // animate={{
          //   backgroundImage: isHovered 
          //     ? `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`
          //     : 'none',
          //   WebkitBackgroundClip: isHovered ? 'text' : 'unset',
          //   WebkitTextFillColor: isHovered ? 'transparent' : 'rgb(var(--accent-primary))',
          // }}
          // transition={{ duration: 0.3 }}
          style={{
            color: 'rgb(var(--accent-primary))',
          }}
        >
          {title}
        </motion.h3>

        {/* Skills list with stagger animation */}
        <ul className="space-y-2.5">
          {items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1 + i * 0.05,
                duration: 0.4 
              }}
              whileHover={{ x: 6, color: 'rgb(var(--text-primary))' }}
              className="text-sm flex items-center gap-2 transition-colors duration-200"
              style={{ 
                color: 'rgb(var(--text-muted))',
              }}
            >
              <motion.span
                whileHover={{ scale: 1.3, rotate: 90 }}
                className="inline-block text-accent-primary"
                style={{ color: 'rgb(var(--accent-primary))' }}
              >
                •
              </motion.span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Bottom glow effect */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{
          background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
        }}
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 lg:px-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(var(--accent-primary), 0.3), transparent)`,
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(var(--accent-secondary), 0.3), transparent)`,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 mb-6 rounded-full"
            style={{
              background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
            }}
          />
          
          <h2 className="text-3xl font-semibold" style={{ color: 'rgb(var(--text-primary))' }}>
            Skills & Expertise
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            Technologies and tools I use to build scalable, production-ready applications.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>

        {/* Optional: Stats or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
            Continuously learning and adapting to new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;