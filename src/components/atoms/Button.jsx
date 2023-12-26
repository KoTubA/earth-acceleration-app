import PropTypes from 'prop-types';

const Button = ({ title, inverted, onClick }) => {
  return (
    <button
      className={`text-center py-3 px-4 min-w-40 font-medium max-w-max font-display focus:outline-none focus:ring
      ${
        inverted
          ? 'border border-gray-300 hover:bg-gray-100 focus:ring-gray-100'
          : 'bg-sky-700 text-white hover:bg-sky-800 focus:ring-sky-300'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  inverted: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
