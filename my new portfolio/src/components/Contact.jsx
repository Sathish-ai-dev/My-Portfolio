import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactMethods = [
    { icon: '📧', label: 'Email', value: 'sathishsubramani9043@gmail.com', link: 'mailto:sathishsubramani9043@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 9043736745', link: 'tel:+919043736745' },
    { icon: '📍', label: 'Location', value: 'Pudukkottai, TamilNadu, India-622505', link: '#' },
  ]

  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -80, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 80, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  const socialButtons = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sathish-ai-dev',
      icon: (
        <svg className="w-5 h-5 fill-current text-primary-medium" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sathish-ai-dev',
      icon: (
        <svg className="w-5 h-5 fill-current text-primary-medium" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.3em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.15em' }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-primary-medium text-sm font-medium tracking-wider uppercase"
          >
            Get In Touch
          </motion.span>
          <div className="relative inline-block mt-4">
            <h2 className="text-5xl md:text-6xl font-display font-bold glow-text">
              Contact <span className="text-primary">Me</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              style={{ originX: 0 }}
              className="h-1 mt-2 rounded-full bg-gradient-to-r from-primary-medium via-primary to-primary-dark"
            />
          </div>
          <p className="text-lg text-primary-light/60 mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            variants={cardVariantsLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-bold mb-4">Let's work together</h3>
              <p className="text-primary-light/70 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best
                to get back to you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-sm text-primary-light/60">{method.label}</div>
                    <div className="text-white font-medium">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialButtons.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all"
                  whileHover={{ y: -4, scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            variants={cardVariantsRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-primary/20">
              <div>
                <label className="block text-sm font-medium text-primary-light/80 mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-primary/20 focus:border-primary focus:outline-none text-white placeholder:text-white/30 transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-light/80 mb-2">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-primary/20 focus:border-primary focus:outline-none text-white placeholder:text-white/30 transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-light/80 mb-2">
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-primary/20 focus:border-primary focus:outline-none text-white placeholder:text-white/30 resize-none transition-all"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl font-medium glow-box hover:shadow-2xl transition-shadow"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 pt-8 border-t border-primary/20"
        >
          <p className="text-primary-light/60">
            © 2026 Sathish. Crafted with ❤️...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
