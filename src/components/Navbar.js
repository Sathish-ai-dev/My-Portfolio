import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'Skills' },
    { id: 5, link: 'certifications' },
    { id: 6, link: 'contact' },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0 left-0 z-50">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-signature ml-2 sm:text-4xl md:text-5xl">Portfolio</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium text-gray-500 hover:text-cyan-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 space-y-6">
          {links.map(({ id, link }) => (
            <li key={id} className="text-4xl cursor-pointer capitalize text-white">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
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
