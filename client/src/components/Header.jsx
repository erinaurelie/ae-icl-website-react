import { navLinks, sections } from '../constants';
import { hamburger, exit } from '../assets/icons';
import { useEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // state to track the active section
  const [activeSection, setActiveSection] = useState(sections[0]);
  

  // scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      
      let currentSection = sections[0];

      for (const id of sections) {
        const section = document.getElementById(id);

        if (!section) continue;

        const top = section.getBoundingClientRect().top;

        if (top <= 100) currentSection = id;
      }

      setActiveSection(currentSection);

    }

    window.addEventListener('scroll', handleScroll);

    // Run on mount to set initial active section
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  return ( // flex justify-between items-center fixed px-12 z-50 w-full h-[10vh] frosted shadow-midnight
  <header>
    <nav
      role="navigation"
      aria-label="Primary Navigation"
      className='flex justify-between items-center fixed px-12 z-50 w-full h-[10vh] frosted shadow-midnight'
    >
      <a href="/" className="text-3xl font-bold">
        AE - ICL
      </a>

      <ul className="flex cursor-pointer gap-16 md:gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`${
                activeSection === link.label.toLowerCase()
                  ? 'text-teal-600 font-bold border-b-2 border-teal-600'
                  : 'text-white'
              } transition-colors duration-200 hover:text-teal-200 font-inter leading-normal text-[18px]`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="hidden max-md:block cursor-pointer p-2"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen ? 'true' : 'false'}
        onClick={toggleMenu}
      >
        <img src={isMenuOpen ? exit : hamburger} alt="Menu" width={25} height={25} />
      </button>
    </nav>

    <HamburgerMenu isOpen={isMenuOpen} />
  </header>
);

};

export default Header;