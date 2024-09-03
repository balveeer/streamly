import { getTrendingMovies } from '@/lib/getTrendingMovies';

export default async function TrendingPage() {
  const movies = await getTrendingMovies();
    console.log(movies)
  return (
    <div>
      <h1 className='text-6xl font-bold'>Trending Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
