import React from 'react';
import { SOCIAL_LINKS, FOOTER_LINKS, PERSONAL_INFO } from '../../constants';

const Footer = () => {
  return (
    <>
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-jakarta font-extrabold mb-2">
              {PERSONAL_INFO.name.split('.')[0]}
              <span className="text-indigo-500">.</span>
              {PERSONAL_INFO.name.split('.')[1]}
            </h2>
            <p className="text-gray-500 text-sm">{PERSONAL_INFO.copyright}</p>
          </div>
          
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map(({ Icon, href, label }, idx) => (
              <a 
                key={idx} 
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-3 glass-panel rounded-xl hover:text-indigo-500 hover:bg-indigo-500/10 transition-all border border-white/10"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* <div className="text-gray-500 text-sm flex items-center space-x-4">
            {FOOTER_LINKS.map((link, idx) => (
              <React.Fragment key={link.label}>
                {idx > 0 && <span>•</span>}
                <a 
                  href={link.href} 
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;