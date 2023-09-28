// PortfolioSection.js
import { animateScroll as scroll } from 'react-scroll';
import Style from './PortfolioSection.module.css';
import NavBar from "../../components/NavBar/Navbar";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import ContacMe from "../../components/ContacMe/ContacMe";
import { useState } from 'react';

const PortfolioSection = () => {
  const [language, setLanguage] = useState('es');

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={Style.contenedor}>
      <NavBar language={language} setLanguage={setLanguage} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <ContacMe language={language} />
      <button className={Style.scrollButton} onClick={scrollToTop}>
        ↑
      </button>
    </div>
  );
};

export default PortfolioSection;
