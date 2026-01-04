'use client';
import { blogs } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaUser, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-light bg-gradient-dark pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-display text-light mb-4">Our Blog</h1>
          <p className="text-xl text-light-300 max-w-2xl mx-auto mb-8">
            Insights, tutorials, and updates from our development team
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 bg-light border border-light-200 rounded-lg focus:outline-none focus:border-primary-500 transition text-dark"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-subheading transition ${
                activeCategory === category
                  ? 'bg-gradient-primary text-light'
                  : 'bg-light-100 text-dark hover:bg-light-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <article
              key={blog.id}
              className="bg-light-300 border border-light-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary-500/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Featured Image */}
              <Link href={`/blog/${blog.slug}`}>
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full mb-3">
                  {blog.category}
                </span>

                {/* Title */}
                <Link href={`/blog/${blog.slug}`}>
                  <h2 className="text-xl font-heading text-dark mb-3 hover:text-primary-600 transition">
                    {blog.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-dark-200 text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-dark-200 mb-4">
                  <div className="flex items-center space-x-1">
                    <FaUser />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaCalendar />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaClock />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-light-100 text-dark-200 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-subheading transition"
                >
                  <span>Read More</span>
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-dark-200">No articles found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
