import React, { useState } from "react";
import { motion } from "framer-motion";
import aws from "../assets/aws-2.jpeg";
import stanford from "../assets/stanford.jpg";
import orcale from "../assets/oracle_dev.png";
import udemyimg from "../assets/udemy2.jpg";
import hpimg from "../assets/hpimg.png";
import ibm from "../assets/ibm.png";


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
      certificateLink: "https://drive.google.com/file/d/1k8w_ufmh_tSAGJ5sgHX-lgsHIXkrZDXc/view",
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
      title: "IBM Winter Intership",
      organization: "IBM",
      date: "2025",
      badge: ibm,
      certificateLink: "https://drive.google.com/file/d/1XNYyM53q5NNU707eAC2y-GmHrrJXqsEB/view?usp=sharing",
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
            <CertificationCard
              key={id}
              title={title}
              organization={organization}
              date={date}
              badge={badge}
              certificateLink={certificateLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CertificationCard = ({ title, organization, date, badge, certificateLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  const badgeVariants = {
    initial: { scale: 1, y: 0, rotateY: 0 },
    hover: { 
      scale: 1.1, 
      y: -10,
      transition: { 
        rotateY: { duration: 1.5, ease: "easeInOut" },
        scale: { duration: 0.4 },
        y: { duration: 0.4 }
      }
    }
  };

  const textVariants = {
    initial: { y: 0, opacity: 1 },
    hover: { 
      y: -5, 
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1, boxShadow: "0px 0px 0px rgba(99, 102, 241, 0)" },
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.5)",
      transition: { duration: 0.3, delay: 0.2 }
    }
  };

  const shimmerVariants = {
    initial: { 
      backgroundPosition: "-200% 0",
      opacity: 0,
    },
    hover: { 
      backgroundPosition: "200% 0",
      opacity: 1,
      transition: { 
        backgroundPosition: { repeat: Infinity, duration: 2, ease: "linear" },
        opacity: { duration: 0.3 }
      }
    }
  };

  return (
    <motion.div
      className="shadow-md shadow-gray-600 rounded-lg p-6 relative overflow-hidden bg-gradient-to-b from-gray-700 to-gray-900"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/10 to-transparent"
        variants={shimmerVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      />

      <motion.div
        className="absolute left-1/2 top-20 -translate-x-1/2 w-36 h-36 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-lg"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center bg-gray-800 p-1"
        variants={badgeVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        <img 
          src={badge} 
          alt={`${title} badge`} 
          className="rounded-full w-full h-full object-cover"
        />
      </motion.div>

      <motion.div 
        className="text-center"
        variants={textVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{organization}</p>
        <p className="text-sm text-gray-500">{date}</p>
        
        <motion.a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-center px-4 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-center rounded-lg border border-indigo-700/50"
          variants={buttonVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          View Certificate
          

          <motion.span 
            className="ml-2 inline-block"
            animate={isHovered ? { x: [0, 4, 0], transition: { repeat: Infinity, duration: 1 } } : {}}
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Certifications;