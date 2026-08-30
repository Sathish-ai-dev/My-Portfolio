import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import Card3D from './Card3D'
import Chatbot from './Chatbot'
import cvFile from '../assets/Sathish_CV_Updated.pdf'

export default function Hero() {
  const containerRef = useRef(null)
  const [isChatOpen, setIsChatOpen] = useState(false)

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Transform scroll progress into animation values
  const leftContentX = useTransform(scrollYProgress, [0, 1], [0, -300])
  const leftContentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const rightContentX = useTransform(scrollYProgress, [0, 1], [0, 300])
  const rightContentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Close the chatbot automatically when the user scrolls away from the hero
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.15) {
      setIsChatOpen(false)
    }
  })

  const socialLinks = [
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

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Text Content (hides when the chatbot is open) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            x: leftContentX,
            opacity: leftContentOpacity
          }}
          className={isChatOpen ? 'md:col-start-2 md:row-start-1' : ''}
        >
          <motion.div
            animate={{
              opacity: isChatOpen ? 0 : 1,
              x: isChatOpen ? -120 : 0,
              scale: isChatOpen ? 0.9 : 1
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ pointerEvents: isChatOpen ? 'none' : 'auto' }}
            className="space-y-6"
          >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/50 text-primary-medium text-sm font-medium"
          >
            👋 Welcome to my portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-medium via-primary to-primary-dark bg-clip-text text-transparent glow-text animate-gradient">
              Sathish
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-light/80"
          >
            AI Engineer & Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-primary-light/60 max-w-xl"
          >
            I build practical AI-powered applications using Generative AI,
            LLMs, RAG, Machine Learning, Python, APIs, and modern full-stack
            technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-medium text-lg glow-box hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>

            <motion.a
              href={cvFile}
              download="Sathish_CV_Updated.pdf"
              className="px-8 py-4 border-2 border-primary/50 rounded-full font-medium text-lg hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 pt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-colors"
                whileHover={{ y: -4, scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: 3D Interactive Card (slides to the left side when the chatbot is open) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            x: rightContentX,
            opacity: rightContentOpacity
          }}
          className={`flex justify-center items-center ${
            isChatOpen ? 'md:col-start-1 md:row-start-1 md:justify-start' : ''
          }`}
        >
          <motion.div
            layout
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="flex justify-center items-center"
          >
            <motion.div
              animate={{ scale: isChatOpen ? 0.85 : 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Card3D isChatOpen={isChatOpen} onOpenChat={() => setIsChatOpen(true)} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Chatbot Modal */}
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}