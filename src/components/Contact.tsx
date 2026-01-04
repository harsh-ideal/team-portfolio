'use client';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

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
    { icon: FaEnvelope, label: 'Email', value: 'contact@devteam.com' },
    { icon: FaPhone, label: 'Phone', value: '+91 98765 43210' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Narnaund, Haryana, India' },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-dark mb-4">Get In Touch</h2>
          <p className="text-xl text-dark-200 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can help you succeed
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-heading text-dark mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-light text-xl" />
                  </div>
                  <div>
                    <h4 className="font-heading text-dark mb-1">{info.label}</h4>
                    <p className="text-dark-200">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map or Image */}
            <div className="mt-8 h-64 bg-gradient-dark rounded-2xl flex items-center justify-center">
              <p className="text-light-200">Map Placeholder</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-light border border-light-200 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-dark font-subheading mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-100 border border-light-200 rounded-lg focus:outline-none focus:border-primary-500 transition text-dark"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-dark font-subheading mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-100 border border-light-200 rounded-lg focus:outline-none focus:border-primary-500 transition text-dark"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-dark font-subheading mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-100 border border-light-200 rounded-lg focus:outline-none focus:border-primary-500 transition text-dark"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-dark font-subheading mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-light-100 border border-light-200 rounded-lg focus:outline-none focus:border-primary-500 transition text-dark resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-primary text-light font-heading rounded-lg hover:scale-105 transition flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
