import SectionTitle from 'src/components/molecules/SectionTitle';
import { InlineMath, BlockMath } from 'react-katex';
import Asset from 'src/assets/images/vernier-caliper.jpg';
import Asset2 from 'src/assets/images/muzammil-soorma.jpg';
import Asset3 from 'src/assets/images/nasa.jpg';
import Asset4 from 'src/assets/images/wahadło-matematyczne.jpg';
import Asset5 from 'src/assets/images/wykres-ruchu-harmonicznego.jpg';
import Asset6 from 'src/assets/images/pulse.jpg';

const Theory = () => {
  return (
    <section className="flex justify-center w-full" id="theory">
      <div className="flex flex-col items-center py-16 lg:py-20 px-7 lg:px-14 xl:px-20 max-w-screen-xl w-full">
        <SectionTitle
          title="Teoria"
          subtitle="Zapoznaj się z poniższą informacją w celu wykonania eksperymentu."
        />
        <div className="flex flex-col md:flex-row mb-16">
          <div className="w-full md:flex-1 md:basis-6/12 mb-3 md:mb-0 md:mr-3 lg:mr-6 xl:mr-12">
            <img
              className="w-full border border-stone-200"
              src={Asset}
              alt="Suwmiarka"
            />
          </div>
          <div className="font-display text-justify md:flex-1 md:basis-6/12 md:ml-3 lg:ml-6 xl:ml-12">
            <h4 className="text-lg bold font-medium pb-2">
              Instrukcja korzystania z suwmiarki:
            </h4>
            <div className="text-base	leading-7">
              <p>
                Suwmiarka to przyrząd pomiarowy używany do precyzyjnego
                mierzenia. W celu skorzystania z suwmiarki należy umieścić
                mierzony przedmiot w jej szczękach, a następnie odczytać wynik z
                podziałki. Wynik odczytujemy sprawdzając na jaką wartość
                wskazuje zerowa kreska. Aby określić liczbę po przecinku należy
                sprawdzić, która pierwsza kreska pokrywa się z kreską na skali
                głównej. Należy pamiętać, aby trzymać suwmiarkę równo i
                dokładnie, w celu uzyskania precyzyjnego pomiaru.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row mb-16">
          <div className="font-display text-justify md:flex-1 md:basis-6/12 md:mr-3 lg:mr-6 xl:mr-12">
            <h4 className="text-lg bold font-medium pb-2">
              Siła grawitacyjna i ciężar:
            </h4>
            <div className="text-base	leading-7">
              <p>
                Siła grawitacyjna to siła, która przyciąga wszystkie ciała
                masowe w stronę centrum Ziemi. Ciężar to innymi słowy siła
                grawitacyjna, z jaką dane ciało oddziałuje na powierzchnię
                Ziemi. Można go opisać wzorem:
              </p>
              <BlockMath math="W = mg" />
              <ul className="list-none p-0 m-0">
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="m" />
                  </span>
                  – to masa;
                </li>
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="g" />
                  </span>
                  – przyspieszenie ziemskie;
                </li>
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="W" />
                  </span>
                  – to omawiany ciężar.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:flex-1 md:basis-6/12 mb-3 md:mb-0 md:ml-3 lg:ml-6 xl:ml-12">
            <img
              className="w-full border border-stone-200"
              src={Asset2}
              alt="Skok ze spadochronem"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-16">
          <div className="w-full md:flex-1 md:basis-6/12 mb-3 md:mb-0 md:mr-3 lg:mr-6 xl:mr-12">
            <img
              className="w-full border border-stone-200"
              src={Asset3}
              alt="Widok ziemi z kosmosu"
            />
          </div>
          <div className="font-display text-justify md:flex-1 md:basis-6/12 md:ml-3 lg:ml-6 xl:ml-12">
            <h4 className="text-lg bold font-medium pb-2">
              Przyspieszenie ziemskie i sposoby jego wyznaczania:
            </h4>
            <div className="text-base	leading-7">
              <p>
                Przyśpieszenie ziemskie oznaczamy jako <InlineMath math="g" />,
                jest to przyśpieszenie jakie ciało swobodnie opadając nabiera
                pod wpływem grawitacji. Wartość przyspieszenia ziemskiego wynosi
                <InlineMath math="\text{ \textasciitilde} 9,8 \frac{m}{s^2}\text{. }" />
                Posługując się wahadłem matematycznym, możemy wyznaczyć wartość
                przyśpieszenia ziemskiego w danym miejscu za pomocą równania:
              </p>
              <BlockMath math="g = \frac{4 \pi^2 l}{T^2}" />
              <ul className="list-none p-0 m-0">
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="g" />
                  </span>
                  – to przyśpieszenie ziemskie;
                </li>
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="l" />
                  </span>
                  – to długość wahadła;
                </li>
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="T" />
                  </span>
                  – to okres drgań wahadła;
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row mb-16">
          <div className="font-display text-justify md:flex-1 md:basis-6/12 md:mr-3 lg:mr-6 xl:mr-12">
            <h4 className="text-lg bold font-medium pb-2">
              Okres drgań wahadła matematycznego:
            </h4>
            <div className="text-base	leading-7">
              <p>
                Wahadło matematyczne to idealizowane ciało punktowe, które jest
                zawieszone na nieważkiej i nierozciągliwej nici. Wahadło
                matematyczne porusza się prostym ruchem harmonicznym i oznacza
                to, że jego równanie jest opisane równaniem różniczkowym
                drugiego rzędu. Ruch tego wahadła dla małych kątów, można opisać
                równaniem:
              </p>
              <BlockMath math="\frac{d^2\theta}{dt^2} + \frac{g}{L}\sin\theta = 0" />
              <ul className="list-none p-0 m-0">
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="\theta" />
                  </span>
                  – to odchylenie wahadła;
                </li>
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="t" />
                  </span>
                  – to czas;
                </li>
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="g" />
                  </span>
                  – to przyspieszenie ziemskie;
                </li>
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="L" />
                  </span>
                  – to długość nici wahadła.
                </li>
              </ul>
              <p>
                Pomiar współczynnika <InlineMath math="\frac{g}{L}" /> stanowi
                istotną informację w kontekście przyspieszenia ziemskiego,
                pozwala on na określenie przyspieszenia ziemskiego w danym
                miejscu na Ziemi.
              </p>
            </div>
          </div>
          <div className="w-full md:flex-1 md:basis-6/12 mb-3 md:mb-0 md:ml-3 lg:ml-6 xl:ml-12">
            <img
              className="w-full border border-stone-200"
              src={Asset4}
              alt="Wahadło matematyczne"
            />
            <span className="block text-xs italic text-stone-400 break-all mt-1 mb-2 md:mb-0">
              https://www.sklep.fpnnysa.com.pl/userdata/gfx/ae43409f2b638a845544f9c40901b39e.jpg
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-16">
          <div className="w-full md:flex-1 md:basis-6/12 mb-3 md:mb-0 md:mr-3 lg:mr-6 xl:mr-12">
            <img
              className="w-full border border-stone-200"
              src={Asset5}
              alt="Wykres ruchu harmonicznego"
            />
            <span className="block text-xs italic text-stone-400 break-all mt-1 mb-2 md:mb-0">
              https://www.medianauka.pl/fizyka/grafika/wykres-ruchu-harmonicznego.jpg
            </span>
          </div>
          <div className="font-display text-justify md:flex-1 md:basis-6/12 md:ml-3 lg:ml-6 xl:ml-12">
            <h4 className="text-lg bold font-medium pb-2">
              Ruch harmoniczny prosty:
            </h4>
            <div className="text-base	leading-7">
              <p>
                Ruch harmoniczny to ruch, w którym ciało porusza się
                sinusoidalnie wokół miejsca równowagi. Jego równanie opisujące
                położenie w czasie można opisać w następujący sposób:
              </p>
              <BlockMath math="x(t) = A \cdot \cos(\omega t + \varphi)" />
              <ul className="list-none p-0 m-0">
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="A" />
                  </span>
                  – to amplituda;
                </li>
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="\omega" />
                  </span>
                  – to pulsacja;
                </li>
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="t" />
                  </span>
                  – to czas;
                </li>
                <li className="relative flex items-center pl-5 my-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0">
                  <span className="bg-gray-200/75 px-1 mr-1 italic">
                    <InlineMath math="\varphi" />
                  </span>
                  – to faza początkowa.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row mb-16">
          <div className="font-display text-justify md:flex-1 md:basis-6/12 md:mr-3 lg:mr-6 xl:mr-12">
            <h4 className="text-lg bold font-medium pb-2">
              Prawo izochronizmu:
            </h4>
            <div className="text-base	leading-7">
              <p>
                Prawo izochronizmu opisuje, że okres drgań małego wahadła
                matematycznego jest kompletnie niezależne od amplitudy drgań.
                Mówiąc prościej oznacza to, że bez względu jak daleko odchyla
                się wahadło matematyczne jego okres zawsze jest taki sam. Jako
                pierwszy opisał to zjawisko Galileusz i to właśnie jemu jest
                przypisane to odkrycie.
              </p>
            </div>
          </div>
          <div className="w-full md:flex-1 md:basis-6/12 mb-3 md:mb-0 md:ml-3 lg:ml-6 xl:ml-12">
            <img
              className="w-full border border-stone-200"
              src={Asset6}
              alt="Kula w Newtonowskim wahadle pulsacyjnym"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theory;
