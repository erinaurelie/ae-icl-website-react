import { navLinks } from "../constants"

const HamburgerMenu = ({ isOpen }) => {
  return (
    <div id="mobile-menu" className={`w-full absolute top-[10vh] frosted p-3
      ${isOpen ? 'block animate-fade-in-up'
        : '-translate-y-96 transition-slide-up duration-600'
      }`}
    >
      <ul className='flex flex-col text-xl z-10 px-4 leading-normal gap-5'>
        {navLinks.map(link => (
          <li key={link.label} className={`font-inter leading-normal
            ${
              link.href === '#contact'
              ? 'text-center bg-blue-300 rounded-lg py-2 cursor-pointer hover:bg-blue-400'
              : 'hover:text-teal-200'
            }`}>
              <a href={link.href} className={`
                hover:text-teal-200 font-inter leading-normal`}>
                {link.label}
              </a>
            </li>
        ))}
      </ul>
  </div>
  );
};

export default HamburgerMenu;