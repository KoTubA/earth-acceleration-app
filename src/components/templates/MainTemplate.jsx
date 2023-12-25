import Home from 'src/components/organisms/Home';
import Navigation from 'src/components/organisms/Navigation';
import Overview from 'src/components/organisms/Overview';
import Theory from 'src/components/organisms/Theory';
import Animation from 'src/components/organisms/Animation';
import Footer from 'src/components/organisms/Footer';
import Results from 'src/components/organisms/Results';
import Conclusion from 'src/components/organisms/Conclusion';

const MainTemplate = () => {
  return (
    <div className="text-neutral-900">
      <Navigation />
      <Home />
      <Overview />
      <Theory />
      <Animation />
      <Results />
      <Conclusion />
      <Footer />
    </div>
  );
};

export default MainTemplate;
