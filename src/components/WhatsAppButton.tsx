import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink, DEFAULT_WA_MESSAGE } from '../lib/constants';
import { trackEvent } from '../lib/analytics';

interface WhatsAppButtonProps {
  message?: string;
  page: string;
  location: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function WhatsAppButton({ 
  message = DEFAULT_WA_MESSAGE, 
  page, 
  location, 
  className = "",
  variant = 'primary'
}: WhatsAppButtonProps) {
  
  const handleClick = () => {
    trackEvent('cta_whatsapp', { page, location });
  };

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 shadow-lg",
    secondary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg",
    outline: "border-2 border-green-600 text-green-600 hover:bg-green-50"
  };

  return (
    <a
      href={getWhatsAppLink(message, page)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Chat on WhatsApp
    </a>
  );
}
