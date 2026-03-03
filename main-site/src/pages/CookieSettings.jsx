import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cookie, BarChart3, Target, ChevronRight, Save, CheckCircle2, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const CookieSettings = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const defaultPreferences = {
    essential: true,
    analytics: true,
    marketing: false,
    functional: true
  };

  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem('viewspree-cookie-prefs');
    return saved ? JSON.parse(saved) : defaultPreferences;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const togglePreference = (key) => {
    if (key === 'essential') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    setShowSuccess(false); // Reset success state when a new change is made
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate real-time sync with global nodes
    setTimeout(() => {
      localStorage.setItem('viewspree-cookie-prefs', JSON.stringify(preferences));
      setIsSaving(false);
      setShowSuccess(true);
      // Success state fades out after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 800);
  };

  const handleReset = () => {
    setPreferences(defaultPreferences);
    localStorage.removeItem('viewspree-cookie-prefs');
    setShowSuccess(false);
  };

  const sections = [
    {
      id: "essential",
      title: "Essential Protocol Cookies",
      icon: <Shield size={20} />,
      description: "Required for basic platform operations, security nodes, and session encryption. These cannot be deactivated.",
      required: true
    },
    {
      id: "analytics",
      title: "Intelligence Analytics",
      icon: <BarChart3 size={20} />,
      description: "Helps us understand how our technical briefings are consumed. We use this telemetry to optimize our global news transmission.",
      required: false
    },
    {
      id: "marketing",
      title: "Retail Personalization",
      icon: <Target size={20} />,
      description: "Used to sandbox retail partner links and provide relevant hardware recommendations based on your architectural interests.",
      required: false
    },
    {
      id: "functional",
      title: "Interface Customization",
      icon: <Cookie size={20} />,
      description: "Remembers your display preferences, font scales, and theme settings across the ViewSpree interface.",
      required: false
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen text-white pb-24 font-sans selection:bg-accent selection:text-white pt-24 md:pt-16">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-8 bg-accent rounded-full" />
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter font-display italic">Cookie Protocol</h1>
          </div>
          <p className="text-lg md:text-xl text-white/40 font-medium leading-relaxed max-w-2xl">
            Configure how ViewSpree utilizes localized data nodes to optimize your technical intelligence experience.
          </p>
        </motion.div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Main Controls */}
          <div className="lg:col-span-8 space-y-6">
            {sections.map((section, index) => (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 md:p-10 rounded-3xl border ${preferences[section.id] ? 'border-accent/30 bg-accent/5' : 'border-white/5 bg-white/1'} transition-all duration-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-8`}
              >
                <div className="flex gap-6 items-start">
                  <div className={`p-4 rounded-2xl ${preferences[section.id] ? 'bg-accent text-white' : 'bg-white/5 text-white/20'} transition-colors duration-500`}>
                    {section.icon}
                  </div>
                  <div className="max-w-md">
                    <h3 className="text-xl font-black uppercase tracking-tight mb-2 font-display">{section.title}</h3>
                    <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed">{section.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 ml-auto md:ml-0">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${preferences[section.id] ? 'text-accent font-bold' : 'text-white/20'}`}>
                    {preferences[section.id] ? 'Active' : 'Disabled'}
                  </span>
                  <button 
                    onClick={() => togglePreference(section.id)}
                    disabled={section.required}
                    className={`w-14 h-7 rounded-full relative transition-colors duration-500 cursor-pointer ${section.required ? 'opacity-30 cursor-not-allowed' : ''} ${preferences[section.id] ? 'bg-accent' : 'bg-white/10'}`}
                  >
                    <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-500 ${preferences[section.id] ? 'left-8' : 'left-1'}`} />
                  </button>
                </div>
              </motion.div>
            ))}

            <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto rounded-full px-12 py-4 font-black uppercase tracking-[2px] text-xs shadow-xl shadow-accent/20 flex items-center justify-center gap-3 min-w-50"
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white" />
                    Syncing...
                  </>
                ) : showSuccess ? (
                  <>
                    <CheckCircle2 size={16} />
                    Protocol Updated
                  </>
                ) : (
                  <>
                    <span className='flex gap-2'><Save size={16} /> Save Protocol</span>                    
                  </>
                )}
              </Button>
              <button 
                onClick={handleReset}
                className="text-white/20 hover:text-white text-xs font-black uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2 group"
              >
                <RotateCcw size={14} className="group-hover:-rotate-45 transition-transform" />
                Reset to Default
              </button>
            </div>
          </div>

          {/* Context Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 h-fit">
            <div className="p-8 rounded-3xl border border-white/5 bg-white/2 mb-8">
              <h4 className="text-[11px] font-black uppercase tracking-[3px] text-white/20 mb-6 font-display">Transparency Report</h4>
              <p className="text-sm text-white/40 leading-relaxed font-medium mb-6">
                Our protocol ensures that no individual user profile is identified during technical telemetry processing.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-white/20">Encryption</span>
                  <span className="text-accent">AES-256</span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-white/20">Data TTL</span>
                  <span className="text-accent">90 Days</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-white/5 bg-white/2">
              <h4 className="text-[11px] font-black uppercase tracking-[3px] text-white/20 mb-6 font-display">Linked Standards</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Privacy Policy', path: '/privacy-policy' },
                  { name: 'Service Protocol', path: '/terms-of-service' },
                  { name: 'About ViewSpree', path: '/about' }
                ].map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="flex items-center justify-between w-full group text-left cursor-pointer">
                      <span className="text-[12px] font-bold text-white/60 group-hover:text-white transition-colors uppercase tracking-tight">{link.name}</span>
                      <ChevronRight size={14} className="text-white/10 group-hover:text-accent transform group-hover:translate-x-1 transition-all" />
                    </Link>
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

export default CookieSettings;
