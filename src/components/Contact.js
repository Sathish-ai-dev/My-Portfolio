import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ej4t1ay', 'template_drf7l9a', form.current, {
        publicKey: 'xi3s1kF1lxwRmyz8G',
      })
      .then(
        () => {
          setSuccessMessage('✅ Message sent successfully!');
          form.current.reset();
          setTimeout(() => setSuccessMessage(''), 5000); // Clear message after 5 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessMessage('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white">
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
              name="name"
              placeholder="Enter your name"
              required
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
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

            {/* Hidden timestamp field */}
            <input
              type="hidden"
              name="timestamp"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>

            {successMessage && (
              <p className="text-green-400 text-center mt-2">{successMessage}</p>
            )}
          </form>
        </div>

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
          <a
            href="mailto:sathishsubramani9043@gmail.com"
            className="text-white hover:text-cyan-500 transition duration-300"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="tel:+919043736745"
            className="text-white hover:text-cyan-500 transition duration-300"
          >
            <FaPhone size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
