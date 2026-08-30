import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { generateAIResponse, generateFallbackResponse } from '../services/geminiService'
import roboimg from '../assets/Digital_Twin.png'
import broimg from '../assets/Bro.png'

export default function Chatbot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm Sathish's Digital Twin 🤖. Ask me anything about his skills, projects, or experience!",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesContainerRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Focus input when chatbot opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async (e) => {
    // Prevent default form submission
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date()
    }

    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsTyping(true)

    try {
      // Get conversation history (excluding the system message)
      const conversationHistory = newMessages.slice(1)

      // Generate AI response using Gemini
      const result = await generateAIResponse(input, conversationHistory)

      // Create bot response
      const botResponse = {
        id: newMessages.length + 1,
        type: 'bot',
        content: result.success ? result.response : result.response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botResponse])
    } catch (error) {
      console.error('Error generating response:', error)

      // Fallback to local response
      const fallbackText = generateFallbackResponse(input)
      const botResponse = {
        id: newMessages.length + 1,
        type: 'bot',
        content: fallbackText,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Quick question suggestions
  const quickQuestions = [
    "What are Sathish's skills?",
    "Tell me about his projects",
    "What's his experience?",
    "How can I contact him?",
    "What's his education?",
    "What's his tech stack?",
    "Is he available for hire?",
    "What are his career goals?"
  ]

  const handleQuickQuestion = (question) => {
    setInput(question)
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-end p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, x: 100 }}
        animate={{ scale: 1, x: 0 }}
        exit={{ scale: 0.9, x: 100 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl h-[600px] bg-gradient-to-br from-primary-dark via-[#0d2347] to-primary rounded-3xl shadow-2xl overflow-hidden border border-primary/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="relative shrink-0 bg-white/5 backdrop-blur-md border-b border-white/10 p-4 flex items-center justify-between">
        
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-medium flex items-center justify-center overflow-hidden">
              <img src={roboimg} alt="Digital Twin" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-white">Sathish's Digital Twin</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-primary-light/70">Powered by AI</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div ref={messagesContainerRef} className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
          {messages.map((message) => (
            
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-br from-primary to-primary-medium text-white rounded-br-sm'
                    : 'bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-bl-sm'
                }`}
              >
                <div className="text-sm leading-relaxed whitespace-pre-line">
                  {message.content.split('**').map((part, i) =>
                    i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                  )}
                </div>
                <div className="text-xs opacity-60 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl rounded-bl-sm p-4 border border-white/20">
                <div className="flex gap-1">
                  
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-primary-light rounded-full"
                  />
                  
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-primary-light rounded-full"
                  />
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-primary-light rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Quick Questions */}
        {messages.length <= 1 && (
          <div className="shrink-0 px-4 pb-2">
            <div className="text-xs text-primary-light/60 mb-2">Quick questions:</div>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="shrink-0 bg-white/5 backdrop-blur-md border-t border-white/10 p-4">
          <form onSubmit={(e) => { e.preventDefault(); handleSend(e); }} className="flex gap-2">
            
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Sathish..."
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
              disabled={isTyping}
            />
            
            <motion.button
              type="button"
              onClick={(e) => handleSend(e)}
              disabled={!input.trim() || isTyping}
              className="px-6 py-3 bg-gradient-to-r from-primary to-primary-medium rounded-full font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: input.trim() && !isTyping ? 1.05 : 1 }}
              whileTap={{ scale: input.trim() && !isTyping ? 0.95 : 1 }}
            >
              {isTyping ? (
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Send'
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}
