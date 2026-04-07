import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Future of B2B Sales: AI and Automation',
    excerpt: 'Discover how artificial intelligence is reshaping the B2B sales landscape and how your team can adapt to stay ahead of the curve.',
    category: 'Sales',
    author: 'David Reynolds',
    date: 'Oct 15, 2023',
    image: 'https://picsum.photos/seed/b2b/800/500'
  },
  {
    id: 2,
    title: 'Building a Resilient Corporate Culture',
    excerpt: 'A strong culture is your best defense against high turnover. Learn the key pillars of building resilience within your organization.',
    category: 'HR',
    author: 'Sarah Jenkins',
    date: 'Oct 02, 2023',
    image: 'https://picsum.photos/seed/culture/800/500'
  },
  {
    id: 3,
    title: 'Omnichannel Marketing Strategies for 2024',
    excerpt: 'Why single-channel marketing is dead and how to create a cohesive brand experience across all customer touchpoints.',
    category: 'Marketing',
    author: 'Elena Rodriguez',
    date: 'Sep 28, 2023',
    image: 'https://picsum.photos/seed/omnichannel/800/500'
  },
  {
    id: 4,
    title: 'Effective Leadership in Remote Environments',
    excerpt: 'Managing distributed teams requires a shift in leadership style. Here are 5 strategies for effective remote management.',
    category: 'Leadership',
    author: 'Marcus Johnson',
    date: 'Sep 15, 2023',
    image: 'https://picsum.photos/seed/remote/800/500'
  },
  {
    id: 5,
    title: 'Optimizing Your Ad Spend During Economic Downturns',
    excerpt: 'Don\'t cut your marketing budget; optimize it. Learn how to maximize ROI when every advertising dollar counts.',
    category: 'Advertising',
    author: 'Elena Rodriguez',
    date: 'Sep 05, 2023',
    image: 'https://picsum.photos/seed/adspend/800/500'
  },
  {
    id: 6,
    title: 'The Blueprint for a High-Converting Sales Funnel',
    excerpt: 'Step-by-step guide to identifying leaks in your sales funnel and implementing strategies to improve conversion rates.',
    category: 'Sales',
    author: 'David Reynolds',
    date: 'Aug 22, 2023',
    image: 'https://picsum.photos/seed/funnel/800/500'
  }
];

export default function Blog() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Insights & Resources
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Expert perspectives on sales, marketing, HR, and business strategy to help you stay ahead.
          </motion.p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl overflow-hidden shadow-md mb-16 border border-slate-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto relative">
              <img 
                src={posts[0].image} 
                alt={posts[0].title} 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4 uppercase tracking-wider w-fit">
                {posts[0].category}
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                {posts[0].title}
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center text-sm text-slate-500 mb-8">
                <div className="flex items-center mr-6">
                  <User className="w-4 h-4 mr-2" />
                  {posts[0].author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {posts[0].date}
                </div>
              </div>
              <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 w-fit group">
                Read Full Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full mb-4 uppercase tracking-wider w-fit">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span className="truncate max-w-[100px]">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-blue-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Get the latest insights, strategies, and industry news delivered directly to your inbox every week.</p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button 
              type="submit" 
              className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
