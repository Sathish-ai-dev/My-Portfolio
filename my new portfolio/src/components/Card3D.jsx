import { useRef, useState, useMemo } from 'react'
import { motion } from 'framer-motion'

export default function Card3D() {
  const cardRef = useRef(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  // Keep particle positions stable between renders
  const particles = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        z: Math.random() * 100,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  )

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 12
    const rotateY = (centerX - x) / 12

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      className="perspective-container"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        ref={cardRef}
        className="relative w-80 h-96 rounded-3xl overflow-hidden cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
      >
        {/* Card Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-medium opacity-90"
          style={{ transform: 'translateZ(0px)' }}
        />

        {/* Animated Light */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(227, 242, 253, 0.3) 0%, transparent 50%)',
            transform: 'translateZ(10px)',
          }}
        />

        {/* Glass Layer */}
        <div
          className="absolute inset-0 bg-white/5 backdrop-blur-sm"
          style={{ transform: 'translateZ(20px)' }}
        />

        {/* Content */}
        <div
          className="relative w-full h-full p-8 flex flex-col justify-between"
          style={{ transform: 'translateZ(50px)' }}
        >
          {/* Top Section */}
          <div className="space-y-4">
            <motion.div
              className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              🤖
            </motion.div>

            <h3 className="text-2xl font-display font-bold text-white">
              AI Engineer
            </h3>

            <p className="text-primary-light/80 text-sm">
              Building AI, Generative AI, RAG, ML and Full-Stack Applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'AI', value: 'GenAI' },
              { label: 'LLMs', value: 'RAG' },
              { label: 'Code', value: 'Python' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm"
                style={{
                  transform: `translateZ(${30 + index * 10}px)`,
                }}
                whileHover={{
                  scale: 1.08,
                }}
              >
                <div className="text-lg font-bold text-white">
                  {stat.value}
                </div>

                <div className="text-xs text-primary-light/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary-light/50 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              transform: `translateZ(${particle.z}px)`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

        {/* Border Glow */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            boxShadow:
              '0 0 50px rgba(33, 150, 243, 0.5), inset 0 0 50px rgba(33, 150, 243, 0.1)',
            transform: 'translateZ(60px)',
          }}
        />
      </motion.div>
    </div>
  )
}