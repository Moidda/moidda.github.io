import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { SECTIONS } from '../../constants/Sections';
import URL from '../common/Url';

const Publications = () => {
  return (
    <div className="min-h-screen">
      <SectionTitle title={SECTIONS.PUBLICATIONS.title} id={SECTIONS.PUBLICATIONS.id} />

      <div className="text-left space-y-2 text-black mt-4">
        <h2 className="text-2xl font-bold">
          <URL url="https://doi.org/10.1007/978-3-031-63992-0_28" text="Reading the Mind's Eye: Detecting Trauma-Vulnerability in Individuals by Analyzing Attention Through Eye-Tracking" />
        </h2>

          <p className="text-lg">
            Collaborators:{' '}
            <URL url="https://scholar.google.com/citations?user=1yrkvxIAAAAJ&hl=en" text="Taseen Mubassira" />,{' '}
            <URL url="https://cse.buet.ac.bd/faculty/faculty_detail/sadia" text="Dr. Sadia Sharmin" />
          </p>

          <p>
          In this work, we propose a novel approach for detecting and predicting trauma vulnerability in individuals by monitoring their attention to threat images using eye-tracking. We utilized a combination of statistical analysis, machine learning models and cognitive psychological theories. To do so, initially, an online survey was conducted with 183 participants to gather information about individuals' previous experiences with trauma. Based on the survey results, an image set was prepared, consisting of four categories: positive, neutral, general threat and trauma-relevant threat. 39 volunteers, categorized into trauma-exposed and non-trauma-exposed groups based on clinical diagnosis and previous treatment, then participated in an eye-tracking experiment, where they were presented with 10 slides containing 4 images from each category; each slide lasting for 6 s. Eye gaze patterns were recorded and processed during this period, which was used to extract different features that were later used for the machine learning models to train on. Our findings revealed that trauma-exposed group showed more attentional bias towards the specific trauma-relevant threat images than the non-trauma-exposed group. Results from training the models suggest that it is highly likely that predicting trauma vulnerability in individuals is possible and this demands further research.
          </p>
      </div>

      <div className="text-left space-y-2 text-black mt-4">
        <h2 className="text-2xl font-bold">
          <URL
            url="#"
            text="Enhancing EmoBot: An In-Depth Analysis of User Expectation and Satisfaction in An Emotion-Aware Chatbot" />
        </h2>

          <p className="text-lg">
            Collaborators:{' '}
            <URL url="https://scholar.google.com/citations?user=1yrkvxIAAAAJ&hl=en" text="Taseen Mubassira" />,{' '}
            <URL url="https://www.bracu.ac.bd/about/people/jannatun-noor-mukta" text="Dr. Jannatun Noor Mukta" />,{' '}
            <URL url="https://sites.google.com/site/abmalimalislam/home" text="Dr. A. B. M. Alim Al Islam" />
          </p>

          <p>
          The research community has traditionally concentrated on emotion detection in emotion modeling, while emotion generation has garnered less focus. With the rise of artificial intelligence, numerous chatbots have been developed, but there remains a lack of standardized methods to evaluate them. In this study, we evaluate EmoBot, a state-of-the-art emotionally aware chatbot, through the lens of user expectations. By collecting and analyzing user feedback, we identify EmoBot's strengths and weaknesses, providing a basis for future enhancements. We propose targeted improvements to enhance its user experience, especially in areas of underperformance, and offer a framework for assessing emotionally aware chatbots based on user expectations and experiences.
          </p>
      </div>

    </div>
  );
};

export default Publications;