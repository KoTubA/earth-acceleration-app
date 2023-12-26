import Button from 'src/components/atoms/Button';
import SectionTitle from 'src/components/molecules/SectionTitle';

const Conclusion = () => {
  return (
    <section className="flex justify-center bg-gray-100 w-full">
      <div className="flex flex-col items-center py-16 px-7 lg:px-14 xl:px-20 max-w-screen-xl w-full">
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
            className="block resize-none p-2.5 w-full text-sm text-black bg-white border border-gray-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600 mb-9"
          ></textarea>
          <Button title="Eksportuj do PDF" />
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
