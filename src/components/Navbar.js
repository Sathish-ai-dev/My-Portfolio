import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "certifications" },
    { id: 6, link: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black/80 backdrop-blur-md fixed top-0 left-0 z-[100] shadow-md">
      {/* Logo */}
      <div className="z-[100]">
        <h1 className="text-3xl font-signature ml-2 sm:text-4xl md:text-4xl text-cyan-400">
          𝓢𝓪𝓽𝓱𝓲𝓼𝓱
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 z-[100]">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500} offset={-80}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-[100] text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
          bg-gradient-to-b from-gray-900 via-black to-gray-800 space-y-8 animate-slideDown z-[90]"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-3xl md:text-4xl cursor-pointer capitalize text-gray-200 hover:text-cyan-400 transition duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
