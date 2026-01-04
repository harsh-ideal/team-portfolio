import Services from '@/components/Services';
import Contact from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive MERN stack development services including web development, mobile apps, UI/UX design, and API development.',
};

export default function ServicesPage() {
  const processSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
      "@type": "Organization",
      "name": "DevTeam"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MERN Stack Development"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <div className="min-h-screen pt-24 bg-gradient-dark">
        {/* Hero Section */}
        <div className="bg-gradient-dark py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-display text-light mb-6">Our Services</h1>
            <p className="text-xl text-light-200 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end solutions tailored to your business needs
            </p>
          </div>
        </div>

        <Services />

        {/* Process Section */}
        <section className="py-20 bg-dark">
          <div className="container mx-auto px-6">
            <h2 className="text-section text-light text-center mb-16">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                { step: '02', title: 'Design', desc: 'Creating wireframes and visual designs' },
                { step: '03', title: 'Development', desc: 'Building your solution with clean code' },
                { step: '04', title: 'Launch', desc: 'Deploying and providing ongoing support' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-6xl font-display text-primary-500/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading text-light mb-2">{item.title}</h3>
                  <p className="text-light-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
}
