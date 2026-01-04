import Team from '@/components/Team';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the talented developers and designers behind DevTeam. Expert MERN stack professionals dedicated to your success.',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-dark">
      {/* Hero Section */}
      <div className="bg-gradient-dark py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-display text-light mb-6">Meet Our Team</h1>
          <p className="text-xl text-light-200 max-w-3xl mx-auto">
            Passionate professionals with expertise in cutting-edge technologies
          </p>
        </div>
      </div>

      <Team />

      {/* Why Choose Us */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-section text-light text-center mb-16">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Experienced', desc: '5+ years building scalable applications' },
              { title: 'Dedicated', desc: 'Committed to delivering quality on time' },
              { title: 'Innovative', desc: 'Using latest technologies and best practices' },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 bg-dark-100 rounded-2xl">
                <h3 className="text-2xl font-heading text-light mb-3">{item.title}</h3>
                <p className="text-light-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
