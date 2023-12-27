import MainTemplate from 'src/components/templates/MainTemplate';
import RaportProvider from 'src/providers/RaportProvider';

const App = () => {
  return (
    <RaportProvider>
      <MainTemplate />
    </RaportProvider>
  );
};

export default App;
