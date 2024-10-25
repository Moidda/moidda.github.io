import React from 'react';
import { Github, Mail, GraduationCap, Linkedin, Twitter, FileText } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants/Urls';

const SocialLinks = () => {
  const icons = [
    { Icon: Github, text: 'GitHub', link: SOCIAL_LINKS.GITHUB },
    { Icon: Mail, text: 'Email', link: SOCIAL_LINKS.EMAIL },
    { Icon: GraduationCap, text: 'Scholar', link: SOCIAL_LINKS.SCHOLAR },
    { Icon: Linkedin, text: 'LinkedIn', link: SOCIAL_LINKS.LINKEDIN },
    { Icon: FileText, text: 'CV', link: SOCIAL_LINKS.CV },
  ];

  return (
    <div className="flex justify-center items-center gap-4 m-3">
      {icons.map(({ Icon, text, link }) => (
        <div key={text} className="relative group">
          <a
            href={link}
            className="block p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Icon size={24} />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {text}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;