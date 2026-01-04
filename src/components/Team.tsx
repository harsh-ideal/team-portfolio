'use client';
import { team } from '@/data/team';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

import { IconType } from 'react-icons';

const socialIcons: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  portfolio: FaGlobe,
};

export default function Team() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-dark mb-4">Meet Our Team</h2>
          <p className="text-xl text-dark-200 max-w-2xl mx-auto">
            Talented professionals dedicated to delivering exceptional results
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group bg-light border border-light-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary-500/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-dark">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-heading text-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-subheading mb-3">
                  {member.role}
                </p>
                <p className="text-dark-200 text-sm mb-4">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {Object.entries(member.socials).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-dark-100 rounded-lg flex items-center justify-center text-light hover:bg-gradient-primary transition group/icon"
                      >
                        <Icon className="group-hover/icon:scale-110 transition" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
