import { blogs } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaUser, FaArrowLeft } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  // Related Posts
  const relatedPosts = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": blog.image,
    "author": {
      "@type": "Person",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "DevTeam",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdevteam.com/logo.png"
      }
    },
    "datePublished": blog.date,
    "description": blog.excerpt
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="min-h-screen bg-light pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-dark py-12">
          <div className="container mx-auto px-6">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-light-200 hover:text-light mb-6 transition"
            >
              <FaArrowLeft />
              <span>Back to Blog</span>
            </Link>

            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full mb-4">
                {blog.category}
              </span>
              
              <h1 className="text-display text-light mb-6">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-light-200">
                <div className="flex items-center space-x-2">
                  <FaUser />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendar />
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaClock />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-6 -mt-12">
          <div className="max-w-4xl mx-auto relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-dark-200 leading-relaxed mb-6">
                {blog.excerpt}
              </p>
              
              <div className="text-dark leading-relaxed space-y-4">
                {blog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="border-t border-b border-light-200 py-6 mb-12">
              <h3 className="font-heading text-dark mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary-50 text-primary-700 text-sm rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gradient-primary rounded-2xl p-8 mb-12">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center">
                  <FaUser className="text-2xl text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-light">{blog.author}</h3>
                  <p className="text-light-200">Senior Developer at DevTeam</p>
                </div>
              </div>
              <p className="text-light-200">
                Passionate about web development and sharing knowledge with the community.
              </p>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading text-dark mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group bg-light border border-light-200 rounded-xl overflow-hidden hover:shadow-lg transition"
                    >
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading text-dark group-hover:text-primary-600 transition line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-dark-200 mt-2">{post.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
