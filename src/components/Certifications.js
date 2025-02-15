import React from "react";
import aws from "../assets/aws-2.jpeg";
import stanford from "../assets/stanford.jpg";
import orcale from "../assets/oracle_dev.png";
import udemyimg from "../assets/udemyimg.png";
import hpimg from "../assets/hpimg.png";

const Certifications = () => {
  const certs = [
    {
      id: 1,
      title: "Database for Developers",
      organization: "Oracle",
      date: "2024",
      badge: orcale,
      certificateLink: "https://drive.google.com/file/d/1qe3zOSBLZX95v2KgviZ-G583pIMKX8cQ/view?usp=sharing",
    },
    {
      id: 2,
      title: "Machine Learning",
      organization: "Coursera",
      date: "2024",
      badge: stanford,
      certificateLink: "https://drive.google.com/file/d/18FVg1lL_boJ1i0v9F3wXjunKhe_WSW4R/view?usp=sharing",
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "2025",
      badge: aws,
      certificateLink: aws,
    },
    {
      id: 4,
      title: "Master Data Analysis",
      organization: "Udemy",
      date: "2024",
      badge: udemyimg,
      certificateLink: "https://drive.google.com/file/d/1TJRWNc2aATrU8Xy-D5HvGgLRMebJGvns/view?usp=sharing",
    },
    {
      id: 5,
      title: "Data Science & Analytics",
      organization: "HP",
      date: "2024",
      badge: hpimg,
      certificateLink: "https://drive.google.com/file/d/1OpGIp-NfcvVeTNhsfhmvBxpSuFiNXZYv/view?usp=sharing",
    },
    {
      id: 6,
      title: "AWS Solutions Architect",
      organization: "Amazon Web Services",
      date: "2025",
      badge: aws,
      certificateLink: aws,
    },
  ];

  return (
    <div name="certifications" className="bg-gradient-to-b from-black to-gray-800 w-full text-white pb-12">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Certifications</p>
          <p className="py-6">My Professional Certifications</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {certs.map(({ id, title, organization, date, badge, certificateLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg p-6 relative overflow-hidden bg-gradient-to-b from-gray-700 to-gray-900 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400 hover:border hover:border-gray-500"
            >
              <img src={badge} alt={`${title} badge`} className="rounded-full w-32 h-32 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400">{organization}</p>
                <p className="text-sm text-gray-500">{date}</p>
                <a
                  href={certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-center px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-lg shadow-md border border-gray-500"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

