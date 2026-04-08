import { motion } from 'motion/react';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';

export default function About() {
  return (
    <div className="bg-white">
      <SEO 
        title="About Us" 
        description="Learn about Managers in Training (MIT), Kenya's leading business growth consultancy. Our mission is to empower SMEs with systems for success."
        path="/about"
      />
      
      {/* Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6"
          >
            Empowering Kenyan <span className="text-blue-600">SMEs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Managers in Training (MIT) is a premier professional services firm dedicated to building high-performing teams and driving sustainable business growth through proven systems.
          </motion.p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 2015, MIT began with a simple observation: many businesses in East Africa struggle not because of their product, but because of gaps in execution, leadership, and strategy.
                </p>
                <p>
                  We set out to create a holistic consulting firm that doesn't just deliver reports, but actively builds capabilities within organizations. From optimizing sales funnels to developing the next generation of corporate leaders, our approach is hands-on and results-driven.
                </p>
                <p>
                  Today, MIT partners with over 500 SMEs and enterprises across Kenya, providing the expertise and training needed to navigate complex business landscapes and achieve market dominance.
                </p>
              </div>
              <div className="mt-10">
                <WhatsAppButton page="about" location="story_section" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://picsum.photos/seed/nairobi_office/800/600" 
                alt="MIT Team in Nairobi" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To empower organizations with the strategies, skills, and systems necessary to achieve exceptional performance and sustainable growth.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To be the globally recognized standard for corporate excellence, transforming how businesses operate, market, and lead.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-slate-300 leading-relaxed">
                Integrity in all actions, excellence in execution, continuous innovation, and a relentless commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The MIT Advantage</h2>
            <p className="text-lg text-slate-600">What sets us apart in the consulting landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Integrated Approach', desc: 'We don\'t silo sales, marketing, and HR. We align them for maximum impact.' },
              { title: 'Practitioner-Led', desc: 'Our consultants have real-world experience, not just theoretical knowledge.' },
              { title: 'Customized Solutions', desc: 'No cookie-cutter templates. Every strategy is built for your specific context.' },
              { title: 'Focus on Enablement', desc: 'We train your team to sustain success long after our engagement ends.' }
            ].map((item, i) => (
              <div key={i} className="flex bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-slate-600">Meet the experts driving transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'David Reynolds', role: 'Founder & CEO', img: 'https://picsum.photos/seed/david/400/400' },
              { name: 'Elena Rodriguez', role: 'Head of Marketing Strategy', img: 'https://picsum.photos/seed/elena/400/400' },
              { name: 'Marcus Johnson', role: 'Director of Corporate Training', img: 'https://picsum.photos/seed/marcus/400/400' }
            ].map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-blue-600 font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
