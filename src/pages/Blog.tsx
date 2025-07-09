import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight, Search, Filter } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with DevOps: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of DevOps culture, practices, and tools that every developer should know in 2024.',
      content: 'DevOps has revolutionized how we develop, deploy, and maintain software applications...',
      category: 'DevOps',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['DevOps', 'CI/CD', 'Docker', 'Automation']
    },
    {
      id: 2,
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices for structuring and optimizing React applications for better performance and maintainability.',
      content: 'React has become the go-to library for building modern web applications...',
      category: 'Frontend',
      date: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'JavaScript', 'Performance', 'Architecture']
    },
    {
      id: 3,
      title: 'Cloud Computing: AWS vs Azure vs GCP',
      excerpt: 'A comprehensive comparison of the three major cloud platforms and when to choose each one.',
      content: 'Choosing the right cloud platform is crucial for your project\'s success...',
      category: 'Cloud',
      date: '2024-01-05',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AWS', 'Azure', 'GCP', 'Cloud Computing']
    },
    {
      id: 4,
      title: 'Docker Containerization Best Practices',
      excerpt: 'Learn how to create efficient, secure, and maintainable Docker containers for your applications.',
      content: 'Docker has transformed how we package and deploy applications...',
      category: 'DevOps',
      date: '2023-12-28',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Docker', 'Containers', 'DevOps', 'Deployment']
    },
    {
      id: 5,
      title: 'Modern JavaScript ES2024 Features',
      excerpt: 'Explore the latest JavaScript features and how they can improve your development workflow.',
      content: 'JavaScript continues to evolve with exciting new features...',
      category: 'JavaScript',
      date: '2023-12-20',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'ES2024', 'Web Development', 'Programming']
    },
    {
      id: 6,
      title: 'Database Design Patterns for Scalable Applications',
      excerpt: 'Understanding database design patterns that help build scalable and efficient applications.',
      content: 'Good database design is the foundation of any successful application...',
      category: 'Backend',
      date: '2023-12-15',
      readTime: '14 min read',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Database', 'SQL', 'Architecture', 'Performance']
    }
  ];

  const categories = ['All', 'DevOps', 'Frontend', 'Backend', 'Cloud', 'JavaScript'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-teal-900 dark:to-black pt-20"
    >
      <ParticleBackground type="floating" color="#14b8a6" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern software development and technology trends
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass dark:glass-dark rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Search */}
              <div className="relative flex-1 lg:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-gray-800 dark:text-white placeholder-gray-500"
                />
              </div>

              {/* Categories */}
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-500 w-5 h-5" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-yellow-500 text-black'
                          : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Featured Article</h2>
            <div className="glass dark:glass-dark rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                      {filteredPosts[0].category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Clock size={16} className="mr-2" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-yellow-600 transition-colors">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredPosts[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass dark:glass-dark rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-gray-500 dark:text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-medium transition-colors text-sm">
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="glass dark:glass-dark rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to get notified about new articles on software development, DevOps, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-gray-800 dark:text-white placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;