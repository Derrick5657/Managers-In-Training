import { motion } from 'motion/react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Executive Leadership Mastery',
    category: 'Leadership',
    duration: '8 Weeks',
    format: 'Hybrid (Online + In-person)',
    description: 'Designed for senior managers and executives to refine their strategic thinking, emotional intelligence, and organizational leadership skills.',
    price: '$2,499'
  },
  {
    id: 2,
    title: 'High-Performance Sales Bootcamp',
    category: 'Sales',
    duration: '4 Weeks',
    format: 'Online Live',
    description: 'An intensive program focusing on modern B2B sales techniques, objection handling, and closing strategies for sales teams.',
    price: '$1,299'
  },
  {
    id: 3,
    title: 'Digital Marketing Strategy',
    category: 'Marketing',
    duration: '6 Weeks',
    format: 'Online Self-paced',
    description: 'Comprehensive training on building and executing ROI-driven digital marketing campaigns across multiple channels.',
    price: '$899'
  },
  {
    id: 4,
    title: 'Modern HR Management',
    category: 'Human Resources',
    duration: '5 Weeks',
    format: 'Online Live',
    description: 'Equip your HR team with the latest practices in talent acquisition, employee engagement, and performance management.',
    price: '$1,099'
  }
];

export default function Training() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Corporate Training Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Upskill your workforce with our industry-leading certification programs and customized corporate workshops.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Course List */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Available Courses</h2>
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {course.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">{course.title}</h3>
                  </div>
                  <div className="text-xl font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg inline-block">
                    {course.price}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">{course.description}</p>
                
                <div className="flex flex-wrap gap-6 border-t border-slate-100 pt-6">
                  <div className="flex items-center text-slate-500">
                    <Clock className="w-5 h-5 mr-2 text-slate-400" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-slate-500">
                    <Users className="w-5 h-5 mr-2 text-slate-400" />
                    {course.format}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 sticky top-28">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Register Interest</h3>
              <p className="text-slate-600 mb-8">Fill out the form below to receive syllabus details and upcoming cohort dates.</p>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-slate-700 mb-1">Program of Interest</label>
                  <select
                    id="course"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a program...</option>
                    {courses.map(c => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Request Information <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
