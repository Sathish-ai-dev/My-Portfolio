const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8 md:mt-20 px-4 md:px-0">
          Hi there! 👋 I'm Sai Charan Suggala, a passionate and versatile
          technology enthusiast specializing in Web Development, Data Analytics,
          Machine Learning, Generative AI, and Cloud Engineering. I thrive at the
          intersection of creativity and technology, turning complex problems into
          elegant solutions.
        </p>

        <br />

        <p className="text-xl px-4 md:px-0">
          I'm always excited to collaborate on innovative projects and explore
          new opportunities in technology. Feel free to check out my portfolio, and
          let’s create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
