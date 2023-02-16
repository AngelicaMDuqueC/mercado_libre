import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { CustomHeading } from './CustomHeading';

describe('CustomHeading', () => {
  test('renders heading with correct class', () => {
    const { getByText } = render(<CustomHeading type="h1" customClass="my-class">Hello</CustomHeading>);
    const heading = getByText('Hello');
    expect(heading.tagName).toBe('H1');
    expect(heading.className).toContain('my-class');
  });
});