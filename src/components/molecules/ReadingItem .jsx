import PropTypes from 'prop-types';
import Arrow from 'src/assets/icons/arrow-right.svg?react';

const ReadingItem = ({ title, source, link, children }) => (
  <div className="font-display bg-white p-8 flex flex-col text-justify">
    <h5 className="text-lg font-medium pb-2">{title}</h5>
    <div className="text-neutral-600 leading-7">{children}</div>
    <span className="my-2 self-end text-xs italic">{source}</span>
    <a
      className="flex font-medium font-display text-sky-600 mt-auto w-fit"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      Czytaj więcej
      <div className="ml-2 w-5">
        <Arrow className="w-full" />
      </div>
    </a>
  </div>
);

ReadingItem.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ReadingItem;
