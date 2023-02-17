import { render } from '@testing-library/react';
import { RenderList } from './RenderList';

describe('RenderList', () => {
  test('renders the search results correctly', () => {
    const searchItems: Partial<Item>[] = [
      { id: '1', title: 'Item 1' },
      { id: '2', title: 'Item 2' },
      { id: '3', title: 'Item 3' }
    ];

    const { container } = render(
      <RenderList
        itemList={searchItems}
        render={(item) => {
          return <div>{item.title}</div>;
        }}
      />
    );

    const listItems = container.querySelectorAll('li');

    expect(listItems.length).toBe(searchItems.length);

    listItems.forEach((item, index) => {
      expect(item.textContent).toBe(searchItems[index].title);
    });
  });
});
