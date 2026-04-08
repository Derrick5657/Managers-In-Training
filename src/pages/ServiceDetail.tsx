import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { servicesData } from './Services';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={service.title} 
        description={service.shortDesc}
        path={`/services/${service.id}`}
      />

      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={service.image} 
            alt="" 
            className="w-full h-full object-cover blur-sm"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center justify-center p-4 bg-blue-600 rounded-2xl mb-8 shadow-lg">
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-blue-400 font-bold text-xl mb-6 uppercase tracking-widest">
                {service.outcome}
              </p>
              <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton 
                  page={`service_${service.id}`} 
                  location="hero" 
                  message={`Hi MIT, I'm interested in your ${service.title} and want to achieve ${service.outcome}.`}
                  className="text-lg px-8 py-4"
                />
                <a
                  href="#benefits"
                  className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-white border-2 border-white/30 hover:bg-white/10 transition-all"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden lg:block"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits & Process */}
      <div id="benefits" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Why Choose Our {service.title}?</h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-all">
                    <div className="bg-blue-50 p-2 rounded-lg mr-4 group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg text-slate-700 font-bold">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Our Implementation Process</h2>
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-center gap-6 group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 text-white font-black text-xl shadow-lg group-hover:bg-blue-600 transition-colors">
                      {index + 1}
                    </div>
                    <div className="flex-grow bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-all">
                      <h3 className="font-bold text-slate-900 text-lg">{step}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-2xl mb-8">
            <MessageCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">
            Ready to achieve {service.outcome.toLowerCase()}?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Don't let another month go by with stagnant growth. Let's build the systems that will take your business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <WhatsAppButton 
              page={`service_${service.id}`} 
              location="bottom_cta" 
              message={`Hi MIT, I'm ready to start with ${service.title}. Let's discuss the next steps.`}
              className="text-xl px-10 py-5"
            />
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-10 py-5 text-xl font-bold rounded-xl text-slate-700 border-2 border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
            >
              Book Consultation <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
