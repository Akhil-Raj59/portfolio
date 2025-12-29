
import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  // useEffect(() => {
  //   // Optional: Add Lenis smooth scroll if you have it installed
  //   // If not, remove this block
  //   const initLenis = async () => {
  //     try {
  //       const Lenis = (await import("@studio-freight/lenis")).default;
  //       const lenis = new Lenis({
  //         duration: 1.2,
  //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //         smoothWheel: true,
  //       });

  //       function raf(time: number) {
  //         lenis.raf(time);
  //         requestAnimationFrame(raf);
  //       }

  //       requestAnimationFrame(raf);
  //     } catch (error) {
  //       console.log("Lenis not installed, using default scroll");
  //     }
  //   };

  //   initLenis();
  // }, []);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "rgb(var(--bg-primary))" }}>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-350 pt-24"
      >
        {children}
      </motion.main>

      {/* Optional: Footer */}
      <footer className="border-t py-8 text-center text-sm" style={{ borderColor: "rgb(var(--border-default))", color: "rgb(var(--text-muted))" }}>
        <p>© 2024 Akhil Raj. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default MainLayout;