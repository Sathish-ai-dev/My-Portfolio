import { useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import TypewriterText from './TypewriterText';
import ProfileImage from './ProfileImage';
import PortfolioButton from './PortfolioButton';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a <TypewriterText />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have experience building and designing software.
            Currently, I love to work on web applications using
            technologies like React, Tailwind, Next.js and GraphQL.
          </p>
          <PortfolioButton />
        </div>
        <ProfileImage />
      </div>
    </div>
  );
};

export default Home;