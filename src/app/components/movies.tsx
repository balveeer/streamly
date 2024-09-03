
import { useTrendingMovies } from '@/lib/hooks/useTrendingMovies';

export default function TrendingMoviesPage() {
  const { movies, loading, error } = useTrendingMovies();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}