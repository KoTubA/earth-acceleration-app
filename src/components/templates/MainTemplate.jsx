import Home from 'src/components/organisms/Home';
import Navigation from 'src/components/organisms/Navigation';
import Overview from 'src/components/organisms/Overview';
import Theory from 'src/components/organisms/Theory';
import Animation from 'src/components/organisms/Animation';
import Footer from '../organisms/Footer';

const MainTemplate = () => {
  return (
    <>
      <Navigation />
      <Home />
      <Overview />
      <Theory />
      <Animation />
      <Footer />
    </>
  );
};

export default MainTemplate;
