import SectionTitle from 'src/components/molecules/SectionTitle';
import ListItem from 'src/components/atoms/ListItem';
import { InlineMath, BlockMath } from 'react-katex';
import Asset from 'src/assets/images/vernier-caliper.jpg';
import Asset2 from 'src/assets/images/muzammil-soorma.jpg';
import Asset3 from 'src/assets/images/nasa.jpg';
import Asset4 from 'src/assets/images/mathematical-pendulum.jpg';

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
            <h4 className="text-lg font-medium pb-2">
              Instrukcja korzystania z{'\u00A0'}suwmiarki:
            </h4>
            <div className="text-base	leading-7">
              <p>
                Suwmiarka to przyrząd pomiarowy używany do precyzyjnego
                mierzenia. W{'\u00A0'}celu skorzystania z{'\u00A0'}suwmiarki
                należy umieścić mierzony przedmiot w{'\u00A0'}jej szczękach, a
                {'\u00A0'}następnie odczytać wynik z{'\u00A0'}podziałki. Wynik
                odczytujemy sprawdzając na jaką wartość wskazuje zerowa kreska.
                Aby określić liczbę po przecinku należy sprawdzić, która
                pierwsza kreska pokrywa się z{'\u00A0'}kreską na skali głównej.
                Należy pamiętać, aby trzymać suwmiarkę równo i{'\u00A0'}
                dokładnie, w{'\u00A0'}celu uzyskania precyzyjnego pomiaru.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row mb-16">
          <div className="font-display text-justify md:flex-1 md:basis-6/12 md:mr-3 lg:mr-6 xl:mr-12">
            <h4 className="text-lg font-medium pb-2">
              Siła ciężkości (grawitacji):
            </h4>
            <div className="text-base	leading-7">
              <p>
                To siła jaką dane ciało jest przyciągane przez inne ciało. W
                {'\u00A0'}pobliżu powierzchni Ziemi ciężar jest zatem siłą,
                którą Ziemia przyciąga dany obiekt. Można go opisać wzorem:
              </p>
              <BlockMath math="W = mg" />
              <ul className="list-none p-0 m-0">
                <ListItem>
                  <span className="bg-gray-200/75 p-1 mr-1 italic">
                    <InlineMath math="m" />
                  </span>
                  – to masa;
                </ListItem>
                <ListItem>
                  <span className="bg-gray-200/75 p-1 mr-1 italic">
                    <InlineMath math="g" />
                  </span>
                  – to przyspieszenie ziemskie;
                </ListItem>
                <ListItem>
                  <span className="bg-gray-200/75 p-1 mr-1 italic">
                    <InlineMath math="W" />
                  </span>
                  – to ciężar.
                </ListItem>
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
            <h4 className="text-lg font-medium pb-2">
              Przyspieszenie ziemskie:
            </h4>
            <div className="text-base	leading-7">
              <p>
                Przyspieszenie ziemskie to przyspieszenie jakie uzyskują ciała
                swobodnie spadające na powierzchnię Ziemi. Jego wartość wynosi w
                {'\u00A0'}przybliżeniu{' '}
                <InlineMath math=" 9,81 \frac{m}{s^2}\text{. }" />{' '}
                Doświadczalnie możemy wyznaczyć je za pomocą wahadła
                matematycznego.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row mb-16">
          <div className="font-display text-justify md:flex-1 md:basis-6/12 md:mr-3 lg:mr-6 xl:mr-12">
            <h4 className="text-lg font-medium pb-2">Wahadło matematyczne:</h4>
            <div className="text-base	leading-7">
              <p>
                Wahadło matematyczne to wyidealizowane ciało o{'\u00A0'}masie
                punktowej, które jest zawieszone na cienkiej, nieważkiej i
                {'\u00A0'}nierozciągliwej nici. Wychylone z położenia równowagi
                porusza się ruchem drgającym. Dla małych wychyleń wahadła można
                przyjąć, że ruch ten jest ruchem harmonicznym prostym.
              </p>
              <h6 className="font-medium mt-3 mb-1 italic">Opis zdjęcia:</h6>
              <ul className="list-none p-0 m-0">
                <ListItem>
                  Składowa styczna siły ciężkości <InlineMath math="mg" />{' '}
                  sprowadzająca masę <InlineMath math="m" />
                  {'\u00A0'}do położenia równowagi ma wartość{' '}
                  <InlineMath math="-mgsin\theta" />
                </ListItem>
                <ListItem>
                  Przemieszczenie <InlineMath math="x" />
                  {'\u00A0'}wzdłuż łuku wynosi{' '}
                  <InlineMath math="x = l\theta." /> Dla bardzo małych kątów{' '}
                  <InlineMath math="sin\theta = \theta." /> Równanie przyjmuje
                  więc postać:
                  <BlockMath math="F = -mg \theta - \frac{mg}{l} x" />
                </ListItem>
                <ListItem>
                  Korzystając ze wzoru na okres drgań w{'\u00A0'}ruchu
                  harmonicznym:
                  <BlockMath math="T = 2 \pi \sqrt{\frac{m}{k}}" />
                  i podstawiając za <InlineMath math="k = \frac{mg}{l}" />,
                  otrzymujemy:
                  <BlockMath math="T = 2 \pi \sqrt{\frac{m}{k}} =2 \pi \sqrt{m\frac{l}{mg}} = 2 \pi \sqrt{\frac{l}{g}}" />
                </ListItem>
                <ListItem>
                  Posługując się takim wahadłem, możemy wyznaczyć wartość
                  przyspieszenia ziemskiego w{'\u00A0'}miejscu, w{'\u00A0'}
                  którym przeprowadzamy pomiary.
                </ListItem>
              </ul>
            </div>
          </div>
          <div className="w-full md:flex-1 md:basis-6/12 mb-3 md:mb-0 md:ml-3 lg:ml-6 xl:ml-12">
            <img
              className="w-full border border-stone-200"
              src={Asset4}
              alt="Wahadło matematyczne"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theory;
