import React from 'react';
import { Twitter, Github, Youtube, MessageSquare, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const footerLinks = {
    Company: ['About', 'Careers', 'Brand', 'Press'],
    Resources: ['Blog', 'Documentation', 'Marketplace', 'Tutorials'],
    Support: ['Contact', 'Community', 'Status', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Guidelines']
  };

  return (
    <footer className="bg-[#121212] pt-16 pb-8 border-t border-white/5 relative">
      <div className="container-custom">
        {/* Social & Language Top Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-10 border-b border-white/5 gap-6">
          <div className="flex items-center gap-4">
            {[
              { name: 'twitter', icon: Twitter },
              { name: 'discord', icon: MessageSquare },
              { name: 'github', icon: Github },
              { name: 'youtube', icon: Youtube }
            ].map(social => (
              <a key={social.name} href="#" className="w-10 h-10 rounded-full border border-transparent bg-[#202020] hover:bg-[#2a2a2c] flex items-center justify-center text-white/50 hover:text-white transition-all cursor-pointer">
                <span className="sr-only">{social.name}</span>
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all cursor-pointer group"
          >
             <ArrowUpRight className="w-4 h-4 transform -rotate-45 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="py-12 flex flex-wrap gap-x-24 gap-y-12">
          {/* Logo Column */}
          <div className="w-full md:w-auto shrink-0 mb-4 md:mb-0">
             <img src={logo} alt="ViewSpree" className="h-8 opacity-90" />
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex-1 min-w-37.5 md:min-w-30">
              <h4 className="text-white/40 font-bold text-[11px] uppercase tracking-[1px] mb-4 font-display">{category}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white hover:text-accent text-[13px] font-medium transition-colors cursor-pointer">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Text */}
        <div className="pt-8 border-t border-white/5 mb-12">
          <p className="text-[#a0a0a0] text-[12px] leading-relaxed font-normal">
            © 2026 ViewSpree. All rights reserved. ViewSpree is a leading independent technology and gaming publication dedicated to comprehensive hardware reviews, software analysis, and industry news. ViewSpree, the ViewSpree logo, ViewSpree Intelligence, and ViewSpree Exclusive are properties of ViewSpree. All other trademarks, product names, and company logos are the property of their respective owners. We operate independently and may earn affiliate commissions from recommended retail links.
          </p>
        </div>

        {/* Bottom Bar Options */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <ul className="flex flex-wrap items-center gap-6">
            {['Terms of Service', 'Privacy Policy', 'Editorial Guidelines'].map(link => (
              <li key={link}>
                <a href="#" className="text-white hover:text-accent text-[13px] font-medium transition-colors cursor-pointer">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
