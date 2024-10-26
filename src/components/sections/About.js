import React from 'react';
import URL from '../common/Url';

const About = () => {
  return (
    <div id="about" className="min-h-screen">
      <h1 className="text-center text-6xl font-serif font-bold pt-5">
        Mehedi <span className="text-[#5b6366]">Hasan</span>
      </h1>
      <span>DHAKA, BANGLADESH</span>

      <div className="text-left space-y-6 text-gray-600">
        <p>
            I am a Software Engineer (L3) <b>Specializing in Research and Algorithms</b> at{' '}
            <URL url="https://chaldal.tech/" text="Chaldal" />. I graduated from{' '}
            <URL url="https://www.buet.ac.bd/web/#/" text="Bangladesh University of Engineering and Technology (BUET)" />{' '}
            with a B.Sc in Computer Science and Engineering.
        </p>

        <p>
            Outside of work, I am involved in academic research. My primary area
            of research experience is in <b>Human Computer Interaction</b>.
            I am also passionate about <b>Visualization</b>, <b>VR/AR</b>, and{' '}
            <b>Ubiquitous technologies</b>. I am also interested in{' '}
            <b>Machine Learning</b> and <b>Computer Vision</b> and how they can
            be used to solve real-world problems. The goal that I tend to seek
            while working in research is to make technology more accessible
            and user-friendly for everyone while also ensuring that it is
            secure and reliable.
        </p>

        <p>
            Through my work experience, I have gained expertise in{' '}
            <b>Algorithms</b> and <b>Systems</b>, including <b>Networking</b>,{' '}
            <b>Distributed Systems</b> and <b>System Design</b>. I have worked
            directly with server infrastructure, which has exposed me to the
            complexities of a distributed system, which has inspired me to
            tackle and gain a deeper understanding to contribute to solving these
            challenges in Networking and <b>Cloud Computing</b>. I am interested in how
            a large scale system handle secure network communication and
            resource management at scale, especially when integrating machine learning components.
        </p>

        <p>
            Beyond my academic and professional pursuits, I am deeply passionate
            about traveling, films, and video games. Having explored over 20 cities
            across 5 countries, I am on a mission to visit 30 countries by the
            age of 40. I love playing video games and play competitive FPS matches
            with friends. I have also explored a bit of <b>Game Development</b>,
            creating several games on my own for fun. At home, I am a proud cat parent,
            sharing a special bond with my feline best friend. My wife and I also
            work together to rescue and care for stray cats in our neighborhood,
            a cause close to our hearts.
        </p>
      </div>
    </div>
  );
};

export default About;
