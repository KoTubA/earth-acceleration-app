import { useContext } from 'react';
import SectionTitle from 'src/components/molecules/SectionTitle';
import Button from 'src/components/atoms/Button';
import ResultCard from 'src/components/molecules/ResultCard';
import InputField from 'src/components/atoms/InputField';
import PeriodDataOutput from 'src/components/molecules/PeriodDataOutput';
import { RaportContext } from 'src/providers/RaportProvider';

// Array of periods for calculations
const periods = [20, 30, 50];

// Input fields configuration
const inputFields = [
  { label: 'Małe α:', id: 'smallInput' },
  { label: 'Średnie α:', id: 'mediumInput' },
  { label: 'Duże α:', id: 'largeInput' },
];

const Results = () => {
  const {
    inputValues,
    resultState,
    handleInputChange,
    handlePeriodDataChange,
    handleCalculateResult,
    handleSaveResult,
    handleDeleteResult,
  } = useContext(RaportContext);

  return (
    <section className="flex justify-center w-full" id="reports">
      <div className="flex flex-col items-center py-16 lg:py-20 px-7 lg:px-14 xl:px-20 max-w-screen-xl w-full">
        <SectionTitle
          title="Raport"
          subtitle="Skorzystaj z poniższych pól, aby wprowadzić wyniki eksperymentu."
        />
        <div className="flex flex-col mb-12 w-full">
          <span className="block mb-1 text-sm font-medium text-gray-900 font-display">
            Tabela wyników:
          </span>
          <div className="flex w-full gap-4 overflow-x-auto lg:flex-wrap pb-2">
            {resultState.history.length > 0 ? (
              resultState.history.map((result, index) => (
                <ResultCard
                  key={index}
                  result={result}
                  title={index}
                  onDelete={() => handleDeleteResult(index)}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">
                Brak zapisanych wyników.
              </p>
            )}
          </div>
        </div>
        <form className="grid grid-cols-2 gap-6 lg:gap-4 lg:gap-x-12 xl:gap-x-24 w-full">
          <div className="col-span-full lg:col-start-1 lg:row-start-1 lg:col-span-1">
            <SectionTitle title="Dane wejściowe" isSmall />
            <div className="grid gap-4">
              <InputField
                label="Długość nici z haczykiem (l):"
                type="number"
                id="lengthL"
                name="lengthL"
                value={inputValues.lengthL}
                onChange={handleInputChange}
              />
              <InputField
                label="Średnica kulki (d):"
                type="number"
                id="diameter"
                name="diameter"
                value={inputValues.diameter}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-span-full lg:col-start-1 lg:row-start-2 lg:col-span-1">
            <span className="block mb-1 text-sm font-medium text-gray-900 font-display">
              Czas t[s] n drgań:
            </span>
            {periods.map((n) => (
              <div key={n} className="mb-6 lg:mb-4 border border-gray-200">
                <h4 className="text-center text-white bg-sky-950 font-display pt-2 pb-2">
                  Dla ilości okresów n = {n}
                </h4>
                <div className="grid md:grid-cols-3 gap-4 p-2">
                  {inputFields.map(({ label, id }) => (
                    <InputField
                      key={`${id}-${n}`}
                      label={label}
                      type="number"
                      id={`${id}-${n}`}
                      name={`${n}`}
                      value={inputValues[n][`${id}-${n}`]}
                      onChange={handlePeriodDataChange}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-full lg:col-start-2 lg:row-start-1 lg:col-span-1">
            <SectionTitle title="Dane wyjściowe" isSmall />
            <div>
              <label
                htmlFor="lengthLResult"
                className="block mb-1 text-sm font-medium font-display"
              >
                Długość wahadła (l0):
              </label>
              <input
                type="number"
                id="lengthLResult"
                className="text-sm border border-gray-300 focus:outline-none focus:border-sky-500 w-full p-2.5"
                value={resultState.currentResult.lengthLResult}
                disabled
              />
            </div>
          </div>
          <div className="col-span-full lg:col-start-2 lg:row-start-2 lg:col-span-1">
            <span className="block mb-1 text-sm font-medium font-display">
              Tabela wyników:
            </span>
            {periods.map((n) => (
              <PeriodDataOutput
                key={n}
                title={`Dla ilości okresów n = ${n}`}
                result={resultState.currentResult[n]}
              />
            ))}
            <PeriodDataOutput
              title="Średnia wyników"
              result={resultState.currentResult.Avg}
            />
          </div>
        </form>
        <div className="flex justify-center gap-x-4 w-full mt-12">
          <Button title="Oblicz wynik" onClick={handleCalculateResult} />
          <Button title="Zapisz wynik" onClick={handleSaveResult} inverted />
        </div>
      </div>
    </section>
  );
};

export default Results;
