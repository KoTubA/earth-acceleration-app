import Atom from 'src/assets/icons/atom.svg?react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center text-white bg-sky-950 w-full">
      <div className="flex justify-center items-center px-7 h-16 font-display max-w-screen-xl w-full">
        <span className="flex items-center">
          Physics Laboratory App <Atom className="w-4 h-4 mx-1" /> {currentYear}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
