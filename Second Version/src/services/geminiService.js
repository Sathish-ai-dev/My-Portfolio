import { GoogleGenerativeAI } from '@google/generative-ai'
import { knowledgeBase } from '../data/knowledgeBase.js'

// Initialize Gemini API
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null

// System prompt with knowledge base context
const createSystemPrompt = () => {
  return `You are Sathish's AI Digital Twin assistant on his portfolio website. Your role is to answer questions about Sathish's background, skills, projects, and experience accurately and helpfully.

**IMPORTANT INSTRUCTIONS:**
- Only use information from the provided knowledge base
- Be friendly, professional, and concise
- Keep responses under 150 words unless more detail is requested
- Use emojis sparingly but appropriately 🤖
- If asked about something not in the knowledge base, politely say you don't have that information
- Encourage users to check out Sathish's projects and GitHub
- Maintain a professional yet approachable tone

**ABOUT SATHISH:**
Name: ${knowledgeBase.personal.name}
Role: ${knowledgeBase.personal.role}
Education: ${knowledgeBase.personal.education}
Career Goal: ${knowledgeBase.personal.careerGoal.shortTerm} (Short-term), ${knowledgeBase.personal.careerGoal.longTerm} (Long-term)

Bio: ${knowledgeBase.personal.bio}

**KEY SKILLS:**
${Object.entries(knowledgeBase.skills).map(([category, data]) =>
  `- ${category}: ${data.technologies.slice(0, 5).join(', ')}`
).join('\n')}

**MAJOR PROJECTS:**
${knowledgeBase.projects.slice(0, 3).map(p =>
  `- ${p.title}: ${p.description.slice(0, 100)}...`
).join('\n')}

**CONTACT:**
- GitHub: ${knowledgeBase.social.github}
- LinkedIn: ${knowledgeBase.social.linkedin}
- Availability: ${knowledgeBase.career.availability}

Remember: Be helpful, accurate, and encourage users to explore the portfolio and connect with Sathish!`
}

// Function to generate AI response using Gemini
export async function generateAIResponse(userMessage, conversationHistory = []) {
  // If no API key, return fallback response
  if (!genAI || !API_KEY) {
    return {
      success: false,
      response: "⚠️ AI service is not configured. Please add your Gemini API key to the .env file.\n\nYou can get a free API key from Google AI Studio: https://makersuite.google.com/app/apikey",
      error: "API key not configured"
    }
  }

  try {
    // Use Gemini 1.5 Flash (free tier)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
      }
    })

    // Build conversation context
    const chatHistory = conversationHistory.map(msg => ({
      role: msg.type === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }))

    // Start chat with history
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: createSystemPrompt() }]
        },
        {
          role: 'model',
          parts: [{ text: "Understood! I'm Sathish's Digital Twin assistant. I'll answer questions about his skills, projects, and experience using only the information provided in the knowledge base. I'll be helpful, concise, and professional. How can I help you learn about Sathish?" }]
        },
        ...chatHistory
      ]
    })

    // Send message and get response
    const result = await chat.sendMessage(userMessage)
    const response = result.response
    const text = response.text()

    return {
      success: true,
      response: text
    }
  } catch (error) {
    console.error('Gemini API Error Details:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      apiKey: API_KEY ? `${API_KEY.substring(0, 10)}...` : 'not set'
    })

    // Handle specific error cases
    if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('invalid')) {
      return {
        success: false,
        response: "⚠️ Invalid API key. Please check your Gemini API key in the .env file.\n\nMake sure it starts with 'AIza...' and is from Google AI Studio.",
        error: error.message
      }
    }

    if (error.message?.includes('quota') || error.message?.includes('429')) {
      return {
        success: false,
        response: "⚠️ API quota exceeded. Please try again later or check your Google AI Studio quota.",
        error: error.message
      }
    }

    if (error.message?.includes('model') || error.message?.includes('not found')) {
      return {
        success: false,
        response: "⚠️ Model error. The Gemini model might not be available. Using fallback response.",
        error: error.message
      }
    }

    // Return user-friendly error with actual error message for debugging
    return {
      success: false,
      response: `⚠️ Sorry, I encountered an error: ${error.message}\n\nPlease check the console for details.`,
      error: error.message
    }
  }
}

// Fallback response generator (used when API fails or for quick responses)
export function generateFallbackResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase()

  // Check for greetings
  if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
    return "Hello! 👋 I'm here to tell you all about Sathish. You can ask me about his skills, projects, experience, or how to contact him!"
  }

  // Check for skills-related questions
  if (lowerMessage.includes('skill') || lowerMessage.includes('technolog') || lowerMessage.includes('tech stack')) {
    const skillsText = Object.entries(knowledgeBase.skills)
      .slice(0, 3)
      .map(([category, data]) => `**${category}**: ${data.technologies.slice(0, 3).join(', ')}`)
      .join('\n\n')
    return `Sathish has expertise in multiple domains:\n\n${skillsText}\n\nAnd more! He's particularly strong in AI/ML and full-stack development! 💪`
  }

  // Check for projects-related questions
  if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work')) {
    const projectsList = knowledgeBase.projects.slice(0, 2)
      .map(p => `• **${p.title}**: ${p.description.slice(0, 80)}...`)
      .join('\n\n')
    return `Sathish has built impressive projects! Here are some highlights:\n\n${projectsList}\n\nCheck out the Projects section below for more details! 🚀`
  }

  // Check for contact information
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('hire')) {
    return `You can connect with Sathish through:\n\n🔗 GitHub: ${knowledgeBase.social.github}\n💼 LinkedIn: ${knowledgeBase.social.linkedin}\n\n${knowledgeBase.career.availability}\n\nFeel free to download his CV from the hero section above!`
  }

  // Check for availability
  if (lowerMessage.includes('available') || lowerMessage.includes('job') || lowerMessage.includes('opportunity')) {
    return `Yes! ${knowledgeBase.career.availability} 🎯\n\nHe's eager to contribute, learn from experienced professionals, and grow as an AI and software engineer. Reach out via LinkedIn or GitHub!`
  }

  // Check for "about" questions
  if (lowerMessage.includes('who') || lowerMessage.includes('about') || lowerMessage.includes('tell me')) {
    return `${knowledgeBase.personal.bio}\n\nHis career goal: ${knowledgeBase.personal.careerGoal.shortTerm} (short-term) and ${knowledgeBase.personal.careerGoal.longTerm} (long-term)!\n\nHe's passionate about AI, ML, and building practical software solutions! 🚀`
  }

  // Default response
  return `That's a great question! I can tell you about:\n\n• Sathish's **skills** and technical expertise\n• His impressive **projects** and work\n• His **experience** and background\n• How to **contact** him\n\nWhat would you like to know? 😊`
}
