// const Experience = () => {
//   const techs = [
//     { id: 1, title: "React.js", style: "shadow-blue-500" },
//     { id: 2, title: "JavaScript", style: "shadow-yellow-500" },
//     { id: 3, title: "Node.js", style: "shadow-green-500" },
//     { id: 4, title: "TailwindCss", style: "shadow-sky-500" },
//     { id: 5, title: "MongoDB", style: "shadow-green-600" },
//     { id: 6, title: "Express.js", style: "shadow-pink-400" },
//     { id: 7, title: "Python", style: "shadow-yellow-400" },
//     { id: 8, title: "C++", style: "shadow-gray-500" },
//     { id: 9, title: "AWS CP", style: "shadow-orange-500" },
//     { id: 10, title: "Power BI", style: "shadow-blue-700" },
//     { id: 11, title: "Microsoft SQL Server", style: "shadow-red-500" },
//     { id: 12, title: "Machine Learning", style: "shadow-blue-400" },
//     { id: 13, title: "Generative AI", style: "shadow-green-400" },
//     { id: 14, title: "Tableau", style: "shadow-indigo-600" },
//     { id: 15, title: "Firebase", style: "shadow-amber-400" },
//   ];

//   return (
//     <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-8">
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
//           <p className="py-6">These are the technologies I've worked with</p>
//         </div>

//         <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center px-4 sm:px-0">
//           {techs.map(({ id, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
//             >
//               <p className="mt-4">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;


const Skills = () => {
  const techs = [
    { id: 1, title: "React.js", style: "shadow-blue-500" },
    { id: 2, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 3, title: "Node.js", style: "shadow-green-500" },
    { id: 4, title: "TailwindCss", style: "shadow-sky-500" },
    { id: 5, title: "MongoDB", style: "shadow-green-600" },
    { id: 6, title: "Express.js", style: "shadow-pink-400" },
    { id: 7, title: "Python", style: "shadow-yellow-400" },
    { id: 8, title: "C++", style: "shadow-gray-500" },
    { id: 9, title: "AWS CP", style: "shadow-orange-500" },
    { id: 10, title: "Power BI", style: "shadow-blue-700" },
    { id: 11, title: "Microsoft SQL Server", style: "shadow-red-500" },
    { id: 12, title: "Machine Learning", style: "shadow-blue-400" },
    { id: 13, title: "Generative AI", style: "shadow-green-400" },
    { id: 14, title: "Tableau", style: "shadow-indigo-600" },
    { id: 15, title: "Firebase", style: "shadow-amber-400" },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-8">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        {/* Parent container with perspective */}
        <div className="perspective-1500px w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center px-4 sm:px-0">
          {techs.map(({ id, title, style }) => (
            <div
              key={id}
              className={`group relative shadow-md py-4 rounded-lg ${style} transform transition-all duration-500 hover:scale-110 hover:rotate-x-6 hover:rotate-y-6`}
            >
              <div className="transform-gpu group-hover:scale-105 transition-all duration-500">
                <p className="mt-4">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
