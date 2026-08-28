import React from "react";    
import pic from "../assets/portpic.jpg";
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const ProfileImage = () => {
  return (
    <div>
      <img 
        src={pic}
        alt="my profile" 
        className="rounded-2xl mx-auto w-1/3 md:w-2/4" 
      />
      <div className="flex justify-center space-x-6 mt-8">
                  
                  <a
                    href="https://www.linkedin.com/in/sathish-ai-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-500 transition duration-300"
                  >
                    <FaLinkedin size={30} />
                  </a>
              
                  <a
                    href="https://github.com/Sathish-ai-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-500 transition duration-300"
                  >
                    <FaGithub size={30} />
                  </a>
                            
                </div>
    </div>
    
  );
};

export default ProfileImage;
