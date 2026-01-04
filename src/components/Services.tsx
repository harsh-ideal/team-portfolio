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
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-dark mb-4">Our Services</h2>
          <p className="text-xl text-dark-200 max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-light border border-light-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary-500/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                  <Icon className="text-3xl text-light" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-heading text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-200 mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-dark-200">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Line */}
                <div className="mt-6 h-1 bg-gradient-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
