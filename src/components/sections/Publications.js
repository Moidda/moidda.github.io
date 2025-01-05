import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';
import Publication from '../common/Publication';
import { PEOPLE } from '../../constants/People';

const Publications = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto mt-10">
      <SectionTitle title={SECTIONS.PUBLICATIONS.title} id={SECTIONS.PUBLICATIONS.id} />

      <Publication
        doi="https://doi.org/10.1007/978-3-031-63992-0_28"
        title="Reading the Mind's Eye: Detecting Trauma-Vulnerability in Individuals by Analyzing Attention Through Eye-Tracking"
        year="2024"
        collaborators={[
          {
            url: PEOPLE.TASEEN_MUBASSIRA.url,
            name: PEOPLE.TASEEN_MUBASSIRA.full_name
          },
          {
            url: PEOPLE.SADIA_SHARMIN.url,
            name: PEOPLE.SADIA_SHARMIN.full_name
          }
        ]}
        description="In this work, we propose a novel approach for detecting and predicting trauma vulnerability in individuals by monitoring their attention to threat images using eye-tracking. We utilized a combination of statistical analysis, machine learning models and cognitive psychological theories. To do so, initially, an online survey was conducted with 183 participants to gather information about individuals' previous experiences with trauma. Based on the survey results, an image set was prepared, consisting of four categories: positive, neutral, general threat and trauma-relevant threat. 39 volunteers, categorized into trauma-exposed and non-trauma-exposed groups based on clinical diagnosis and previous treatment, then participated in an eye-tracking experiment, where they were presented with 10 slides containing 4 images from each category; each slide lasting for 6 s. Eye gaze patterns were recorded and processed during this period, which was used to extract different features that were later used for the machine learning models to train on. Our findings revealed that trauma-exposed group showed more attentional bias towards the specific trauma-relevant threat images than the non-trauma-exposed group. Results from training the models suggest that it is highly likely that predicting trauma vulnerability in individuals is possible and this demands further research."
        conference={{
          url: 'https://mobiquitous.eai-conferences.org/2023/',
          name: 'EAI MobiQuitous 2023 - 20th EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services'
        }}
      />

      <Publication
        doi="https://doi.org/10.1145/3704522.3704527"
        title="Enhancing EmoBot: An In-Depth Analysis of User Expectation and Satisfaction in An Emotion-Aware Chatbot"
        year="2024"
        collaborators={[
          {
            url: PEOPLE.TASEEN_MUBASSIRA.url,
            name: PEOPLE.TASEEN_MUBASSIRA.full_name
          },
          {
            url: PEOPLE.JANNATUN_NOOR_MUKTA.url,
            name: PEOPLE.JANNATUN_NOOR_MUKTA.full_name
          },
          {
            url: PEOPLE.A_B_M_ALIM_AL_ISLAM.url,
            name: PEOPLE.A_B_M_ALIM_AL_ISLAM.full_name
          }
        ]}
        description="The research community has traditionally concentrated on emotion detection in emotion modeling, while emotion generation has garnered less focus. With the rise of artificial intelligence, numerous chatbots have been developed, but there remains a lack of standardized methods to evaluate them. In this study, we evaluate EmoBot, a state-of-the-art emotionally aware chatbot, through the lens of user expectations. By collecting and analyzing user feedback, we identify EmoBot's strengths and weaknesses, providing a basis for future enhancements. We propose targeted improvements to enhance its user experience, especially in areas of underperformance, and offer a framework for assessing emotionally aware chatbots based on user expectations and experiences."
        conference={{
          url: 'https://cse.buet.ac.bd/nsyss2024/',
          name: 'NSysS 2024 - 11th International Conference on Networking, Systems, and Security'
        }}
      />

    </div>
  );
};

export default Publications;