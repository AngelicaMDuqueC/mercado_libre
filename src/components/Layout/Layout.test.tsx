import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';

describe('Layout', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const layoutDiv = getByTestId('layout-div');
    expect(layoutDiv).toBeInTheDocument();

    const mainContent = getByTestId('main-content');
    expect(mainContent).toBeInTheDocument();
  });
});
