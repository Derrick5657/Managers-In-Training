import { Check } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const plans = [
  {
    name: 'Starter',
    price: 'KSh 5,000',
    period: '/session',
    description: 'Perfect for startups and individuals seeking focused guidance.',
    features: ['1-on-1 Strategy Session', 'Sales Process Audit', 'Actionable Roadmap', 'Email Support'],
    cta: 'Get Started'
  },
  {
    name: 'Growth',
    price: 'KSh 15,000',
    period: '/month',
    description: 'Ideal for growing SMEs looking for consistent results.',
    features: ['Bi-weekly Consulting', 'Team Sales Training', 'Marketing Strategy', 'Performance Tracking', 'Priority Support'],
    popular: true,
    cta: 'Scale Now'
  },
  {
    name: 'Premium',
    price: 'Custom',
    period: '',
    description: 'Full-service partnership for established organizations.',
    features: ['Dedicated Account Manager', 'Full HR Systems Setup', 'Advertising Management', 'Executive Coaching', 'On-site Workshops'],
    cta: 'Contact Us'
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-slate-600">Choose the plan that fits your current business stage and growth goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative p-8 rounded-3xl border ${
                plan.popular 
                  ? 'border-blue-600 shadow-2xl scale-105 z-10 bg-slate-50' 
                  : 'border-slate-200 bg-white'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-slate-500 ml-1">{plan.period}</span>
              </div>
              <p className="text-slate-600 mb-8 text-sm">{plan.description}</p>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start text-sm text-slate-700">
                    <Check className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <WhatsAppButton 
                page="home" 
                location={`pricing_${plan.name.toLowerCase()}`}
                message={`Hi MIT, I'm interested in the ${plan.name} plan.`}
                className="w-full"
                variant={plan.popular ? 'primary' : 'secondary'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
