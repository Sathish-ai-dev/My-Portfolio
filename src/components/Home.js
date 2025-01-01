import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import TypewriterText from './TypewriterText';
import ProfileImage from './ProfileImage';
import PortfolioButton from './PortfolioButton';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h5 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
            I'm a <TypewriterText />
          </h5>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            I have experience building and designing software.
            Currently, I love to work on web applications using
            technologies like React, Tailwind, Next.js, and GraphQL.
          </p>
          <PortfolioButton />
        </div>

        {/* Right Side: Profile Image */}
        <div className="mt-8 md:mt-0">
          <ProfileImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
