'use client';
import { services } from '@/data/services';
import { FaCode, FaMobile, FaPalette, FaShoppingCart, FaServer, FaTools } from 'react-icons/fa';
import { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  FaCode,
  FaMobile,
  FaPalette,
  FaShoppingCart,
  FaServer,
  FaTools,
};

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#1C964D]/5 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1C964D]/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1C964D]/8 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#1C964D]/10 text-[#1C964D] text-sm font-medium rounded-full">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Our <span className="text-[#1C964D]">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid - Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#1C964D]/30 transition-all duration-500 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C964D]/8 via-[#1C964D]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon - Smaller */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-[#1C964D]/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-[#1C964D] to-[#157A3D] rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
                      <Icon className="text-xl text-white" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1C964D] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-normal leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features List - Compact */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-700">
                        <span className="flex-shrink-0 w-4 h-4 bg-[#1C964D]/15 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-2.5 h-2.5 text-[#1C964D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-xs font-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1C964D] to-[#157A3D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Corner Accent with Light Green */}
                <div className="absolute top-3 right-3 w-16 h-16 border-t-2 border-r-2 border-[#1C964D]/0 group-hover:border-[#1C964D]/15 rounded-tr-xl transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4 font-normal text-sm">
             Don&apos;t see what you&apos;re looking for?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#1C964D] text-white font-medium rounded-lg hover:bg-[#157A3D] transition-all hover:scale-105 shadow-lg hover:shadow-xl text-sm"
          >
            <span>Let&apos;s Discuss Your Project</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
