import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return (
    <button className="text-center py-3 px-4 bg-sky-700 text-white font-medium rounded-lg max-w-max	">
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
