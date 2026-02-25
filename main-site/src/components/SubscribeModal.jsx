import React, { useEffect } from 'react';
import { X, Mail, Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const SubscribeModal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/70 cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ 
            type: "spring", 
            damping: 20, 
            stiffness: 500,
            mass: 0.5
        }}
        className="relative w-full max-w-xl bg-[#0a0a0c] border border-white/10 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] z-10"
      >
        
        {/* Glow Effects */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all z-20 cursor-pointer active:scale-90"
        >
          <X size={20} />
        </button>

        {/* Header/Banner */}
        <div className="h-40 relative bg-linear-to-b from-accent/10 to-transparent flex items-center justify-center overflow-hidden border-b border-white/5">
            <Sparkles className="text-accent/10 absolute -top-10 -left-10 w-48 h-48 rotate-12" />
            <Sparkles className="text-accent/5 absolute bottom-0 right-0 w-32 h-32 -rotate-12" />
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
                    <img src={logo} alt="ViewSpree" className="h-8 object-contain" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                    <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-[3px] text-accent">Insider Intelligence</span>
                </div>
            </div>
        </div>

        {/* Form Content */}
        <div className="p-10 pt-8 flex flex-col items-center text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-3 leading-none">
            Master the Frontier
          </h2>
          <p className="text-white/50 text-[15px] font-medium leading-relaxed mb-8 max-w-sm">
            Join 50,000+ professionals receiving deep-dives into game architecture and the machines of tomorrow.
          </p>

          <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-14 py-4 text-white placeholder:text-white/20 focus:outline-hidden focus:border-accent/40 focus:bg-white/8 transition-all font-medium text-base"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="group w-full bg-accent hover:bg-accent/80 text-white font-black uppercase tracking-[4px] text-[12px] py-4 rounded-xl transition-all duration-300 shadow-2xl shadow-accent/20 cursor-pointer active:scale-[0.98] flex items-center justify-center gap-3"
            >
              <span>Confirm Subscription</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Perks */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-5">
            <div className="flex items-center gap-2">
              <Check size={14} className="text-accent" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Weekly Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-accent" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Exclusive Assets</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-accent" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Early Access</span>
            </div>
          </div>

          <p className="mt-8 text-[11px] text-white/10 font-bold uppercase tracking-widest">
            Privacy First. No Spam Ever.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SubscribeModal;
