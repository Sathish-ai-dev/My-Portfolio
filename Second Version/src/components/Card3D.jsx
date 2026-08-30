import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile2.png'
import broimg from '../assets/Bro.png'
import roboimg from '../assets/Digital_Twin.png'

export default function Card3D({ isChatOpen, onOpenChat }) {
  const cardRef = useRef(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [typedMessage, setTypedMessage] = useState('')
  const message = "I'm Digital Twin, Ask anything about sathish !"

  useEffect(() => {
    let characterIndex = 0

    const typingInterval = window.setInterval(() => {
      characterIndex += 1
      setTypedMessage(message.slice(0, characterIndex))

      if (characterIndex === message.length) {
        window.clearInterval(typingInterval)
      }
    }, 75)

    return () => window.clearInterval(typingInterval)
  }, [])

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
        className="relative w-800 h-960 rounded-3xl overflow-hidden cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          scale: [1, 1.03, 1],
          filter: ["drop-shadow(0px 0px 0px rgba(0,0,0,0))", "drop-shadow(0px 10px 20px rgba(99,102,241,0.6))", "drop-shadow(0px 0px 0px rgba(0,0,0,0))"]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}

        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1 }}
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

        {/* Content - Profile Image (crossfades to Bro.png when the chatbot is open) */}
        <div
          className="relative w-full h-full"
          style={{ transform: 'translateZ(50px)' }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className={`w-full object-cover transition-opacity duration-500 ${
              isChatOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={broimg}
            alt="Bro"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-5000 ${
              isChatOpen ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Robot Emoji - Bottom Right Corner - Click to open chatbot */}
          <motion.div
            onClick={onOpenChat}
            animate={{ opacity: isChatOpen ? 0 : 1, scale: isChatOpen ? 0.8 : 1 }}
            transition={{ duration: 0.3 }}
            style={{ transform: 'translateZ(150px)', pointerEvents: isChatOpen ? 'none' : 'auto' }}
            className="absolute bottom-8 left-8 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl cursor-pointer"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1.3 }}
          >
            <img
              src={roboimg}
              alt="Digital Twin"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-11 left-28 max-w-52 rounded-2xl rounded-bl-sm bg-white/90 px-4 py-3 text-sm font-medium leading-relaxed text-primary-dark shadow-lg"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: isChatOpen ? 0 : 1, x: 0 }}
            transition={{ duration: 0.35 }}
            style={{ transform: 'translateZ(150px)' }}
          >
            {typedMessage}
            <span className="ml-0.5 inline-block animate-pulse">|</span>
          </motion.div>
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