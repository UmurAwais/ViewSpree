import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, ArrowUpRight, Target, Award, Users } from 'lucide-react';
import Button from '../components/Button';
import Newsletter from '../components/Newsletter';

const About = () => {
  const { onSubscribe } = useOutletContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const pillars = [
    {
      icon: <Shield size={20} className="text-accent" />,
      title: "Technical Integrity",
      description: "Our evaluations are built on objective engineering standards. We verify performance claims through deep systemic analysis."
    },
    {
      icon: <Cpu size={20} className="text-accent" />,
      title: "Silicon Intelligence",
      description: "From semiconductor roadmaps to micro-architecture shifts, we specialize in the hardware that powers the modern era."
    },
    {
      icon: <Globe size={20} className="text-accent" />,
      title: "Universal Reach",
      description: "Operated by a decentralized network of experts across major technological hubs, delivering an international perspective."
    },
    {
      icon: <Target size={20} className="text-accent" />,
      title: "Future Forecast",
      description: "We identify the signals within the noise, mapping the convergence of AI and digital sovereignty."
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen text-white pb-16 md:pb-24 font-sans selection:bg-accent selection:text-white">
      <h1 className="sr-only">About ViewSpree | Global Digital Intelligence</h1>

      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-18 md:pb-24 relative overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-24 items-center">
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 md:mb-8">
                <span className="bg-accent text-black px-3 py-1 rounded-sm text-[9px] md:text-[10px] font-black uppercase tracking-[2px]">
                    About ViewSpree
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[1.05] mb-8 md:mb-12">
                Decoding <span className="text-white/30">Tomorrow.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
                ViewSpree is a premier digital intelligence platform specializing in high-fidelity analysis of emerging technologies and industrial breakthroughs.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button 
                  variant="primary" 
                  onClick={onSubscribe}
                  className="rounded-full px-8 md:px-12 py-3.5 md:py-4 font-black uppercase tracking-[2px] text-[10px] md:text-xs shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]"
                >
                  Join the Frontier
                </Button>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="relative aspect-video lg:aspect-auto rounded-3xl md:rounded-4xl overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white/2 max-w-xl mx-auto lg:max-w-none">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Technical Frontier" 
                  className="w-full h-full object-cover grayscale opacity-80 transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-2xl">
            {[
              { val: "500K+", label: "Readers", icon: <Users size={16} /> },
              { val: "1,200+", label: "Briefings", icon: <Award size={16} /> },
              { val: "24/7", label: "Coverage", icon: <Globe size={16} /> },
              { val: "100%", label: "Neutrality", icon: <Shield size={16} /> }
            ].map((s, i) => (
              <div 
                key={i}
                className="bg-brand-bg py-10 md:py-16 px-4 sm:px-8 flex flex-col items-center justify-center text-center group hover:bg-white/2 transition-colors duration-500"
              >
                <div className="text-accent mb-4 md:mb-6 opacity-30 group-hover:opacity-100 transition-all">
                  {s.icon}
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-2 font-display">
                  {s.val}
                </p>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[2px] md:tracking-[3px] text-white/20 group-hover:text-accent transition-colors">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-10 md:mb-16">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter">Our Core Mission</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-white font-display">
                Illuminating innovation through <br className="hidden sm:block" />
                unmatched technical sovereignty.
              </p>
              <div className="flex flex-wrap gap-3 mt-8 md:mt-12">
                <div className="px-4 md:px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/40">Editorial Integrity</div>
                <div className="px-4 md:px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/40">Global Network</div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <p className="text-base md:text-xl text-white/40 font-medium leading-relaxed">
                Founded in 2026, ViewSpree has materialized as a leading international authority on tech-industrial evolution. We bridge the critical intelligence gap between complex engineering breakthroughs and the global consumer reality.
              </p>
              <p className="text-base md:text-xl text-white/40 font-medium leading-relaxed">
                In an era where information is abundant but true intelligence is rare, the value lies in rigor. Our decentralized network of engineers, designers, and analysts operates at the intersection of human creativity and technical logic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Pillars */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12 md:mb-20">
            <div className="w-2 h-8 bg-accent rounded-full" />
            <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter">The Standard</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pillars.map((p, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="group p-6 sm:p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-accent/30 hover:bg-white/3 transition-all duration-500"
              >
                <div className="mb-6 md:mb-8 inline-flex p-3 md:p-4 rounded-2xl bg-white/3 border border-white/5 group-hover:bg-accent/10 transition-all duration-500">
                  {p.icon}
                </div>
                <h5 className="text-xs md:text-[14px] font-black uppercase tracking-[2px] mb-3 md:mb-4 text-white group-hover:text-accent transition-colors">{p.title}</h5>
                <p className="text-sm md:text-[15px] text-white/40 font-medium leading-relaxed mb-6 line-clamp-3">{p.description}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[2px] text-white/10 group-hover:text-white transition-colors">
                  Explore Module <ArrowUpRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default About;
