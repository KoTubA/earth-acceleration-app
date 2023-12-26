// ResultCard.js
import PropTypes from 'prop-types';

const ResultCard = ({ result, title }) => {
  return (
    <div className="w-64 flex-shrink-0 p-6 bg-white border border-gray-200 font-display">
      <h5 className="mb-2 text-xl font-bold">{`Wynik ${title + 1}`}</h5>
      <p className="font-normal text-neutral-600">
        Długość wahadła (l):
        <span className="ml-2 font-medium">{result.lengthLResult}</span>
      </p>
      {/* TODO: More info */}
      {/* np. result[20]['small-20'].T, result[30]['small-30'].g itd. */}
    </div>
  );
};

ResultCard.propTypes = {
  result: PropTypes.object.isRequired,
  title: PropTypes.number.isRequired,
};

export default ResultCard;
