import React from "react"
import { motion } from 'framer-motion'

const BeyondTech: React.FC = () => {
  return (
    <motion.div 
      className='px-16 flex min-h-screen w-full flex-col items-center justify-center py-28 md:px-32 text-white'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className='text-pretty text-sm text-gray-400 transition-all duration-300 hover:text-gray-300 md:text-base'> 
        I'm a highly skilled
        frontend developer 
        specializing in React, TypeScript, Node.js, 
        and Tailwind for styling. I build clean, scalable, and high-performance 
        applications, transforming intricate designs into seamless, 
        user-centric experiences. With a keen focus on efficiency and maintainability, 
        I bridge the gap between design and functionality, ensuring smooth database 
        integration and a flawless interface.
      </p>
    </motion.div>
  );
}

export default BeyondTech