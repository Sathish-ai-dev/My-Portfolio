import React, { useState, useRef } from "react";
import Fake from "../assets/Fake.jpg";
import Loan from "../assets/Loan.webp";
import Email from "../assets/Email.jpg";
import Movie from "../assets/Movie.jpg";
import Forest from "../assets/Forest.webp";
import NeuroAI from "../assets/NeuroAI.jpg";
import ObjectDetect from "../assets/ObjectDetect.png"
import Pneumonia from "../assets/Pneumonia.png"


function Projects() {

  const portfolios = [
    {
      id: 1,
      src: NeuroAI,
      code: "https://github.com/Sathish-ai-dev/Neuro_Symbolic_AI",
      title: "Neuro Symbolic AI",
      description: "Developed an intelligent hybrid AI system that integrates neural networks with symbolic reasoning to enable explainable decision-making and logical inference. The project leverages Flask, React, and Prolog to combine deep learning’s pattern recognition with rule-based reasoning for tasks such as legal document analysis, knowledge representation, and automated compliance checking.",
    },
    {
      id: 2,
      src: Pneumonia,
      code: "https://github.com/Sathish-ai-dev/MediScanAI.git",
      title: "MediScanAI",
      description: "Developed an Explainable AI system utilizing Convolutional Neural Networks (CNNs) to detect pneumonia from chest X-ray images. Integrated with a Flask web application, this tool provides transparent and interpretable medical diagnostics, enhancing clinical decision-making.",
    },
    {
      id: 3,
      src: ObjectDetect,
      code: "https://github.com/Sathish-ai-dev/BrookiesHub_AI-ML_Intern/tree/main/Day_9",
      title: "Real-Time Objec Detection",
      description: "Built a real-time object detection web application that leverages YOLOv5 for fast and accurate object recognition, integrated with OpenCV for live video processing and Streamlit for an interactive user interface. The system detects and labels multiple objects from webcam or video input with high precision.",
    },
    {
      id: 4,
      src: Fake,
      code: "https://github.com/Sathish-ai-dev/ML-and-AI-Projects/tree/main/fake-news-detection",
      title: "Fake News Detection",
      description: "Developed a machine learning-based system to classify news articles as real or fake. Implemented NLP techniques for text preprocessing (tokenization, stopword removal, TF-IDF vectorization) and trained models like Logistic Regression, Naive Bayes, and Random Forest for classification. Achieved high accuracy in detecting misinformation. The system was deployed using Flask."
    },
    {
      id: 6,
      src: Loan,
      code: "https://github.com/Sathish-ai-dev/ML-and-AI-Projects/tree/main/Loan-eligibility-predictor",
      title: "Loan Eligibility Predictor",
      description: "Loan Eligibility Predictor using Machine Learning – Built a predictive model to assess loan eligibility based on applicant financial and demographic data. Applied Logistic Regression and Random Forest algorithms with feature engineering and data preprocessing, achieving high accuracy in classification. Deployed the model using Flask with an interactive web interface for real-time eligibility checks."
    },
    {
      id: 7,
      src: Email,
      code: "https://github.com/Sathish-ai-dev/ML-and-AI-Projects/tree/main/Email-spam-detector",
      title: "Email Spam Classifier",
      description: "Spam Email Classifier using Machine Learning _ Developed and deployed a lightweight email classification model capable of detecting spam with 90%+ accuracy. Implemented algorithms like Naive Bayes/SVM with NLP techniques (tokenization, TF-IDF) to process text data, and built a Flask-based web application with a clean UI for real-time spam detection.",
    },
    {
      id: 8,
      src: Forest,
      code: "https://github.com/Sathish-ai-dev/Edunet_AI_Intern",
      title: "Deforestation Detection",
      description: "This project focuses on classifying different types of fire incidents in India using MODIS satellite data from 2021 to 2023. The goal is to develop a machine learning model that can accurately predict the type of fire event (e.g., forest fire, agricultural burning, volcanic activity, or other thermal anomalies) based on satellite-captured features.",
    },
    {
      id: 9,
      src: Movie,
      code: "https://github.com/Sathish-ai-dev/ML-and-AI-Projects/tree/main/Movie-recommendation-system",
      title: "Movie Recommendation System",
      description: "Movie Recommendation System using Machine Learning _ Designed and implemented a recommendation engine that suggests movies based on user preferences. Utilized collaborative filtering and cosine similarity to generate personalized recommendations, and deployed.",
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
          {portfolios.map(({ id, src, code, title, description }) => (
            <ProjectCard 
              key={id}
              src={src}
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

function ProjectCard({ src, code, title, description }) {
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
