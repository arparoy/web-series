import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '@/data/movies';

export default function Hero({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={movie.coverImage}
          alt={movie.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-12 sm:px-6">
        <div className="animate-slide-up max-w-2xl">
          <span className="mb-3 inline-block rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-400">
            Featured
          </span>
          <h1 className="mb-3 text-4xl font-black text-white sm:text-5xl md:text-6xl">
            {movie.title}
          </h1>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-300">
            {movie.rating && (
              <span className="flex items-center gap-1 font-semibold text-yellow-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {movie.rating}
              </span>
            )}
            <span>{movie.year}</span>
            <span className="text-gray-600">•</span>
            <span>{movie.duration}</span>
            <span className="text-gray-600">•</span>
            <span className="rounded border border-white/20 px-1.5 py-0.5 text-xs">{movie.quality}</span>
          </div>
          <p className="mb-6 line-clamp-3 max-w-xl text-base text-gray-300 sm:text-lg">
            {movie.description}
          </p>
          <div className="flex gap-3">
            <Link
              href={`/movie/${movie.slug}`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch & Download
            </Link>
            <Link
              href={`/movie/${movie.slug}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10 active:scale-95"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
