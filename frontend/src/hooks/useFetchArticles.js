import { useEffect, useState } from 'react';
import { fetchArticles } from '../services/api';

export default function useFetchArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles()
      .then(setArticles)
      .catch(err => setError(err.message || 'Unable to load articles'))
      .finally(() => setLoading(false));
  }, []);

  return { articles, loading, error };
}
