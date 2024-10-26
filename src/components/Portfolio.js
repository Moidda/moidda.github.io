import React, { useEffect, useState } from 'react';
import Sidebar from './layouts/Sidebar';
import About from './sections/About';
import Publications from './sections/Publications';
import ResearchExperience from './sections/ResearchExperience';
import Education from './sections/Education';
import WorkExperience from './sections/WorkExperience';
import Awards from './sections/Awards';
import Resume from './sections/Resume';
import { SECTIONS } from '../constants/Sections';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      Object.values(SECTIONS).forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            currentPosition >= offsetTop - 100 &&
            currentPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar activeSection={activeSection} scrollToSection={scrollToSection} />

      <div className="ml-64 flex-1 p-8">
        <About />
        <Publications />
        <ResearchExperience />
        <Education />
        <WorkExperience />
        <Awards />
        <Resume />
      </div>
    </div>
  );
};

export default Portfolio;
