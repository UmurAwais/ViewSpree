import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ChevronRight, Cpu, Zap, Globe, Target, Award, Database, Bell, Scale } from 'lucide-react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Protocol",
      icon: <Scale size={20} />,
      content: "By accessing ViewSpree, you enter into a binding agreement with our Intelligence Grid. Use of our technical reports and benchmarking data implies full acceptance of these operational standards. If you do not agree to these terms, you must terminate your uplink immediately."
    },
    {
      title: "2. Intelligence Access & Use",
      icon: <Eye size={20} />,
      content: "ViewSpree grants a limited, non-exclusive license to access our technical briefings for personal, non-commercial use. Automated scraping, data mining, or unauthorized redistribution of our architectural analysis is strictly prohibited and monitored by our security nodes."
    },
    {
      title: "3. Intellectual Sovereignty",
      icon: <Award size={20} />,
      content: "All content, including 'ViewSpree Intelligence' reports, custom benchmarks, and proprietary UI elements, are the sole property of ViewSpree. Reproduction of our technical assets without express authorization is an infringement of our intellectual sovereignty."
    },
    {
      title: "4. User Conduct Standards",
      icon: <Zap size={20} />,
      content: "Users must interact with the platform in a manner that preserves the integrity of our decentralized network. Disruptive behavior, including injection of malicious code or attempting to bypass our gatekeeper protocols, will result in permanent transmission suspension."
    },
    {
      title: "5. Security & Account Integrity",
      icon: <Lock size={20} />,
      content: "You are responsible for maintaining the encryption of your account credentials. ViewSpree is not liable for data breaches resulting from compromised user-side security. Notify our security desk immediately if you detect unauthorized access to your intelligence profile."
    },
    {
      title: "6. Data & Briefing Accuracy",
      icon: <Cpu size={20} />,
      content: "While we strive for engineering-grade precision, ViewSpree briefings are provided 'as-is' for informational purposes. We do not warrant that our technical analysis is free of micro-errors or that our industrial forecasts will materialize with 100% certainty."
    },
    {
      title: "7. Third-Party Node Links",
      icon: <Globe size={20} />,
      content: "Our reports may contain links to external technical nodes or retail partners. ViewSpree exercises no sovereignty over third-party content or privacy protocols. Your interaction with external domains is governed by their respective terms."
    },
    {
      title: "8. Limitation of Liability",
      icon: <Shield size={20} />,
      content: "ViewSpree and its decentralized contributors shall not be held liable for any data loss, hardware failure, or strategic decisions made based on our intelligence briefings. Your use of our technical data is at your own risk protocol."
    },
    {
      title: "9. Termination of Access",
      icon: <Database size={20} />,
      content: "We reserve the right to terminate or suspend your access to the Intelligence Feed at our sole discretion, without prior notice, if we detect a violation of these terms or if required by localized legal protocols."
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen text-white pb-16 font-sans selection:bg-accent selection:text-black pt-16 md:pt-16">
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
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-display">Service Protocol</h1>
          </div>
          <p className="text-lg md:text-xl text-white/40 font-medium leading-relaxed max-w-2xl">
            Established standards for interacting with the ViewSpree Intelligence Grid and our proprietary technical assets.
          </p>
          <div className="mt-8 text-[10px] font-black uppercase tracking-[3px] text-white/20">
            Effective Date: March 3, 2026 • Version 1.1.0
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
                <h3 className="text-lg font-bold text-white mb-4">Compliance & Legal</h3>
                <p className="text-white/40 mb-8 text-sm">For further technical clarification on our service protocols, contact our legal desk.</p>
                <a href="mailto:legal@viewspree.com" className="inline-flex items-center gap-2 text-accent font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                    legal@viewspree.com <ChevronRight size={14} />
                </a>
            </motion.div>
          </div>

          {/* Sidebar / Quick Links */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 h-fit">
            <div className="p-8 rounded-3xl border border-white/5 bg-white/1">
              <h4 className="text-[11px] font-black uppercase tracking-[3px] text-white/20 mb-8">Related Modules</h4>
              <ul className="space-y-6">
                {['Privacy Policy', 'Cookie Protocol', 'Editorial Standards', 'Security Protocol'].map(link => (
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

export default TermsOfService;
