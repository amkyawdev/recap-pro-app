import Link from 'next/link';
import { Movie } from '@/types/movie';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/edit/${movie.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-[2/3] bg-gray-200 relative">
          {movie.posterUrl ? (
            <img 
              src={movie.posterUrl} 
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              🎬
            </div>
          )}
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            ⭐ {movie.rating.toFixed(1)}
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-medium text-gray-900 truncate">{movie.title}</h3>
          <p className="text-sm text-gray-500">{movie.year}</p>
        </div>
      </div>
    </Link>
  );
}