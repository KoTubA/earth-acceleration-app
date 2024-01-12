import { useContext } from 'react';
import Home from 'src/components/organisms/Home';
import Navigation from 'src/components/organisms/Navigation';
import Overview from 'src/components/organisms/Overview';
import Theory from 'src/components/organisms/Theory';
import Animation from 'src/components/organisms/Animation';
import Footer from 'src/components/organisms/Footer';
import Results from 'src/components/organisms/Results';
import Conclusion from 'src/components/organisms/Conclusion';
import ErrorMessage from 'src/components/molecules/ErrorMessage';
import { RaportContext } from 'src/providers/RaportProvider';
import FurtherReading from 'src/components/organisms/FurtherReading';

const MainTemplate = () => {
  const { error, errormsg } = useContext(RaportContext);

  return (
    <div className="text-neutral-900">
      <Navigation />
      <Home />
      <Overview />
      <Theory />
      <Animation />
      <FurtherReading />
      <Results />
      <Conclusion />
      <Footer />
      {error ? <ErrorMessage message={errormsg} /> : null}
    </div>
  );
};

export default MainTemplate;
