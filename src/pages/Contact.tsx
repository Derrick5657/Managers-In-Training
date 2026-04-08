import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import { trackEvent } from '../lib/analytics';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setStatus('loading');
    trackEvent('form_submit', { type: 'contact_form' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Managers in Training (MIT) for expert sales training, marketing strategy, and HR consulting in Kenya."
        path="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Let's Build Your Next Level
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Ready to Increase Sales, Build Strong Teams, and Scale Your Business? Reach out today and let's discuss your growth strategy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Direct Channels</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">WhatsApp</h4>
                    <p className="text-sm text-slate-500 mb-2">Instant response for hot leads</p>
                    <WhatsAppButton page="contact" location="info_card" variant="outline" className="px-4 py-2 text-sm" />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600 text-sm">contact@mit-consulting.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600 text-sm">Nairobi, Kenya<br />Serving Clients Globally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full -mr-16 -mt-16 opacity-20 blur-2xl"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Prefer a Call?</h3>
              <p className="text-blue-100 mb-6 relative z-10">Schedule a 15-minute discovery call to see if we're a good fit.</p>
              <WhatsAppButton page="contact" location="call_card" message="Hi MIT, I'd like to schedule a discovery call." className="w-full bg-white text-blue-900 hover:bg-slate-50" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h2>
                <p className="text-lg text-slate-600 mb-10">
                  We'll get back to you within 24 hours. Want an instant response?
                </p>
                <WhatsAppButton 
                  page="contact" 
                  location="form_success" 
                  message="Hi MIT, I just submitted your contact form and would like to continue the conversation here."
                  className="w-full max-w-md"
                />
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Service of Interest</label>
                      <select
                        id="service"
                        required
                        className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="sales">Sales Systems</option>
                        <option value="marketing">Marketing Strategy</option>
                        <option value="training">Corporate Training</option>
                        <option value="hr">HR & Leadership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">How can we help you?</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all resize-none"
                      placeholder="Tell us about your business goals..."
                    ></textarea>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start text-sm text-slate-600 cursor-pointer group">
                      <input
                        type="checkbox"
                        required
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 mr-3 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span>
                        I agree to be contacted per the <a href="/privacy" className="text-blue-600 underline hover:text-blue-700">Privacy Policy</a>.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={status === 'loading' || !agreed}
                      className="w-full bg-blue-600 text-white font-extrabold py-5 px-6 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center text-xl shadow-xl hover:shadow-2xl"
                    >
                      {status === 'loading' ? 'Sending...' : (
                        <>
                          Start Your Growth Journey <Send className="ml-2 w-6 h-6" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

