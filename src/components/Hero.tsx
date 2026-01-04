'use client';
import { FaRocket, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Dotted Background Pattern - More Dense & Darker */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: 'radial-gradient(circle, #D1D5DB 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0'
        }}
      />

      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#1C964D]/10 rounded-full blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-[#1C964D]/8 rounded-full blur-3xl -bottom-48 -right-48"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-[#1C964D]/30 shadow-sm">
            <span className="w-2 h-2 bg-[#1C964D] rounded-full animate-pulse"></span>
            <span className="text-gray-700 text-sm font-normal">Available for Freelance Projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 animate-slide-up leading-tight">
            Build Your Dream{' '}
            <span className="text-[#1C964D]">Digital Product</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 font-normal mb-8 max-w-2xl mx-auto leading-relaxed">
            Expert MERN stack developers delivering premium web & mobile solutions. 
            We transform your ideas into powerful, scalable applications.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-[#1C964D] mb-2">50+</div>
              <div className="text-gray-600 text-sm font-normal">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-[#1C964D] mb-2">40+</div>
              <div className="text-gray-600 text-sm font-normal">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-[#1C964D] mb-2">5+</div>
              <div className="text-gray-600 text-sm font-normal">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-[#1C964D] text-white font-medium rounded-lg hover:bg-[#157A3D] transition-all hover:scale-105 flex items-center space-x-2 shadow-md"
            >
              <FaRocket />
              <span>Start Your Project</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 bg-white border-2 border-[#1C964D] text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all shadow-sm"
            >
              View Our Work
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <p className="text-gray-500 text-sm font-normal mb-4">Powered by Modern Technologies</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#1C964D]/20 text-gray-700 text-sm font-normal rounded-lg hover:border-[#1C964D]/40 transition-colors shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#1C964D] rounded-full flex items-start justify-center p-2 bg-white/50 backdrop-blur-sm">
          <div className="w-1 h-2 bg-[#1C964D] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
