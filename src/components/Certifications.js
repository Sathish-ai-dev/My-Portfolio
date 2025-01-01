const Certifications = () => {
    const certs = [
      {
        id: 1,
        title: "AWS Solutions Architect",
        organization: "Amazon Web Services",
        date: "2023",
        badge: "https://via.placeholder.com/150"
      },
      {
        id: 2,
        title: "TensorFlow Developer",
        organization: "Google",
        date: "2023",
        badge: "https://via.placeholder.com/150"
      },
      {
        id: 3,
        title: "Data Science Professional",
        organization: "IBM",
        date: "2023",
        badge: "https://via.placeholder.com/150"
      }
    ];
  
    return (
      <div name="certifications" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Certifications</p>
            <p className="py-6">My Professional Certifications</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {certs.map(({ id, title, organization, date, badge }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-6 hover:scale-105 duration-500">
                <img src={badge} alt={title} className="rounded-full w-32 h-32 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400">{organization}</p>
                <p className="text-sm text-gray-500">{date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Certifications;