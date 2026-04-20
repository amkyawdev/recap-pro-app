import { Movie } from '../types';

export const seedMovies = async (db: any) => {
  const movies: Movie[] = [
    {
      id: '1',
      title: 'Inception',
      year: 2010,
      posterUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Ber.jpg',
      overview: 'A thief who steals corporate secrets through dream-sharing technology.',
      genre: ['Action', 'Sci-Fi', 'Thriller'],
      rating: 8.8,
      runtime: 148,
      director: 'Christopher Nolan',
      cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    },
  ];
  
  for (const movie of movies) {
    await db.movies.insertOne(movie);
  }
};