import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';
import TitleWithYear from '../common/TitleWithYear';


const courses = [
  {
    title: "CSE 305: Computer Architecture",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE305",
    topics: "Information and Instructions Representation, Processor and Control Unit Design, Memory, Cache, Multiprocessors"
  },
  {
    title: "CSE 309: Compiler",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE309",
    topics: "Lexical, Syntax and Semantic Analysis, Intermediate Code Generation, Code Optimization"
  },
  {
    title: "CSE 321: Computer Networks",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE321",
    topics: "Transport Protocols, Routing Algorithm, Congestion Control, Doman Name Systems, Cryptography, Authentication, Digital Signatures"
  },
  {
    title: "CSE 463: Introduction to Bioinformatics",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE463",
    topics: "Genome Sequencing, Rapid String Matching, Evolutionary trees and Phylogenetics, Statistical and Machine Learning Models"
  },
  {
    title: "CSE 471: Machine Learning",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE471",
    topics: "Supervised, Unsupervised, Reinforcement Learning, Neural Networks, Deep Learning, Convolutional Neural Networks"
  },
  {
    title: "CSE 409: Computer Graphics",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE409",
    topics: "Raster graphics, 3D Modeling and Rendering, Transformations, Illumination, Shading and Textures"
  },
  {
    title: "CSE 461: Algorithm Engineering",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE461",
    topics: "Computational Complexity, Algorithms for Combinatorial Optimization, Approximation Algorithms, Randomized Algorithms"
  },
  {
    title: "MATH 247: Linear Algebra",
    url: "https://cse.buet.ac.bd/academics/course_detail/MATH247",
    topics: "Gaussian elimination, Euclidean n-space, Linear transformations, Laplace Transform & Fourier Analysis"
  },
  {
    title: "CSE 313: Operating System",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE313",
    topics: "Process, Inter-Process Communication, Scheduling, Memory Management, Input/Output, File Systems"
  },
  {
    title: "MATH 145: Calculus",
    url: "https://cse.buet.ac.bd/academics/course_detail/MATH141",
    topics: "Differential Calculus, Integral Calculus, Ordinary Differential Equations"
  },
  {
    title: "CSE 405: Computer Security",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE405",
    topics: "Cryptography, Applications Security, Network Security, Security Attacks, Security Measures"
  },
  {
    title: "HUM 477: Socilology for Science and Technology",
    url: "https://cse.buet.ac.bd/academics/course_detail/HUM477",
    topics: "Social Research Methods, Social Impact Assessment, Globalization"
  }
];

const Education = () => {
  return (
    <div className='min-h-screen max-w-6xl mx-auto mt-10'>
        <SectionTitle title={SECTIONS.EDUCATION.title} id={SECTIONS.EDUCATION.id} />

        <div className='text-left space-y-2 mt-4'>
          <TitleWithYear title='Bangladesh University of Engineering and Technology (BUET)' year='March 2018 - June 2024' />
          <div>
            <p className="text-lg text-subtitle-gray font-semibold">BACHELOR OF SCIENCE</p>
            <p className="text-lg text-subtitle-gray font-semibold">COMPUTER SCIENCE AND ENGINEERING</p>
          </div>
          <div className='pt-4'>
            <p>GPA: 3.57/4.00</p>
            <p>Last Two Semesters: 3.82/4.00</p>
          </div>

          <h2 className="text-lg font-bold mb-6 text-center">Notable Courses</h2>
          <div className="grid grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <a
                key={index}
                className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow bg-white"
                href={course.url}
              >
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-sm flex flex-col h-full">{course.topics}</p>
              </a>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Education;