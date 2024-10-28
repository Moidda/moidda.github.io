import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';
import Publication from '../common/Publication';
import URL from '../common/Url';
import { PEOPLE } from '../../constants/People';
import { URLS } from '../../constants/Urls';

const ResearchExperience = () => {
  return (
    <div className="min-h-screen mt-10">
      <SectionTitle title={SECTIONS.RESEARCH_EXPERIENCE.title} id={SECTIONS.RESEARCH_EXPERIENCE.id} />

      <Publication
        title="Detecting Sentiment in Anonymous Submissions: A Study on User Report Data"
        year="2024"
        collaborators={[
          { name: PEOPLE.SADIA_SAMAN.full_name },
          { name: PEOPLE.TASEEN_MUBASSIRA.full_name, url: PEOPLE.TASEEN_MUBASSIRA.url },
          { name: PEOPLE.ISHIKA_IME.full_name, url: PEOPLE.ISHIKA_IME.url },
          { name: PEOPLE.DISHA.full_name },
          { name: PEOPLE.RIFAT.full_name },
          { name: PEOPLE.ROMEL.full_name },
          { name: PEOPLE.MUHAMMAD_NASIF_IMTIAZ.full_name },
          { name: PEOPLE.ANAN.full_name },
          { name: PEOPLE.A_B_M_ALIM_AL_ISLAM.full_name, url: PEOPLE.A_B_M_ALIM_AL_ISLAM.url }
        ]}
        description="In this project, we conduct sentiment analysis on crowdsourced, anonymously submitted reports to explore the range and intensity of emotions individuals express when given a platform for open, confidential communication. By performing quantitative analysis across multiple machine learning models, we aim to identify trends in sentiment, uncovering which emotions — such as hatred, anger, relief, or hope — are most commonly conveyed in anonymous complaints. Insights from this study could be valuable for organizations seeking to better understand and respond to community feedback while maintaining the privacy of their contributors."
      />

      <Publication
        doi="10.1109/NSYSS2.2017.8267790"
        title="Towards perceiving and resolving the impediments to reporting for the developing countries"
        year="2024"
        collaborators={[
          { name: PEOPLE.SADIA_SAMAN.full_name },
          { name: PEOPLE.ISHIKA_IME.full_name, url: PEOPLE.ISHIKA_IME.url },
          { name: PEOPLE.TASEEN_MUBASSIRA.full_name, url: PEOPLE.TASEEN_MUBASSIRA.url },
          { name: PEOPLE.TARIK_REZA_TOHA.full_name + ' (' + PEOPLE.TARIK_REZA_TOHA.institution + ')', url: PEOPLE.TARIK_REZA_TOHA.url },
          { name: PEOPLE.JANNATUN_NOOR_MUKTA.full_name, url: PEOPLE.JANNATUN_NOOR_MUKTA.url },
          { name: PEOPLE.A_B_M_ALIM_AL_ISLAM.full_name, url: PEOPLE.A_B_M_ALIM_AL_ISLAM.url }
        ]}
        demo={{
          title: "Live At",
          url: "https://ureporter.cse.buet.ac.bd/",
          text: "uReporter"
        }}
        description="Reporting of problems is one of the best approaches for the national development of a country. A proper reporting system can yield previously unknown, but critical information for combating human errors and ensuring smooth flow of operation. A one-stop generic reporting platform can be a useful collaborative tool between common people and responsible authority in a developing country. Although there are web-based systems to facilitate reporting, the response rate and volume from common people are not satisfactory. Based on the proposed solution, a system is implemented and demonstrated. In this project, we reconstructed the existing reporting system and made performance improvements. The system is designed to be user-friendly and easy to use. The system is tested with a group of users and the feedback is collected."
      />

      <Publication
        title="Fine-Tuning GPT-2 for Bengali Auto Text Completion Using Literary Corpus: A Qualitative Analysis"
        year="2023"
        collaborators={[
          { name: PEOPLE.TASEEN_MUBASSIRA.full_name, url: PEOPLE.TASEEN_MUBASSIRA.url },
          { name: PEOPLE.MOHAMMED_EUNUS_ALI.full_name, url: PEOPLE.MOHAMMED_EUNUS_ALI.url },
        ]}
        demo={{
          title: 'Presentation',
          url: URLS.FINE_TUNING_GPT_2,
          text: 'Slides'
        }}
        description="In this project, we employ a GPT-2 model pre-trained on a Bengali newspaper corpus to perform auto-text completion in Bengali, with a focus on enhancing the model's literary sensitivity. To achieve this, we fine-tune the model with literary corpus, which includes classic and contemporary Bengali literature, to introduce diverse language styles, cultural nuances, and creative expressions not typically found in journalistic content"
      />
    </div>
  );
};

export default ResearchExperience;