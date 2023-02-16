import { renderHook, waitFor, act } from '@testing-library/react';
import { vi } from 'vitest';
import axios from 'axios';
import { useAxios, Item } from './useAxios';

vi.spyOn(axios, 'get').mockImplementation((path: string) => {
  if (path === 'invalid_path') {
    return Promise.reject(new Error('404 Not Found'));
  } else {
    const item: Item = {
      id: '1',
      title: 'Test Item',
      condition: 'new',
      category_id: '123',
      thumbnail: 'http://example.com/test-item.jpg',
      currency_id: 'USD',
      price: 10,
      tags: [],
      shipping: {
        free_shipping: false
      },
      seller: {
        id: 1,
        nickname: 'test_seller'
      },
      pictures: []
    };
    const searchResult = {
      site_id: 'MLA',
      query: 'test',
      results: [item],
      filters: {
        id: 'category',
        name: 'Category',
        values: []
      }
    };
    return Promise.resolve({ data: searchResult });
  }
});

describe('useAxios', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  test('should fetch data successfully', async () => {
    const { result } = renderHook(() => useAxios());
    expect(result.current.loading).toBe(true);
    await act(async () => await result.current.fetchData('valid_path'));
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe('');
    });
  });

  test('should handle errors when fetching data', async () => {
    const { result } = renderHook(() => useAxios());
    expect(result.current.loading).toBe(true);
    await act(async () => await result.current.fetchData('invalid_path'));
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe('Request failed with status code 404');
      expect(result.current.response).toBeNull();
    });
  });
});
