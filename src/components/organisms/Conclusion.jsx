import { useContext } from 'react';
import Button from 'src/components/atoms/Button';
import SectionTitle from 'src/components/molecules/SectionTitle';
import { RaportContext } from 'src/providers/RaportProvider';

const Conclusion = () => {
  const { resultState, handleConclusionsChange, handleExportToPDF } =
    useContext(RaportContext);

  return (
    <section className="flex justify-center bg-gray-100 w-full">
      <div className="flex flex-col items-center py-16 lg:py-20 px-7 lg:px-14 xl:px-20 max-w-screen-xl w-full">
        <SectionTitle title="Wnioski" />
        <div className="flex flex-col items-center w-full">
          <label
            htmlFor="message"
            className="mb-2 text-sm font-medium self-start font-display"
          >
            Twoje wnioski:
          </label>
          <textarea
            id="message"
            rows="16"
            value={resultState.conclusions}
            onChange={handleConclusionsChange}
            className="block resize-none p-2.5 w-full text-sm text-black bg-white border border-gray-300 focus:outline-none focus:border-sky-500 mb-9 font-display"
          ></textarea>
          <Button title="Export to PDF" onClick={handleExportToPDF} />
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
