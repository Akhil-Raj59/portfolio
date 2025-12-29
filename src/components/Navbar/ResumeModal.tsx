import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";
import resume from "../../assets/Akhil-Raj-Resume.pdf"

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const ResumeModal = ({ open, setOpen }: Props) => {
  const resumePath = resume; // Update with your actual path

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Akhil_Raj_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    window.open(resumePath, "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 backdrop-blur-sm"
            style={{ backgroundColor: "rgba(var(--bg-primary), 0.95)" }}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-[90vh] max-w-5xl rounded-2xl border overflow-hidden"
                style={{
                  backgroundColor: "rgb(var(--card-bg))",
                  borderColor: "rgb(var(--border-default))",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between p-4 border-b"
                  style={{
                    borderColor: "rgb(var(--border-default))",
                    background: `linear-gradient(to right, rgba(var(--accent-primary), 0.05), transparent)`,
                  }}
                >
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "rgb(var(--text-primary))" }}
                  >
                    Resume - Akhil Raj
                  </h3>

                  <div className="flex items-center gap-2">
                    {/* Download Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm text-white"
                      style={{
                        background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
                      }}
                    >
                      <Download size={16} />
                      Download
                    </motion.button>

                    {/* Open in New Tab */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleOpenNewTab}
                      className="p-2 rounded-lg border"
                      style={{
                        borderColor: "rgb(var(--border-default))",
                        color: "rgb(var(--text-muted))",
                      }}
                      title="Open in new tab"
                    >
                      <ExternalLink size={18} />
                    </motion.button>

                    {/* Close Button */}
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setOpen(false)}
                      className="p-2 rounded-lg border"
                      style={{
                        borderColor: "rgb(var(--border-default))",
                        color: "rgb(var(--text-muted))",
                      }}
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                </div>

                {/* PDF Viewer */}
                <div className="w-full h-[calc(100%-4rem)] bg-gray-100">
                  <iframe
                    src={`${resumePath}#toolbar=0`}
                    className="w-full h-full"
                    title="Resume PDF"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;