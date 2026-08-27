import { motion } from 'framer-motion'
import { useRef } from 'react'
import profilepic from '../assets/profile.png'

export default function About() {
  const ref = useRef(null)

  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'AI / ML & Generative AI', level: 92 },
    { name: 'Python & FastAPI', level: 90 },
    { name: 'LLMs & RAG Systems', level: 88 },
    { name: 'JavaScript & Tailwind CSS', level: 92 },
    { name: 'REST APIs & Cloud Services', level: 87 },
  ]

  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -80, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 80, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            Get To Know Me
          </motion.span>
          <div className="relative inline-block mt-4">
            <h2 className="text-5xl md:text-6xl font-display font-bold glow-text">
              About <span className="text-primary">Me</span>
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
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Profile Card + Story */}
          <motion.div
            variants={cardVariantsLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Profile Avatar Card */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-primary/20 glow-box">
              <div className="relative w-36 h-36 shrink-0 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-xl">
                <img
                  src={profilepic}
                  alt="Sathish"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary-medium font-medium border border-primary/40">
                  AI Engineer & Full-Stack Developer
                </span>
                <h3 className="text-2xl font-display font-bold text-white">Sathish</h3>
                <p className="text-sm text-primary-light/70">
                  B.Tech IT Graduate • AI/ML Enthusiast • Solution Builder
                </p>
              </div>
            </div>

            <div className="space-y-4 text-primary-light/80 leading-relaxed text-base sm:text-lg">
              <p>
                I'm a recent B.Tech Information Technology graduate passionate about building
                practical AI-powered and full-stack applications. Through internships and
                hands-on projects, I have gained experience in AI/ML, Generative AI, Python,
                cloud technologies, and web development.
              </p>

              <p>
                I enjoy turning ideas and real-world problems into working solutions. My
                interests include Large Language Models, RAG systems, AI automation, machine
                learning, APIs, and building modern full-stack applications.
              </p>

              <p>
                I am a hands-on learner who enjoys exploring new technologies and building
                projects to improve my skills. I am currently looking for opportunities where
                I can contribute, learn from experienced professionals, and grow as an AI and
                software engineer.
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-around sm:justify-start gap-8 pt-2 border-t border-primary/20">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-xs text-primary-light/60">Projects Built</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-xs text-primary-light/60">Internships & Programs</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-xs text-primary-light/60">AI & Dev Domains</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skills Progress Bars */}
          <motion.div
            variants={cardVariantsRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            className="lg:col-span-6 space-y-6 p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-primary/20"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Proficiency & Tools
            </h3>

            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-primary-light font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm p-0.5 border border-primary/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-medium via-primary to-primary-dark rounded-full glow-box"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.9, delay: index * 0.08, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
