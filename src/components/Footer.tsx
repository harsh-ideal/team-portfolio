'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

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
    <footer className="bg-gradient-dark text-light">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <FaCode className="text-2xl text-light" />
              </div>
              <span className="text-2xl font-display">DevTeam</span>
            </Link>
            <p className="text-light-200 mb-4">
              Professional MERN stack development team delivering premium web and mobile solutions for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-light-200">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-accent" />
                <span>contact@devteam.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-accent" />
                <span>Narnaund, Haryana, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-dark-100 p-3 rounded-lg hover:bg-gradient-primary transition group"
                >
                  <social.icon className="text-xl group-hover:scale-110 transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-heading mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-light-200 hover:text-accent transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-heading mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-light-200 hover:text-accent transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-heading mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-light-200 hover:text-accent transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dark-100">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-light-200 text-sm">
              © {currentYear} DevTeam. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-light-200 hover:text-accent transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-light-200 hover:text-accent transition">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-light-200 hover:text-accent transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
