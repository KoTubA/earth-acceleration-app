import PropTypes from 'prop-types';

const resultFields = ['Małe α', 'Średnie α', 'Duże α'];

const PeriodDataOutput = ({ title, result }) => {
  return (
    <div className="mb-6 md:mb-4 border border-sky-950 border-b-0 md:border-b font-display">
      <h4 className="text-center text-white bg-sky-950 pt-2 pb-2">{title}</h4>
      <div className="grid md:grid-cols-3">
        {Object.keys(result).map((key, index, array) => (
          <div
            key={index}
            className="grid grid-cols-2 justify-items-stretch text-center font-medium"
          >
            <div
              className={`col-span-full bg-slate-300 p-1 border-b border-sky-950${
                index === array.length - 1 ? '' : ' md:border-r'
              }`}
            >
              {resultFields[index]}
            </div>
            <div
              className={
                'col-span-1 bg-gray-200 p-1 border-b border-r border-sky-950'
              }
            >
              T
            </div>
            <div
              className={`col-span-1 bg-gray-200 p-1 border-sky-950 border-b ${
                index === array.length - 1 ? '' : ' md:border-r'
              }`}
            >
              g
            </div>
            <div
              className={
                'col-span-1 p-1 font-normal border-sky-950 overflow-hidden border-r border-b md:border-b-0'
              }
            >
              <span title={result[key].T} className="truncate">
                {isNaN(parseFloat(result[key].T))
                  ? result[key].T
                  : parseFloat(result[key].T).toFixed(5)}
              </span>
            </div>
            <div
              className={`col-span-1 p-1 font-normal overflow-hidden border-sky-950 border-b md:border-b-0${
                index === array.length - 1 ? '' : ' md:border-r'
              }`}
            >
              <span title={result[key].g} className="truncate">
                {isNaN(parseFloat(result[key].g))
                  ? result[key].T
                  : parseFloat(result[key].g).toFixed(5)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

PeriodDataOutput.propTypes = {
  title: PropTypes.string.isRequired,
  result: PropTypes.object.isRequired,
};

export default PeriodDataOutput;
