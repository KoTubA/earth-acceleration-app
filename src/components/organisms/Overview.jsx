import SectionTitle from 'src/components/molecules/SectionTitle';
import Step from 'src/components/molecules/Step';
import DecorationLineWithDot from 'src/components/molecules/DecorationLineWithDot';

const Overview = () => {
  return (
    <section className="flex justify-center bg-gray-100 w-full" id="overview">
      <div className="flex flex-col items-center md:items-start lg:px-14 xl:px-20 py-16 px-7 max-w-screen-xl w-full">
        <SectionTitle title="Wprowadzenie" />
        <div className="flex flex-col py-5 md:flex-row md:pt-4">
          <DecorationLineWithDot>
            <Step number="1" title="Krótki wstęp" />
            <p className="leading-7 font-display text-center max-w-xs md:text-start text-neutral-600">
              Krótka prezentacja teoretyczna i{'\u00A0'}animacja ułatwiają
              zrozumienie podstawowych właściwości fizycznych.
            </p>
          </DecorationLineWithDot>
          <DecorationLineWithDot>
            <Step number="2" title="Wprowadzanie danych" />
            <p className="leading-7 font-display text-center max-w-xs md:text-start md:pb-0 md:pr-5 text-neutral-600">
              Formularz do wprowadzania wyników eksperymentu i{'\u00A0'}
              formułowania wniosków na podstawie danych.
            </p>
          </DecorationLineWithDot>
          <DecorationLineWithDot isLastChild>
            <Step number="3" title="Eksport sprawozdań" />
            <p className="leading-7 font-display text-center max-w-xs md:text-start md:pb-0 text-neutral-600">
              Eksport sprawozdań do pliku PDF, ułatwia udostępnianie i{'\u00A0'}
              przechowywanie wyników oraz wniosków z{'\u00A0'}eksperymentu.
            </p>
          </DecorationLineWithDot>
        </div>
      </div>
    </section>
  );
};

export default Overview;
