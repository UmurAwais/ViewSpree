import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[3px]">
              <Mail size={14} className="text-accent" />
              <span>Technical Briefing</span>
            </div>
            
            <h2 className="text-4xl md:text-[52px] font-bold text-white leading-[1.1] tracking-tighter font-display">
              Join the technical <span className="text-accent italic">vanguard.</span>
            </h2>
            
            <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-sans">
              Get weekly in-depth analysis on AI development, hardware breakthroughs, and the engineering of the future. No spam, just pure signal.
            </p>
          </div>

          {/* Minimalist Form */}
          <div className="max-w-md mx-auto">
            <form className="relative flex items-center group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 pr-36 text-[11px] font-black tracking-[2px] text-white outline-none focus:border-accent transition-all placeholder:text-white/20"
              />
              <button className="absolute right-2 px-6 py-3 rounded-full bg-accent text-black font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3 cursor-pointer">
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
            
            <p className="mt-6 text-[9px] font-bold uppercase tracking-[3px] text-white/10">
              Join 50K+ technical experts globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
