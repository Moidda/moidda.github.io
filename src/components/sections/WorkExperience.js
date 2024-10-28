import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';
import TitleWithYear from '../common/TitleWithYear';
import URL from '../common/Url';

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
      </div>
    </div>
  );
};

export default WorkExperience;