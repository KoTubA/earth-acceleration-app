import SectionTitle from 'src/components/molecules/SectionTitle';
import { InlineMath } from 'react-katex';
import ReadingItem from 'src/components/molecules/ReadingItem ';

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
          <ReadingItem
            title="Siła ciężkości (grawitacja):"
            source="pl.khanacademy.org"
            link="https://pl.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/newtons-first-law-mass-and-inertia-ap/a/what-is-weight"
          >
            Ciężar <InlineMath math="W" /> (bardziej precyzyjnie - siła
            ciężkości) jest to inne określenie na siłę grawitacji{' '}
            <InlineMath math="F_g." /> Działa ona na wszystkie ciała znajdujące
            się blisko Ziemi, przez cały czas - Ziemia przyciąga je do siebie.
          </ReadingItem>
          <ReadingItem
            title="Przyspieszenie ziemskie:"
            source="medianauka.pl"
            link="https://www.medianauka.pl/przyspieszenie-ziemskie"
          >
            Przyspieszenie ziemskie jest to przyspieszenie, jakie uzyskują ciała
            spadające na powierzchnię Ziemi. Oznaczamy je literą{' '}
            <InlineMath math="g." />
          </ReadingItem>
          <ReadingItem
            title="Wahadło matematyczne:"
            source="zpe.gov.pl"
            link="https://zpe.gov.pl/a/przeczytaj/DTAbbOORg"
          >
            Wahadło matematyczne to drgający na sznurku, lub sztywnym pręcie
            ciężarek. Rozmiar tego ciężarka jest tak mały w{'\u00A0'}
            porównaniu z{'\u00A0'}długością sznurka, a{'\u00A0'}sznurek lub pręt
            tak lekki w{'\u00A0'}porównaniu z{'\u00A0'}ciężarkiem, że możemy
            traktować ciężarek jako masę punktową.
          </ReadingItem>
        </div>
      </div>
    </section>
  );
};

export default FurtherReading;
