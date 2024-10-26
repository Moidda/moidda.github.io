import React from 'react';
import { Github, Mail, GraduationCap, Linkedin, FileText } from 'lucide-react';
import { URLS } from '../../constants/Urls';

const SocialLinks = () => {
  const icons = [
    { Icon: Github, text: 'GitHub', link: URLS.GITHUB },
    { Icon: Mail, text: 'Email', link: URLS.EMAIL },
    { Icon: GraduationCap, text: 'Scholar', link: URLS.SCHOLAR },
    { Icon: Linkedin, text: 'LinkedIn', link: URLS.LINKEDIN },
    { Icon: FileText, text: 'CV', link: URLS.CV },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {icons.map(({ Icon, text, link }) => (
        <div key={text} className="relative group">
          <a
            href={link}
            className="block p-1.5 text-gray-400 hover:text-white transition-colors"
            aria-label={text}
          >
            <Icon size={20} />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {text}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;