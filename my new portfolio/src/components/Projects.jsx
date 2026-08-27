import { motion } from 'framer-motion'
import { useState } from 'react'

import ragImg from '../assets/RAG_Project.png'
import fingerprintImg from '../assets/Fingerprint_Project.png'
import pharmaImg from '../assets/Pharma_Complaint.png'
import enterpriseImg from '../assets/Enterprise_Management.png'
import tradingbotimg from '../assets/tradingbot.png'
import decisionIQImg from '../assets/decision_iq.png'

export default function Projects() {
  const cardVariants = {
    hiddenLeft: {
      opacity: 0,
      x: -80,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    hiddenRight: {
      opacity: 0,
      x: 80,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.55,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'RAG-Based Research Assistant',
      description:
        'An AI-powered research assistant that retrieves relevant information from documents and generates context-aware answers using LLM and Retrieval-Augmented Generation.',
      tags: ['Python', 'LLM', 'RAG', 'Vector Database'],
      gradient: 'from-primary-dark via-[#0d2347] to-primary',
      github: 'https://github.com/Sathish-ai-dev/RAG_Based_Research_Assistant',
      image: ragImg,
    },
    {
      title: 'Fingerprint Liveness Detection',
      description:
        'A contactless fingerprint Presentation Attack Detection system designed to distinguish genuine fingerprints from spoof or presentation attacks.',
      tags: ['Python', 'Machine Learning', 'Computer Vision', 'Streamlit'],
      gradient: 'from-[#072448] via-[#0d47a1] to-primary-medium',
      github:
        'https://github.com/Sathish-ai-dev/Fingerprint-Liveness-Detection-PAD-Module',
      image: fingerprintImg,
    },
    {
      title: 'AI Pharma Complaint System',
      description:
        'A software solution designed to manage, track, and organize pharmaceutical complaints through a structured digital workflow for efficient complaint handling.',
      tags: ['Python', 'AI/ML', 'Data Processing', 'Web Application'],
      gradient: 'from-primary-dark via-[#0c1f3d] to-primary',
      github: 'https://github.com/Sathish-ai-dev/Pharma-Complaint-System',
      image: pharmaImg,
    },
    {
      title: 'Enterprise Management System',
      description:
        'A full-stack web application developed for managing organizational workflows with dedicated dashboards and role-based functionality.',
      tags: ['React', 'JavaScript', 'API', 'Database'],
      gradient: 'from-primary-dark via-[#10316b] to-primary-medium',
      github: 'https://github.com/Sathish-ai-dev/United-Integrated-Services-Pvt-Ltd',
      live: 'https://united-integrated-services-pvt-ltd.vercel.app/',
      image: enterpriseImg,
    },
    {
  title: 'Trading Bot',
  description:
    'A modular Python trading application for Binance Futures Testnet with order execution, input validation, structured logging, testing, and a web dashboard.',
  tags: ['Python', 'Binance API', 'REST API', 'FastAPI'],
  gradient: 'from-primary-dark via-[#10316b] to-primary-medium',
  github: 'https://github.com/Sathish-ai-dev/Trading-Bot',
  live: '',
  image: tradingbotimg,
},

{
  title: 'Decision IQ System',
  description:
    'An AI-powered decision intelligence platform designed to combine data, analytics, and intelligent AI workflows to support better business decisions.',
  tags: ['AI/ML', 'Python', 'FastAPI', 'Data Analytics'],
  gradient: 'from-primary via-[#10316b] to-primary-dark',
  github: 'https://github.com/Sathish-ai-dev/Decision-IQ-System',
  live: '',
  image: decisionIQImg,
},
  ]

  const handleProjectClick = (project) => {
    if (project.github && project.github !== '#') {
      window.open(project.github, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-primary-medium text-sm font-medium tracking-wider uppercase"
          >
            My Work
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-display font-bold mt-4 glow-text">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="mt-5 text-primary-light/60 max-w-2xl mx-auto">
            A selection of AI, Machine Learning, Generative AI, and Full-Stack
            applications I have built through projects and practical experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial={index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
              whileInView="visible"
              viewport={{ once: false, amount: 0.35 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className={`relative flex flex-col justify-between rounded-3xl overflow-hidden bg-gradient-to-br ${project.gradient} p-6 sm:p-8 cursor-pointer border border-white/10`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {/* Glass Effect */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between space-y-4">
                  {/* UI Preview Image Frame */}
                  <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-black/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <motion.div
                      className="absolute top-3 left-3 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white/90 border border-white/20"
                      animate={
                        hoveredIndex === index
                          ? { scale: 1.05 }
                          : { scale: 1 }
                      }
                    >
                      Featured Project
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-5 pt-1">
                      {project.github && project.github !== '#' && (
                        <motion.button
                          onClick={() => handleProjectClick(project)}
                          className="flex items-center gap-2 text-white font-medium hover:text-primary-medium transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          View Code
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </motion.button>
                      )}

                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/90 hover:text-primary-medium font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          Live Demo ↗
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  animate={{
                    boxShadow:
                      hoveredIndex === index
                        ? '0 0 50px rgba(33, 150, 243, 0.5)'
                        : '0 0 20px rgba(33, 150, 243, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Sathish-ai-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-medium glow-box hover:shadow-2xl transition-shadow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}