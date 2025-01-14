import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <motion.div
      className="p-6 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105"
      style={{ backgroundColor: '#1A1A1A', color: '#D3D3D3' }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 15px 5px rgba(138, 43, 226, 0.6), 0 0 25px 10px rgba(0, 255, 255, 0.4)',
      }}
      onClick={() => onOpenModal(project)}
    >
      <h2 className="text-2xl font-semibold mb-4" style={{ color: '#8A2BE2' }}>
        {project.title}
      </h2>
      <p className="mb-4">{project.description}</p>

      <div className="mt-4">
        <motion.button
          className="py-2 px-5 rounded-full mt-4 font-medium"
          style={{ backgroundColor: '#8A2BE2', color: '#D3D3D3' }}
          whileHover={{ scale: 1.1, backgroundColor: '#0E76A8' }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(project);
          }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ProjectCard;
