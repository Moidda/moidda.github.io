const getPublicPath = (path) => {
    return process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}${path}` : path;
};

export const URLS = {
    GITHUB:           'https://github.com/Moidda',
    LINKEDIN:         'https://www.linkedin.com/in/moidda/',
    EMAIL:            'mailto:mhasan912@gmail.com',
    SCHOLAR:          'https://scholar.google.com/citations?user=vLUwJAUAAAAJ&hl=en',
    CV:                encodeURI(getPublicPath('/pdf/Mehedi Hasan - CV.pdf')),
    PROFILE:           encodeURI(getPublicPath('/images/profile.jpg')),
    FINE_TUNING_GPT_2: encodeURI(getPublicPath('/pdf/Fine-Tuning GPT-2 for Bengali Auto Text Completion Using Literary Corpus_ A Qualitative Analysis.pdf'))
};