import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with admin dashboard',
    longDescription: 'A comprehensive e-commerce solution with user authentication, product management, shopping cart, payment integration, and admin panel for managing orders and inventory.',
    image: '/projects/ecommerce.png',
    category: 'Web Development',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
    date: '2025-12-15'
  },
  {
    id: '2',
    title: 'Social Media App',
    description: 'Instagram-like social platform with real-time features',
    longDescription: 'A modern social media application with real-time messaging, post creation, likes, comments, user profiles, and follow system built with MERN stack.',
    image: '/projects/fooddelivery.webp',
    category: 'Web Development',
    tech: ['React', 'Express', 'MongoDB', 'Socket.io', 'Redux'],
    liveLink: 'https://example.com',
    date: '2025-11-20'
  },
  {
    id: '3',
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts and nutrition',
    longDescription: 'Cross-platform mobile application for tracking daily workouts, calories, setting fitness goals, and viewing progress with charts and statistics.',
    image: '/projects/fitness-tracker.webp',
    category: 'Mobile Development',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Chart.js'],
    liveLink: 'https://example.com',
    date: '2025-10-10'
  },
  {
    id: '4',
    title: 'Real Estate Platform',
    description: 'Property listing and management system',
    longDescription: 'Complete real estate platform with property listings, advanced search filters, virtual tours, agent profiles, and inquiry management system.',
    image: '/projects/realestate.jpg',
    category: 'Web Development',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Mapbox'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
    date: '2025-09-05'
  },
  {
    id: '5',
    title: 'Task Management SaaS',
    description: 'Team collaboration and project management tool',
    longDescription: 'A comprehensive SaaS platform for managing projects, tasks, teams, and deadlines with Kanban boards, Gantt charts, and real-time collaboration.',
    image: '/projects/taskmanagementsaas.png',
    category: 'Web Development',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'WebSockets', 'Tailwind'],
    liveLink: 'https://example.com',
    date: '2025-08-18'
  },
  {
    id: '6',
    title: 'Food Delivery App',
    description: 'Multi-vendor food ordering platform',
    longDescription: 'Complete food delivery ecosystem with customer app, restaurant dashboard, delivery tracking, payment integration, and order management.',
    image: '/projects/fooddelivery.webp',
    category: 'Mobile Development',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Stripe'],
    liveLink: 'https://example.com',
    date: '2025-07-25'
  }
];

export const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design'];
