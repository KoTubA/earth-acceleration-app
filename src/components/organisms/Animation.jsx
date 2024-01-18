import SectionTitle from 'src/components/molecules/SectionTitle';
import FlexibleContainer from 'src/components/atoms/FlexibleContainer';

const Animation = () => {
  return (
    <section className="flex justify-center bg-gray-100 w-full" id="animation">
      <div className="flex flex-col items-center py-16 lg:py-20 px-7 lg:px-14 xl:px-20 max-w-screen-xl w-full">
        <SectionTitle title="Animacja" />
        <div className="flex flex-col md:flex-row mb-16">
          <FlexibleContainer>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/QnvNnqFFprk?si=x812ThGB5s76VkA7&showinfo=0"
              title="Animacja pomiaru przyspieszenia ziemskiego przy użyciu matematycznego wahadła"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </FlexibleContainer>
          <FlexibleContainer isRight>
            <div className="text-base	leading-7">
              <p>
                Zapoznaj się z{'\u00A0'} animacją ilustrującą pomiar
                przyspieszenia ziemskiego przy użyciu matematycznego wahadła
                krok po kroku. Wideo pomoże Ci zrozumieć, na czym polega
                eksperyment, oraz wytłumaczy, jakich przyrządów będziesz
                potrzebować. Następnie przeprowadź eksperyment, a{'\u00A0'}
                uzyskane wyniki wprowadź do kalkulatora poniżej.
              </p>
            </div>
          </FlexibleContainer>
        </div>
      </div>
    </section>
  );
};

export default Animation;
