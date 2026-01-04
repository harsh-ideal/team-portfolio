'use client';
import { testimonials } from '@/data/testimonials';
import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-[#1C964D]/5 to-white relative overflow-hidden">
      {/* Dotted Background Pattern */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0'
        }}
      />

      {/* Subtle Green Gradient Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#1C964D]/10 rounded-full blur-3xl top-0 -right-48"></div>
        <div className="absolute w-96 h-96 bg-[#1C964D]/8 rounded-full blur-3xl bottom-0 -left-48"></div>
        <div className="absolute w-72 h-72 bg-[#1C964D]/6 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm text-[#1C964D] text-sm font-medium rounded-full border border-[#1C964D]/20 shadow-sm">
              💬 Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            What Our <span className="text-[#1C964D]">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
           Real feedback from amazing people we&apos;ve had the pleasure to work with

          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 hover:border-[#1C964D]/30 hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C964D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1C964D]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content Container */}
              <div className="relative z-10">
                {/* Quote Icon with Gradient Background */}
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-[#1C964D]/20 rounded-lg blur-lg"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-[#1C964D]/20 to-[#1C964D]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <FaQuoteLeft className="text-2xl text-[#1C964D]" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className="text-[#1C964D] text-base transition-transform duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500 font-normal">({testimonial.rating}.0)</span>
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 text-base font-normal leading-relaxed mb-6 relative">
                  <span className="text-[#1C964D] text-2xl font-serif absolute -left-2 -top-2 opacity-50">
                    &quot;
                    </span>
                  {testimonial.content}
                  <span className="text-[#1C964D] text-2xl font-serif opacity-50">
                    &quot;
                    </span>
                </p>

                {/* Client Info Section */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  {/* Profile Image with Green Border */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1C964D] to-[#1C964D]/70 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#1C964D]/30 group-hover:border-[#1C964D] transition-colors duration-500">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Verified Badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#1C964D] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Client Details */}
                  <div className="flex-1">
                    <h4 className="text-gray-900 font-semibold text-base group-hover:text-[#1C964D] transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm font-normal">
                      {testimonial.role}
                    </p>
                    <p className="text-[#1C964D] text-xs font-medium mt-0.5">
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Company Logo Placeholder (Optional) */}
                  <div className="hidden md:block">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs font-semibold border border-gray-200">
                      {testimonial.company.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1C964D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <p className="text-gray-600 font-normal mb-3 text-sm">
              Want to share your experience?
            </p>
            <a
              href="/write-review"
              className="inline-flex items-center space-x-2 px-6 py-2.5 bg-[#1C964D] text-white font-medium rounded-lg hover:bg-[#157A3D] transition-all hover:scale-105 shadow-md text-sm"
            >
              <span>Write a Review</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
