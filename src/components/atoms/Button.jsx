import PropTypes from 'prop-types';

const Button = ({ title, inverted }) => {
  return (
    <button
      className={`text-center py-3 px-4 min-w-40 font-medium max-w-max font-display focus:outline-none focus:ring
      ${
        inverted
          ? 'text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-100'
          : 'bg-sky-700 text-white hover:bg-sky-800 focus:ring-sky-300'
      }`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  inverted: PropTypes.bool,
};

export default Button;
