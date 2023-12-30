import PropTypes from 'prop-types';

const SectionTitle = ({ title, subtitle, isSmall }) => {
  return (
    <div className="mb-12 lg:mb-16 flex flex-col items-center">
      <h2
        className={`mb-5 ${
          isSmall ? 'text-2xl' : 'text-4xl'
        } font-bold text-center font-display relative w-max after:block after:absolute after:w-full after:h-1.5 after:bg-sky-600`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-center font-display text-base mb-4">{subtitle}</p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isSmall: PropTypes.bool,
};

export default SectionTitle;
