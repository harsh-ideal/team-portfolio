import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Professional MERN stack development team offering custom web and mobile solutions for businesses worldwide.',
};

export default function Home() {
  // JSON-LD Schema for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevTeam",
    "url": "https://yourdevteam.com",
    "logo": "https://yourdevteam.com/logo.png",
    "description": "Expert MERN stack development team",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Narnaund",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "Customer Service",
      "email": "contact@devteam.com"
    },
    "sameAs": [
      "https://github.com/yourteam",
      "https://linkedin.com/company/yourteam",
      "https://twitter.com/yourteam"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}
