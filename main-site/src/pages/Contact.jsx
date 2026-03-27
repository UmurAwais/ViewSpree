import React, { useState, useEffect } from 'react';
import { Send, Mail, MapPin, Phone, CheckCircle2, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const subjects = [
    'General Inquiry',
    'Press & PR',
    'Technical Tip',
    'Partnership'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Intelligence Transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const selectSubject = (subject) => {
    setFormState({ ...formState, subject });
    setIsDropdownOpen(false);
  };

  const fieldClass = "w-full bg-[#202024] border border-transparent hover:bg-[#2a2a2e] focus:bg-[#2a2a2e] focus:border-white/20 rounded-lg px-6 py-4 text-white focus:outline-none transition-all duration-200 placeholder:text-white/20 font-medium text-[13px]";

  return (
    <div className="bg-brand-bg min-h-screen pt-16 pb-16 font-sans selection:bg-white selection:text-black">
      <SEO 
        title="Contact Us"
        description="Connect with the ViewSpree technical desk. Send your inquiries, feedback, or press releases."
        keywords="contact ViewSpree, technical support, press inquiry, tech feedback"
      />

      <div className="container-custom">
        {/* Intelligence Header */}
        <div className="max-w-4xl mb-20">
          <span className="text-white/40 text-[10px] font-black uppercase tracking-[5px] mb-6 block font-display">
            Communication Portal
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-8 font-display">
            Connect with <br /> <span className="text-white/20">The Intelligence Desk</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            Whether you have a technical tip, a press inquiry, or want to collaborate on the future of tech journalism, our lines are open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Information Nodes */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-10">
               <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-500 shadow-2xl">
                     <Mail size={22} />
                  </div>
                  <div>
                     <h3 className="text-white/20 font-black uppercase text-[10px] tracking-[3px] mb-2 font-display">Mail Us</h3>
                     <p className="text-white text-xl font-bold font-display tracking-tight">support@viewspree.com</p>
                  </div>
               </div>

               <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                     <MapPin size={22} />
                  </div>
                  <div>
                     <h3 className="text-white/20 font-black uppercase text-[10px] tracking-[3px] mb-2 font-display">Physical Node</h3>
                     <p className="text-white text-xl font-bold font-display leading-tight tracking-tight">
                        Chishtian, Punjab<br />
                        Pakistan
                     </p>
                  </div>
               </div>

               <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                     <Phone size={22} />
                  </div>
                  <div>
                     <h3 className="text-white/20 font-black uppercase text-[10px] tracking-[3px] mb-2 font-display">Voice Protocol</h3>
                     <p className="text-white text-xl font-bold font-display tracking-tight">+1 (555) VIEW-SPREE</p>
                  </div>
               </div>
            </div>

            {/* Availability Matrix */}
            <div className="p-8 rounded-[32px] bg-linear-to-br from-white/[0.03] to-transparent border border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.02] blur-3xl rounded-full group-hover:bg-white/[0.05] transition-all duration-700" />
               <h4 className="text-white font-black uppercase text-xs tracking-widest mb-3 font-display">Operational Windows</h4>
               <p className="text-white/30 text-sm leading-relaxed mb-8 font-medium">Our engineers and editors monitor the feed 24/7. Primary response windows: 09:00 - 18:00 UTC.</p>
               <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                  <span className="text-[10px] font-black uppercase tracking-[4px] text-white">Active Node Response</span>
               </div>
            </div>
          </div>

          {/* Form Content Area */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] rounded-[48px] p-8 md:p-14 border border-white/5 shadow-3xl relative overflow-hidden">
              
              {isSubmitted ? (
                <div className="py-24 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-700">
                   <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-[0_0_80px_rgba(255,255,255,0.05)]">
                      <CheckCircle2 size={48} />
                   </div>
                   <h2 className="text-4xl font-black text-white uppercase tracking-tighter font-display">Transmission Successful</h2>
                   <p className="text-white/40 max-w-sm mx-auto font-medium leading-relaxed">Your intelligence briefing has been encrypted and sent to our technical desk. Expect a response within one rotation cycle.</p>
                   <Button variant="secondary" onClick={() => setIsSubmitted(false)} className="px-12 py-4 rounded-full font-black uppercase tracking-widest text-[10px] border-white/10">Return to Terminal</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[3px] text-white/20 ml-1 font-display">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="Operator Name"
                        className={fieldClass}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[3px] text-white/20 ml-1 font-display">Your Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="email@viewspree.node"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-3 relative">
                    <label className="text-[10px] font-black uppercase tracking-[3px] text-white/20 ml-1 font-display">Inquiry Type</label>
                    <div 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`${fieldClass} cursor-pointer flex items-center justify-between group`}
                    >
                      <span className={formState.subject ? 'text-white' : 'text-white/20'}>
                        {formState.subject || 'Select Vector'}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-white' : 'text-white/20'}`} />
                    </div>

                    {/* Proprietary Dropdown - Search Style */}
                    {isDropdownOpen && (
                      <div className="absolute top-full mt-2 left-0 right-0 blurry-dropdown border border-white/10 shadow-2xl rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="flex flex-col py-2 relative z-10">
                          {subjects.map((subject) => (
                            <div 
                              key={subject}
                              onClick={() => selectSubject(subject)}
                              className="px-6 py-3.5 hover:bg-white/5 cursor-pointer text-[13px] font-medium text-white/70 hover:text-white transition-all flex items-center justify-between group"
                            >
                              {subject}
                              {formState.subject === subject && <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[3px] text-white/20 ml-1 font-display">Message</label>
                    <textarea 
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder="Input encrypted briefing..."
                      rows={6}
                      className={`${fieldClass} resize-none leading-relaxed h-auto py-5`}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    className={`w-full py-5 rounded-lg flex items-center justify-center gap-4 transition-all border border-white/5 hover:border-white/20 group ${isSubmitting ? 'opacity-50' : ''}`}
                    disabled={isSubmitting}
                  >
                    <div className="flex items-center gap-4 justify-center">
                      {isSubmitting ? (
                        <span className="font-black uppercase tracking-[4px] animate-pulse">Processing...</span>
                      ) : (
                        <>
                          <Send size={16} />
                          <span className="font-black uppercase tracking-[4px] text-[11px]">Initiate Transmission</span>
                        </>
                      )}
                    </div>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
