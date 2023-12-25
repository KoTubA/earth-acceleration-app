import PropTypes from 'prop-types';

const Step = ({ number, title }) => {
  return (
    <>
      <span className="text-6xl font-medium mb-4 text-sky-950 font-display">
        {0 + number}
      </span>
      <span className="hidden text-xl font-medium mb-2 font-display md:flex">
        {title}
      </span>
    </>
  );
};

Step.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
};

export default Step;
