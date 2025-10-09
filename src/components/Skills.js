import { SiReact, SiJavascript, SiNodedotjs, SiTailwindcss, SiMongodb, SiExpress, SiPython, SiCplusplus, SiAmazon, SiMysql, SiTableau, SiFirebase, SiStreamlit, SiOpencv, SiTensorflow, SiDeepnote, SiHtml5, SiPytorch } from "react-icons/si";
import { TbBrain } from "react-icons/tb"; // For Machine Learning
import { GiArtificialIntelligence } from "react-icons/gi"; // For Generative AI

const Skills=()=>{

const techs = [
  { id: 1, title: "Python", style: "shadow-yellow-400", icon: <SiPython /> },
  { id: 4, title: "Machine Learning", style: "shadow-blue-400", icon: <TbBrain /> },
  { id: 8, title: "Tensorflow", style: "shadow-pink-400", icon: <SiTensorflow /> },
  { id: 9, title: "Deeplearning", style: "shadow-red-500", icon: <SiDeepnote /> },
  { id: 7, title: "OpenCv", style: "shadow-blue-500", icon: <SiOpencv /> },
  { id: 11, title: "YOLOv5", style: "shadow-pink-500", icon: <GiArtificialIntelligence /> },
  { id: 2, title: "MongoDB", style: "shadow-green-600", icon: <SiMongodb /> },
  { id: 3, title: "AWS CP", style: "shadow-orange-500", icon: <SiAmazon /> },
  { id: 5, title: "Firebase", style: "shadow-amber-400", icon: <SiFirebase /> },
  { id: 6, title: "Streamlit", style: "shadow-pink-400", icon: <SiStreamlit /> },
  { id: 10, title: "HTML/CSS", style: "shadow-green-500", icon: <SiHtml5 /> },
  { id: 12, title: "Flask", style: "shadow-blue-500", icon: <SiFlask /> },
  {id : 13,title:"Pytorch", style:"shadow-orange-500", icon:<SiPytorch />},
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
