import React from 'react';
import { Send, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-accent/10 blur-[150px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      
      <div className="container-custom relative z-10">
        <div className="bg-[#0f0f12] border border-white/5 rounded-[40px] p-10 md:p-16 relative overflow-hidden group shadow-2xl shadow-black">
          {/* Inner Glows */}
          <div className="absolute inset-0 bg-linear-to-br from-white/3 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-600/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-8 w-fit mx-auto lg:mx-0 shadow-[0_0_15px_rgba(0,112,0,0.3)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join The Elite</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] font-display">
                Stay Ahead of the <span className="text-accent underline decoration-white/10 decoration-[4px] underline-offset-8">Curve</span>
              </h2>
              
              <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-normal">
                Join 50,000+ readers receiving the most critical tech updates, exclusive insights, and in-depth articles directly in their inbox.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[13px] text-white/40 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>No Spam, Ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Weekly Digest</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Premium Content</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-auto flex-1 max-w-lg">
              <div className="bg-white/2 border border-white/5 rounded-4xl p-8 md:p-10 backdrop-blur-xl relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 shadow-[0_0_20px_rgba(0,112,0,0.2)]">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Unlock Premium Access</h3>
                    <p className="text-sm text-white/40 mt-1">Get the insights you need.</p>
                  </div>
                </div>

                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="name@example.com" 
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 pl-12 outline-none focus:border-accent/50 focus:bg-black/80 transition-all font-normal text-white placeholder:text-white/30 cursor-text shadow-inner"
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  </div>
                  
                  <button className="cursor-pointer w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all">
                    <span className="uppercase tracking-widest text-xs cursor-pointer">Subscribe Now</span>
                    <Send className="w-4 h-4 cursor-pointer" />
                  </button>
                </form>
                
                <p className="mt-6 text-center text-[10px] text-white/30 font-medium tracking-wider uppercase">
                  By subscribing, you agree to our <a href="#" className="cursor-pointer hover:underline text-white/50">Terms of Service</a> & <a href="#" className="cursor-pointer hover:underline text-white/50">Privacy Policy</a>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
