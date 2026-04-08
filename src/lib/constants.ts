export const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE || "254793682800";

export const getWhatsAppLink = (message: string, page: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}&utm_source=website&utm_medium=${page}`;
};

export const DEFAULT_WA_MESSAGE = "Hi MIT, I'm interested in learning more about your services.";
