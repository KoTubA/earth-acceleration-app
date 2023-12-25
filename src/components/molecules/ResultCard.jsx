const ResultCard = () => {
  return (
    <div className="w-64 flex-shrink-0 p-6 bg-white border border-gray-200 font-display">
      <h5 className="mb-2 text-xl font-bold">Wynik 1</h5>
      <p className="font-normal text-neutral-600">
        Długość wahadła (l):
        <span className="ml-2 font-medium">1.2321</span>
      </p>
    </div>
  );
};

export default ResultCard;
