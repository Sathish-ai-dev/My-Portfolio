// const Contact = () => {
//     return (
//       <div name="contact" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white">
//         <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//           <div className="pb-8">
//             <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
//             <p className="py-6">Submit the form below to get in touch with me</p>
//           </div>
  
//           <div className="flex justify-center items-center">
//             <form action="https://getform.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col w-full md:w-1/2">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               />
//               <input
//                 type="text"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               />
//               <textarea
//                 name="message"
//                 rows="10"
//                 placeholder="Enter your message"
//                 className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               ></textarea>
  
//               <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//                 Let's talk
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Contact;

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(""); // For success/error messages

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        e.target,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("success");
          e.target.reset(); // Reset the form fields
        },
        (error) => {
          console.error(error.text);
          setFormStatus("error");
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {formStatus === "success" && (
          <p className="text-green-500 text-center mt-4">
            Your message has been sent successfully!
          </p>
        )}
        {formStatus === "error" && (
          <p className="text-red-500 text-center mt-4">
            Oops! Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
