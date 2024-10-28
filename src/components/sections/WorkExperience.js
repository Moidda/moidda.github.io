import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';
import TitleWithYear from '../common/TitleWithYear';
import { ExternalLink, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: "ASAP Delivery",
    url: "/asap-delivery",
    description: "Designed an algorithm to calculate geographical area overlapping a route, through which a driver can detour for a specific slack time period to deliver to a new location without impacting other deliveries in the route",
    tech: "Python, Docker, .NET",
  },
  {
    title: "Last Mile Routing",
    url: "/asap-delivery",
    description: "Designed a new routing algorithm using different heuristic and probabilistic search methods",
    tech: "Python, Docker, .NET",
  },
  {
    title: "Traffic Estimate",
    url: "/asap-delivery",
    description: "Developed a timeseries database and supervised an interpolation project using spatio-temporal models to fill missing traffic speed data",
    tech: "Python, ML",
  },
  {
    title: "Automate Task Assignment",
    url: "/asap-delivery",
    description: "Designed and deployed an algorithm for solving the task assignment problem via an API endpoint, integrated into a system for periodic task assignment within the warehouse",
    tech: "F#, xUnit",
  },
  {
    title: "Microservices Communication",
    url: "",
    description: "Designed and implemented a gRPC-based communcation system across three services to transmit information at specific events, tested in a QA environment and oversaw its system-wide deployment",
    tech: "gRPC, F#, C# .NET",
  },
  {
    title: "Spatial Database Model",
    description: "Developed a spatial database model which can store polgonal area and query with intersecting geolocation which is used to restrict entry of cecrtain vehicles in certain areas",
    tech: "Microsoft SQL Server, .NET",
  },
  {
    title: "Re-Modeling Task AssignmentSystem",
    description: "Designed a more efficient task assignment model, refactored existing models, redesigned the UI and improved underlying logic",
    tech: "F#, ReactXP"
  }
];

const handleClick = (url) => {
  // Replace with your routing logic
  console.log(`Navigating to: ${url}`);
};

const WorkExperience = () => {
  return (
    <div className="min-h-screen mt-10">
      <SectionTitle title={SECTIONS.WORK_EXPERIENCE.title} id={SECTIONS.WORK_EXPERIENCE.id} />

      <div className='text-left space-y-2 mt-4'>
        <p className='text-3xl font-semibold'>CHALDAL TECH</p>

        <div className='pt-4'>
          <TitleWithYear title="Software Engineer III" year="Jul 2024 - Present"/>
          <p className="text-lg text-subtitle-gray font-semibold">SPECIALIZED IN RESEARCH AND ALGORITHMS</p>
        </div>

        <div className='pt-4'>
          <TitleWithYear title="Software Engineer III" year="Mar 2024 - Jul 2024"/>
          <p className="text-lg text-subtitle-gray font-semibold">LOGISTICS TEAM</p>
        </div>

        <div className='pt-4'>
          <TitleWithYear title="Software Engineer II" year="Jun 2023 - Feb 2024"/>
          <p className="text-lg text-subtitle-gray font-semibold">DISPATCHER TEAM</p>
        </div>


        <h2 className="text-lg font-bold mb-6 text-center">Notable Projects</h2>
        <div className="grid grid-cols-2 gap-6 mt-6">
          {experiences.map((course, index) => (
            <a
              key={index}
              className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow bg-white flex flex-col min-h-[180px]"
              href={course.url}
            >
              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
              <div className="text-sm flex flex-col h-full">
                <p>{course.description}</p>
                <span className='mt-auto'><b className='text-subtitle-gray'>Tech:</b> <span className='italic'>{course.tech}</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;