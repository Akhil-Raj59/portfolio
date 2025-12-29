import { motion, AnimatePresence } from "framer-motion";
import { X, FileText } from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  setResumeModalOpen: (value: boolean) => void;
}

const MobileMenu = ({ open, setOpen, scrollToSection, setResumeModalOpen }: Props) => {
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setOpen(false);
  };

  const handleResumeClick = () => {
    setOpen(false);
    setTimeout(() => setResumeModalOpen(true), 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
          style={{ backgroundColor: "rgb(var(--bg-primary))" }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b"
            style={{ borderColor: "rgb(var(--border-default))" }}
          >
            <span 
              className="text-lg font-bold"
              style={{ color: "rgb(var(--text-primary))" }}
            >
              Menu
            </span>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg"
              style={{ color: "rgb(var(--text-primary))" }}
            >
              <X size={24} />
            </motion.button>
          </div>

          {/* Navigation Links */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
            className="flex flex-col items-center justify-center gap-6 h-[calc(100vh-200px)]"
          >
            {navLinks.map((link,) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: { stiffness: 1000, velocity: -100 },
                    },
                  },
                  closed: {
                    y: 50,
                    opacity: 0,
                    transition: {
                      y: { stiffness: 1000 },
                    },
                  },
                }}
                whileHover={{ scale: 1.1, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-medium transition-colors duration-200"
                style={{ color: "rgb(var(--text-muted))" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgb(var(--text-primary))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgb(var(--text-muted))";
                }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Resume Button */}
            <motion.button
              onClick={handleResumeClick}
              variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: 50, opacity: 0 },
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 mt-8 rounded-lg border px-6 py-3 text-base font-medium"
              style={{
                borderColor: "rgb(var(--accent-primary))",
                color: "rgb(var(--accent-primary))",
              }}
            >
              <FileText size={18} />
              View Resume
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
