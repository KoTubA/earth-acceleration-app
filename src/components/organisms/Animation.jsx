import SectionTitle from 'src/components/molecules/SectionTitle';

const Animation = () => {
  return (
    <section className="flex justify-center bg-gray-100 w-full" id="animation">
      <div className="flex flex-col items-center py-16 px-7 lg:px-14 xl:px-20 max-w-screen-xl w-full">
        <SectionTitle title="Animacja" />
        <div className="flex flex-col md:flex-row mb-12">
          <div className="bg-stone-200 h-64 w-full mb-6 md:flex-1 md:basis-6/12 md:mr-3 lg:mr-6 xl:mr-12"></div>
          <div className="font-display text-justify md:flex-1 md:basis-6/12 md:ml-3 lg:ml-6 xl:ml-12">
            <div className="text-base	leading-7">
              <p>
                Zapoznaj się z animacją, która ilustruje pomiar przyspieszenia
                ziemskiego przy użyciu matematycznego wahadła. Dostosuj
                parametry i obserwuj, jak wahadło reaguje na różne ustawienia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animation;
