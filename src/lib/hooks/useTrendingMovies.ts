import { useState, useEffect } from 'react';

type Movie = {
  id: number;
  title: string;
  // ... other properties
};

export function useTrendingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const res = await fetch('/api/trending-movies');
        if (!res.ok) {
          throw new Error('Failed to fetch trending movies');
        }
        const data = await res.json();
        setMovies(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  return { movies, loading, error };
}
