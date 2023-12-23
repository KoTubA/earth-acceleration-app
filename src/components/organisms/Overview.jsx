import SectionTitle from 'src/components/molecules/SectionTitle';
import Step from 'src/components/molecules/Step';
import DecorationLineWithDot from 'src/components/molecules/DecorationLineWithDot';

const Overview = () => {
  return (
    <section className="flex justify-center bg-gray-100 w-full" id="overview">
      <div className="flex flex-col items-center md:items-start lg:px-14 xl:px-20 py-16 px-7 max-w-screen-xl w-full">
        <SectionTitle title="How it works" />
        <div className="flex flex-col py-5 md:flex-row md:pt-4">
          <DecorationLineWithDot>
            <Step title="1" />
            <p className="text-lg font-display text-center max-w-xs md:text-start">
              This is the calculated result for Measurement 1.
            </p>
          </DecorationLineWithDot>
          <DecorationLineWithDot>
            <Step title="2" />
            <p className="text-lg font-display text-center max-w-xs md:text-start md:pb-0 md:pr-5">
              This is the calculated result for Measurement 2.
            </p>
          </DecorationLineWithDot>
          <DecorationLineWithDot isLastChild>
            <Step title="3" />
            <p className="text-lg font-display text-center max-w-xs md:text-start md:pb-0">
              This is the calculated result for Measurement 3.
            </p>
          </DecorationLineWithDot>
        </div>
      </div>
    </section>
  );
};

export default Overview;
