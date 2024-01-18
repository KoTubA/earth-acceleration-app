import PropTypes from 'prop-types';

const FlexibleContainer = ({ children, isRight = false }) => (
  <div
    className={`w-full md:flex-1 md:basis-6/12 mb-3 md:mb-0 ${
      isRight ? 'md:ml-3 lg:ml-6 xl:ml-12' : 'md:mr-3 lg:mr-6 xl:mr-12'
    }`}
  >
    {children}
  </div>
);

FlexibleContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isRight: PropTypes.bool,
};

export default FlexibleContainer;
