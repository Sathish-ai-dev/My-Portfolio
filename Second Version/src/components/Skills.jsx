import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const ref = useRef(null)

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: [
        'Python',
        'Machine Learning',
        'Scikit-learn',
        'TensorFlow / Keras',
        'Computer Vision',
      ],
      gradient: 'from-primary-dark to-primary',
    },
    {
      title: 'Generative AI & LLMs',
      icon: '🧠',
      skills: [
        'Generative AI',
        'Large Language Models',
        'RAG',
        'Prompt Engineering',
        'Vector Databases',
      ],
      gradient: 'from-primary to-primary-medium',
    },
    {
      title: 'Full-Stack Development',
      icon: '💻',
      skills: [
        'React',
        'JavaScript',
        'HTML & CSS',
        'FastAPI / Flask',
        'REST APIs',
      ],
      gradient: 'from-primary-medium to-primary',
    },
    {
      title: 'Cloud & Developer Tools',
      icon: '🛠️',
      skills: [
        'Git & GitHub',
        'AWS',
        'SQL',
        'Docker',
        'Firebase / Supabase',
      ],
      gradient: 'from-primary to-primary-dark',
    },
  ]

  /* ── Variants ── */
  const cardVariants = {
    hiddenLeft: {
      opacity: 0,
      x: -90,
      scale: 0.95,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    hiddenRight: {
      opacity: 0,
      x: 90,
      scale: 0.95,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20, transition: { duration: 0.25 } },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.06, duration: 0.35, ease: 'easeOut' },
    }),
  }

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6">
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
            Technical Expertise
          </motion.span>

          <div className="relative inline-block mt-4">
            <h2 className="text-5xl md:text-6xl font-display font-bold glow-text">
              My <span className="text-primary">Skills</span>
            </h2>
            {/* animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              style={{ originX: 0 }}
              className="h-1 mt-2 rounded-full bg-gradient-to-r from-primary-medium via-primary to-primary-dark"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 text-primary-light/60 max-w-2xl mx-auto"
          >
            Technologies and tools I use to build AI-powered and modern
            software applications.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              custom={categoryIndex}
              variants={cardVariants}
              initial={categoryIndex % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
              whileInView="visible"
              viewport={{ once: false, amount: 0.35 }}
              className="group"
            >
              <motion.div
                className={`relative h-full rounded-3xl overflow-hidden bg-gradient-to-br ${category.gradient} p-6`}
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

                <div className="relative z-10 space-y-4">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-4xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.div>

                  <h3 className="text-2xl font-display font-bold text-white">
                    {category.title}
                  </h3>

                  <div className="space-y-2 pt-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        custom={skillIndex}
                        variants={skillItemVariants}
                        className="flex items-center gap-2 text-white/90"
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary-light"
                          whileInView={{ scale: [0, 1.4, 1] }}
                          viewport={{ once: false, amount: 0.35 }}
                          transition={{
                            delay: categoryIndex * 0.08 + skillIndex * 0.05,
                            duration: 0.35,
                          }}
                        />
                        <span className="text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    boxShadow:
                      '0 0 40px rgba(33, 150, 243, 0.4), inset 0 0 40px rgba(33, 150, 243, 0.1)',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}