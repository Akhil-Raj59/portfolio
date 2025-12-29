import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Akhil-Raj59",
      color: "255, 255, 255",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/akhil-raj59",
      color: "10, 102, 194",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:532akhil@gmail.com",
      color: "239, 68, 68",
    },
  ];

  return (
    <section
      id="contact"
      className="relative px-6 py-32 lg:px-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(var(--accent-primary), 0.15), rgba(var(--accent-secondary), 0.15))`,
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
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
            className="text-4xl md:text-5xl font-bold"
            style={{ color: 'rgb(var(--text-primary))' }}
          >
            Let's Build Something{" "}
            <span
              style={{
                background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Impactful
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-lg"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            Have an idea, opportunity, or project in mind? I'm always open to
            meaningful conversations and exciting collaborations.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-2"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            <MapPin size={16} style={{ color: 'rgb(var(--accent-primary))' }} />
            <span className="text-sm">Based in India • Available for Remote Work</span>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <ContactForm />

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <p 
            className="text-center text-sm mb-6"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            Or connect with me on
          </p>

          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-4 rounded-xl border transition-all duration-300"
                  style={{
                    borderColor: 'rgb(var(--border-default))',
                    backgroundColor: 'rgb(var(--card-bg))',
                  }}
                  title={link.name}
                >
                  <Icon 
                    size={24} 
                    className="transition-colors duration-300"
                    style={{ 
                      color: 'rgb(var(--text-muted))',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = `rgb(${link.color})`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgb(var(--text-muted))';
                    }}
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;