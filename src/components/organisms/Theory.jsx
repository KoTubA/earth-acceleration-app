import SectionTitle from 'src/components/molecules/SectionTitle';

const Theory = () => {
  return (
    <section className="flex justify-center w-full" id="theory">
      <div className="flex flex-col items-center py-16 px-7 lg:px-14 xl:px-20 max-w-screen-xl w-full">
        <SectionTitle
          title="Theory"
          subtitle="Use the following boxes to enter the results of the experiment."
        />
        <div className="flex flex-col md:flex-row mb-9">
          <div className="bg-stone-200 h-64 w-full mb-6 md:flex-1 md:basis-6/12 md:mr-3 lg:mr-6 xl:mr-12"></div>
          <p className="font-display text-lg text-justify md:flex-1 md:basis-6/12 md:ml-3 lg:ml-6 xl:ml-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse mb-9">
          <div className="bg-stone-200 h-64 w-full mb-6 md:flex-1 md:basis-6/12 md:ml-3 lg:ml-6 xl:ml-12"></div>
          <p className="font-display text-lg text-justify md:flex-1 md:basis-6/12 md:mr-3 lg:mr-6 xl:mr-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Theory;
