// import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
// import { Link } from 'react-scroll';
// import TypewriterText from './TypewriterText';
// import ProfileImage from './ProfileImage';
// import PortfolioButton from './PortfolioButton';

// const Home = () => {
//   return (
//     <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         {/* Left Side: Text Content */}
//         <div className="flex flex-col justify-center h-full text-center md:text-left">
//           <h5 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
//             I'm a <TypewriterText />
//           </h5>
//           <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
//             I have experience building and designing software.
//             Currently, I love to work on web applications using
//             technologies like React, Tailwind, Next.js, and GraphQL.
//           </p>
//           <PortfolioButton />
//         </div>

//         {/* Right Side: Profile Image */}
//         <div className="mt-8 md:mt-0">
//           <ProfileImage />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import pic from "../assets/portpic.jpg";
import Typed from "typed.js";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue } from "framer-motion";

const Home = () => {
  const typedRef = useRef(null);

  // Typewriter effect setup
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Data Analyst",
        "Machine Learning Engineer",
        "Cloud Engineer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  // Moving Border Component with Sharp Line
  const MovingBorder = ({ children, duration = 3000 }) => {
    const pathRef = useRef(null);
    const progress = useMotionValue(0);

    useAnimationFrame((time) => {
      const length = pathRef.current?.getTotalLength();
      if (length) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
      }
    });

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
      const updatePosition = () => {
        if (pathRef.current) {
          const point = pathRef.current.getPointAtLength(progress.get());
          x.set(point.x);
          y.set(point.y);
        }
      };
      updatePosition();
      const unsubscribe = progress.on("change", updatePosition);
      return () => unsubscribe();
    }, [progress, x, y]);

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute h-full w-full"
          width="100%"
          height="100%"
        >
          <rect
            fill="none"
            width="100%"
            height="100%"
            rx="9999" // Large radius for circular path
            ry="9999"
            ref={pathRef}
          />
        </svg>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
          }}
        >
          <div className="w-3 h-1 bg-cyan-500 rounded-full" />
        </motion.div>
        {children}
      </>
    );
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h5 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
            I'm a{" "}
            <span
              ref={typedRef}
              className="text-teal-400 font-semibold whitespace-nowrap"
            ></span>
          </h5>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            I have experience building and designing software. Currently, I
            love to work on web applications using technologies like React,
            Tailwind, Next.js, and GraphQL.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side: Profile Image with Moving Border */}
        <div className="mt-8 md:mt-0 md:ml-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80 p-1 overflow-hidden">
            <MovingBorder duration={3000}>
              <img
                src={pic}
                alt="Profile"
                className="w-4/5 h-full object-cover rounded-full relative z-10"
              />
            </MovingBorder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;