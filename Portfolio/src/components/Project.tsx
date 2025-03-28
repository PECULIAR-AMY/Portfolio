import Image1 from '../assets/Screenshot 2025-03-27 093902.png';
import Image2 from '../assets/Screenshot 2025-03-27 094851.png';
import Image3 from '../assets/Screenshot 2025-03-27 095342.png';
import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
}

const projectData: Project[] = [
  {
    image: Image1,
    title: 'Exclusive e-commerce store',
    description: 'An ecommerce store for shopping fashion accessories',
    technologies: ['html', 'css', 'Typescript', 'javascript', 'Tailwind css']
  },
  {
    image: Image2,
    title: 'Zigara App',
    description: 'An ecommerce store for shopping fashion accessories',
    technologies: ['html', 'css', 'Typescript', 'javascript', 'Tailwind css']
  },
  {
    image: Image3,
    title: 'Recipe finder App',
    description: 'An app for finding recipes',
    technologies: ['html', 'css', 'Typescript', 'javascript', 'Tailwind css']
    
  }
];

interface ScrollRevealProps {
  children: React.ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <ScrollReveal>
      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
        <img 
          src={project.image} 
          alt={project.title} 
          className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'
        />
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <div className='text-xl font-semibold'>{project.title}</div>
            <p className='text-gray-400'>{project.description}</p>
          </div>
          <div className='flex flex-wrap gap-5'>
            {project.technologies.map((tech: string, index: number) => (
              <span key={index} className='rounded-lg bg-black p-3'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Project: React.FC = () => {
  return (
    <div 
      id='projects' 
      className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'
    >
      <ScrollReveal>
        <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {projectData.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;