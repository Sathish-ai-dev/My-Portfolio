import React from "react";
import pill from "../assets/pillimg.jpg";
import edu from "../assets/education-system-students.jpg";
import driver from "../assets/drowsy.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pill,
      demo: "https://example.com",
      code: "https://github.com",
      title: "Pill-Planner",
      description: "A web application that Streamlines and tracks the Medicine Dosage.Helps users manage their medication schedules effectively.",
    },
    {
      id: 2,
      src: edu,
      demo: "https://example.com",
      code: "https://github.com",
      title: "Envision",
      description: "Competency Student profile Score calculator.Enhances the learning experience for students through innovative tools.",
    },
    {
      id: 3,
      src: driver,
      demo: "https://example.com",
      code: "https://github.com",
      title: "Drowsy Driving Detection",
      description: "Improves road safety by alerting drivers showing signs of fatigue.",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, title, description }) => (
            <div
              key={id}
              className="relative group shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />

              {/* Hover Overlay for Description */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm">{description}</p>
              </div>

              {/* Buttons (Always Visible) */}
              <div className="flex items-center justify-center mt-4 relative z-20">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-800 rounded-md text-center"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-800 rounded-md text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
