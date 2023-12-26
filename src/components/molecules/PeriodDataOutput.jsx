import PropTypes from 'prop-types';

const resultFields = ['Małe α', 'Średnie α', 'Duże α'];

const PeriodDataOutput = ({ title, result }) => {
  return (
    <div className="mb-6 md:mb-4 border border-sky-950">
      <h4 className="text-center text-white bg-sky-950 font-display pt-2 pb-2">
        {title}
      </h4>
      <div className="grid grid-cols-3">
        {Object.keys(result).map((key, index, array) => (
          <div
            key={index}
            className="grid grid-cols-2 justify-items-stretch text-center font-medium"
          >
            <div
              className={`col-span-full bg-gray-200 p-1 border-b border-sky-950${
                index === array.length - 1 ? '' : ' border-r'
              }`}
            >
              {resultFields[index]}
            </div>
            <div className={'col-span-1 p-1 border-b border-r border-sky-950'}>
              T
            </div>
            <div
              className={`col-span-1 p-1 border-sky-950 border-b ${
                index === array.length - 1 ? '' : ' border-r'
              }`}
            >
              g
            </div>
            <div
              className={
                'col-span-1 bg-gray-200 p-1 font-normal border-sky-950 border-r'
              }
            >
              {result[key].T}
            </div>
            <div
              className={`col-span-1 bg-gray-200 p-1 font-normal border-sky-950${
                index === array.length - 1 ? '' : ' border-r'
              }`}
            >
              {result[key].g}
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
