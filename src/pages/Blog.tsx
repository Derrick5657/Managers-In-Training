import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';

const posts = [
  {
    id: 1,
    title: '5 Reasons Your Sales Team is Missing Targets',
    excerpt: 'Discover the common pitfalls in sales execution and how to fix them with better systems.',
    author: 'MIT Consulting',
    date: 'April 05, 2026',
    category: 'Sales',
    image: 'https://picsum.photos/seed/sales_tips/800/500',
  },
  {
    id: 2,
    title: 'The Future of Marketing in Kenya: 2026 Trends',
    excerpt: 'Why WhatsApp marketing is outperforming email and how to pivot your strategy.',
    author: 'MIT Consulting',
    date: 'March 28, 2026',
    category: 'Marketing',
    image: 'https://picsum.photos/seed/marketing_trends/800/500',
  },
  {
    id: 3,
    title: 'Building a Winning Corporate Culture',
    excerpt: 'How to attract and retain top talent in a competitive East African market.',
    author: 'MIT Consulting',
    date: 'March 15, 2026',
    category: 'HR',
    image: 'https://picsum.photos/seed/hr_culture/800/500',
  },
];

export default function Blog() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <SEO 
        title="Business Insights & Blog" 
        description="Expert advice on sales, marketing, and leadership for Kenyan businesses. Stay ahead with MIT's latest insights."
        path="/blog"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Business <span className="text-blue-600">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Expert strategies and local market trends to help you scale your business in Kenya.
          </motion.p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 mb-16 grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="h-64 lg:h-auto overflow-hidden">
            <img 
              src="https://picsum.photos/seed/featured_post/1200/800" 
              alt="Featured Post" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">Featured Article</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Scale Your SME from 10 to 100 Employees</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Scaling a business requires more than just more customers. It requires robust systems, delegated leadership, and a culture of accountability.
            </p>
            <div className="flex items-center text-sm text-slate-500 mb-8">
              <User className="w-4 h-4 mr-2" /> MIT Consulting
              <span className="mx-3">•</span>
              <Calendar className="w-4 h-4 mr-2" /> April 07, 2026
            </div>
            <WhatsAppButton 
              page="blog" 
              location="featured_post" 
              message="Hi MIT, I read your article on scaling SMEs and would like to discuss how you can help my business."
              className="w-fit"
            />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-blue-600 font-bold text-xs uppercase mb-3">{post.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-xs text-slate-400">{post.date}</span>
                  <button className="text-blue-600 font-bold text-sm flex items-center hover:translate-x-1 transition-transform">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter / Lead Magnet */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Get Growth Insights in Your Inbox</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join 5,000+ business owners receiving our weekly strategy teardowns.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
