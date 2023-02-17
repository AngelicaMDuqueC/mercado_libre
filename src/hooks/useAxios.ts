import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.mercadolibre.com/';

type UseAxiosHook = {
  response: Response | null;
  error: string;
  loading: boolean;
  fetchData: (path: string) => Promise<void>;
};

/*
 * UseSxios hook to get request to Rest appi
 *
 * @param pathToFectch  string param to generate a get once the componet is inicializated .
 * @returns response, error, loading fetchData
 */
export const useAxios = (pathToFectch?: string): UseAxiosHook => {
  const [response, setResponse] = useState<Response | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setloading] = useState<boolean>(true);
  const [controller, setController] = useState<AbortController>();

  const fetchData = async <T extends Response>(path: string): Promise<void> => {
    setResponse(null);
    try {
      const ctrl = new AbortController();
      setController(ctrl);
      const { data } = await axios.get<T>(path, { signal: ctrl.signal });
      setResponse(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    setResponse(response);
    return () => {
      controller && controller.abort();
      setResponse(null);
    };
  }, [controller, response]);

  useEffect(() => {
    if (pathToFectch) {
      fetchData(pathToFectch);
    }
  }, []);

  return { response, error, loading, fetchData };
};
