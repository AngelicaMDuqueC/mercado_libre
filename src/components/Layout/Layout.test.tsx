import { render } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout', () => {
  test('renders the header and main content', () => {
    const childText = 'Child content';
    const placeholderText = 'placeholdr';

    const { getByText, getByPlaceholderText } = render(
      <Layout>
        <div>{childText}</div>
      </Layout>
    );

    expect(getByText(childText)).toBeInTheDocument();
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
});
