
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch from TMDB API');
    }
    const data = await response.json();
    res.status(200).json(data.results);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching trending movies' });
  }
}
