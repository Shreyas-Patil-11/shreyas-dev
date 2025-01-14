

// import ProjectCard from "../components/ProjectCard";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import Home from "./Home";


// const projects = [
//     {
//       id: 1,
//       title: "Fitness Website",
//       description: "A responsive fitness website with over 1,000 instructional GIFs.",
//       techStack: ["React", "Material UI", "Fitness API"],
//       demoLink: "https://workouthub.vercel.app/",
//       githubLink: "https://github.com/shreyaspatil1311/fitness-website",
//     },
//     {
//       id: 2,
//       title: "Face Authentication NPM Package",
//       description: "An NPM package for face-based profile authentication.",
//       techStack: ["JavaScript", "Multer", "MongoDB"],
//       demoLink: "",
//       githubLink: "https://github.com/shreyaspatil1311/face-auth-package",
//     },
//   ];
  
//   const Projects = () => (
//     <>
//       <Home />
//       <main className="container mx-auto px-4 py-16">
//         <h1 className="text-4xl font-bold text-gray-100 mb-12">My Projects</h1>
  
//         <div className="relative">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className={`flex items-start mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
//             >
//               {/* Timeline Line */}
//               <div
//                 className={`absolute top-0 w-1 h-full bg-gray-700 left-1/2 transform -translate-x-1/2`}
//                 style={{ zIndex: -1 }}
//               ></div>
  
//               {/* Timeline Dot */}
//               <div
//                 className={`absolute top-0 w-4 h-4 bg-green-400 rounded-full left-1/2 transform -translate-x-1/2`}
//               ></div>
  
//               {/* Project Content */}
//               <div
//                 className={`bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full ${
//                   index % 2 === 0 ? "ml-auto" : "mr-auto"
//                 }`}
//               >
//                 <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <div className="flex space-x-2 mb-4">
//                   {project.techStack.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex space-x-4">
//                   {project.demoLink && (
//                     <a
//                       href={project.demoLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-green-400 hover:text-green-500 flex items-center space-x-1"
//                     >
//                       <FaExternalLinkAlt />
//                       <span>Demo</span>
//                     </a>
//                   )}
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-400 hover:text-white flex items-center space-x-1"
//                   >
//                     <FaGithub />
//                     <span>GitHub</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </>
//   );
  
//   export default Projects;

// // // import React from "react";
// // import PropTypes from "prop-types";
// // import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// // const ProjectCard = ({ project }) => (
// //   <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
// //     <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
// //     <p className="text-gray-400 mb-4">{project.description}</p>
// //     <div className="flex space-x-2 mb-4">
// //       {project.techStack.map((tech) => (
// //         <span
// //           key={tech}
// //           className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
// //         >
// //           {tech}
// //         </span>
// //       ))}
// //     </div>
// //     <div className="flex space-x-4">
// //       {project.demoLink && (
// //         <a
// //           href={project.demoLink}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="text-green-400 hover:text-green-500"
// //         >
// //           <FaExternalLinkAlt /> Demo
// //         </a>
// //       )}
// //       <a
// //         href={project.githubLink}
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="text-gray-400 hover:text-white"
// //       >
// //         <FaGithub /> GitHub
// //       </a>
// //     </div>
// //   </div>
// // );

// // // PropTypes validation
// // ProjectCard.propTypes = {
// //   project: PropTypes.shape({
// //     title: PropTypes.string.isRequired,
// //     description: PropTypes.string.isRequired,
// //     techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
// //     demoLink: PropTypes.string,
// //     githubLink: PropTypes.string.isRequired,
// //   }).isRequired,
// // };

// // export default ProjectCard;


// import { motion } from 'framer-motion'; 
// import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
// import Home from './Home';

// const projects = [
//   {
//     id: 1,
//     title: "Fitness Website",
//     description: "A responsive fitness website with over 1,000 instructional GIFs.",
//     techStack: ["React", "Material UI", "Fitness API"],
//     demoLink: "https://workouthub.vercel.app/",
//     githubLink: "https://github.com/shreyaspatil1311/fitness-website",
//   },
//   {
//     id: 2,
//     title: "Face Authentication NPM Package",
//     description: "An NPM package for face-based profile authentication.",
//     techStack: ["JavaScript", "Multer", "MongoDB"],
//     demoLink: "",
//     githubLink: "https://github.com/shreyaspatil1311/face-auth-package",
//   },
// ];

// const Projects = () => (
//   <>
//     <Home />
//     <main className="container mx-auto px-4 py-16">
//       <h1 className="text-4xl font-bold text-gray-100 mb-12">My Projects</h1>

//       {/* Timeline and Project Cards */}
//       <div className="relative">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             className={`flex items-start mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.3 }} // Animation timing
//           >
//             {/* Timeline Line */}
//             <div className="absolute top-0 w-1 h-full bg-gray-700 left-1/2 transform -translate-x-1/2" style={{ zIndex: -1 }}></div>

//             {/* Timeline Dot */}
//             <div className="absolute top-0 w-4 h-4 bg-green-400 rounded-full left-1/2 transform -translate-x-1/2"></div>

//             {/* Project Content */}
//             <motion.div
//               className={`bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
//               <p className="text-gray-400 mb-4">{project.description}</p>
//               <div className="flex space-x-2 mb-4">
//                 {project.techStack.map((tech) => (
//                   <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex space-x-4">
//                 {project.demoLink && (
//                   <a
//                     href={project.demoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-green-400 hover:text-green-500 flex items-center space-x-1"
//                   >
//                     <FaExternalLinkAlt />
//                     <span>Demo</span>
//                   </a>
//                 )}
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white flex items-center space-x-1"
//                 >
//                   <FaGithub />
//                   <span>GitHub</span>
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </main>
//   </>
// );

// export default Projects;


// import { motion } from 'framer-motion';
// import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
// import { useState } from 'react';
// import Home from './Home';

// const projects = [
//   {
//     id: 1,
//     title: "Fitness Website",
//     description: "A responsive fitness website with over 1,000 instructional GIFs.",
//     techStack: ["React", "Material UI", "Fitness API"],
//     demoLink: "https://workouthub.vercel.app/",
//     githubLink: "https://github.com/shreyaspatil1311/fitness-website",
//     date: "2024-10-30", // Project date
//   },
//   {
//     id: 2,
//     title: "Face Authentication NPM Package",
//     description: "An NPM package for face-based profile authentication.",
//     techStack: ["JavaScript", "Multer", "MongoDB"],
//     demoLink: "",
//     githubLink: "https://github.com/shreyaspatil1311/face-auth-package",
//     date: "2024-08-25", // Project date
//   },
// ];

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <>
//       <Home />
//       <main className="container mx-auto px-4 py-16">
//         <h1 className="text-4xl font-bold text-gray-100 mb-12">My Projects</h1>

//         {/* Timeline and Project Cards */}
//         <div className="relative">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               className={`flex items-start mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.3 }} // Animation timing
//             >
//               {/* Timeline Dot */}
//               <div className="absolute top-0 w-4 h-4 bg-green-400 rounded-full left-1/2 transform -translate-x-1/2 z-10"></div>

//               {/* Timeline Line */}
//               <div
//                 className="absolute top-0 w-1 bg-gray-700 left-1/2 transform -translate-x-1/2 z-0"
//                 style={{
//                   height: 'calc(100% + 64px)', // Extend the line to the project card center
//                 }}
//               ></div>

//               {/* Project Content */}
//               <motion.div
//                 className={`bg-gray-800 p-5 rounded-lg shadow-lg max-w-2xl w-full ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} hover:cursor-pointer`}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//                 onClick={() => handleOpenModal(project)} // Open the modal on click
//               >
//                 <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <p className="text-gray-500 text-sm">{project.date}</p>
//                 <div className="mt-4">
//                   <motion.button
//                     className="bg-green-400 text-white py-2 px-4 rounded-full mt-4"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ type: 'spring', stiffness: 300 }}
//                   >
//                     View Details
//                   </motion.button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Modal for Project Details */}
//         {selectedProject && (
//           <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
//             <div className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full relative">
//               {/* Close Button */}
//               <button
//                 onClick={handleCloseModal}
//                 className="absolute top-2 right-2 text-white bg-gray-700 hover:bg-gray-600 text-sm p-2 rounded-full"
//               >
//                 X
//               </button>
//               <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
//               <p className="text-gray-400 mb-4">{selectedProject.description}</p>
//               <div className="flex space-x-2 mb-4">
//                 {selectedProject.techStack.map((tech) => (
//                   <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex space-x-4">
//                 {selectedProject.demoLink && (
//                   <a
//                     href={selectedProject.demoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-green-400 hover:text-green-500 flex items-center space-x-1"
//                   >
//                     <FaExternalLinkAlt />
//                     <span>Demo</span>
//                   </a>
//                 )}
//                 <a
//                   href={selectedProject.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white flex items-center space-x-1"
//                 >
//                   <FaGithub />
//                   <span>GitHub</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </>
//   );
// };

// export default Projects;


// body {
//     background: linear-gradient(135deg, #0A0A0A 0%, #1C1C1C 40%, #333333 100%);
//     background-size: 400% 400%; /* Large background size for smooth flow */
//     animation: gradientFlow 25s linear infinite, shimmerEffect 15s ease-in-out infinite;
//   }
  
//   /* Continuous Smooth Gradient Flow */
//   @keyframes gradientFlow {
//     0% { background-position: 0% 50%; }
//     25% { background-position: 50% 50%; }
//     50% { background-position: 100% 50%; }
//     75% { background-position: 50% 50%; }
//     100% { background-position: 0% 50%; }
//   }
  
//   /* Smooth Shimmer Effect */
//   @keyframes shimmerEffect {
//     0% { background: linear-gradient(135deg, #0A0A0A 0%, #1C1C1C 40%, #333333 100%); }
//     50% { background: linear-gradient(135deg, #333333 0%, #0A0A0A 40%, #1C1C1C 100%); }
//     100% { background: linear-gradient(135deg, #0A0A0A 0%, #1C1C1C 40%, #333333 100%); }
//   }