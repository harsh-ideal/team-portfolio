'use client';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { 
      icon: FaEnvelope, 
      label: 'Email Us', 
      value: 'contact@devteam.com',
      description: 'Send us an email anytime',
      link: 'mailto:contact@devteam.com'
    },
    { 
      icon: FaPhone, 
      label: 'Call Us', 
      value: '+91 98765 43210',
      description: 'Mon-Fri from 9am to 6pm',
      link: 'tel:+919876543210'
    },
    { 
      icon: FaMapMarkerAlt, 
      label: 'Visit Us', 
      value: 'Narnaund, Haryana',
      description: 'Come say hello',
      link: 'https://maps.google.com'
    },
  ];

  const benefits = [
    'Quick Response Time',
    'Expert Consultation',
    'Transparent Pricing',
    'Dedicated Support'
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1C964D]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1C964D]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-2">
            <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm text-[#1C964D] text-xs font-medium rounded-full border border-[#1C964D]/20 shadow-sm">
              📬 Contact Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            Let&apos;s Start a <span className="text-[#1C964D]">Conversation</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Let&apos;s discuss how we can help you succeed
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {/* Left Column - Contact Info & Benefits */}
          <div className="lg:col-span-2 space-y-4">
            {/* Contact Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.icon === FaMapMarkerAlt ? '_blank' : undefined}
                  rel={info.icon === FaMapMarkerAlt ? 'noopener noreferrer' : undefined}
                  className="group block bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 hover:border-[#1C964D]/30 hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start space-x-3">
                    {/* Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#1C964D]/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-11 h-11 bg-gradient-to-br from-[#1C964D] to-[#1C964D]/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-md">
                        <info.icon className="text-white text-base" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-0.5 text-sm group-hover:text-[#1C964D] transition-colors">
                        {info.label}
                      </h4>
                      <p className="text-gray-600 text-xs font-normal mb-0.5">
                        {info.description}
                      </p>
                      <p className="text-[#1C964D] font-medium text-xs">
                        {info.value}
                      </p>
                    </div>

                    {/* Arrow */}
                    <svg 
                      className="w-4 h-4 text-gray-400 group-hover:text-[#1C964D] group-hover:translate-x-1 transition-all" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Why Choose Us Box */}
            <div className="bg-gradient-to-br from-[#1C964D] to-[#1C964D]/90 rounded-xl p-6 text-white shadow-xl">
              <h3 className="text-base font-semibold mb-3">Why Work With Us?</h3>
              <div className="space-y-2.5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2.5">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="font-normal text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-xl">
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-1.5">Send us a Message</h3>
                <p className="text-gray-600 text-xs font-normal">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 text-xs">
                      Full Name <span className="text-[#1C964D]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1C964D] focus:ring-2 focus:ring-[#1C964D]/20 transition text-gray-900 placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 text-xs">
                      Email Address <span className="text-[#1C964D]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1C964D] focus:ring-2 focus:ring-[#1C964D]/20 transition text-gray-900 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1.5 text-xs">
                    Subject <span className="text-[#1C964D]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1C964D] focus:ring-2 focus:ring-[#1C964D]/20 transition text-gray-900 placeholder-gray-400"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1.5 text-xs">
                    Message <span className="text-[#1C964D]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#1C964D] focus:ring-2 focus:ring-[#1C964D]/20 transition text-gray-900 placeholder-gray-400 resize-none"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                {/* Privacy Notice */}
                <div className="flex items-start space-x-2 text-xs text-gray-500 bg-gray-50 p-2.5 rounded-lg">
                  <svg className="w-3.5 h-3.5 text-[#1C964D] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="font-normal text-xs">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full px-5 py-3 bg-gradient-to-r from-[#1C964D] to-[#1C964D]/90 text-white font-semibold rounded-lg text-sm hover:shadow-2xl hover:shadow-[#1C964D]/30 transition-all duration-500 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-100 shadow-md">
            <div className="text-center">
              <p className="text-xl font-semibold text-[#1C964D]">24h</p>
              <p className="text-xs text-gray-600 font-normal">Response Time</p>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-xl font-semibold text-[#1C964D]">100%</p>
              <p className="text-xs text-gray-600 font-normal">Satisfaction Rate</p>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-xl font-semibold text-[#1C964D]">50+</p>
              <p className="text-xs text-gray-600 font-normal">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
