import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdevteam.com'),
  title: {
    default: 'DevTeam - Professional MERN Stack Development Services',
    template: '%s | DevTeam'
  },
  description: 'Expert freelance MERN stack developers delivering premium web and mobile applications. Specializing in React, Next.js, Node.js, and MongoDB solutions.',
  keywords: ['MERN stack development', 'freelance developers', 'web development', 'mobile apps', 'React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'DevTeam' }],
  creator: 'DevTeam',
  publisher: 'DevTeam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdevteam.com',
    title: 'DevTeam - Professional MERN Stack Development',
    description: 'Transform your ideas into powerful digital solutions with our expert team',
    siteName: 'DevTeam',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevTeam - MERN Stack Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevTeam - Professional MERN Stack Development',
    description: 'Expert freelance developers delivering premium solutions',
    images: ['/og-image.jpg'],
    creator: '@devteam',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
