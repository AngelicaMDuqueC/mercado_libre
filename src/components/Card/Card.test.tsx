import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { useCard, Card } from './Card';



describe('useCard', () => {
  test('throws an error when used outside of CardContext', () => {
    function Component() {
      useCard();
      console.log(useCard());
      return null;
    }
    expect(() => render(<Component />)).toThrow('useCard must be used within a <Card />');
  });

})

describe('CustomHeading', () => {
  test('renders heading with correct tagName', () => {
    const { getByText } = render(<Card><h1>Hello</h1></Card>);
    const heading = getByText('Hello');
    expect(heading.tagName).toBe('H1');
  });
});

