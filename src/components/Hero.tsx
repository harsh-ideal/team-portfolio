'use client';
import { FaRocket, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-dark-100/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-primary-500/30">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-light-200 text-sm">Available for Freelance Projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-hero text-light mb-6 animate-slide-up">
            Build Your Dream
            <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent"> Digital Product</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-light-200 mb-8 max-w-2xl mx-auto">
            Expert MERN stack developers delivering premium web & mobile solutions. 
            We transform your ideas into powerful, scalable applications.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
            <div className="text-center">
              <div className="text-4xl font-display text-accent mb-2">50+</div>
              <div className="text-light-200 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display text-accent mb-2">40+</div>
              <div className="text-light-200 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display text-accent mb-2">5+</div>
              <div className="text-light-200 text-sm">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-primary text-light font-heading rounded-lg hover:scale-105 transition flex items-center space-x-2 shadow-lg"
            >
              <FaRocket />
              <span>Start Your Project</span>
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 bg-dark-100 border border-primary-500/30 text-light font-heading rounded-lg hover:bg-dark-200 transition"
            >
              View Our Work
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <p className="text-light-200 text-sm mb-4">Powered by Modern Technologies</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-dark-100/50 backdrop-blur-sm border border-primary-500/20 text-light-200 text-sm rounded-lg"
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
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
