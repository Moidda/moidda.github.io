import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';

const WorkExperience = () => {
  return (
    <div className="min-h-screen mt-10">
      <SectionTitle title={SECTIONS.WORK_EXPERIENCE.title} id={SECTIONS.WORK_EXPERIENCE.id} />
    </div>
  );
};

export default WorkExperience;