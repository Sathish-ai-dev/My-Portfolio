import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const PortfolioButton = () => {
  return (
    <div>
      <Link 
        to="projects" 
        smooth 
        duration={500} 
        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
      >
        Portfolio
        <span className="group-hover:rotate-90 duration-300">
          <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
        </span>
      </Link>
    </div>
  );
};

export default PortfolioButton;