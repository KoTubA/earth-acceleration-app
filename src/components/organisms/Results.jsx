import SectionTitle from 'src/components/molecules/SectionTitle';
import Button from 'src/components/atoms/Button';
import ResultCard from 'src/components/molecules/ResultCard';
import InputField from 'src/components/atoms/InputField';
import PeriodData from 'src/components/molecules/PeriodData';
import PeriodDataOutput from 'src/components/molecules/PeriodDataOutput';

const Results = () => {
  return (
    <section className="flex justify-center w-full" id="reports">
      <div className="flex flex-col items-center py-16 px-7 lg:px-14 xl:px-20 max-w-screen-xl w-full">
        <SectionTitle
          title="Experiment Results"
          subtitle="Use the following boxes to enter the results of the experiment."
        />
        <div className="flex w-full gap-4 overflow-x-scroll md:flex-wrap md:overflow-x-auto pb-2">
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
        </div>
        <form className="grid grid-cols-2 gap-6 md:gap-4 lg:gap-x-12 xl:gap-x-24 w-full mt-12">
          <div className="col-span-full md:col-start-1 md:row-start-1 md:col-span-1">
            <SectionTitle title="Input data" isSmall />
            <div className="grid gap-4">
              <InputField
                label="Długość nici z haczykiem (l0):"
                type="text"
                id="length-l"
              />
              <InputField
                label="Średnica kulki (d):"
                type="text"
                id="diameter"
              />
            </div>
          </div>
          <div className="col-span-full md:col-start-1 md:row-start-2 md:col-span-1">
            <span className="block mb-1 text-sm font-medium text-gray-900 font-display">
              Czas t[s] n drgań:
            </span>
            <PeriodData title="Dla ilości okresów n = 20" inputID="20" />
            <PeriodData title="Dla ilości okresów n = 30" inputID="30" />
            <PeriodData title="Dla ilości okresów n = 50" inputID="50" />
          </div>
          <div className="col-span-full md:col-start-2 md:row-start-1 md:col-span-1">
            <SectionTitle title="Output data" isSmall />
            <div className="grid gap-4">
              <InputField
                label="Długość wahadła (l):"
                type="text"
                id="length-l-result"
                locked
              />
            </div>
          </div>
          <div className="col-span-full md:col-start-2 md:row-start-2 md:col-span-1">
            <span className="block mb-1 text-sm font-medium font-display">
              Tabela wyników:
            </span>
            <PeriodDataOutput title="Dla ilości okresów n = 20" />
            <PeriodDataOutput title="Dla ilości okresów n = 30" />
            <PeriodDataOutput title="Dla ilości okresów n = 50" />
            <PeriodDataOutput title="Średnia wyników" />
          </div>
        </form>
        <div className="flex justify-center gap-x-4 w-full mt-6">
          <Button title="Calculate" />
          <Button title="Add result" inverted />
        </div>
      </div>
    </section>
  );
};

export default Results;
