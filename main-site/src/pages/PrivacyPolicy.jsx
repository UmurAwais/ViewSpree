import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ChevronRight, Cpu, Zap, Globe, Target, Award, Database, Bell } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Intelligence Collection",
      icon: <Eye size={20} />,
      content: "We collect information required to deliver high-fidelity technical briefings. This includes your email for 'ViewSpree Intelligence' subscriptions and telemetry data concerning your interaction with our hardware benchmarks and architectural deep-dives."
    },
    {
      title: "2. Editorial Neutrality",
      icon: <Award size={20} />,
      content: "A core tenet of ViewSpree is our technical sovereignty. User engagement data is utilized solely for platform optimization and never influences our objective engineering evaluations or product review scoring."
    },
    {
      title: "3. Newsletter Protocol",
      icon: <Zap size={20} />,
      content: "Our 'Intelligence Feed' utilizes secure transmission layers. Subscribers may opt-out or adjust briefing frequency at any time via their proprietary control panel. We do not use pixel tracking to monitor individual reading habits."
    },
    {
      title: "4. Affiliate & Retail Transparency",
      icon: <Target size={20} />,
      content: "While ViewSpree may earn commissions from recommended retail links, your browsing data within these sessions is managed under strict encryption. Engagement with retail partners is handled via localized sandboxing."
    },
    {
      title: "5. Technical Telemetry",
      icon: <Cpu size={20} />,
      content: "Our platform utilizes advanced server-side rendering and localized cookies to ensure low-latency access to our global news transmission. This technical metadata is purged periodically to maintain your digital privacy."
    },
    {
      title: "6. Encryption & Security",
      icon: <Lock size={20} />,
      content: "All data transmissions are protected via AES-256 grade encryption. Our decentralized nodes are monitored 24/7 for intrusion detection, ensuring the 'Frontier' remains a secure environment for all readers."
    },
    {
      title: "7. Global Connectivity",
      icon: <Globe size={20} />,
      content: "As a global operation, your data may be processed across our international network of secure nodes. This is done exclusively to optimize load times and adhere to localized data residency protocols."
    },
    {
      title: "8. Data Lifecycle Protocol",
      icon: <Database size={20} />,
      content: "We maintain a strict data lifecycle. Non-essential telemetry is purged every 90 days, while essential account data is retained only as long as your subscription is active in our primary database."
    },
    {
      title: "9. Privacy Sovereignty",
      icon: <FileText size={20} />,
      content: "You maintain full sovereignty over your data. You may request a complete export or deletion of your intelligence profile at any time. We view the 'Right to be Forgotten' as an essential human protocol."
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen text-white pb-24 font-sans selection:bg-accent selection:text-black pt-24 md:pt-16">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-8 bg-accent rounded-full" />
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-display">Privacy Sovereignty</h1>
          </div>
          <p className="text-lg md:text-xl text-white/40 font-medium leading-relaxed max-w-2xl">
            Our commitment to digital integrity means your data is protected with the same rigor we apply to our technical engineering analysis.
          </p>
          <div className="mt-8 text-[10px] font-black uppercase tracking-[3px] text-white/20">
            Last Updated: March 3, 2026 • Revision 2.4.0
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border-l border-white/5 pl-8 md:pl-12 py-2"
              >
                <div className="flex items-center gap-4 mb-6 text-accent">
                   <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                      {section.icon}
                   </div>
                   <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white font-display">
                      {section.title}
                   </h2>
                </div>
                <div className="text-base md:text-lg text-white/40 font-medium leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="p-10 rounded-3xl bg-white/2 border border-white/5 mt-20"
            >
                <h3 className="text-lg font-bold text-white mb-4">Questions regarding our protocol?</h3>
                <p className="text-white/40 mb-8 text-sm">Contact our data sovereignty desk for detailed technical inquiries.</p>
                <a href="mailto:support@viewspree.com" className="inline-flex items-center gap-2 text-accent font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                    support@viewspree.com <ChevronRight size={14} />
                </a>
            </motion.div>
          </div>

          {/* Sidebar / Quick Links */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 h-fit">
            <div className="p-8 rounded-3xl border border-white/5 bg-white/1">
              <h4 className="text-[11px] font-black uppercase tracking-[3px] text-white/20 mb-8">Related Modules</h4>
              <ul className="space-y-6">
                {['Terms of Service', 'Cookie Policy', 'Editorial Standards', 'Security Protocol'].map(link => (
                  <li key={link}>
                    <button className="flex items-center justify-between w-full group text-left cursor-pointer">
                      <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors uppercase tracking-tight">{link}</span>
                      <ChevronRight size={16} className="text-white/10 group-hover:text-accent transform group-hover:translate-x-1 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
