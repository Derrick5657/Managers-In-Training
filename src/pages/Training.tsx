import { motion } from 'motion/react';
import { BookOpen, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';

const courses = [
  {
    title: 'Advanced Sales Mastery',
    duration: '4 Weeks',
    description: 'Master the art of high-ticket closing and relationship-based selling for the Kenyan market.',
    features: ['Objection Handling', 'CRM Mastery', 'Sales Psychology', 'Live Roleplay'],
  },
  {
    title: 'Leadership & Management',
    duration: '6 Weeks',
    description: 'Transition from a top performer to a high-impact manager with proven leadership frameworks.',
    features: ['Team Building', 'Performance Reviews', 'Strategic Planning', 'Conflict Resolution'],
  },
  {
    title: 'Digital Marketing for SMEs',
    duration: '3 Weeks',
    description: 'Learn how to generate consistent leads using Facebook, Google, and WhatsApp Marketing.',
    features: ['Ad Strategy', 'Content Planning', 'Conversion Tracking', 'WhatsApp Automation'],
  },
];

export default function Training() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <SEO 
        title="Corporate Training Programs" 
        description="Professional training programs for sales teams, managers, and marketers in Kenya. Upskill your team with MIT's expert-led courses."
        path="/training"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Upskill Your Team for <span className="text-blue-600">Growth</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Practical, results-oriented training programs designed to solve real-world business challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 w-fit">
                {course.duration}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{course.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">{course.description}</p>
              
              <ul className="space-y-3 mb-8">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <WhatsAppButton 
                page="training" 
                location={`course_${index}`} 
                message={`Hi MIT, I'm interested in the ${course.title} program.`}
                className="w-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Custom Training CTA */}
        <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full -ml-32 -mt-32 opacity-20 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Training Program?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We design bespoke training solutions tailored to your company's specific needs and industry challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppButton 
                page="training" 
                location="custom_cta" 
                message="Hi MIT, I'd like to discuss a custom training program for my company."
                className="bg-white text-blue-900 hover:bg-slate-50"
              />
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center"
              >
                Request a Proposal <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

