
import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Home from './Home';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "FaceAuthJS: Face-Based Profile Authentication",
    description: "A secure and efficient face authentication library using face-api.js for seamless user verification.",
    detailDesc: "FaceAuthJS is an advanced face authentication library built with face-api.js, designed to enable passwordless authentication in web applications. It leverages deep learning-powered face recognition to securely verify users by matching facial descriptors. The system supports encrypted face descriptor storage in MongoDB, ensuring data privacy and security. FaceAuthJS provides a seamless and scalable authentication solution for modern web applications, enhancing security and user experience.",
    techStack: ["React.js", "face-api.js","crypto", "Multer", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
    demoLink: "https://face-authjs.vercel.app/",
    githubLink: "https://github.com/Shreyas-Patil-11/face-auth",
    date: "5-03-2025"
},

  {
    id: 2,
    title: "VirtualInterviewPrep: AI-Based Mock Interview Platform",
    description: "An AI-driven mock interview platform with video/audio recording and real-time feedback.",
    detailDesc: "VirtualInterviewPrep is an innovative platform designed to help job seekers prepare for interviews through mock sessions with video and audio recording capabilities. Powered by Gemini AI, it dynamically generates role-specific questions by analyzing the job description, years of experience, and job role. The platform offers AI-driven feedback, providing detailed ratings, suggestions, and correct answers to improve interview skills. Role-based customization enhances user experience, contributing to personalized learning and career readiness.",
    techStack: ["Next.js","React.js", "Clerk", "Gemini AI", "Video/Audio Recording", "AI Feedback System"],
    demoLink: "https://virtualinterviewprep.vercel.app/",
    githubLink: "https://github.com/Shreyas-Patil-11/ai-interview",
    date: "30-12-2024"
  },
  {
    id: 3,
    title: "hooks-library-react: NPM Package",
    description: "A reusable npm package offering custom React hooks for optimized development.",
    detailDesc: "hooks-library-react is an npm package providing a set of reusable, optimized custom hooks for React developers. It includes essential hooks such as useFetch for data fetching, useDebounce for managing delayed execution, useLocalStorage for persistent state management, and usePrevious for tracking previous state values. The package enhances performance by minimizing re-renders and ensures seamless integration across diverse React applications. Comprehensive documentation is available on GitHub and npm, making it developer-friendly.",
    techStack: ["React", "NPM", "JavaScript", "Custom Hooks"],
    demoLink: "https://www.npmjs.com/package/hooks-library-react",
    githubLink: "https://github.com/Shreyas-Patil-11/hooks-library-react",
    date: "15-10-2024"
  },
  {
    id: 4,
    title: "StyleSavvy: E-commerce Website",
    description: "A responsive e-commerce website with secure cart management and admin dashboard.",
    detailDesc: "StyleSavvy is a fully responsive e-commerce platform offering users a seamless shopping experience, including product browsing, filtering, and cart management. The site features a robust admin dashboard for inventory management, order tracking, and product updates. Built with React for the frontend and secured using JWT-based authentication, the backend leverages Node.js and Multer for file handling and image uploads. This ensures secure, smooth user and admin interactions.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
    demoLink: "https://stylsavvy.vercel.app/",
    githubLink: "https://github.com/Shreyas-Patil-11/e-commerce-app",
    date: "30-09-2024"
  },
  {
    id: 5,
    title: "Hackathon Project: Collaborative Project Management Tool",
    description: "A web-based project management platform for remote teams, completed in 36 hours.",
    detailDesc: "This hackathon project involved developing a real-time collaborative platform for remote teams to manage tasks efficiently. The tool supports features such as task assignment, real-time collaboration, file sharing, progress tracking, and an integrated chat system. Additionally, AI-powered analytics enhance productivity by providing insights. The project was developed using React for the frontend and Node.js, Express.js, and MongoDB for the backend, resulting in a responsive, fully functional platform optimized for desktop and mobile users.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    demoLink: "https://projectmanagementtool.vercel.app/",
    githubLink: "https://github.com/Shreyas-Patil-11/hackton-project-at-sgu",
    date: "20-08-2024"
  },
  {
      id: 6,
      title: "WorkoutHub: Fitness Website",
      description: "A responsive fitness website with over 1,000 instructional GIFs and AI-driven health insights.",
      detailDesc: "WorkoutHub is a comprehensive fitness web application engineered using React and Material UI, designed to help users explore various exercises through a vast collection of over 1,000 instructional GIFs. The platform features a powerful search and category system for easy navigation of workouts, along with integration of YouTube API for relevant video recommendations. Users can calculate their BMI in real-time and receive personalized health feedback, thanks to AI-powered insights. The website is optimized for a seamless, responsive user experience across all devices, ensuring accessibility and ease of use. Additionally, advanced API integrations enhance the overall functionality, making WorkoutHub a robust fitness solution.",
      techStack: ["React", "Material UI", "Fitness API", "YouTube API", "AI Integration"],
      demoLink: "https://workouthub.vercel.app/",
      githubLink: "https://github.com/Shreyas-Patil-11/fitness-app",
      date: "30-07-2024"    
  },
  {
    id: 7,
    title: "PlantNurtures: AI-Powered Plant Recognition",
    description: "A revolutionary website that identifies plants using image recognition technology.",
    detailDesc: "PlantNurtures is designed to provide users with instant and accurate information about plants by leveraging advanced image recognition technology. The website allows users to capture photos of plants, instantly recognizing and delivering relevant details about them. With a simple and intuitive interface, users can explore plant species and their characteristics effortlessly. The platform was developed using React for the frontend and the PlantNet API for plant identification, creating an engaging and educational experience for plant enthusiasts.",
    techStack: ["React", "PlantNet API", "Material UI"],
    demoLink: "https://plantnurtures.web.app/",
    githubLink: "https://github.com/Shreyas-Patil-11/plant-nurture",
    date: "25-06-2024"
  }
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  

  return (
    <>
      <Home />
      <main className="project container mx-auto px-6 py-16 bg-black text-white">
        <h1 className="text-4xl font-extrabold mb-12 text-center">My Projects</h1>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor={"#9B59B6"}>
            {projects.map((project) => (
              <VerticalTimelineElement
                key={project.id}
                contentStyle={{ background: "#121212", color: "#ffffff", borderRadius: "12px", padding: "20px" }}
                contentArrowStyle={{ borderRight: "10px solid #121212" }}
                date={project.date}
                dateClassName={"text-sm text-white"}
                iconStyle={{ background: "#9B59B6", color: "#ffffff" }}
              >
                <ProjectCard project={project} onOpenModal={handleOpenModal} />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-70 z-50">
            <div className="bg-black text-white p-8 rounded-lg max-w-2xl w-full relative shadow-xl">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-300 hover:text-gray-500 text-sm p-2 rounded-full"
              >
                X
              </button>
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="mb-4">{selectedProject.detailDesc}</p>
              <div className="flex flex-wrap space-x-3 mb-4">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="m-2 px-4 py-2 bg-gray-800 text-gray-400 rounded-full text-sm ">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-6">
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:text-teal-600 flex items-center space-x-1"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                )}
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 flex items-center space-x-1"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Projects;
