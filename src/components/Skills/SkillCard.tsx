import { motion } from "framer-motion";

interface Props {
  title: string;
  items: string[];
}

const SkillCard = ({ title, items }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-border bg-card p-6"
    >
      <h3 className="mb-4 text-lg font-medium text-accent-primary">
        {title}
      </h3>

      <ul className="space-y-2 text-sm text-text-muted">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;
