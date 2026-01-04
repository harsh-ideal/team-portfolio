import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Full-stack web applications using MERN stack with modern UI/UX',
    icon: 'FaCode',
    color: 'primary',
    features: [
      'React & Next.js Development',
      'Node.js & Express APIs',
      'MongoDB Database Design',
      'Responsive UI with Tailwind',
      'Authentication & Authorization'
    ]
  },
  {
    id: '2',
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with React Native',
    icon: 'FaMobile',
    color: 'secondary',
    features: [
      'iOS & Android Apps',
      'React Native Development',
      'API Integration',
      'Push Notifications',
      'App Store Deployment'
    ]
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that convert',
    icon: 'FaPalette',
    color: 'accent',
    features: [
      'Wireframing & Prototyping',
      'User Research',
      'Responsive Design',
      'Design Systems',
      'Figma to Code'
    ]
  },
  {
    id: '4',
    title: 'E-Commerce Solutions',
    description: 'Complete online stores with payment integration',
    icon: 'FaShoppingCart',
    color: 'primary',
    features: [
      'Custom Shopping Carts',
      'Payment Gateway Integration',
      'Inventory Management',
      'Admin Dashboards',
      'SEO Optimization'
    ]
  },
  {
    id: '5',
    title: 'API Development',
    description: 'RESTful and GraphQL APIs for any platform',
    icon: 'FaServer',
    color: 'secondary',
    features: [
      'RESTful API Design',
      'GraphQL Implementation',
      'Database Optimization',
      'API Documentation',
      'Security Best Practices'
    ]
  },
  {
    id: '6',
    title: 'Maintenance & Support',
    description: '24/7 support and maintenance for your applications',
    icon: 'FaTools',
    color: 'accent',
    features: [
      'Bug Fixes',
      'Performance Optimization',
      'Security Updates',
      'Feature Additions',
      'Technical Support'
    ]
  }
];
