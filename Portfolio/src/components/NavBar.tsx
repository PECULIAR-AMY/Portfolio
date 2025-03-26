import { useState } from 'react';
import React from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-500 bg-black/70 px-4 py-6 text-white backdrop-blur-md sm:px-8 md:px-16 lg:justify-evenly'>
      {/* Brand Name - Always Visible */}
      <a
        href='Home'
        className='bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100'
      >
        PECULIAR.
      </a>

      {/* Desktop Navigation - Hidden on sm and md screens */}
      <ul className='hidden lg:flex gap-10'>
        <a href='#home' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Home</li>
        </a>
        <a href='#projects' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Projects</li>
        </a>
        <a href='#resume' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Resume</li>
        </a>
        <a href='#contact' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Contact</li>
        </a>
      </ul>

      {/* Desktop Social Links - Hidden on sm and md screens */}
      <ul className='hidden lg:flex gap-5'>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-600 hover:opacity-100'>
          <BsYoutube />
        </li>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
          <BsLinkedin />
        </li>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-300 hover:opacity-100'>
          <BsInstagram />
        </li>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100'>
          <BsGithub />
        </li>
      </ul>

      {/* Mobile Menu Button - Visible only on sm and md screens */}
      <div className='block lg:hidden'>
        {isOpen ? (
          <BiX className='text-4xl' onClick={menuOpen} />
        ) : (
          <BiMenu className='text-4xl' onClick={menuOpen} />
        )}
      </div>

      {/* Mobile Menu - Appears when isOpen is true */}
      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] h-screen w-2/3 flex-col items-start justify-start gap-10 border-l border-gray-600 bg-black/90 p-12 lg:hidden`}
        >
          <ul className='flex flex-col gap-8'>
            <a href='#home' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Home</li>
            </a>
            <a href='#projects' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Projects</li>
            </a>
            <a href='#resume' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Resume</li>
            </a>
            <a href='#contact' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Contact</li>
            </a>
          </ul>

          {/* Mobile Social Links */}
          <ul className='flex flex-wrap gap-5 mt-10'>
            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-600 hover:opacity-100'>
              <BsYoutube />
            </li>
            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
              <BsLinkedin />
            </li>
            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-300 hover:opacity-100'>
              <BsInstagram />
            </li>
            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100'>
              <BsGithub />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;