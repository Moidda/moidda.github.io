import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';

const ResearchExperience = () => {
  return (
    <div id="research-experience" className="min-h-screen">
      <SectionTitle title={SECTIONS.RESEARCH_EXPERIENCE.title} id={SECTIONS.RESEARCH_EXPERIENCE.id} />
    </div>


  );
};

export default ResearchExperience;