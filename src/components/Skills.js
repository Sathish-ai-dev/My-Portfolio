import { SiReact, SiJavascript, SiNodedotjs, SiTailwindcss, SiMongodb, SiExpress, SiPython, SiCplusplus, SiAmazon, SiMysql, SiTableau, SiFirebase, SiStreamlit } from "react-icons/si";
import { TbBrain } from "react-icons/tb"; // For Machine Learning
import { GiArtificialIntelligence } from "react-icons/gi"; // For Generative AI

const Skills=()=>{

const techs = [
  { id: 1, title: "React.js", style: "shadow-blue-500", icon: <SiReact /> },
  { id: 2, title: "JavaScript", style: "shadow-yellow-500", icon: <SiJavascript /> },
  { id: 3, title: "Node.js", style: "shadow-green-500", icon: <SiNodedotjs /> },
  { id: 4, title: "TailwindCss", style: "shadow-sky-500", icon: <SiTailwindcss /> },
  { id: 5, title: "MongoDB", style: "shadow-green-600", icon: <SiMongodb /> },
  { id: 6, title: "Express.js", style: "shadow-pink-400", icon: <SiExpress /> },
  { id: 7, title: "Python", style: "shadow-yellow-400", icon: <SiPython /> },
  { id: 8, title: "C++", style: "shadow-gray-500", icon: <SiCplusplus /> },
  { id: 9, title: "AWS CP", style: "shadow-orange-500", icon: <SiAmazon /> },
  { id: 10, title: "Power BI", style: "shadow-blue-700", icon: <SiTableau /> },
  { id: 11, title: "Microsoft SQL Server", style: "shadow-red-500", icon: <SiMysql /> },
  { id: 12, title: "Machine Learning", style: "shadow-blue-400", icon: <TbBrain /> },
  { id: 13, title: "Generative AI", style: "shadow-green-400", icon: <GiArtificialIntelligence /> },
  { id: 14, title: "Tableau", style: "shadow-indigo-600", icon: <SiTableau /> },
  { id: 15, title: "Firebase", style: "shadow-amber-400", icon: <SiFirebase /> },
  { id: 16, title: "Streamlit", style: "shadow-blue-700", icon: <SiStreamlit /> },
];


  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-8">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-5 inline">Skills</p>
          <p className="py-6 mt-5">These are the technologies I've worked with</p>
        </div>

        <div className="perspective-1500px w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center px-4 sm:px-0">
          {techs.map(({ id, title, icon, style }) => (
            <div
              key={id}
              className={`group relative shadow-md py-4 rounded-lg ${style} transform transition-all duration-500 hover:scale-110 hover:rotate-x-6 hover:rotate-y-6`}
            >
              <div className="transform-gpu group-hover:scale-105 transition-all duration-500 flex flex-col items-center gap-2">
                {icon}
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
