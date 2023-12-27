import PropTypes from 'prop-types';
import Close from 'src/assets/icons/close.svg?react';

const ResultCard = ({ result, title, onDelete }) => {
  return (
    <div className="min-w-64 flex-shrink-0 p-6 bg-white border border-gray-200 font-display relative">
      <h5 className="mb-2 text-xl font-bold">{`Wynik ${title + 1}`}</h5>
      <p className="font-normal text-neutral-600">
        Długość wahadła (l0):
        <span className="ml-2 font-medium">
          {result.lengthLResult.toFixed(2)}
        </span>
      </p>
      <button
        className="absolute cursor-pointer right-2.5 top-2.5"
        onClick={onDelete}
      >
        <Close className="w-4 h-4" />
      </button>
    </div>
  );
};

ResultCard.propTypes = {
  result: PropTypes.object.isRequired,
  title: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ResultCard;
