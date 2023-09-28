import { motion } from 'framer-motion';
import style from './About.module.css';
import yo from './yo.png';
import {  useRef } from 'react';
import Translations from '../Translate/Translations';

const About = ({ language}) => {
    
    const currentTranslations = Translations[language];

    const cardVariants = {
        initial: { x: -50, opacity: 0, rotateY: 90 },
        animate: { x: 0, opacity: 1, rotateY: 0, transition: { duration: 1.5, delay: 0.4 } },
    };

    const containerVariants = {
        initial: { opacity: 0, rotateY: 90 },
        animate: { opacity: 1, rotateY: 0, transition: { duration: 0.5, delay: 0.2 } },
    };

    // Crear una referencia para las restricciones de arrastre
    const constraintsRef = useRef(null);

    return (
        <div className={style.aboutContainer} id='about'>
            <div className={style.profileContainer}>
                {/* Envuelve la imagen en un motion.div para el arrastre */}
                <motion.div
                    ref={constraintsRef}
                    drag
                    dragConstraints={constraintsRef}
                >
                    <motion.img
                        src={yo}
                        alt="Me"
                        className={style.profileImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                </motion.div>
                <p className={style.devTitle}>{currentTranslations.fullStackDeveloper}</p>
            </div>
            <div className={style.about}>
                <motion.h1
                    className={style.title}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                >
                    ✨{currentTranslations.hello}, {currentTranslations.name}✨
                </motion.h1>
                <motion.div
                    className={style.aboutCard}
                    layoutId="about"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                >
                    <div className={style.textContainer}>
                        <p className={style.aboutText}>
                            <span className={style.highlightedText}>{currentTranslations.passionate}</span>. {currentTranslations.enjoyExploring} <span className={style.highlightedText}>{currentTranslations.goal}</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
