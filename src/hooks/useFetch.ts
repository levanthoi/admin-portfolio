import { useEffect, useState, useCallback } from 'react';

const useFetch = (service: any) => {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await service();
      setResponse(res);
    } catch (err: any) {
      setError(err || '.....');
    } finally {
      setIsLoading(false);
    }
  }, [service]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { response, isLoading, error };
};

export default useFetch;
