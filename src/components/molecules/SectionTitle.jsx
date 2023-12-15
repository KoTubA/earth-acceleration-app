import PropTypes from 'prop-types';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-5 md:mb-8 lg:mb-12 flex flex-col items-center">
      <h2 className="mb-5 md:mb-6 text-4xl font-bold text-center font-display relative w-max after:block after:absolute after:w-full after:h-1.5 after:bg-sky-600">
        {title}
      </h2>
      {subtitle && (
        <p className="text-center text-lg font-display">{subtitle}</p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
