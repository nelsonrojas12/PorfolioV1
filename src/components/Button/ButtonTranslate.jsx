import { useState } from 'react';
import style from './ButtonTranslate.module.css';
import esFlagImage from './eeuu.webp'; 
import enFlagImage from './mex.png';
import { motion } from 'framer-motion';

const ButtonTranslate = ({ onLanguageChange }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('es');

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        onLanguageChange(language);
        closeDropdown();
    };

    const openDropdown = () => {
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <motion.div // Agrega motion.div para aplicar animaciones de Framer Motion
            className={style.languageButtons}
            initial={false}
            animate={isDropdownOpen ? 'open' : 'closed'}
        >
            <motion.div
                className={`${style.languageButton} ${isDropdownOpen ? style.open : ''}`}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                whileTap={{ scale: 0.97 }}
            >
                {selectedLanguage === 'es' ? 'ES' : 'EN'}
                <span className={style.arrowIcon}>▼</span>
            </motion.div>
            <motion.div
                className={`${style.dropdownContent}`}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                }}
                initial={false}
                animate={isDropdownOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3 }}
            >
                <motion.button
                    onClick={() => handleLanguageChange('es')}
                    className={style.languageOption}
                    variants={{
                        open: { y: 0, opacity: 1 },
                        closed: { y: -20, opacity: 0 }
                    }}
                >
                    <img
                        src={enFlagImage}
                        alt="ES Flag"
                    />
                    ES
                </motion.button>
                <motion.button
                    onClick={() => handleLanguageChange('en')}
                    className={style.languageOption}
                    variants={{
                        open: { y: 0, opacity: 1 },
                        closed: { y: -20, opacity: 0 }
                    }}
                >
                    <img
                        src={esFlagImage}
                        alt="EN Flag"
                    />
                    EN
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default ButtonTranslate;
