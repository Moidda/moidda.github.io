import React from 'react';
import { SECTIONS } from '../../constants/Sections';
import SectionTitle from '../common/SectionTitle';
import { URLS } from '../../constants/Urls';

const projects = [
    {
        title: "Ray Tracing",
        description: "Lights and shadows visualization using ray casting and p5js library. Click and drag anywhere on the screen to draw wall, press up arrow to randomly change the light color",
        tech: "Javascript, HTML",
        image: URLS.IMG_RAYTRACING,
        url: "https://moidda.github.io/P5js-Raycasting/"
    },
    {
        title: "CNN from Scratch",
        description: "Implementation of a convolutional neural network using Python and NumPy, trained on the NumtaDB dataset to recognize Bengali digits",
        tech: "Python",
        image: URLS.IMG_CNN,
        url: "https://github.com/Moidda/Level-4-Term-2-sessionals/tree/main/CSE%20472%20Machine%20Learning%20Sessional/CNN"
    },
    {
        title: "xv6 Memory Management",
        description: "Paging support in xv6 operating system",
        tech: "C",
        image: URLS.IMG_XV6,
        url: "https://github.com/Moidda/xv6-Memory-Management"
    },
    {
        title: "Trapped",
        description: "A 2D action and puzzle platformer with multiple endings. You can download and play the game for yourself",
        tech: "Unity Game Engine",
        image: URLS.IMG_TRAPPED,
        url: "https://github.com/muhammadnasif/Trapped-GameJam-2023?tab=readme-ov-file"
    },
    {
        title: "Chaldaal",
        description: "An online grocery system that built to demonstrate complex database operations including triggers, procedures and functions",
        tech: "Oracl SQL, Django, HTML",
        image: URLS.IMG_CHALDAAL,
        url: "https://github.com/Moidda/chaldaal"
    },
    {
        title: "Smart Construction Work System",
        description: "Citywide smart construction management system that given the availability of resources and different environmental factors, can predict the duration of certain projects and plan accordingly",
        tech: "Django",
        image: URLS.IMG_CODESAMURAI,
        url: "https://www.youtube.com/watch?v=Edxe6fTzqfA"
    }
];

const Projects = () => {
    return (
        <div className='min-h-screen max-w-6xl mx-auto mt-10'>
            <SectionTitle title={SECTIONS.PROJECTS.title} id={SECTIONS.PROJECTS.id} />


            <div className="grid grid-cols-2 gap-6 mt-6">
            {projects.map((project, index) => (
                <a
                    key={index}
                    className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow bg-white flex flex-col min-h-[180px]"
                    href={project.url}
                >
                    <img src={project.image} alt={project.title} />
                    <h3 className="font-semibold text-lg mt-2 mb-2">{project.title}</h3>
                    <div className="text-sm text-left flex flex-col h-full">
                        <p>{project.description}</p>
                        <span className='mt-auto'><b className='text-subtitle-gray'>Tech:</b> <span className='italic'>{project.tech}</span></span>
                    </div>
                </a>
            ))}
            </div>
        </div>
    );
};

export default Projects;