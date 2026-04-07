import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TrendingUp, Target, Megaphone, Briefcase, Users, ArrowRight } from 'lucide-react';

export const servicesData = [
  {
    id: 'sales',
    icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
    title: 'Sales Services',
    shortDesc: 'Accelerate revenue with optimized sales processes and expert training.',
    description: 'Our Sales Services are designed to transform your sales organization into a high-performing revenue engine. We analyze your current processes, identify bottlenecks, and implement strategies that drive measurable growth.',
    benefits: ['Increased close rates', 'Shorter sales cycles', 'Higher average deal size', 'Scalable sales processes'],
    process: ['Sales Audit & Analysis', 'Strategy Development', 'Playbook Creation', 'Execution & Coaching'],
    image: 'https://picsum.photos/seed/sales/800/600'
  },
  {
    id: 'marketing',
    icon: <Target className="w-10 h-10 text-blue-600" />,
    title: 'Marketing Services',
    shortDesc: 'Build brand authority and generate high-quality leads.',
    description: 'We develop comprehensive marketing strategies that align with your business objectives. From brand positioning to digital execution, we ensure your message reaches the right audience at the right time.',
    benefits: ['Stronger brand positioning', 'Increased inbound leads', 'Better ROI on marketing spend', 'Data-driven insights'],
    process: ['Market Research', 'Brand Strategy', 'Digital Marketing Planning', 'Campaign Execution'],
    image: 'https://picsum.photos/seed/marketing/800/600'
  },
  {
    id: 'advertising',
    icon: <Megaphone className="w-10 h-10 text-blue-600" />,
    title: 'Advertising',
    shortDesc: 'Targeted campaigns that maximize your return on ad spend.',
    description: 'Our advertising experts manage multi-channel campaigns across social media, search engines, and traditional media to maximize your visibility and conversion rates.',
    benefits: ['Lower Customer Acquisition Cost (CAC)', 'Highly targeted audience reach', 'Optimized ad spend', 'Real-time performance tracking'],
    process: ['Audience Profiling', 'Creative Development', 'Media Planning & Buying', 'Optimization & Reporting'],
    image: 'https://picsum.photos/seed/advertising/800/600'
  },
  {
    id: 'training',
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    title: 'Training Programs',
    shortDesc: 'Empower your workforce with essential skills for the modern business landscape.',
    description: 'MIT offers specialized corporate training programs focusing on leadership development, sales mastery, and marketing excellence to upskill your team and drive internal growth.',
    benefits: ['Improved employee retention', 'Enhanced leadership capabilities', 'Higher team productivity', 'Culture of continuous learning'],
    process: ['Needs Assessment', 'Curriculum Customization', 'Interactive Delivery', 'Post-Training Evaluation'],
    image: 'https://picsum.photos/seed/training/800/600'
  },
  {
    id: 'hr',
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: 'HR Services',
    shortDesc: 'Attract, retain, and manage top talent effectively.',
    description: 'Our HR consulting services help you build a robust organizational structure. From executive search to performance management systems, we ensure your human capital is your greatest asset.',
    benefits: ['Access to top-tier talent', 'Streamlined onboarding', 'Effective performance management', 'Ensured HR compliance'],
    process: ['Organizational Audit', 'Talent Acquisition Strategy', 'System Implementation', 'Ongoing HR Support'],
    image: 'https://picsum.photos/seed/hr/800/600'
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Comprehensive solutions designed to optimize your operations, accelerate growth, and build high-performing teams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">{service.shortDesc}</p>
              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group"
              >
                Explore Service 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
