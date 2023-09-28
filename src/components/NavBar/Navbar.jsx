import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCode, faTools, faDownload } from '@fortawesome/free-solid-svg-icons';
import style from './NavBar.module.css';
import Translations from '../Translate/Translations';
import ButtonTranslate from '../Button/ButtonTranslate';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import Curriculum from './Curriculum.pdf'


const NavBar = ({ language, setLanguage }) => {
  const currentTranslations = Translations[language];
  const [menuActive, setMenuActive] = useState(true); // Cambia el valor predeterminado a false

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={style.navbar}>
      <a href={Curriculum} download="cv.pdf" className={style.brand}>
        <FontAwesomeIcon icon={faDownload} /> CV
      </a>


      <div className={style.menuButton} onClick={toggleMenu}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </div>

      <AnimatePresence>
        {menuActive && (
          <motion.ul
            className={style.navLinks}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <li>
              <Link to="about" smooth={true} duration={500}>
                <FontAwesomeIcon icon={faUser} /> {currentTranslations.about}
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={600}>
                <FontAwesomeIcon icon={faCode} /> {currentTranslations.projects}
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={700}>
                <FontAwesomeIcon icon={faTools} /> {currentTranslations.skills}
              </Link>
            </li>
            <li>
              <Link to="ContactMe" smooth={true} duration={800}>
                <FontAwesomeIcon icon={faEnvelope} /> {currentTranslations.contact}
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>

      <ButtonTranslate onLanguageChange={handleLanguageChange} />
    </nav>
  );
};

export default NavBar;