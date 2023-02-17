import './app.scss';
import { Layout } from 'components/Layout';
import { DetailsView, ResultsView, NotFound } from 'views';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/items">
            <Route index element={<ResultsView />} />
            <Route path=":id" element={<DetailsView />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
