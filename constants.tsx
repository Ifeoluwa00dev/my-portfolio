
import React from 'react';
import { Project, SkillCategory, ProcessStep, SocialLink, FooterLink} from './types';
import { Github, Linkedin, Mail } from 'lucide-react';



export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Redesign',
    description: 'Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
    image: 'https://res.cloudinary.com/drkksaa3i/image/upload/v1769436603/Untitled_design_3_qg2pwo.png',
    images : [
      "https://res.cloudinary.com/drkksaa3i/image/upload/v1769436603/Untitled_design_3_qg2pwo.png",
      "https://res.cloudinary.com/drkksaa3i/image/upload/v1769466787/screencapture-rosby-ecommerce-netlify-app-products-automobiles-2026-01-26-14_29_53_mtfncd.png",
      "https://res.cloudinary.com/drkksaa3i/image/upload/v1769467658/screencapture-rosby-ecommerce-netlify-app-product-Pointed-Toe-Stiletto-Heels-2026-01-26-14_45_58_wrl5d1.png"],
    category: 'E-Commerce',
    techStack: ['React', 'Tailwind CSS', 'Firebase', 'Cloudinary', 'Firestore'],
    features: ['Search functionality', 'Cart management', 'Responsive design'],
    link :'https://rosby-ecommerce.netlify.app/'
  },
  {
    id: '2',
    title: 'NAR Automobile',
    description: 'Responsive car-booking website for all car services with dynamic inventory.',
    image: 'https://picsum.photos/seed/car1/800/600',
    images : ["https://res.cloudinary.com/drkksaa3i/image/upload/v1769462044/5_yygdtc.png",
      "https://res.cloudinary.com/drkksaa3i/image/upload/v1769517062/screencapture-narautomobiles-netlify-app-vehicles-2026-01-27-04_28_52_qjmo6c.png",
      "https://res.cloudinary.com/drkksaa3i/image/upload/v1769518643/screencapture-narautomobiles-netlify-app-about-2026-01-27-04_38_57_j3mee1.png"],
    category: 'Business',
    techStack: ['React', 'Unsplash API', 'JavaScript', 'Tailwind CSS'],
    features: ['Inventory browsing', 'Booking system', 'Dynamic filtering'],
    link :'https://narautomobiles.netlify.app/'
  },
  {
    id: '3',
    title: 'Virtual Assistant Portfolio',
    description: 'Conversion-focused portfolio for a Virtual Assistant with packages and contact funnel.',
    image: 'https://picsum.photos/seed/va1/800/600',
    images : ["https://res.cloudinary.com/drkksaa3i/image/upload/v1769462057/4_v0h9sz.png",
      "https://res.cloudinary.com/drkksaa3i/image/upload/v1769519615/screencapture-adeleganmercyportfolio-netlify-app-2026-01-27-05_05_52_rpfdbz.png",
      "https://res.cloudinary.com/drkksaa3i/image/upload/v1769519933/screencapture-adeleganmercyportfolio-netlify-app-2026-01-27-05_05_52_emx0tr.png"],
    category: 'Portfolio',
    techStack: ['React', 'Vite', 'Firebase', 'Tailwind CSS', 'EmailJS'],
    features: ['Service packages', 'Contact form', 'Testimonial slider'],
    link :'https://adeleganmercyportfolio.netlify.app/'
  },
  {
    id: '4',
    title: 'AI SmartFlu Trading',
    description: 'A modern, trust-driven trading website built to communicate credibility and convert users.',
    image: 'https://picsum.photos/seed/trade1/800/600',
    images : ["https://res.cloudinary.com/drkksaa3i/image/upload/v1769462061/2_e1c8ly.png",
      "https://res.cloudinary.com/drkksaa3i/image/upload/v1769520798/screencapture-new092-netlify-app-2026-01-27-05_27_39_p5q2xu.png",
      "https://res.cloudinary.com/drkksaa3i/image/upload/v1769520972/screencapture-new092-netlify-app-2026-01-27-05_27_39_es8yih.png"],
    category: 'Finance',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'Cloudinary'],
    features: ['Onboarding guide', 'Market data visualization', 'Secure login'],
    link :'https://new092.netlify.app/'
  },
  {
    id: '5',
    title: 'Mobile Photographer Portfolio',
    description: 'High-converting portfolio page for photographers with tested design elements.',
    image: 'https://picsum.photos/seed/photo1/800/600',
    images : ["https://res.cloudinary.com/drkksaa3i/image/upload/v1769462055/3_gd7jbz.png",
      "https://res.cloudinary.com/drkksaa3i/image/upload/v1769521877/screencapture-ladameshotit-netlify-app-2026-01-27-05_38_45_otzjgj.png",
      "https://res.cloudinary.com/drkksaa3i/image/upload/v1769522037/screencapture-ladameshotit-netlify-app-2026-01-27-05_38_45_goncnu.png"],
    category: 'Portfolio',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    features: ['Interactive showcases', 'Scroll animations', 'Testimonials'],
    link :'https://new092.netlify.app/'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Mobile-First Development', 'DOM Manipulation', 'Git & GitHub']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Redux', 'Zustand', 'Framer Motion', 'RESTful APIs', 'Firebase (Auth, Firestore)']
  },
  {
    title: 'Design Tools',
    skills: ['Figma', 'Adobe XD', 'Canva', 'Wireframing', 'UI/UX Principles', 'Prototyping', 'Component-Based Architecture']
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
