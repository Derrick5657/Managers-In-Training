import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import WhatsAppButton from './WhatsAppButton';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setStatus('loading');
    trackEvent('form_submit', { type: 'lead_magnet' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Check your email!</h3>
        <p className="text-slate-600 mb-8">
          Your guide is on its way. Want help implementing these strategies right now?
        </p>
        <WhatsAppButton 
          page="home" 
          location="lead_magnet_success" 
          message="Hi MIT, I just downloaded your guide and would like to discuss implementation."
          className="w-full"
        />
      </div>
    );
  }

  return (
    <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Our Free Sales Growth Guide</h2>
        <p className="text-blue-100 text-lg mb-10">
          Learn the 5 proven systems we use to scale SMEs in Kenya. Enter your email to get the PDF instantly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all"
            />
            <button
              type="submit"
              disabled={status === 'loading' || !agreed}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all shadow-lg"
            >
              {status === 'loading' ? 'Sending...' : (
                <>
                  Get Free Guide <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </div>
          
          <label className="flex items-start text-sm text-blue-200 cursor-pointer group">
            <input
              type="checkbox"
              required
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 mr-3 rounded border-blue-400 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-left">
              I agree to be contacted per the <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
            </span>
          </label>

          {status === 'error' && (
            <div className="flex items-center justify-center text-red-300 mt-4">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span>Something went wrong. We'll send it within 24h.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
