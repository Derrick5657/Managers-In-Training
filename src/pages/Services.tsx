import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TrendingUp, Target, Megaphone, Users, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';

export const servicesData = [
  {
    id: 'sales',
    icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
    title: 'Sales Systems',
    outcome: 'Increase Revenue by 30%+',
    shortDesc: 'We build automated sales funnels and train your team to close high-ticket deals consistently.',
    description: 'Our Sales Systems are designed to transform your sales organization into a high-performing revenue engine. We analyze your current processes, identify bottlenecks, and implement strategies that drive measurable growth in the Kenyan market.',
    benefits: ['Increased close rates', 'Shorter sales cycles', 'Higher average deal size', 'Scalable sales processes'],
    process: ['Sales Audit & Analysis', 'Strategy Development', 'Playbook Creation', 'Execution & Coaching'],
    image: 'https://picsum.photos/seed/sales_systems/800/600'
  },
  {
    id: 'marketing',
    icon: <Target className="w-10 h-10 text-blue-600" />,
    title: 'Marketing Strategy',
    outcome: 'Dominant Brand Presence',
    shortDesc: 'Data-driven marketing that converts strangers into loyal customers across all digital channels.',
    description: 'We develop comprehensive marketing strategies that align with your business objectives. From brand positioning to digital execution, we ensure your message reaches the right audience at the right time.',
    benefits: ['Stronger brand positioning', 'Increased inbound leads', 'Better ROI on marketing spend', 'Data-driven insights'],
    process: ['Market Research', 'Brand Strategy', 'Digital Marketing Planning', 'Campaign Execution'],
    image: 'https://picsum.photos/seed/marketing_strategy/800/600'
  },
  {
    id: 'advertising',
    icon: <Megaphone className="w-10 h-10 text-blue-600" />,
    title: 'Advertising',
    outcome: 'Lower CAC, Higher ROI',
    shortDesc: 'Targeted campaigns that maximize your return on ad spend through precision targeting.',
    description: 'Our advertising experts manage multi-channel campaigns across social media, search engines, and traditional media to maximize your visibility and conversion rates.',
    benefits: ['Lower Customer Acquisition Cost (CAC)', 'Highly targeted audience reach', 'Optimized ad spend', 'Real-time performance tracking'],
    process: ['Audience Profiling', 'Creative Development', 'Media Planning & Buying', 'Optimization & Reporting'],
    image: 'https://picsum.photos/seed/advertising_kenya/800/600'
  },
  {
    id: 'hr',
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: 'HR & Leadership',
    outcome: 'High-Performing Teams',
    shortDesc: 'Recruit top talent and develop leaders who drive your business forward without supervision.',
    description: 'Our HR consulting services help you build a robust organizational structure. From executive search to performance management systems, we ensure your human capital is your greatest asset.',
    benefits: ['Access to top-tier talent', 'Streamlined onboarding', 'Effective performance management', 'Ensured HR compliance'],
    process: ['Organizational Audit', 'Talent Acquisition Strategy', 'System Implementation', 'Ongoing HR Support'],
    image: 'https://picsum.photos/seed/hr_leadership/800/600'
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <SEO 
        title="Our Services" 
        description="Comprehensive business growth solutions including sales systems, marketing strategy, advertising, and HR consulting for Kenyan SMEs."
        path="/services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Our <span className="text-blue-600">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            We don't just provide services; we deliver measurable business results that impact your bottom line.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-8"
            >
              <div className="md:w-1/2">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-wider">{service.outcome}</p>
                <p className="text-slate-600 mb-8 leading-relaxed">{service.shortDesc}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-all"
                  >
                    View Details
                  </Link>
                  <WhatsAppButton 
                    page="services" 
                    location={`service_card_${service.id}`} 
                    message={`Hi MIT, I'm interested in your ${service.title} to achieve ${service.outcome}.`}
                    className="flex-grow"
                  />
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full -mr-48 -mt-48 opacity-20 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Tailored Growth Plan?</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Every business is unique. We can combine our services into a custom package that fits your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <WhatsAppButton 
                page="services" 
                location="custom_cta" 
                message="Hi MIT, I'd like to discuss a custom growth plan for my business."
                className="text-lg px-10 py-4"
              />
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl border-2 border-white/30 font-bold text-white hover:bg-white/10 transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
