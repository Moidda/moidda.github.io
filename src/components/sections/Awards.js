import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';

const Awards = () => {
  return (
    <div className='min-h-screen max-w-6xl mx-auto mt-10'>
        <SectionTitle title={SECTIONS.AWARDS.title} id={SECTIONS.AWARDS.id} />
    </div>
  );
};

export default Awards;