import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Target, Briefcase, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: 'Sales Solutions',
    description: 'Accelerate revenue growth with data-driven sales strategies and expert consulting.',
    link: '/services/sales'
  },
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: 'Marketing Strategy',
    description: 'Build a powerful brand presence and engage your target audience effectively.',
    link: '/services/marketing'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'HR Services',
    description: 'Optimize your workforce with comprehensive recruitment and HR consulting.',
    link: '/services/hr'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: 'Corporate Training',
    description: 'Empower your team with leadership, sales, and professional development programs.',
    link: '/services/training'
  }
];

const testimonials = [
  {
    quote: "MIT transformed our sales process. Within 6 months, we saw a 40% increase in closed deals.",
    author: "Sarah Jenkins",
    role: "VP of Sales, TechCorp",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "Their leadership training program is exceptional. Our management team is more cohesive than ever.",
    author: "Michael Chen",
    role: "CEO, Innovate Inc",
    image: "https://picsum.photos/seed/michael/100/100"
  },
  {
    quote: "The marketing strategy MIT developed helped us successfully launch into two new international markets.",
    author: "Emma Thompson",
    role: "CMO, Global Retail",
    image: "https://picsum.photos/seed/emma/100/100"
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/office/1920/1080?blur=2" 
            alt="Office background" 
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
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                Empowering Business Growth
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                Transform Your Business Potential into <span className="text-blue-600">Performance</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                Managers in Training (MIT) provides expert consulting in sales, marketing, HR, and corporate training to help SMEs and enterprises scale efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-lg text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Business Solutions</h2>
            <p className="text-lg text-slate-600">
              We offer end-to-end services designed to optimize every aspect of your organization's operations and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose MIT?</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We don't just offer advice; we partner with you to execute strategies that deliver measurable results. Our holistic approach ensures all departments work synergistically towards your business goals.
              </p>
              <ul className="space-y-4">
                {[
                  'Industry-leading experts with decades of experience',
                  'Customized strategies tailored to your specific needs',
                  'Data-driven approach to decision making',
                  'Proven track record of scaling businesses',
                  'Comprehensive end-to-end implementation support'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 mr-3 shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300"
                >
                  Read our full story <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/meeting/800/600"
                alt="Team meeting"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-blue-100 font-medium">Clients Served Globally</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-slate-600">
              Don't just take our word for it. Here's what our clients have to say about working with MIT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 mb-8 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Schedule a free consultation with our experts to discuss your business challenges and discover how MIT can help.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
