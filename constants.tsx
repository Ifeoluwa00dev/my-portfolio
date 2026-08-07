
import React from 'react';
import { Project, SkillCategory, ProcessStep, SocialLink, FooterLink} from './types';
import { Github, Linkedin, Mail } from 'lucide-react';



export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'WC26 — World Cup 2026 Fan Intelligence',
    description: 'Live fan-intelligence platform covering all 48 teams, 12 groups, and 104 matches of the 2026 World Cup — built and shipped solo in under two weeks.',
    image: 'https://res.cloudinary.com/drkksaa3i/image/upload/v1786068292/wc26_1_ufnpr0.png',
    images: [
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786068292/wc26_1_ufnpr0.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786068559/Untitled_design_1_idyqi9.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786068855/Untitled_design_2_z6mosy.png',
    ],
    category: 'Product',
    techStack: ['React', 'TypeScript', 'Tailwind CSS v4', 'Supabase', 'Recharts'],
    features: ['Live group standings', 'Golden Boot tracker', 'Knockout bracket simulator', 'Win probability rankings', 'Shipped solo in under 2 weeks'],
    link: 'https://wc26-0jzg.onrender.com',
  },
  {
    id: '2',
    title: 'Ascent — AI-Powered Goal Planning',
    description: 'Goal-planning platform that turns a stated starting point and target into a phased daily plan, with weekly AI-generated tasks that adapt to actual progress.',
    image: 'https://res.cloudinary.com/drkksaa3i/image/upload/v1786070431/Untitled_design_9_brclta.png',
    images: [
      'hhttps://res.cloudinary.com/drkksaa3i/image/upload/v1786070431/Untitled_design_9_brclta.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786070440/Untitled_design_10_d8g5nf.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786070522/Untitled_design_11_d5blfa.png ',
    ],
    category: 'AI',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Gemini API', 'Recharts'],
    features: ['Up to 4 concurrent goals with 30-day "climbs"', 'AI-generated weekly task batches via Gemini', 'Streak tracking & completion analytics', 'RLS-enforced goal limits in Supabase'],
    link: 'https://ascent-alpha-tawny.vercel.app/',
  },
  {
    id: '3',
    title: 'Vycinty — Local Business Discovery',
    description: 'Mobile-first directory helping Ile-Ife residents discover local businesses by category and location, with self-service owner listing management.',
    image: 'https://res.cloudinary.com/drkksaa3i/image/upload/v1786070946/Untitled_design_13_ochouc.png',
    images: [
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786070946/Untitled_design_13_ochouc.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786070997/Untitled_design_14_grk6ko.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786071060/Untitled_design_15_rbd8uc.png',
    ],
    category: 'Business',
    techStack: ['React', 'TypeScript', 'Next.js', 'Supabase', 'PostgreSQL'],
    features: ['Business discovery by category & location', 'Self-service owner listing management', 'Mobile-first design', 'Currently rebuilding on Next.js'],
    link: 'https://vycinty.netlify.app/',
  },
  {
    id: '4',
    title: 'Doju Health — Production Incident Fix',
    description: 'Diagnosed and resolved a critical iOS white-screen crash blocking mobile checkout on a live healthcare marketplace.',
    image: 'https://res.cloudinary.com/drkksaa3i/image/upload/v1786072093/Untitled_design_16_wcejiy.png',
    images: [
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786072093/Untitled_design_16_wcejiy.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786072221/Untitled_design_20_trcwso.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786072285/Untitled_design_19_m5llje.png',
    ],
    category: 'Healthcare',
    techStack: ['React', 'TypeScript', 'Performance Optimization'],
    features: ['Traced crash to a 9.5MB JS bundle', 'Cut bundle to 603KB via lazy loading & code splitting', 'Restored mobile checkout conversions'],
    link: 'https://doju.netlify.app/',
  },
  {
    id: '5',
    title: 'Meridian — AI Compatibility Matching',
    description: 'Deep compatibility matching platform built on a multi-factor Claude API scoring engine with structured-output handling.',
    image: 'https://res.cloudinary.com/drkksaa3i/image/upload/v1786069749/Untitled_design_6_dpuq4r.png',
    images: [
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786069749/Untitled_design_6_dpuq4r.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786069755/Untitled_design_7_flau3t.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786069871/Untitled_design_8_nevqed.png',
    ],
    category: 'AI',
    techStack: ['React', 'TypeScript', 'Claude API', 'Supabase', 'Resend'],
    features: ['Multi-factor Claude API scoring engine', 'Structured-output handling', 'Private media reveals', 'Automated email delivery'],
    link: 'https://relationship-meridian.onrender.com/',
  },
  {
    id: '6',
    title: 'Attendly — Classroom Attendance System',
    description: 'Real-time rotating-PIN classroom attendance system with anti-fraud checks, tested in real classroom conditions.',
    image: 'https://res.cloudinary.com/drkksaa3i/image/upload/v1786069238/Untitled_design_3_fl0bk4.png',
    images: [
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786069238/Untitled_design_3_fl0bk4.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786069318/Untitled_design_4_irjeh3.png',
      'https://res.cloudinary.com/drkksaa3i/image/upload/v1786069450/Untitled_design_5_ngqwf5.png',
    ],
    category: 'Product',
    techStack: ['React', 'TypeScript', 'Express.js', 'Socket.io', 'Neon Postgres'],
    features: ['Real-time rotating-PIN attendance', 'WebSocket sync', 'FingerprintJS anti-fraud checks', 'PDF/CSV export'],
    link: 'https://meridian-attendance.onrender.com/',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Responsive Design', 'Git & GitHub']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'RESTful APIs']
  },
  {
    title: 'Backend & Data',
    skills: ['Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'Firebase', 'Socket.io']
  },
  {
    title: 'AI & Design',
    skills: ['Claude API', 'Gemini API', 'Prompt Engineering', 'Figma', 'UI/UX Principles', 'Prototyping']
  }
];


export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery',
    description: 'Understanding your goals, audience, and business needs to create a strategic roadmap.'
  },
  {
    id: 2,
    title: 'Planning',
    description: 'Information architecture, wireframes, and project roadmap to ensure alignment.'
  },
  {
    id: 3,
    title: 'Design & Development',
    description: 'Creating visual designs and building functional prototypes with modern tech.'
  },
  {
    id: 4,
    title: 'Launch & Support',
    description: 'Deployment, testing, and ongoing maintenance to ensure peak performance.'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    Icon: Github,
    href: "https://github.com/ifeoluwa00dev",
    label: "GitHub"
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/joshua-ifeoluwapo-adelegan/",
    label: "LinkedIn"
  },
  {
    Icon: Mail,
    href: "mailto:adeleganifeoluwapojoshua@gmail.com",
    label: "Email"
  }
];


export const FOOTER_LINKS: FooterLink[] = [
  {
    label: "Privacy Policy",
    href: "/privacy"
  },
  {
    label: "Terms of Service",
    href: "/terms"
  }
];


export const PERSONAL_INFO = {
  name: "Ìfẹ́olúwa.Dev",
  email: "adeleganifeoluwapojoshua@gmail.com",
  github: "https://github.com/ifeoluwa00dev",
  linkedin: "https://www.linkedin.com/in/joshua-ifeoluwapo-adelegan/",
  copyright: `© ${new Date().getFullYear()} Ìfẹ́olúwa Dev. All rights reserved.`
};
