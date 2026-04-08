import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Target, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import LeadMagnet from '../components/LeadMagnet';
import Pricing from '../components/Pricing';

const services = [
  {
    icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
    title: 'Sales Systems',
    outcome: 'Increase Revenue by 30%+',
    description: 'We build automated sales funnels and train your team to close high-ticket deals consistently.',
    link: '/services/sales'
  },
  {
    icon: <Target className="w-10 h-10 text-blue-600" />,
    title: 'Marketing Strategy',
    outcome: 'Dominant Brand Presence',
    description: 'Data-driven marketing that converts strangers into loyal customers across all digital channels.',
    link: '/services/marketing'
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: 'HR & Leadership',
    outcome: 'High-Performing Teams',
    description: 'Recruit top talent and develop leaders who drive your business forward without constant supervision.',
    link: '/services/hr'
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SEO 
        title="Sales Training & Business Consulting Kenya" 
        description="Managers in Training (MIT) helps Kenyan SMEs scale through expert sales training, marketing strategy, and HR consulting. Increase your revenue today."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/nairobi/1920/1080?blur=2" 
            alt="Business growth in Kenya" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                #1 Business Growth Partner in Kenya
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Scale Your Business with <span className="text-blue-600">Proven Systems</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                We help Kenyan SMEs increase sales, build elite teams, and automate operations. Stop guessing and start growing with data-driven consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton 
                  page="home" 
                  location="hero" 
                  className="text-lg px-8 py-4"
                />
                <a
                  href="#lead-magnet"
                  className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-slate-700 bg-white border-2 border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
                >
                  Get Free Growth Guide
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Outcome-Focused Solutions</h2>
            <p className="text-lg text-slate-600">
              We don't just provide services; we deliver measurable business results that impact your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-wider">{service.outcome}</p>
                <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                <WhatsAppButton 
                  page="home" 
                  location={`service_${service.title.toLowerCase()}`}
                  message={`Hi MIT, I want to learn more about your ${service.title} to achieve ${service.outcome}.`}
                  variant="outline"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Results-Driven Consulting</h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                Most consultants give you a report. We give you a system. Our methodology is built on real-world success in the Kenyan market.
              </p>
              <ul className="space-y-6">
                {[
                  { title: 'Local Expertise', desc: 'Deep understanding of the Kenyan business landscape and consumer behavior.' },
                  { title: 'Data-Backed Strategies', desc: 'Every recommendation is based on metrics, not gut feelings.' },
                  { title: 'Implementation Support', desc: 'We stay with you until the systems are running smoothly.' },
                  { title: 'ROI Focused', desc: 'If it doesn\'t make you money or save you time, we don\'t do it.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-blue-600/20 p-2 rounded-lg mr-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/consulting/800/800"
                alt="MIT Consulting Session"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-extrabold text-white mb-1">150%</div>
                <div className="text-blue-100 font-medium">Avg. Revenue Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="lead-magnet" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadMagnet />
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Final CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Stop Leaving Money on the Table</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Your competitors are already automating. Join the 500+ businesses we've helped scale in East Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <WhatsAppButton 
              page="home" 
              location="final_cta" 
              className="text-xl px-10 py-5 bg-white text-blue-600 hover:bg-slate-50"
            />
            <a
              href="/contact"
              className="inline-flex justify-center items-center px-10 py-5 text-xl font-bold rounded-xl text-white border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
