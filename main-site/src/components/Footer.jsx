import React from 'react';
import { Twitter, Github, Youtube, MessageSquare } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo.png';

const Footer = () => {
  const footerLinks = {
    Company: ['About', 'Careers', 'Brand', 'Press'],
    Resources: ['Blog', 'Documentation', 'Marketplace', 'Tutorials'],
    Support: ['Contact', 'Community', 'Status', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Guidelines']
  };

  return (
    <footer className="bg-[#080809] pt-24 pb-12 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24">
          <div className="md:col-span-2">
            <img src={logo} alt="ViewSpree" className="h-10 mb-8 opacity-80" />
            <p className="text-white/40 text-sm max-w-sm leading-relaxed mb-8 font-normal">
              ViewSpree is a community-driven platform for creators, developers, and tech enthusiasts. We build tools that empower the next generation of digital experiences.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'twitter', icon: Twitter },
                { name: 'discord', icon: MessageSquare },
                { name: 'github', icon: Github },
                { name: 'youtube', icon: Youtube }
              ].map(social => (
                <a key={social.name} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all cursor-pointer">
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-black text-xs uppercase tracking-[3px] mb-8 font-display">{category}</h4>
              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/40 hover:text-white text-sm transition-colors cursor-pointer font-normal">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/30 text-[10px] font-black uppercase tracking-[3px] font-display">
            © 2026 VIEWSPREE, INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-8">
            <Button variant="ghost" className="text-[10px] tracking-[2px] text-white/30 hover:text-white font-display">English (US)</Button>
            <Button variant="ghost" className="text-[10px] tracking-[2px] text-white/30 hover:text-white font-display">Partner Program</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
