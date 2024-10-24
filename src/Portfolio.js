import React, { useEffect, useState } from 'react';
import { Linkedin, Github } from 'lucide-react';

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
      
      sections.forEach(({ id }) => {
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
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <div id="about" className="min-h-screen">
          <h1 className="text-5xl font-bold mb-2">
            Mehedi <span className="text-[#c39b8f]">Hasan</span>
          </h1>
          <div className="mb-4">
            <span>DHAKA, BANGLADESH</span>
            <span className="mx-2">•</span>
            <a href="mailto:abrar.nadib@gmail.com" className="text-[#c39b8f] hover:underline">
              ABRAR.NADIB@GMAIL.COM
            </a>
          </div>

          <div className="space-y-6 text-gray-600">
            <p>
              I'm a Full Stack Software Engineer at{' '}
              <a href="#" className="text-[#c39b8f] hover:underline">Chaldal</a>{' '}
              with three years of experience. I graduated from{' '}
              <a href="#" className="text-[#c39b8f] hover:underline">
                Bangladesh University of Engineering and Technology (BUET)
              </a>
              {' '}with a BSc in Computer Science and Engineering.
            </p>

            <p>
              My research interest is at the intersection of Human-Computer Interaction (HCI), 
              Applied Data Science, Visualization as well as Privacy and Security. Specifically, 
              I am interested in conducting research focusing on understanding and improving user 
              experiences in digital environments. Please visit my{' '}
              <a href="#" className="text-[#c39b8f] hover:underline">Google Scholar</a>
              {' '}profile to see my publications.
            </p>

            <p>
              As part of my undergrad thesis, I worked with{' '}
              <a href="#" className="text-[#c39b8f] hover:underline">Dr. Sadia Sharmin</a>
              , Associate Professor, CSE, BUET, in the field of Social Computing, HCI, and 
              Applied Machine Learning. We devised an interaction based method for analyzing 
              news credibility on Facebook.
            </p>

            <p>
              Complementing my scholarly pursuits, I am passionate about traveling, films, 
              competitive FPS gaming, and arts. I embrace diverse cultures and foster a 
              nuanced worldview.
            </p>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-[#c39b8f]">
                <Linkedin size={32} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#c39b8f]">
                <Github size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Other sections - add content as needed */}
        <div id="publications" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Publications</h2>
          {/* Add publications content */}
        </div>

        <div id="research-experience" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Research Experience</h2>
          {/* Add research experience content */}
        </div>

        <div id="education" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          {/* Add education content */}
        </div>

        <div id="work-experience" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
          {/* Add work experience content */}
        </div>

        <div id="skills" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          {/* Add skills content */}
        </div>

        <div id="awards" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Awards</h2>
          {/* Add awards content */}
        </div>

        <div id="resume" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Resume</h2>
          {/* Add resume content */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;