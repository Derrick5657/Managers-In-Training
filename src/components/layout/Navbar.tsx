import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppLink } from '../../lib/constants';

const services = [
  { name: 'Sales Systems', path: '/services/sales' },
  { name: 'Marketing Strategy', path: '/services/marketing' },
  { name: 'Advertising', path: '/services/advertising' },
  { name: 'HR & Leadership', path: '/services/hr' },
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
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-black text-blue-900 tracking-tighter">
              MIT<span className="text-blue-600">.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-bold transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600 font-bold transition-colors">
              About
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="flex items-center text-slate-600 hover:text-blue-600 font-bold transition-colors py-2"
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
                    className="absolute left-0 top-full w-56 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden"
                  >
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/training" className="text-slate-600 hover:text-blue-600 font-bold transition-colors">
              Training
            </Link>
            
            <a
              href={getWhatsAppLink("Hi MIT, I'm interested in your services.", "navbar")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-green-700 transition-all shadow-md hover:shadow-lg flex items-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
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
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              <Link to="/" className="block px-3 py-4 text-lg font-bold text-slate-900 hover:bg-slate-50 rounded-xl">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-4 text-lg font-bold text-slate-900 hover:bg-slate-50 rounded-xl">
                About Us
              </Link>
              <div className="px-3 py-4">
                <div className="text-lg font-bold text-slate-900 mb-3">Services</div>
                <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-blue-100">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block py-2 text-slate-600 font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/training" className="block px-3 py-4 text-lg font-bold text-slate-900 hover:bg-slate-50 rounded-xl">
                Training
              </Link>
              <div className="pt-6 px-3">
                <a
                  href={getWhatsAppLink("Hi MIT, I'm interested in your services.", "mobile_navbar")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center bg-green-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
