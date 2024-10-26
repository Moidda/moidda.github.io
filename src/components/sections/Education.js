import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';

const Education = () => {
  return (
    <div className='min-h-screen'>
        <SectionTitle title={SECTIONS.EDUCATION.title} id={SECTIONS.EDUCATION.id} />
    </div>
  );
};

export default Education;