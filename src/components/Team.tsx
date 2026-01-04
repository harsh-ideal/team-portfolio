'use client';
import { team } from '@/data/team';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaStar } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useState } from 'react';

const socialIcons: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  portfolio: FaGlobe,
};

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#1C964D]/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#1C964D]/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#1C964D] rounded-full"></div>
        <div className="absolute top-20 right-1/3 w-2 h-2 bg-[#1C964D] rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-[#1C964D] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#1C964D] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
            <span className="px-4 py-2 bg-gradient-to-r from-[#1C964D]/15 to-[#1C964D]/5 text-[#1C964D] text-sm font-medium rounded-full border border-[#1C964D]/20 shadow-sm">
              👥 Meet The Experts
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Our <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1C964D] to-[#1C964D]/80 bg-clip-text text-transparent">Dream Team</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#1C964D]/20 -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Talented professionals dedicated to transforming your vision into reality
          </p>
        </div>

        {/* Innovative Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.id}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Main Card Container */}
              <div className="relative h-full">
                {/* Decorative Corner Elements */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-3 border-l-3 border-[#1C964D]/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-3 border-r-3 border-[#1C964D]/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>

                {/* Card Background with Glassmorphism - Fixed Height */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-[#1C964D]/40 transform hover:-translate-y-3">
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1C964D]/0 via-[#1C964D]/5 to-[#1C964D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Image Section - Fixed Height */}
                  <div className="relative h-56 overflow-hidden">
                    {/* Profile Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
                      />
                      
                      {/* Multi-layer Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/80 group-hover:from-gray-900/10 group-hover:to-gray-900/90 transition-all duration-700"></div>
                      
                      {/* Animated Color Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#1C964D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>
                    </div>

                    {/* Floating Status Badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xl border border-[#1C964D]/20">
                        <div className="w-2 h-2 bg-[#1C964D] rounded-full animate-pulse"></div>
                        <span className="text-[#1C964D] text-xs font-semibold">Available</span>
                      </div>
                    </div>

                    {/* Role Badge - Bottom Left */}
                    <div className="absolute bottom-4 left-4 transform transition-all duration-500 group-hover:translate-x-2">
                      <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-2xl border border-white/50">
                        <p className="text-[#1C964D] font-semibold text-sm">{member.role}</p>
                      </div>
                    </div>

                    {/* Quick Social Icons - Slide in from Right */}
                    <div className={`absolute top-4 left-4 flex flex-col space-y-2 transition-all duration-700 ${
                      hoveredMember === member.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}>
                      {Object.entries(member.socials).map(([platform, url], idx) => {
                        const Icon = socialIcons[platform];
                        return (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center text-gray-700 hover:bg-[#1C964D] hover:text-white transition-all duration-300 shadow-xl hover:scale-110 border border-white/50"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                            title={platform}
                          >
                            <Icon className="text-sm" />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Content Section - Fixed Layout */}
                  <div className="relative p-6 bg-gradient-to-br from-white to-gray-50/50">
                    {/* Name with Animated Underline */}
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#1C964D] transition-colors duration-300 relative inline-block">
                        {member.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1C964D] to-transparent group-hover:w-full transition-all duration-500"></span>
                      </h3>
                      
                      {/* Rating Stars */}
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-[#1C964D] text-xs opacity-80" />
                        ))}
                        <span className="text-xs text-gray-500 ml-1 font-normal">Expert Level</span>
                      </div>
                    </div>

                    {/* Bio - Fixed Height */}
                    <p className="text-gray-600 text-sm font-normal leading-relaxed mb-4 line-clamp-2">
                      {member.bio}
                    </p>

                    {/* Skills with Progress Indicator Style */}
                    <div className="space-y-2 mb-4">
                      {member.skills.slice(0, 3).map((skill, idx) => (
                        <div key={skill} className="group/skill">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-gray-700">{skill}</span>
                            <span className="text-xs text-[#1C964D] font-semibold">95%</span>
                          </div>
                          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#1C964D] to-[#1C964D]/70 rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: hoveredMember === member.id ? '95%' : '0%',
                                transitionDelay: `${idx * 100}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-2.5 bg-gradient-to-r from-[#1C964D] to-[#1C964D]/80 text-white font-medium rounded-xl hover:shadow-xl hover:shadow-[#1C964D]/30 transition-all duration-300 hover:scale-105 text-sm flex items-center justify-center space-x-2 group/btn border border-[#1C964D]">
                      <span>View Full Profile</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Bottom Wave Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1C964D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>

                {/* Floating Shadow Beneath Card */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1C964D]/20 via-[#1C964D]/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 transform translate-y-8"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1C964D] to-[#1C964D]/70 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Join Our Amazing Team</h3>
            <p className="text-gray-600 font-normal mb-6">
              We&apos;re always looking for talented individuals to join our mission.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-[#1C964D] to-[#1C964D]/80 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#1C964D]/40 transition-all hover:scale-105"
            >
              <span>View Open Positions</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
