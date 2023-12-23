import { useState } from 'react';
import { Link } from 'react-scroll';
import Menu from 'src/assets/menu.svg?react';

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-center w-full">
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-white/50 to-black/50 z-10 ${
          isMobileMenuOpen ? '' : 'hidden'
        }`}
      ></div>
      <div className="flex justify-between items-center px-7 h-16 md:h-20 lg:px-14 xl:px-20 max-w-screen-xl w-full bg-white z-20">
        <header className="text-2xl font-bold font-display">
          Physics Laboratory
        </header>
        <Menu className="md:hidden cursor-pointer" onClick={toggleMobileMenu} />
        <nav
          className={`md:flex font-display ${
            isMobileMenuOpen
              ? 'absolute flex flex-col items-center p-10 top-20 left-7 right-7 gap-10 bg-white border border-sky-950'
              : 'hidden'
          }`}
        >
          <Link
            to="overview"
            className="mx-3 lg:mx-4 cursor-pointer hover:text-sky-600"
            onClick={toggleMobileMenu}
          >
            Overview
          </Link>
          <Link
            to="theory"
            className="mx-3 lg:mx-4 cursor-pointer hover:text-sky-600"
            onClick={toggleMobileMenu}
          >
            Theory
          </Link>
          <Link
            to="animation"
            className="mx-3 lg:mx-4 cursor-pointer hover:text-sky-600"
            onClick={toggleMobileMenu}
          >
            Animation
          </Link>
          <Link
            to="reports"
            className="mx-3 lg:mx-4 cursor-pointer hover:text-sky-600"
            onClick={toggleMobileMenu}
          >
            Reports
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
