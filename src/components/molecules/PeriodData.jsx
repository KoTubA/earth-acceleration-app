import PropTypes from 'prop-types';
import InputField from 'src/components/atoms/InputField';

const PeriodData = ({ inputID, title }) => {
  const inputFields = [
    { label: 'Małe α:', id: `smallInput-${inputID}` },
    { label: 'Średnie α:', id: `mediumInput-${inputID}` },
    { label: 'Duże α:', id: `largeInput-${inputID}` },
  ];

  return (
    <div className="mb-6 md:mb-4 border border-gray-200">
      <h4 className="text-center text-white bg-sky-950 font-display pt-2 pb-2">
        {title}
      </h4>
      <div className="grid grid-cols-3 gap-4 p-2">
        {inputFields.map(({ label, id }) => (
          <InputField key={id} label={label} type="text" id={id} />
        ))}
      </div>
    </div>
  );
};

PeriodData.propTypes = {
  inputID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PeriodData;
