import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleWhatsApp = () => {
    const phoneNumber = "919717411628"; // Your WhatsApp number with country code
    const text = formData.name && formData.message
      ? `Hi! I'm ${formData.name}.%0A%0A${formData.message}%0A%0AEmail: ${formData.email}`
      : "Hi! I'd like to discuss a project with you.";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email option using mailto
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    const mailtoUrl = `mailto:532akhil@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl"
    >
      {/* Quick Contact Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {/* WhatsApp Button */}
        <motion.button
          onClick={handleWhatsApp}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden rounded-xl border p-6 transition-all duration-300"
          style={{
            borderColor: 'rgb(var(--border-default))',
            backgroundColor: 'rgb(var(--card-bg))',
          }}
        >
          {/* Hover gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"
          />
          
          <div className="relative flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-3 rounded-lg bg-green-500/10"
            >
              <MessageCircle size={24} className="text-green-500" />
            </motion.div>
            
            <div className="text-left flex-1">
              <h3 
                className="font-semibold mb-1"
                style={{ color: 'rgb(var(--text-primary))' }}
              >
                WhatsApp
              </h3>
              <p 
                className="text-sm"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                Quick response guaranteed
              </p>
            </div>
            
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-green-500"
            >
              →
            </motion.div>
          </div>
        </motion.button>

        {/* Call Button */}
        <motion.a
          href="tel:+919717411628"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden rounded-xl border p-6 transition-all duration-300"
          style={{
            borderColor: 'rgb(var(--border-default))',
            backgroundColor: 'rgb(var(--card-bg))',
          }}
        >
          {/* Hover gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"
          />
          
          <div className="relative flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-3 rounded-lg"
              style={{ backgroundColor: 'rgba(var(--accent-primary), 0.1)' }}
            >
              <Phone size={24} style={{ color: 'rgb(var(--accent-primary))' }} />
            </motion.div>
            
            <div className="text-left flex-1">
              <h3 
                className="font-semibold mb-1"
                style={{ color: 'rgb(var(--text-primary))' }}
              >
                Call Me
              </h3>
              <p 
                className="text-sm"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                Let's talk directly
              </p>
            </div>
            
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              style={{ color: 'rgb(var(--accent-primary))' }}
            >
              →
            </motion.div>
          </div>
        </motion.a>
      </div>

      {/* Divider */}
      <div className="relative mb-8">
        <div 
          className="absolute inset-0 flex items-center"
          aria-hidden="true"
        >
          <div className="w-full border-t" style={{ borderColor: 'rgb(var(--border-default))' }} />
        </div>
        <div className="relative flex justify-center">
          <span 
            className="px-4 text-sm"
            style={{ 
              backgroundColor: 'rgb(var(--bg-primary))',
              color: 'rgb(var(--text-muted))'
            }}
          >
            Or send a detailed message
          </span>
        </div>
      </div>

      {/* Contact Form */}
      <motion.form
        whileHover={{ scale: 1.01 }}
        className="rounded-2xl border relative overflow-hidden"
        style={{
          borderColor: 'rgb(var(--border-default))',
          backgroundColor: 'rgb(var(--card-bg))',
        }}
        onSubmit={handleEmailSubmit}
      >
        {/* Top gradient line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 right-0 h-0.5 origin-left"
          style={{
            background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
          }}
        />

        <div className="p-8 space-y-6">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <label 
              className="block text-sm font-medium mb-2"
              style={{ color: 'rgb(var(--text-primary))' }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-lg border bg-transparent px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-offset-2"
              style={{
                borderColor: 'rgb(var(--border-default))',
                color: 'rgb(var(--text-primary))',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgb(var(--accent-primary))';
                e.target.style.ringColor = 'rgba(var(--accent-primary), 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgb(var(--border-default))';
              }}
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <label 
              className="block text-sm font-medium mb-2"
              style={{ color: 'rgb(var(--text-primary))' }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="w-full rounded-lg border bg-transparent px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-offset-2"
              style={{
                borderColor: 'rgb(var(--border-default))',
                color: 'rgb(var(--text-primary))',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgb(var(--accent-primary))';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgb(var(--border-default))';
              }}
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <label 
              className="block text-sm font-medium mb-2"
              style={{ color: 'rgb(var(--text-primary))' }}
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your project, idea, or opportunity..."
              required
              className="w-full resize-none rounded-lg border bg-transparent px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-offset-2"
              style={{
                borderColor: 'rgb(var(--border-default))',
                color: 'rgb(var(--text-primary))',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgb(var(--accent-primary))';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgb(var(--border-default))';
              }}
            />
          </motion.div>

          {/* Submit Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white"
              style={{
                background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
              }}
            >
              <Mail size={16} />
              Send Email
            </motion.button>

            {/* WhatsApp with Form Data */}
            <motion.button
              type="button"
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium transition-colors duration-200"
              style={{
                borderColor: 'rgb(var(--border-default))',
                color: 'rgb(var(--text-primary))',
              }}
            >
              <MessageCircle size={16} className="text-green-500" />
              Send via WhatsApp
            </motion.button>
          </div>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;