import PropTypes from 'prop-types';

const InputField = ({ label, type, id, name, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-1 text-sm font-medium font-display"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="text-sm border border-gray-300 focus:outline-none focus:border-sky-500 w-full p-2.5 font-display"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
