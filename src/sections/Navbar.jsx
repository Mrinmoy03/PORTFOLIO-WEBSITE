import { useEffect, useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ activeId, onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a
          href={item.href}
          onClick={onClick}
          className={`nav-li_a ${
            activeId === item.href.slice(1) ? 'text-yellow-500 font-bold' : ''
          }`}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveId(visibleSection.target.id);
        }
      },
      { threshold: 0.6 } 
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Mrinmoy
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems activeId={activeId} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems activeId={activeId} onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
