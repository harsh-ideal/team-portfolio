import Contact from '@/components/Contact';
import { FaWhatsapp, FaTelegram, FaDiscord } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with DevTeam for your next project. We are here to help bring your ideas to life.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-dark">
      {/* Hero Section */}
      <div className="bg-gradient-dark py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-display text-light mb-6">Let&apos;s Build Something Amazing</h1>
          <p className="text-xl text-light-200 max-w-3xl mx-auto">
            Ready to start your project? Reach out and let&apos;s discuss how we can help
          </p>
        </div>
      </div>

      <Contact />

      {/* Quick Connect */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-section text-light text-center mb-12">Quick Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-dark-100 rounded-2xl hover:bg-gradient-primary transition group"
            >
              <FaWhatsapp className="text-5xl text-light mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-heading text-light mb-2">WhatsApp</h3>
              <p className="text-light-200 text-sm">Chat with us instantly</p>
            </a>

            <a
              href="https://t.me/yourteam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-dark-100 rounded-2xl hover:bg-gradient-primary transition group"
            >
              <FaTelegram className="text-5xl text-light mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-heading text-light mb-2">Telegram</h3>
              <p className="text-light-200 text-sm">Join our community</p>
            </a>

            <a
              href="https://discord.gg/yourserver"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-dark-100 rounded-2xl hover:bg-gradient-primary transition group"
            >
              <FaDiscord className="text-5xl text-light mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-heading text-light mb-2">Discord</h3>
              <p className="text-light-200 text-sm">Connect on Discord</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
