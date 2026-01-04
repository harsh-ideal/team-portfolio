'use client';
import { testimonials } from '@/data/testimonials';
import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-light mb-4">Client Testimonials</h2>
          <p className="text-xl text-light-200 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-dark-100 rounded-2xl p-8 border border-dark-200 hover:border-primary-500/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-4xl text-primary-500/30 mb-4" />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-light-200 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-primary">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-light font-heading">{testimonial.name}</h4>
                  <p className="text-light-200 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
