import PropTypes from 'prop-types';

const InputField = ({ label, type, id, value, locked }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-1 text-sm font-medium text-gray-900 font-display"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={
          'text-gray-900 text-sm border border-gray-300 focus:outline-none focus:border-sky-500 w-full p-2.5'
        }
        value={value}
        disabled={locked}
        required
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  locked: PropTypes.bool,
};

export default InputField;
