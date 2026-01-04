'use client';
import { useState } from 'react';
import { projects, categories } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1C964D]/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1C964D]/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 0.5px, transparent 0.5px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="px-4 py-2 bg-gradient-to-r from-[#1C964D]/20 to-[#1C964D]/10 text-[#1C964D] text-sm font-medium rounded-full border border-[#1C964D]/20 shadow-sm">
              ✨ Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            Featured <span className="bg-gradient-to-r from-[#1C964D] to-[#157A3D] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Explore our carefully crafted digital experiences that blend innovation with design excellence
          </p>
        </div>

        {/* Premium Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2.5 rounded-full font-medium transition-all duration-500 text-sm overflow-hidden group ${
                activeCategory === category
                  ? 'text-white shadow-xl shadow-[#1C964D]/30'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-[#1C964D]/30 hover:shadow-lg'
              }`}
            >
              {/* Active Background with Gradient */}
              {activeCategory === category && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1C964D] to-[#157A3D]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1C964D] to-[#157A3D] opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                </>
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Ultra-Premium Projects Grid with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative animate-fade-in flex"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Container with Glassmorphism - Flex for Full Height */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-white/50 hover:border-[#1C964D]/30 transform hover:-translate-y-2 flex flex-col w-full">
                
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1C964D]/20 via-transparent to-[#157A3D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Image Container with Advanced Effects - Fixed Height */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
                  />
                  
                  {/* Multi-layer Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1C964D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#1C964D] rounded-full blur-lg opacity-60"></div>
                      <span className="relative inline-block px-3 py-1 bg-gradient-to-r from-[#1C964D] to-[#157A3D] text-white text-xs font-semibold rounded-full shadow-2xl border border-white/20">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons - Appear on Hover */}
                  <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-all duration-500 z-20 ${
                    hoveredCard === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#1C964D] hover:bg-[#1C964D] hover:text-white transition-all shadow-xl hover:scale-110 border border-white/50"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all shadow-xl hover:scale-110 border border-white/50"
                        title="View Code"
                      >
                        <FaGithub className="text-sm" />
                      </a>
                    )}
                  </div>

                  {/* Bottom Quick Info Bar */}
                  <div className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900/95 to-transparent backdrop-blur-sm transition-all duration-500 ${
                    hoveredCard === project.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}>
                    <div className="flex items-center justify-between text-white">
                      <span className="text-xs font-medium">View Project</span>
                      <FaArrowRight className="text-xs" />
                    </div>
                  </div>
                </div>

                {/* Content Section - Flex Grow to Fill Remaining Space */}
                <div className="relative p-5 bg-white/50 backdrop-blur-sm flex flex-col flex-grow">
                  {/* Title with Gradient on Hover */}
                  <h3 className="text-lg font-semibold mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#1C964D] group-hover:to-[#157A3D] group-hover:bg-clip-text group-hover:text-transparent">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-4 font-normal leading-relaxed line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack with Premium Pills - At Bottom */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 hover:border-[#1C964D]/30 hover:shadow-md transition-all duration-300"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2.5 py-1 bg-gradient-to-r from-[#1C964D]/15 to-[#157A3D]/10 text-[#1C964D] text-xs font-semibold rounded-lg border border-[#1C964D]/30 shadow-sm">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1C964D] via-[#157A3D] to-[#1C964D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-b-2xl"></div>
                
                {/* Corner Shine Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full"></div>
              </div>

              {/* Floating Shadow Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1C964D]/20 to-[#157A3D]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 transform translate-y-4"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
              <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500 font-normal text-base">No projects found in this category</p>
          </div>
        )}

        {/* Premium CTA Button */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="group inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-[#1C964D] to-[#157A3D] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#1C964D]/40 transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#157A3D] to-[#1C964D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Explore All Projects</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
