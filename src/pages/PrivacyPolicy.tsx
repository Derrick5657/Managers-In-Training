import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for Managers in Training (MIT). Learn how we collect and use your data."
        path="/privacy"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-lg">Last updated: April 08, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                Managers in Training (MIT) ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information (company name, industry)</li>
                <li>Messages and inquiries submitted through our forms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide services</li>
                <li>Send you requested resources (e.g., free guides)</li>
                <li>Improve our website and user experience</li>
                <li>Communicate with you via WhatsApp or email regarding your business needs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at contact@mit-consulting.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
