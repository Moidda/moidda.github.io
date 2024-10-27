import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';

const Education = () => {
  return (
    <div className='min-h-screen'>
        <SectionTitle title={SECTIONS.EDUCATION.title} id={SECTIONS.EDUCATION.id} />

        <div className='text-left space-y-2 text-black mt-4'>
            <h2 className='flex flex-row items-center justify-between gap-4 text-2xl font-bold'>
                <span className='overflow-wrap break-words flex-1'>Bachelor of Science in Computer Science and Engineering</span>
                <div className='italic text-right whitespace-nowrap'>March 2018 - June 2023</div>
            </h2>

            <p className='text-lg'>
                Bangladesh University of Engineering and Technology (BUET)
            </p>
        </div>
    </div>
  );
};

export default Education;