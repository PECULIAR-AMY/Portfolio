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
        I'm a highly motivated or skilled 
        individual, who has floated two
         successful busineese, i love football
         alot, love studying and i communication 
         alot and love team work i love to collaborate alot esecially with persons of like minds  
      </p>
    </motion.div>
  );
}

export default BeyondTech