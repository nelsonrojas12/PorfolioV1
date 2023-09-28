import style from './Projects.module.css';
import { useState } from 'react';
import img1 from '../Projects/img1.jpg'
import img2 from '../Projects/img2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import translations from '../Translate/Translations';

const projectsData = [
  {
    title: 'Drivers',
    descriptions: {
      es: 'Aplicación web que muestra cartas detalladas de los pilotos más destacados de Fórmula 1 y aplica métodos de ordenamiento y filtrado para ofrecer una mejor experiencia.',
      en: 'Web application that displays detailed profiles of the most prominent Formula 1 drivers and applies sorting and filtering methods for a better user experience.',
    },
    details: 'Detalles adicionales del proyecto 1.',
    image: img1,
    githubLink: 'https://github.com/nelsonrojas12/PI-DRIVERS'
  },
  {
    title: 'Hotel Hunt',
    descriptions: {
      es: 'Aplicación web que te permite buscar y reservar hoteles de manera sencilla y conveniente. Como usuario, puedes crear una cuenta y explorar nuestro amplio catálogo de habitaciones.',
      en: 'Web application that allows you to search and book hotels easily and conveniently. As a user, you can create an account and explore our extensive room catalog.',
    },
    details: 'Detalles adicionales del proyecto 2.',
    image: img2,
    githubLink: 'https://github.com/ManrrubiaF/PF_HOSTEL'
  },
  // Otros proyectos...
];


const Projects = ({ language }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const currentTranslations = translations[language];

  return (
    <div className={style.content}>
      <h2 className={style.sectionTitle}>{currentTranslations.titleProyect}</h2>
      <div className={style.projectsContainer} id='projects'>
        <div className={style.projectGrid}>
          {projectsData.map((project, index) => (
            <div
              className={style.projectItem}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={style.projectImageContainer}>
                <img src={project.image} alt={project.title} style={{ maxWidth: '100%', height: 'auto' }} />
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className={style.projectDescription}
                      initial={{ opacity: 0, transform: 'translateX(-100%)' }}
                      animate={{ opacity: 1, transform: 'translateX(0)' }}
                      exit={{ opacity: 0, transform: 'translateX(-100%)' }}
                    >
                      <p>{project.descriptions[language]}</p> {/* Accede a la descripción del proyecto en el idioma actual */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>
                  {project.title}
                </h3>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.githubLink}
                  >
                    <motion.div
                      initial={{ scale: 1.3 }}
                      whileHover={{ scale: 2.2 }}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </motion.div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


