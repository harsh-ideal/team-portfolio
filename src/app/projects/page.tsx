'use client';
import { useState } from 'react';
import { projects, categories } from '@/data/projects';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaCalendar } from 'react-icons/fa';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-display text-light mb-4">Our Projects</h1>
          <p className="text-xl text-light-200 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and satisfied clients
          </p>
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
                  : 'bg-dark-100 text-light-200 hover:bg-dark-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-dark-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl font-heading text-light mb-2">
                  {project.title}
                </h3>
                <p className="text-light-200 text-sm mb-4">
                  {project.longDescription}
                </p>

                {/* Date */}
                <div className="flex items-center space-x-2 text-light-200 text-xs mb-4">
                  <FaCalendar />
                  <span>{new Date(project.date).toLocaleDateString()}</span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-200 text-light-200 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-dark-200">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent hover:text-accent-light transition"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Live</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-light-200 hover:text-light transition"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
