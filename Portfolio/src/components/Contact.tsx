import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id='contact' className='flex min-h-[70vh] min-w-full items-center justify-center'>
      <div className='flex, flex-col items-center justify-center gap-3 space-y-6 p-14'>
      <h1 className='text-center text-5xl md:text-7xl'>
        <span className='bg-gradient-r from-indigo-500
       to-blue-500 bg-clip-text text-transparent'>Get in touch</span>
      </h1>

      <p className='text-center text-lg font-semibold text-gray-500 justify-center items-center'>
       want to nd me an email through this button and ill respond when i can. 
      </p>

      <a href='mailto:emmanuelpeculiar645@gmail.com'className='text-nowrap justify-center items-center rounded-lg border-indigo-600
       bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all 
       duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-indigo-600 '>Contact Me</a>
      </div>
  
    </div>
  );
};

export default Contact;
