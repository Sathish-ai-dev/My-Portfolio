import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import profilepic from '../assets/profile2.png';
import bgimg from '../assets/Background_image.png';

export default function Preloader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Full Background Image */}
      <img
        src={bgimg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Light Overlay for clarity */}
      <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />

      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Static Large Profile Picture */}
        <div className="mb-8 w-44 h-44 sm:w-52 sm:h-52 rounded-full glow-box overflow-hidden border-4 border-primary/80 shadow-2xl">
          <img
            src={profilepic}
            alt="Sathish"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-72 h-2.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-md shadow-inner border border-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-medium via-primary to-primary-dark animate-gradient"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Progress Text */}
        <motion.p
          className="mt-4 text-white font-display text-xl font-semibold tracking-wide drop-shadow-md"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  )
}
