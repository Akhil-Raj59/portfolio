import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, FileText } from "lucide-react";
import MobileMenu from "./MobileMenu";
import ResumeModal from "./ResumeModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "skills", "experience", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/90 backdrop-blur-lg border-b shadow-lg"
            : "bg-transparent"
        }`}
        style={{
          borderColor: scrolled ? "rgb(var(--border-default))" : "transparent",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative text-lg font-bold tracking-wide group"
            style={{ color: "rgb(var(--text-primary))" }}
          >
            <span className="relative z-10">Akhil Raj</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              className="absolute bottom-0 left-0 h-0.5 w-full origin-left"
              style={{
                background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
              }}
            />
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 text-sm lg:flex">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative transition-colors duration-200"
                style={{
                  color:
                    activeSection === link.id
                      ? "rgb(var(--text-primary))"
                      : "rgb(var(--text-muted))",
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{
                      background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Resume Button */}
            <motion.button
              onClick={() => setResumeModalOpen(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200"
              style={{
                borderColor: "rgb(var(--border-default))",
                color: "rgb(var(--text-primary))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "rgb(var(--accent-primary))";
                e.currentTarget.style.backgroundColor =
                  "rgba(var(--accent-primary), 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "rgb(var(--border-default))";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <FileText size={16} />
              Resume
            </motion.button>

            {/* Mobile Menu Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              style={{ color: "rgb(var(--text-primary))" }}
            >
              <Menu size={22} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        open={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        setResumeModalOpen={setResumeModalOpen}
      />
      
      <ResumeModal open={resumeModalOpen} setOpen={setResumeModalOpen} />
    </>
  );
};

export default Navbar;