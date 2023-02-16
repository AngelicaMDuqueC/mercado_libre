import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.mercadolibre.com/';

export type Item = {
  id: string;
  title: string;
  condition: string;
  category_id: string;
  thumbnail: string;
  currency_id: string;
  price: number;
  tags: [];
  shipping: {
    free_shipping: false;
  };
  seller: {
    id: number;
    nickname: string;
  };
  pictures: {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
  }[];
};

type Filter = {
  id: string;
  name: string;
  values: [
    {
      id: string;
      name: string;
      path_from_root: [
        {
          id: string;
          name: string;
        }
      ];
    }
  ];
};

type SearchResult = {
  site_id: string;
  query: string;
  results: Item[];
  filters: Filter;
};

type SugestedQuery = {
  match_end: number;
  match_start: number;
  q: string;
};

type AutosuggestReponse = {
  q: string;
  suggested_queries: SugestedQuery[];
};

export type ResponseDescription = {
  text: string;
  plain_text: string;
};
type ResponseTypes = SearchResult | AutosuggestReponse | ResponseDescription | null;
type UseAxiosHook = {
  response: ResponseTypes;
  error: string;
  loading: boolean;
  fetchData: (path: string) => Promise<void>;
};

export const useAxios = (): UseAxiosHook => {
  const [response, setResponse] = useState<ResponseTypes>(null);
  const [error, setError] = useState<string>('');
  const [loading, setloading] = useState<boolean>(true);
  const [controller, setController] = useState<AbortController>();
  const fetchData = async <T extends ResponseTypes>(path: string): Promise<void> => {
    setResponse(null);
    try {
      const ctrl = new AbortController();
      setController(ctrl);
      const { data } = await axios.get<T>(path, { signal: ctrl.signal });
      console.log(data);
      setResponse(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    console.log(controller);
    setResponse(null);
    return () => {
      controller && controller.abort();
      setResponse(null);
    };
  }, [controller]);

  return { response, error, loading, fetchData };
};
