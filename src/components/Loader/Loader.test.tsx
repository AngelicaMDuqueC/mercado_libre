import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  test('renders the loading text', () => {
    const loadingText = 'Loading...';

    const { getByText } = render(<Loader loadingText={loadingText} />);

    expect(getByText(loadingText)).toBeInTheDocument();
  });

  test('does not render the loading text if it is not provided', () => {
    const { queryByText } = render(<Loader loadingText="" />);
    expect(queryByText('Loading...')).toBeNull();
  });
});
