import React, { useState, useRef } from "react";
import pill from "../assets/pillimg.jpg";
import edu from "../assets/education-system-students.jpg";
import driver from "../assets/drowsy.jpeg";
import tryon from "../assets/tryon.png";
import atliq from "../assets/atliq.jpg";
import lib from "../assets/lib.jpeg";
import ats from "../assets/ats.webp";
import free from "../assets/free.jpg";
import link from "../assets/link.jpg";


function Projects() {

  const portfolios = [
    {
      id: 1,
      src: pill,
      demo: "https://example.com",
      code: "https://github.com/CharanSuggala26/Medicine-Dosage-Tracker",
      title: "Pill-Planner",
      description: "A web application that Streamlines and tracks the Medicine Dosage. Helps users manage their medication schedules effectively.",
    },
    {
      id: 2,
      src: edu,
      demo: "https://example.com",
      code: "https://github.com/AKSHAY-CHOWDARY/Envision",
      title: "Envision",
      description: "Competency Student profile Score calculator. Enhances the learning experience for students through innovative tools.",
    },
    {
      id: 3,
      src: tryon,
      demo: "https://example.com",
      code: "https://github.com/CharanSuggala26/Outfit-Assistant",
      title: "AI Virtual Outfit Assistant",
      description: "AI Virtual Outfit Assistant is an innovative tool that offers outfit suggestions based on vocation and style preferences. It provides a virtual try-on experience.",
    },
    {
      id: 4,
      src: free,
      demo: "https://example.com",
      code: "https://github.com/pranay65/Webathon3.0",
      title: "AI Freelance Job Marketplace",
      description: "A modern, AI-powered freelance job platform designed to bridge the gap between skilled professionals and clients looking for top-tier talent. This platform streamlines the process of connecting, collaborating, and contracting, empowering freelancers.",
    },
    {
      id: 5,
      src: ats,
      demo: "https://example.com",
      code: "https://github.com/CharanSuggala26/Application-Tracking-System",
      title: "AI Resume Scanner",
      description: " a complete end-to-end Applicant Tracking System (ATS) powered by the Google Gemini Pro Vision API. The system intelligently analyzes your resume, compares it with a given job description, and provides personalized improvement suggestions to help align your profile with the job requirements.",
    },
    {
      id: 6,
      src: link,
      demo: "https://example.com",
      code: "https://github.com/CharanSuggala26/LinkShield",
      title: "AI E-mail Phishing",
      description: "The AI E-mail Phishing Detection project uses machine learning algorithms to detect and prevent email phishing attacks. It uses natural language processing to analyze the email content and identify potential phishing indicators in real time. It alerts the user if the email is potentially phishing.",
    },
    {
      id: 7,
      src: driver,
      demo: "https://example.com",
      code: "https://github.com/CharanSuggala26/DrowsyDriverDetection",
      title: "Drowsy Driving Detection",
      description: "Improves road safety by alerting drivers showing signs of fatigue. It uses computer vision and machine learning to detect drowsiness in drivers. It also alerts the driver if they are drowsy. It alerts the driver if they are drowsy.",
    },
    {
      id: 8,
      src: lib,
      demo: "https://example.com",
      code: "https://github.com/CharanSuggala26/library-management",
      title: "Library Management System",
      description: "A Library Management System is a digital solution that streamlines book tracking, borrowing, returns, and inventory management for efficient library operations.",
    },
    {
      id: 9,
      src: atliq,
      demo: "https://example.com",
      code: "https://github.com/CharanSuggala26/AtliqueGrands-Data-Analysis",
      title: "Atliq Grands Data Analysis",
      description: "The AtliQ Grands Data Analysis project provides data-driven insights for the hospitality industry using Power BI and the STAR methodology. It helps businesses make informed decisions about their revenue growth.",
    }
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, demo, code, title, description }) => (
            <ProjectCard 
              key={id}
              src={src}
              demo={demo}
              code={code}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ src, demo, code, title, description }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const rotateX = (y - 0.5) * 20; 
      const rotateY = (0.5 - x) * 20; 
      
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="perspective-1000 mb-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative transition-transform duration-200 ease-out transform-style-3d"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="transform-style-3d bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 duration-300">

          <div
            className="transform-style-3d w-full"
            style={{ transform: `translateZ(40px)` }}
          >
            <img
              src={src}
              alt={title}
              className="w-full h-48 object-cover"
            />
          </div>

          <div
            className="transform-style-3d px-6 pt-4 pb-2"
            style={{ transform: `translateZ(60px)` }}
          >
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          </div>

          <div
            className="transform-style-3d px-6 py-2"
            style={{ transform: `translateZ(50px)` }}
          >
            <p className="text-gray-300 text-sm">{description}</p>
          </div>

          <div
            className="transform-style-3d flex items-center justify-center p-4"
            style={{ transform: `translateZ(70px)` }}
          >
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 px-4 py-2 mx-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-center rounded-lg text-white font-medium hover:scale-105 duration-200"
            >
              Demo
            </a>
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 px-4 py-2 mx-2 bg-gradient-to-r from-gray-700 to-gray-900 border border-gray-600 text-center rounded-lg text-white font-medium hover:scale-105 duration-200"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
