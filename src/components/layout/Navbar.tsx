import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  { name: 'Sales Services', path: '/services/sales' },
  { name: 'Marketing Services', path: '/services/marketing' },
  { name: 'Advertising', path: '/services/advertising' },
  { name: 'Training Programs', path: '/services/training' },
  { name: 'HR Services', path: '/services/hr' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-900 tracking-tighter">
              MIT<span className="text-blue-600">.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              About Us
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="flex items-center text-slate-600 hover:text-blue-600 font-medium transition-colors py-2"
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
                  >
                    <div className="py-2">
                      <Link to="/services" className="block px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 border-b border-slate-100">
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/training" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Training
            </Link>
            <Link to="/blog" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Insights
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              <Link to="/" className="block px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-md">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-md">
                About Us
              </Link>
              <div className="px-3 py-3">
                <div className="text-base font-medium text-slate-900 mb-2">Services</div>
                <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                  <Link to="/services" className="block py-2 text-sm text-slate-600 hover:text-blue-600">
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block py-2 text-sm text-slate-600 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/training" className="block px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-md">
                Training Programs
              </Link>
              <Link to="/blog" className="block px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-md">
                Insights
              </Link>
              <div className="pt-4 pb-2">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
