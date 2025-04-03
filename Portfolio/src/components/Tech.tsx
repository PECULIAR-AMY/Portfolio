// import React from 'react';
// import { BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
// import { motion, Variants} from 'framer-motion'

// const Tech: React.FC = () => {

//   const variants: Variants = {
//     hidden: { opacity: 0, y: 50 },


//   return (
//     <div id='tech' className='flex min-h-[70vh] w-full flex-col items-center
//      justify-center gap-16 md:gap-32'> 
//       <motion.h1 
      
      
//       className='text-4xl font-light text-white md:text-6xl '>Technologies</motion.h1>

//       <div className='flex flex-wrap items-center justify-center gap-10 p-5 '>
//         <div>
//           <BiLogoTypescript className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 
//         hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
//         </div>

//         <div>
//           <BiLogoJavascript className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 
//         hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
//         </div>

//         <div>
//           <BiLogoReact className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 
//         hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
//         </div>

//         <div>
//           <BiLogoTailwindCss className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 
//         hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
//         </div>

//         <div>
//       <span className="inline-block transform transition-all duration-[2000ms] hover:translate-y-5">
//        <BiLogoNodejs className='cursor-pointer text-[80px] text-green-500 sm:text-[100px] md:text-[120px]' />
//        </span>
// </div>
//       </div>
//     </div>
//   );
// };

// export default Tech;


import React from 'react';
import { BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript} from 'react-icons/bi';
import { motion, Variants } from 'framer-motion';

const Tech: React.FC = () => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 } // Added a visible state for completeness
  };

  return (
    <div id='tech' className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32'> 
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        whileInView='visible'
        transition={{duration:0.5}}
        className='text-4xl font-light text-white md:text-6xl'
      >
        Technologies
      </motion.h1>

      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
        <motion.div>
          <BiLogoTypescript className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <div>
          <BiLogoJavascript className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </div>

        <motion.div>
          <BiLogoReact className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div>
          <BiLogoTailwindCss className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div>
          <span className="inline-block transform transition-all duration-[2000ms] hover:translate-y-5">
            <BiLogoNodejs className='cursor-pointer text-[80px] text-green-500 sm:text-[100px] md:text-[120px]' />
          </span>
        </motion.div>

        <motion.div>
          <span className="inline-block transform transition-all duration-[2000ms] hover:translate-y-5">
            <BiLogoRedux className='cursor-pointer text-[80px] text-green-500 sm:text-[100px] md:text-[120px]' />
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;