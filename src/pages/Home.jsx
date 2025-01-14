import { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import LinkedIn and Email icons
import Navbar from "../components/Navbar";

const Home = () => {
  const [showContact, setShowContact] = useState(false);

  const handleScroll = () => {
    window.scrollBy({ top: 500, behavior: 'smooth' });
  };

  const toggleContact = () => {
    setShowContact((prevState) => !prevState);
  };

  const closeModal = () => {
    setShowContact(false);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 bg-[#000000] text-[#D3D3D3]">
        <div className="text-center">
          <h1
            className="text-5xl font-extrabold mb-6 tracking-wide"
            style={{ fontFamily: 'Roboto, sans-serif', color: '#D3D3D3' }}
          >
            Welcome to My Digital Playground
          </h1>
          <p className="text-lg text-[#A9A9A9] mb-6 italic">
            A Developer Where Code Meets Command, Creativity Meets Technology
          </p>
          <p className="text-lg text-[#A9A9A9] mb-12 leading-relaxed">
            Hello, I'm <span className="font-semibold">Shreyas</span>, a passionate web developer with expertise in
            building scalable, dynamic, and interactive web applications. With hands-on experience in the
            <span className="font-semibold"> MERN stack</span> (MongoDB, Express.js, React, Node.js), I focus on delivering seamless user
            experiences and high-performance solutions. Beyond just coding, I thrive on turning ideas into reality
            by leveraging modern frameworks, clean design principles, and innovative technologies.
          </p>
          <p className="text-lg text-[#A9A9A9] mb-12 leading-relaxed">
            Whether it's creating sleek user interfaces, optimizing backend services, or deploying full-stack applications,
            I approach every project with enthusiasm and a problem-solving mindset. I'm always eager to learn, explore,
            and contribute to the tech ecosystem.
          </p>

          <div className="mt-10">
            <button
              onClick={handleScroll}
              className="mb-3 px-8 py-3 bg-[#8A2BE2] text-white text-lg font-semibold rounded-lg shadow-md 
                        hover:bg-[#0E76A8] transition-all duration-300"
            >
              Explore My Projects
            </button>
            <button
              onClick={toggleContact}
              className="mb-3 ml-6 px-8 py-3 bg-[#A9A9A9] text-[#000000] text-lg font-semibold rounded-lg shadow-md 
                        hover:bg-[#8b8b8b] transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>

          {/* Modal */}
          {showContact && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-[#1c1c1c] p-8 rounded-lg text-center text-[#D3D3D3] w-96">
                <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
                
                {/* Center the links */}
                <div className="flex flex-col justify-center items-center">
                  <p className="text-lg mb-4 flex justify-center items-center">
                    <a
                      href="https://www.linkedin.com/in/shreyas-patil11/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0E76A8] hover:underline mb-4 flex items-center"
                    >
                      <FaLinkedin className="mr-2 text-3xl" />
                      LinkedIn
                    </a>
                  </p>
                  <p className="text-lg mb-4 flex justify-center items-center">
                    <a
                      href="mailto:shreyaspatil1311@gmail.com"
                      className="text-[#8A2BE2] hover:underline flex items-center"
                    >
                      <FaEnvelope className="mr-2 text-3xl" />
                      Email Me
                    </a>
                  </p>
                </div>
                
                <button
                  onClick={closeModal}
                  className="mt-4 px-6 py-2 bg-[#D3D3D3] text-[#000000] font-semibold rounded-lg hover:bg-[#8b8b8b] transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;

