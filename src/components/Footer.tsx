'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Web Development', href: '/services#web' },
      { name: 'Mobile Apps', href: '/services#mobile' },
      { name: 'UI/UX Design', href: '/services#design' },
      { name: 'API Development', href: '/services#api' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Portfolio', href: '/projects' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'FAQ', href: '/faq' },
    ],
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1C964D]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1C964D]/5 rounded-full blur-3xl"></div>

      {/* Newsletter Section */}
      <div className="border-b border-gray-200 relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10">
          <div className="bg-gradient-to-r from-[#1C964D] to-[#1C964D]/90 rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  Ready to Start Your Project?
                </h3>
                <p className="text-white/90 font-normal">
                   Let&apos;s discuss your ideas and bring them to life
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-white text-[#1C964D] font-semibold rounded-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <span>Get Started</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="bg-gradient-to-br from-[#1C964D] to-[#1C964D]/80 p-2.5 rounded-lg group-hover:scale-110 transition-transform shadow-md">
                <FaCode className="text-xl text-white" />
              </div>
              <span className="text-2xl font-semibold text-gray-900">DevTeam</span>
            </Link>
            <p className="text-gray-600 font-normal mb-6 leading-relaxed max-w-sm">
              Professional MERN stack development team delivering premium web and mobile solutions for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a href="mailto:contact@devteam.com" className="flex items-center space-x-3 text-gray-600 hover:text-[#1C964D] transition-colors group">
                <div className="w-9 h-9 bg-[#1C964D]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1C964D] transition-colors">
                  <FaEnvelope className="text-[#1C964D] group-hover:text-white transition-colors" />
                </div>
                <span className="font-normal">contact@devteam.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center space-x-3 text-gray-600 hover:text-[#1C964D] transition-colors group">
                <div className="w-9 h-9 bg-[#1C964D]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1C964D] transition-colors">
                  <FaPhone className="text-[#1C964D] group-hover:text-white transition-colors" />
                </div>
                <span className="font-normal">+91 98765 43210</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="w-9 h-9 bg-[#1C964D]/10 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#1C964D]" />
                </div>
                <span className="font-normal">Narnaund, Haryana, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#1C964D] transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-[#1C964D]"
                >
                  <social.icon className="text-gray-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#1C964D] transition-colors text-sm font-normal inline-flex items-center group"
                  >
                    <span>{link.name}</span>
                    <FaArrowRight className="ml-1 text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#1C964D] transition-colors text-sm font-normal inline-flex items-center group"
                  >
                    <span>{link.name}</span>
                    <FaArrowRight className="ml-1 text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#1C964D] transition-colors text-sm font-normal inline-flex items-center group"
                  >
                    <span>{link.name}</span>
                    <FaArrowRight className="ml-1 text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-white/50 relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm font-normal">
              © {currentYear} DevTeam. All rights reserved. Made with ❤️ in India
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-[#1C964D] transition-colors font-normal">
                Privacy Policy
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/terms" className="text-gray-600 hover:text-[#1C964D] transition-colors font-normal">
                Terms of Service
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/cookies" className="text-gray-600 hover:text-[#1C964D] transition-colors font-normal">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
