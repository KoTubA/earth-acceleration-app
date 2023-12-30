import { useState } from 'react';
import { Link } from 'react-scroll';
import Menu from 'src/assets/icons/menu.svg?react';
import Close from 'src/assets/icons/close.svg?react';

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-between items-center px-7 h-20 md:h-24 lg:h-32 lg:px-14 xl:px-20 max-w-screen-xl w-full bg-white">
        <header className="text-2xl font-bold font-display">
          Physics Laboratory
        </header>
        <div
          className="w-6 h-6 md:hidden cursor-pointer z-20"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <Close className="fixed fill-white w-6 h-6" />
          ) : (
            <Menu className="w-full h-full" />
          )}
        </div>
        <nav
          className={`md:flex font-display ${
            isMobileMenuOpen
              ? 'fixed flex flex-col items-center justify-center p-7 top-0 bottom-0 left-0 right-0 gap-10 bg-sky-600 text-white font-medium z-10 text-3xl'
              : 'hidden'
          }`}
        >
          <Link
            to="overview"
            className="mx-3 lg:mx-4 cursor-pointer md:hover:text-sky-600"
            onClick={handleClick}
          >
            Wprowadzenie
          </Link>
          <Link
            to="theory"
            className="mx-3 lg:mx-4 cursor-pointer md:hover:text-sky-600"
            onClick={handleClick}
          >
            Teoria
          </Link>
          <Link
            to="animation"
            className="mx-3 lg:mx-4 cursor-pointer md:hover:text-sky-600"
            onClick={handleClick}
          >
            Animacja
          </Link>
          <Link
            to="reports"
            className="mx-3 lg:ml-4 lg:mr-0 cursor-pointer md:hover:text-sky-600"
            onClick={handleClick}
          >
            Raport
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
