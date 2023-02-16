import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renders a button with text', () => {
    const {getByRole} = render(<Button text="Click me" />);
    const button = getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
})