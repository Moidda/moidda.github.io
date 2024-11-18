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
    FINE_TUNING_GPT_2: encodeURI(getPublicPath('/pdf/Fine-Tuning GPT-2 for Bengali Auto Text Completion Using Literary Corpus_ A Qualitative Analysis.pdf')),
    IMG_AWARD:         encodeURI(getPublicPath('/images/medal.png')),
    IMG_TRAPPED:       encodeURI(getPublicPath('/images/Trapped Game Snapshot.png')),
    IMG_RAYTRACING:    encodeURI(getPublicPath('/images/Ray Tracing.png')),
    IMG_XV6:           encodeURI(getPublicPath('/images/Memory Management.png')),
    IMG_CNN:           encodeURI(getPublicPath('/images/CNN.png')),
    IMG_CHALDAAL:      encodeURI(getPublicPath('/images/Chaldaal.png')),
    IMG_CODESAMURAI:   encodeURI(getPublicPath('/images/Smart Construction Work System.png')),
    IMG_HANDGESTURE:   encodeURI(getPublicPath('/images/hand-gesture.webp')),
};