import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '@/data/movies';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.slug}`} className="card-hover group block overflow-hidden rounded-xl bg-[#1a1a24]">
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={movie.coverImage}
          alt={movie.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        {movie.rating && (
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-bold text-yellow-400 backdrop-blur">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {movie.rating}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="mb-1 flex items-center gap-2 text-xs text-gray-300">
            <span className="rounded border border-white/30 px-1 py-0.5">{movie.quality}</span>
            <span>{movie.year}</span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="truncate text-sm font-semibold text-white">{movie.title}</h3>
        <p className="mt-0.5 truncate text-xs text-gray-400">{movie.genres.join(' • ')}</p>
      </div>
    </Link>
  );
}
