import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';

const Publications = () => {
  return (
    <div className="min-h-screen">
      <SectionTitle title={SECTIONS.PUBLICATIONS.title} id={SECTIONS.PUBLICATIONS.id} />

      my awesome publications
    </div>
  );
};

export default Publications;