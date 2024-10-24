import React from 'react';

const sections = [
  { id: 'about', label: 'ABOUT' },
  { id: 'publications', label: 'PUBLICATIONS' },
  { id: 'research-experience', label: 'RESEARCH EXPERIENCE' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'work-experience', label: 'WORK EXPERIENCE' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'awards', label: 'AWARDS' },
  { id: 'resume', label: 'RESUME' }
];

const Sidebar = ({ activeSection, scrollToSection }) => {
  return (
    <div className="fixed w-64 h-screen bg-[#c39b8f] p-8">
      <div className="mb-8">
        <img
          src="/api/placeholder/150/150"
          alt="Profile"
          className="rounded-full w-32 h-32 mx-auto mb-4"
        />
      </div>
      
      <nav>
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`block w-full text-left py-2 px-4 mb-2 rounded transition-colors
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