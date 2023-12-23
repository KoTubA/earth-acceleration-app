import PropTypes from 'prop-types';

const PeriodDataOutput = ({ title }) => {
  return (
    <div className="mb-6 md:mb-4 border border-sky-950">
      <h4 className="text-center text-white bg-sky-950 font-display pt-2 pb-2">
        {title}
      </h4>
      <div className="grid grid-cols-3">
        <div className="grid grid-cols-2 justify-items-stretch text-center font-medium">
          <div className="col-span-full bg-gray-200 p-1">Małe α</div>
          <div className="col-span-1 p-1">T</div>
          <div className="col-span-1 p-1">g</div>
          <div className="col-span-1 bg-gray-200 p-1 font-normal">-</div>
          <div className="col-span-1 bg-gray-200 p-1 font-normal">-</div>
        </div>
        <div className="grid grid-cols-2 justify-items-stretch text-center font-medium">
          <div className="col-span-full bg-gray-200 p-1">Średnie α</div>
          <div className="col-span-1 p-1">T</div>
          <div className="col-span-1 p-1">g</div>
          <div className="col-span-1 bg-gray-200 p-1 font-normal">-</div>
          <div className="col-span-1 bg-gray-200 p-1 font-normal">-</div>
        </div>
        <div className="grid grid-cols-2 justify-items-stretch text-center font-medium">
          <div className="col-span-full bg-gray-200 p-1">Duże α</div>
          <div className="col-span-1 p-1">T</div>
          <div className="col-span-1 p-1">g</div>
          <div className="col-span-1 bg-gray-200 p-1 font-normal">-</div>
          <div className="col-span-1 bg-gray-200 p-1 font-normal">-</div>
        </div>
      </div>
    </div>
  );
};

PeriodDataOutput.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PeriodDataOutput;
