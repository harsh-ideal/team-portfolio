import { TeamMember } from '@/types';

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Full Stack Developer',
    image: '/team/member1.jpg',
    bio: 'MERN stack expert with 5+ years of experience building scalable web applications.',
    skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
    socials: {
      github: 'https://github.com/rajesh',
      linkedin: 'https://linkedin.com/in/rajesh',
      twitter: 'https://twitter.com/rajesh'
    }
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Frontend Developer',
    image: '/team/member2.jpg',
    bio: 'UI/UX enthusiast specializing in creating beautiful and responsive interfaces.',
    skills: ['React', 'Tailwind CSS', 'Figma', 'JavaScript', 'CSS3'],
    socials: {
      github: 'https://github.com/priya',
      linkedin: 'https://linkedin.com/in/priya',
      portfolio: 'https://priya.dev'
    }
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Backend Developer',
    image: '/team/member3.jpg',
    bio: 'Backend specialist focused on building robust APIs and database architectures.',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis'],
    socials: {
      github: 'https://github.com/amit',
      linkedin: 'https://linkedin.com/in/amit'
    }
  },
  {
    id: '4',
    name: 'Sneha Verma',
    role: 'UI/UX Designer',
    image: '/team/member4.jpg',
    bio: 'Creative designer with a passion for user-centered design and modern aesthetics.',
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping'],
    socials: {
      linkedin: 'https://linkedin.com/in/sneha',
      portfolio: 'https://sneha.design'
    }
  }
];
