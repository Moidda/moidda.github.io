import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';
import TitleWithYear from '../common/TitleWithYear';


const courses = [
  {
    title: "CSE 305: Computer Architecture",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE305"
  },
  {
    title: "CSE 309: Compiler",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE309"
  },
  {
    title: "CSE 321: Computer Networks",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE321"
  },
  {
    title: "CSE 463: Introduction to Bioinformatics",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE463"
  },
  {
    title: "CSE 471: Machine Learning",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE471"
  },
  {
    title: "CSE 409: Computer Graphics",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE409"
  },
  {
    title: "CSE 461: Algorithm Engineering",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE461"
  },
  {
    title: "MATH 247: Linear Algebra",
    url: "https://cse.buet.ac.bd/academics/course_detail/MATH247"
  },
  {
    title: "CSE 313: Operating System",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE313"
  },
  {
    title: "MATH 145: Calculus and Coordinate Geometry",
    url: "https://cse.buet.ac.bd/academics/course_detail/MATH141"
  },
  {
    title: "CSE 405: Computer Security",
    url: "https://cse.buet.ac.bd/academics/course_detail/CSE405"
  },
  {
    title: "HUM 477: Socilology for Science and Technology",
    url: "https://cse.buet.ac.bd/academics/course_detail/HUM477"
  }
];

const Education = () => {
  return (
    <div className='min-h-screen mt-10'>
        <SectionTitle title={SECTIONS.EDUCATION.title} id={SECTIONS.EDUCATION.id} />

        <div className='text-left space-y-2 mt-4'>
          <TitleWithYear title='Bangladesh University of Engineering and Technology (BUET)' year='March 2018 - June 2024' />
          <div>
            <p className="text-lg text-url-gray font-semibold">BACHELOR OF SCIENCE</p>
            <p className="text-lg text-url-gray font-semibold">COMPUTER SCIENCE AND ENGINEERING</p>
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
              </a>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Education;