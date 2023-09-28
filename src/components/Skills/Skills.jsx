import style from './Skills.module.css';
import React from 'react';
import { motion } from 'framer-motion';
import translations from '../Translate/Translations';
import PropTypes from 'prop-types';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiSequelize,
  SiZotero
} from 'react-icons/si';


const Skills = ({language}) => {
  const skills = [
    { name: 'JavaScript', icon: SiJavascript, colorClass: style.SiJavascript },
    { name: 'Express', icon: SiExpress, colorClass: style.SiExpress },
    { name: 'Sequelize', icon: SiSequelize, colorClass: style.SiSequelize },
    { name: 'React', icon: SiReact, colorClass: style.SiReact },
    { name: 'Redux', icon: SiRedux, colorClass: style.SiRedux },
    { name: 'HTML', icon: SiHtml5, colorClass: style.SiHtml5 },
    { name: 'CSS', icon: SiCss3, colorClass: style.SiCss3 },
    { name: 'PostgreSQL', icon: SiPostgresql, colorClass: style.SiPostgresql },
    { name: 'Typescript', icon: SiTypescript, colorClass: style.SiTypescript },
    { name: 'Zustand', icon: SiZotero, colorClass: style.SiZotero},
    { name: 'Tailwind CSS', icon: SiTailwindcss, colorClass: style.SiTailwindcss },
    { name: 'Node.js', icon: SiNodedotjs, colorClass: style.SiNodedotjs },
  ];

  const currentTranslations = translations[language];

  return (
    <div className={style.skillsContainer} id='skills'>
      <div className={style.skillsCard}>
        <div className={style.cardContent}>
          <h2 className={style.sectionTitle}>{currentTranslations.titleSkill}</h2>
          <div className={style.skillGrid}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${style.skillContainer} ${skill.colorClass}`}
              >
                {skill.icon && React.createElement(skill.icon, { className: style.skillIcon })}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
          <h2 className={style.sectionTitle}>{currentTranslations.titlepersonalSkill}</h2>
          <div className={style.softSkillText}>
            <p>
            {currentTranslations.interpersonalSkillsTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
};

Skills.propTypes = {
  language: PropTypes.string.isRequired,
};
export default Skills;
