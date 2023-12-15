import Menu from 'src/assets/menu.svg?react';

const Navigation = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-between items-center px-7 h-16 md:h-20 lg:px-14 xl:px-20 max-w-screen-xl w-full">
        <header className="text-2xl font-bold font-display">
          Physics Laboratory
        </header>
        <Menu className="md:hidden" />
        <nav className="hidden md:flex font-display">
          <ul className="flex">
            <li className="px-1 mx-2 lg:mx-3">Home</li>
            <li className="px-1 mx-2 lg:mx-3">Theory</li>
            <li className="px-1 mx-2 lg:mx-3">Animation</li>
            <li className="px-1 mx-2 lg:mx-3">Reports</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
