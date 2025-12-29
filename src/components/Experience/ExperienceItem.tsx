import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

interface Props {
  company: string;
  companyUrl: string;
  role: string;
  duration: string;
  description: string[];
  highlight: string;
  color: string;
  index: number;
}

const ExperienceItem = ({
  company,
  companyUrl,
  role,
  duration,
  description,
  highlight,
  color,
  index,
}: Props) => {
  const isLeft = index % 2 === 0;
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
      className={`relative flex w-full ${
        isLeft ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      {/* Timeline Dot with Pulse */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="absolute left-1/2 top-8 hidden lg:block -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{
            boxShadow: [
              `0 0 0 0px rgba(${color}, 0.4)`,
              `0 0 0 12px rgba(${color}, 0)`,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="relative"
        >
          <div
            className="h-5 w-5 rounded-full border-4"
            style={{
              backgroundColor: `rgb(${color})`,
              borderColor: 'rgb(var(--bg-primary))',
            }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              border: `2px dashed rgba(${color}, 0.3)`,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group w-full lg:w-[45%] rounded-2xl border relative overflow-hidden"
        style={{
          borderColor: 'rgb(var(--border-default))',
          backgroundColor: 'rgb(var(--card-bg))',
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, rgba(${color}, 0.08), transparent 70%)`,
          }}
        />

        {/* Glowing top border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-0 left-0 right-0 h-0.5 origin-left"
          style={{
            background: `linear-gradient(to right, rgb(${color}), transparent)`,
          }}
        />

        <div className="relative p-8">
          {/* Highlight Badge */}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: `rgba(${color}, 0.1)`,
              color: `rgb(${color})`,
            }}
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: `rgb(${color})` }}
            />
            {highlight}
          </motion.span>

          {/* Role & Company */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 
              className="mt-4 text-xl font-semibold"
              style={{ color: 'rgb(var(--text-primary))' }}
            >
              {role}
            </h3>

            <div className="mt-2 flex items-center gap-2 flex-wrap">
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2 transition-all duration-300"
                style={{ color: `rgb(${color})` }}
              >
              
                {company}
                <ExternalLink 
                  size={14} 
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
              <span className="text-text-muted text-sm">•</span>
              <span 
                className="text-sm"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                {duration}
              </span>
            </div>
          </motion.div>

          {/* Description List */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.4 },
              },
            }}
            className="mt-6 space-y-3"
          >
            {description.map((point, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-3 text-sm group/item"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                <motion.span
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  className="mt-1 shrink-0"
                  style={{ color: `rgb(${color})` }}
                >
                  ▸
                </motion.span>
                <span className="group-hover/item:text-text-primary transition-colors duration-200">
                  {point}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Corner decoration */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl pointer-events-none"
          style={{ backgroundColor: `rgb(${color})` }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ExperienceItem;