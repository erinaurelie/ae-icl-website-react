import { navLinks } from '../constants';
import { hamburger, exit } from '../assets/icons';
import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className='relative'>
      <nav className='flex justify-between items-center fixed px-12 z-50 w-full h-[10vh] frosted shadow-lg'>
        <a href="/" className='text-3xl font-bold'>
          AE - ICL
        </a>
        <ul className='flex cursor-pointer gap-16 md:gap-8 max-md:hidden'>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className='hover:text-teal-200 font-inter leading-normal'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button 
          className='hidden max-md:block cursor-pointer p-2' 
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isMenuOpen ? exit : hamburger} alt='Menu' width={25} height={25} />
        </button>
      </nav>

      <HamburgerMenu isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;

// work on the hambruger menu functionality