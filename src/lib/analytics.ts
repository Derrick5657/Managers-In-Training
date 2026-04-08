type EventType = 'page_view' | 'cta_whatsapp' | 'form_submit';

export const trackEvent = (type: EventType, data: Record<string, string>) => {
  // In a real app, this would send data to GA4 or Plausible
  // For now, we'll log it in development
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${type}:`, data);
  }
  
  // Example for GA4:
  // if (window.gtag) {
  //   window.gtag('event', type, data);
  // }
};
