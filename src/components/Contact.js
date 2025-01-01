import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import LinkedIn and GitHub icons

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rvyxb9j', 'template_eeijnup', form.current, {
        publicKey: 'YMPLvu9kz9sSzEgVw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full max-w-md mx-auto space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          {/* LinkedIn Icon with link */}
          <a
            href="https://www.linkedin.com/in/saicharansuggala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-500 transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          {/* GitHub Icon with link */}
          <a
            href="https://github.com/CharanSuggala26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-500 transition duration-300"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
