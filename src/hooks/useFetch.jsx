import { useEffect, useState } from 'react';
import { fethDataFromApi } from '../utils/api';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);

    fethDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong...");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch; // Separate export default
