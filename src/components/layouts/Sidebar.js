import React from 'react';
import { SECTIONS } from '../../constants/Sections';
import { URLS } from '../../constants/Urls';
import SocialLinks from '../common/SocialLinks';

const Sidebar = ({ activeSection, scrollToSection }) => {
  return (
    <div className="fixed w-64 h-screen bg-sidebar-black p-8">
      <div
        className="mb-4 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img
          src={URLS.PROFILE}
          alt="Profile"
          className="rounded-full w-40 h-40 mx-auto"
        />
      </div>
      
      <h1
        className="text-center text-base font-serif font-bold mb-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="text-white">Mehedi </span>
        <span className="text-white">Hasan</span>
      </h1>
      <h2 className='font-serif text-white'>Prospective Ph.D. Student, Software Engineer</h2>

      <div className="mb-6 mt-6">
        <SocialLinks />
      </div>

      <nav className="relative space-y-2">
        {Object.values(SECTIONS)
          .filter(({ shouldInclude }) => shouldInclude !== false)
          .map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`block w-full text-xs text-left text-white py-2 px-4 rounded transition-colors
              ${activeSection === id 
                ? 'bg-white bg-opacity-20 font-medium' 
                : 'hover:bg-white hover:bg-opacity-10'
              }`}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;