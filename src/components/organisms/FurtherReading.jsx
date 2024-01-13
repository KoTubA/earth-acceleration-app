import SectionTitle from 'src/components/molecules/SectionTitle';
import Arrow from 'src/assets/icons/arrow-right.svg?react';
import { InlineMath } from 'react-katex';

const FurtherReading = () => {
  return (
    <section
      className="flex justify-center w-full text-white bg-sky-950 bg-[url('src/assets/icons/bg-boost-desktop.svg?react')] bg-no-repeat bg-cover bg-top"
      id="further-reading"
    >
      <div className="flex flex-col items-center py-16 lg:py-20 px-7 lg:px-14 xl:px-20 max-w-screen-xl w-full ">
        <SectionTitle
          title="Literatura"
          subtitle="Zapoznaj się z poniższą literaturą w celu pogłębienia wiedzy."
        />
        <div className="grid lg:grid-cols-3 mb-16 text-neutral-900 gap-6 w-full">
          <div className="font-display bg-white p-8 flex flex-col text-justify">
            <h5 className="text-lg font-medium pb-2">
              Siła ciężkości (grawitacji):
            </h5>
            <p className="text-neutral-600 leading-7">
              Ciężar <InlineMath math="W" /> (bardziej precyzyjnie - siła
              ciężkości) jest to inne określenie na siłę grawitacji{' '}
              <InlineMath math="F_g." /> Działa ona na wszystkie ciała
              znajdujące się blisko Ziemi, przez cały czas - Ziemia przyciąga je
              do siebie.
            </p>
            <span className="my-2 self-end text-xs italic">
              pl.khanacademy.org
            </span>
            <a
              className="flex font-medium font-display text-sky-600 mt-auto w-fit"
              href="https://pl.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/newtons-first-law-mass-and-inertia-ap/a/what-is-weight"
              target="_blank"
              rel="noreferrer"
            >
              Czytaj więcej
              <div className="ml-2 w-5">
                <Arrow className="w-full" />
              </div>
            </a>
          </div>
          <div className="font-display bg-white p-8 flex flex-col text-justify">
            <h5 className="text-lg font-medium pb-2">
              Przyspieszenie ziemskie:
            </h5>
            <p className="text-neutral-600 leading-7">
              Przyspieszenie ziemskie jest to przyspieszenie, jakie uzyskują
              ciała spadające na powierzchnię Ziemi. Oznaczamy je literą{' '}
              <InlineMath math="g." />
            </p>
            <span className="my-2 self-end text-xs italic">medianauka.pl</span>
            <a
              className="flex font-medium font-display text-sky-600 mt-auto w-fit"
              href="https://www.medianauka.pl/przyspieszenie-ziemskie"
              target="_blank"
              rel="noreferrer"
            >
              Czytaj więcej
              <div className="ml-2 w-5">
                <Arrow className="w-full" />
              </div>
            </a>
          </div>
          <div className="font-display bg-white p-8 flex flex-col text-justify">
            <h5 className="text-lg font-medium pb-2">Wahadło matematyczne:</h5>
            <p className="text-neutral-600 leading-7">
              Wahadło matematyczne to drgający na sznurku, lub sztywnym pręcie
              ciężarek. Rozmiar tego ciężarka jest tak mały w{'\u00A0'}
              porównaniu z{'\u00A0'}długością sznurka, a{'\u00A0'}sznurek lub
              pręt tak lekki w{'\u00A0'}porównaniu z{'\u00A0'}ciężarkiem, że
              możemy traktować ciężarek jako masę punktową.
            </p>
            <span className="my-2 self-end text-xs italic">zpe.gov.pl</span>
            <a
              className="flex font-medium font-display text-sky-600 mt-auto w-fit"
              href="https://zpe.gov.pl/a/przeczytaj/DTAbbOORg"
              target="_blank"
              rel="noreferrer"
            >
              Czytaj więcej
              <div className="ml-2 w-5">
                <Arrow className="w-full" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurtherReading;
