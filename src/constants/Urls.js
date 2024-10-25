const getPublicPath = (path) => {
    return process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}${path}` : path;
};

export const SOCIAL_LINKS = {
    GITHUB: 'https://github.com/Moidda',
    LINKEDIN: 'https://www.linkedin.com/in/moidda/',
    EMAIL: 'mailto:mhasan912@gmail.com',
    SCHOLAR: 'https://scholar.google.com/citations?user=vLUwJAUAAAAJ&hl=en',
    CV: encodeURI(getPublicPath('/pdf/Mehedi-Hasan-CV.pdf'))
};