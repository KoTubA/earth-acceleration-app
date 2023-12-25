import Button from 'src/components/atoms/Button';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col pt-4 pb-14 px-7 lg:px-14 xl:px-20 md:flex-row-reverse md:items-center md:pt-14 max-w-screen-xl w-full">
        <div className="bg-stone-200 h-64 w-full mb-7 lg:h-80 md:flex-1 md:basis-7/12"></div>
        <div className="flex flex-col items-center md:items-start md:mr-8 lg:mr-16 xl:mr-24 md:flex-1 md:basis-5/12">
          <h1 className="text-4xl lg:text-5xl font-bold text-center font-display md:text-start">
            Kalkulator przyspieszenia
          </h1>
          <p className="text-lg my-6 text-center font-display md:text-start text-neutral-600">
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
