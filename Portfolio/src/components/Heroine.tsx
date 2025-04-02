import React from 'react';
import Image from '../assets/WhatsApp Image 2024-11-30 at 14.57.53_8f7d976a.jpg';
import { motion } from 'framer-motion';

const Heroine: React.FC = () => {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full flex-col items-center justify-center py-28 md:px-32 text-white'>
      {/* Image with enhanced hover effects */}
      <motion.div className='group relative mb-10' 
       initial ={{y:-50, opacity:0}}
       animate ={{y: 0, opacity:1}}
       transition={{duration:0.8, delay:0.2}}
      >
        
        <img 
          src={Image} 
          alt='Profile' 
          className='w-[300px] cursor-pointer rounded-full shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600/50 md:w-[350px]'
        />
        {/* Glow effect on hover */}
        <div className='absolute inset-0 rounded-full bg-indigo-600 opacity-0 transition-all duration-500 group-hover:opacity-20 group-hover:blur-md'></div>
      </motion.div>

      {/* Centered text content */}
      <motion.div 
       initial ={{y:50, opacity:0}}
       animate ={{y: 0, opacity:1}}
       transition={{duration:0.8, delay:0.2}}
      
      className='flex max-w-[600px] flex-col items-center text-center gap-6'>
        <h1 className='bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-5xl font-light text-transparent opacity-80 transition-all duration-300 hover:opacity-100 hover:shadow-lg md:text-7xl'>
          Peculiar Amaka 
        </h1>
        <h3 className='bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-2xl text-transparent opacity-80 transition-all duration-300 hover:opacity-100 md:text-3xl'>
          Frontend Developer
        </h3>
        <p className='text-pretty text-sm text-gray-400 transition-all duration-300 hover:text-gray-300 md:text-base'> 
       I'm a highly skilled
       frontend developer 
       specializing in React, TypeScript, Node.js, 
       and Tailwind for styling. I build clean, scalable, and high-performance 
       applications, transforming intricate designs into seamless, 
       user-centric experiences. With a keen focus on efficiency and maintainability, 
       I bridge the gap between design and functionality, ensuring smooth database 
       integration and a flawless interface." 
        </p>
      </motion.div>
    </div>
  );
};

export default Heroine;