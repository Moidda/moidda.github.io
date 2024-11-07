import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';
import { URLS } from '../../constants/Urls';
import { AWARDS } from '../../constants/Awards';


const AwardCertificate = ({ awardCategory }) => {
  return (
    <div className="space-x-6">
      <div className='flex items-center'>
        <img src={URLS.IMG_AWARD} alt="Award" className="w-16 h-16" />
        <h1 className="text-xl font-bold pl-2">{awardCategory.title}</h1>
      </div>
      <div className='pl-2 mt-2'>
        <ul className='space-y-2'>
          {awardCategory.awards.map((award, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-black rounded-full mt-1 mr-6"></div>
              <span>{award}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Awards = () => {
  return (
    <div className='min-h-screen max-w-6xl mx-auto mt-10'>
      <SectionTitle title={SECTIONS.AWARDS.title} id={SECTIONS.AWARDS.id} />

      <div className="space-y-4">
        {AWARDS.map((awardCategory, index) => (
          <AwardCertificate key={index} awardCategory={awardCategory} />
        ))}
      </div>
    </div>
  );
};

export default Awards;