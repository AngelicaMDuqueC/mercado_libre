import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { Card, useCard } from './Card';

describe('Card', () => {
  test('renders without crashing', () => {
    const item = {
      price: 99.99,
      title: 'Test Product',
      tags: ['tag1', 'tag2']
    };
    const cssClassCard = {
      classCard: 'test-class',
      classTag: 'test-class',
      classTitle: 'test-class',
      classPrice: 'test-class'
    };
    const onClick = vi.fn();
    const { getByTestId } = render(
      <Card item={item} cssClassCard={cssClassCard} onClick={onClick} className="test-class">
        <Card.PriceAndTitle />
        <Card.CardImg imgSrc="test.png" title="Test Image" />
      </Card>
    );

    const cardDiv = getByTestId('card-div');
    expect(cardDiv).toBeInTheDocument();

    const priceHeading = getByTestId('price-heading');
    expect(priceHeading).toBeInTheDocument();

    const titleHeading = getByTestId('title-heading');
    expect(titleHeading).toBeInTheDocument();

    const cardImg = getByTestId('card-img');
    expect(cardImg).toBeInTheDocument();
    expect(cardImg).toHaveAttribute('src', 'test.png');
    expect(cardImg).toHaveAttribute('alt', 'Test Image');
  });

  test('throws an error when useCard is not used within Card', () => {
    const TestComponent = () => {
      useCard();
      return null;
    };

    expect(() => render(<TestComponent />)).toThrow('useCard must be used within a <Card />');
  });
});
