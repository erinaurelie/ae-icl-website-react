import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between items-center fixed px-12 z-50 w-full h-[10vh] frosted shadow-lg'>
        <a href="/" className='text-3xl font-bold'>
          AE - ICL
        </a>
        <ul className='flex cursor-pointer gap-16 md:gap-8 max-md:hidden'>
          {navLinks.map(link => (
            <li key={link.label} className='hover:text-teal-200 font-inter leading-normal text-fluid-sm'>
              {link.label}
            </li>
          ))}
        </ul>
        <div className='hidden max-md:block cursor-pointer'>
          <img src={hamburger} alt='Menu' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Header;