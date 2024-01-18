import PropTypes from 'prop-types';

const Image = ({ src, alt, sourceLink }) => (
  <>
    <img className="w-full border border-stone-200" src={src} alt={alt} />
    {sourceLink && (
      <span className="block text-xs italic text-stone-400 break-all mt-1 mb-2 md:mb-0">
        {sourceLink}
      </span>
    )}
  </>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sourceLink: PropTypes.string,
};

export default Image;
