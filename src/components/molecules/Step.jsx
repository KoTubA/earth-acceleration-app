import PropTypes from 'prop-types';

const Step = ({ title }) => {
  return (
    <>
      <span className="text-6xl font-medium mb-4 text-sky-950 font-display">
        {0 + title}
      </span>
      <span className="hidden text-xl font-medium mb-2 font-display md:flex">
        Step {title}
      </span>
    </>
  );
};

Step.propTypes = {
  title: PropTypes.string,
};

export default Step;
