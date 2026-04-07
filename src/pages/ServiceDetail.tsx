import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from './Services';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-xl mb-6">
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Book a Consultation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden lg:block"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits & Process */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Benefits</h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start bg-slate-50 p-6 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-4 shrink-0" />
                    <span className="text-lg text-slate-700 font-medium">{benefit}</span>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Process</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {service.process.map((step, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      {index + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100">
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
      <div className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to transform your {service.title.toLowerCase()}?</h2>
          <p className="text-lg text-slate-600 mb-8">Let's discuss how we can tailor our approach to meet your specific business goals.</p>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
