import './app.scss';
import { Layout } from 'components/Layout';
// import { DetailsView } from 'views/Details/Details';
// import { ResultsView } from 'views/Results';
import { NotFound } from 'views/NotFound';
function App() {
  return (
    <div className="App">
      <Layout>
        <NotFound />
        {/* <DetailsView /> */}
        {/* <ResultsView /> */}
      </Layout>
    </div>
  );
}

export default App;
