import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import heroimage from "../../assets/main-image.png";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const roles = [
  "Scalable Web Applications",
  "High-Performance Frontends",
  "Reliable Backend Systems",
  "Production-Ready Products",
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    color: "255,255,255",
    href: "https://github.com/Akhil-Raj59",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    color: "14,118,168",
    href: "https://linkedin.com/in/akhil-raj59",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    color: "255,0,0",
    href: "https://youtube.com/@akhilraj5415",
  },
];

const Hero = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Auto-rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* Magnetic button */
  const buttonX = useMotionValue(0);
  const buttonY = useMotionValue(0);
  const springX = useSpring(buttonX, { stiffness: 300, damping: 20 });
  const springY = useSpring(buttonY, { stiffness: 300, damping: 20 });

  const emojiX = useMotionValue(0);
  const emojiY = useMotionValue(0);

  const handleHireMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    buttonX.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    buttonY.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
    emojiX.set(e.clientX + 12);
    emojiY.set(e.clientY + 12);
  };

  const resetButton = () => {
    buttonX.set(0);
    buttonY.set(0);
    setShowEmoji(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
    }),
  };

  return (
    <section className="min-h-[calc(100vh-6rem)] flex items-center px-6 lg:px-16 relative overflow-hidden">
      {/* Background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(var(--accent-primary), 0.12) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(var(--accent-secondary), 0.12) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(var(--accent-primary), 0.12) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          {/* Greeting */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex items-center gap-2 mb-3"
          >
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              className="text-2xl"
            >
              👋
            </motion.span>
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "rgb(var(--text-muted))" }}>
              Hi, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight"
            style={{ color: "rgb(var(--text-primary))" }}
          >
            Akhil Raj
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-6"
          >
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-2xl md:text-3xl font-semibold" style={{ color: "rgb(var(--text-muted))" }}>
                I Build
              </span>
              <div className="relative h-[40px] md:h-[48px] min-w-[300px]">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute text-2xl md:text-3xl font-bold bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] bg-clip-text text-transparent"
                >
                  {roles[currentRoleIndex]}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-8 max-w-xl text-lg leading-relaxed"
            style={{ color: "rgb(var(--text-muted))" }}
          >
            Full-stack developer passionate about creating fast, scalable web applications 
            with modern JavaScript technologies and seamless user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-10 flex items-center gap-4 flex-wrap"
          >
            {/* Hire Me Button */}
            <motion.button
              onMouseEnter={() => setShowEmoji(true)}
              onMouseMove={handleHireMove}
              onMouseLeave={resetButton}
              onClick={() => scrollToSection("contact")}
              style={{ x: springX, y: springY }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3.5 rounded-lg text-sm font-semibold text-white shadow-lg overflow-hidden group"
            >
              <span
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
                }}
              />
              <motion.span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, rgb(var(--accent-secondary)), rgb(var(--accent-primary)))`,
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Let's Work Together
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            {/* View Projects Button */}
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-lg border text-sm font-semibold transition-all duration-200"
              style={{
                borderColor: "rgb(var(--border-default))",
                color: "rgb(var(--text-primary))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgb(var(--accent-primary))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgb(var(--border-default))";
              }}
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Emoji Cursor */}
          {showEmoji && (
            <motion.div
              style={{ x: emojiX, y: emojiY }}
              className="fixed pointer-events-none text-2xl z-50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              🚀
            </motion.div>
          )}

          {/* Social Links */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-12 flex gap-4"
          >
            {socialLinks.map(({ icon: Icon, label, color, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onHoverStart={() => setHovered(label)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-1"
              >
                <Icon
                  size={26}
                  style={{
                    color: hovered === label ? `rgb(${color})` : "rgb(var(--text-muted))",
                    filter: hovered === label ? `drop-shadow(0 0 8px rgb(${color}))` : "none",
                    transition: "all 0.3s ease",
                  }}
                />

                {hovered === label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs rounded-lg shadow-xl whitespace-nowrap"
                    style={{
                      backgroundColor: "rgb(var(--card-bg))",
                      border: "1px solid rgb(var(--border-default))",
                      color: "rgb(var(--text-primary))",
                    }}
                  >
                    {label}
                  </motion.div>
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Animated gradient blob */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-96 h-96 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(var(--accent-primary), 0.15), rgba(var(--accent-secondary), 0.15))`,
            }}
          />

          {/* Floating image container */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <div className="relative">
              {/* Glowing border effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-1 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
                }}
              />
              
              {/* Main image container */}
              <div 
                className="relative h-[500px] w-[380px] rounded-2xl overflow-hidden border-2 shadow-2xl"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'rgb(var(--bg-secondary))',
                }}
              >
                <img 
                  src={heroimage} 
                  alt="Akhil Raj" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Info card overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md border-t"
                  style={{
                    backgroundColor: 'rgba(var(--bg-secondary), 0.6)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <p className="text-xs uppercase tracking-wider" style={{ color: "rgb(var(--text-muted))" }}>
                    Currently at
                  </p>
                  <p className="mt-1 text-xl font-bold" style={{ color: "rgb(var(--text-primary))" }}>
                    SaaviGenAI
                  </p>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: 'rgb(var(--accent-primary))' }}
                  >
                    Full Stack Developer
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl"
              style={{ backgroundColor: 'rgba(var(--accent-primary), 0.3)' }}
            />
            
            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full blur-2xl"
              style={{ backgroundColor: 'rgba(var(--accent-secondary), 0.3)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;