import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import Newsletter from '../components/Newsletter';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const values = [
    {
      icon: <Shield size={20} className="text-accent" />,
      title: "Technical Rigor",
      description: "We analyze the architecture behind the headlines, providing engineering-first intelligence for our readers."
    },
    {
      icon: <Cpu size={20} className="text-accent" />,
      title: "Silicon Analysis",
      description: "From GPU micro-architectures to neural engine performance, we track the heart of modern computing."
    },
    {
      icon: <Globe size={20} className="text-accent" />,
      title: "Global Insight",
      description: "A borderless intelligence network reporting from every major industrial and tech hub."
    },
    {
      icon: <Zap size={20} className="text-accent" />,
      title: "Neural Future",
      description: "Decoding the rapid evolution of artificial intelligence and its integration into daily reality."
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen text-white pt-32 pb-24 font-sans selection:bg-accent selection:text-white">
      {/* Refined Hero */}
      <section className="px-6 mb-32">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-accent text-white px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-[2px]">
                  About ViewSpree
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-10">
              Decoding the <span className="text-white/40">Frontier.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed max-w-2xl">
              ViewSpree is a digital intelligence platform dedicated to analyzing the architecture of what's next. We bridge the gap between technical complexity and consumer reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="px-6 mb-40">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/5 pt-12">
            <div className="lg:col-span-5">
              <h2 className="text-[11px] font-black uppercase tracking-[5px] text-white/30 mb-4">Our Mission</h2>
              <p className="text-3xl font-bold tracking-tight leading-tight">
                In an era of rapid acceleration, we provide the focal point.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-lg text-white/40 font-medium leading-relaxed">
                Founded in 2026, ViewSpree was created to offer high-fidelity analysis for those who want to understand more than just the surface. We dive deep into the machines, software, and systems that are reshaping our digital sovereignty.
              </p>
              <p className="text-lg text-white/40 font-medium leading-relaxed">
                Operated by a decentralized network of specialists, we bring engineering clarity to a world often overwhelmed by information noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Grid */}
      <section className="px-6 mb-40">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "500K+", label: "Readers" },
              { val: "1,200+", label: "Analysis" },
              { val: "100%", label: "Independent" },
              { val: "2026", label: "Founded" }
            ].map((s, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="bg-white/2 border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center text-center"
              >
                <p className="text-4xl font-black uppercase tracking-tighter text-white mb-1">{s.val}</p>
                <p className="text-[9px] font-black uppercase tracking-[4px] text-white/20">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 mb-40">
        <div className="container-custom">
          <div className="flex flex-col mb-16">
            <h2 className="text-[11px] font-black uppercase tracking-[5px] text-accent mb-4">The DNA</h2>
            <h3 className="text-3xl font-black uppercase tracking-tighter">Rigorous by design.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="group"
              >
                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/3 border border-white/5 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                  {v.icon}
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-4 group-hover:text-accent transition-colors">{v.title}</h4>
                <p className="text-sm text-white/40 font-medium leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section className="px-6">
        <Newsletter />
      </section>
    </div>
  );
};

export default About;
