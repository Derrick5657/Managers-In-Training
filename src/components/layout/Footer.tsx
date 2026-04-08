import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white tracking-tighter mb-6 block">
              MIT<span className="text-blue-500">.</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              #1 Business Growth Partner in Kenya. We build the systems that scale SMEs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/managers-in-training-48aa173b9" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/salesmanagersintraining/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={getWhatsAppLink("Hi MIT, I'm interested in your services.", "footer")} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors flex items-center">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center">Our Services</Link></li>
              <li><Link to="/training" className="hover:text-blue-400 transition-colors flex items-center">Training Programs</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors flex items-center">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/sales" className="hover:text-blue-400 transition-colors flex items-center">Sales Systems</Link></li>
              <li><Link to="/services/marketing" className="hover:text-blue-400 transition-colors flex items-center">Marketing Strategy</Link></li>
              <li><Link to="/services/advertising" className="hover:text-blue-400 transition-colors flex items-center">Advertising</Link></li>
              <li><Link to="/services/hr" className="hover:text-blue-400 transition-colors flex items-center">HR & Leadership</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" />
                <span>Nairobi, Kenya<br />Serving Clients Globally</span>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                <a href={getWhatsAppLink("Hi MIT, I'm interested in your services.", "footer_contact")} className="hover:text-white">+254 793 682 800</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <span>contact@mit-consulting.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Managers in Training (MIT). All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
