import Button from 'src/components/atoms/Button';
import { Link } from 'react-scroll';
import Calculator from 'src/assets/icons/calculator.svg?react';

const Home = () => {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col pt-4 pb-20 lg:pb-24 px-7 lg:px-14 xl:px-20 md:flex-row-reverse md:items-center md:pt-14 max-w-screen-xl w-full md:gap-x-1 lg:gap-x-4 xl:gap-x-24">
        <div className="w-full md:flex-1 md:basis-7/12 mb-12 md:mb-0 flex justify-center md:justify-end">
          <Calculator className="block w-full h-full max-w-md md:max-w-md lg:max-w-lg xl:max-w-none" />
        </div>
        <div className="flex flex-col items-center md:items-start md:mr-10 xl:mr-0 md:flex-1 md:basis-5/12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center font-display md:text-start">
            Kalkulator przyspieszenia ziemskiego
          </h1>
          <p className="lg:text-lg mt-4 mb-8 xl:mt-6 text-center font-display md:text-start text-neutral-600">
            Aplikacja pomagająca studentom wykonywanie ćwiczeń w Pracowni
            Fizycznej
          </p>
          <Link to="overview">
            <Button title="Rozpocznij teraz" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
