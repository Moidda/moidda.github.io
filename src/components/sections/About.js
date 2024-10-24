import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="min-h-screen">
      <h1 className="text-center text-6xl font-serif font-bold p-6">
        Mehedi <span className="text-[#0ad3f2]">Hasan</span>
      </h1>
      <div className="mb-4">
        <span>DHAKA, BANGLADESH</span>
        <span className="mx-2">•</span>
        <a href="mailto:mhasan912@@gmail.com" className="text-[#c39b8f] hover:underline">
          mhasan912@gmail.com
        </a>
      </div>

      <div className="space-y-6 text-gray-600">
        <p>
          I'm a Full Stack Software Engineer at{' '}
          <a href="#" className="text-[#c39b8f] hover:underline">Optimizely</a>
          {' '}with three years of experience. I graduated from{' '}
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
  );
};

export default About;