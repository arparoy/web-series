import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { movies, getMovieBySlug, getRelatedMovies } from '@/data/movies';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MovieCard from '@/components/MovieCard';

export function generateStaticParams() {
  return movies.map((m) => ({ slug: m.slug }));
}

export default function MovieDetail({ params }: { params: { slug: string } }) {
  const movie = getMovieBySlug(params.slug);
  if (!movie) notFound();

  const related = getRelatedMovies(params.slug, 6);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero backdrop */}
        <section className="relative h-[50vh] min-h-[300px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={movie.coverImage}
              alt={movie.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
          </div>
        </section>

        {/* Content */}
        <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row">
            {/* Poster */}
            <div className="relative aspect-[2/3] w-40 shrink-0 overflow-hidden rounded-xl shadow-2xl sm:w-52">
              <Image
                src={movie.coverImage}
                alt={movie.title}
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 pt-4">
              <h1 className="mb-3 text-3xl font-black text-white sm:text-4xl">{movie.title}</h1>
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
                {movie.platform && (
                  <span className="rounded bg-brand-500/20 px-2 py-0.5 text-xs font-medium text-brand-400">{movie.platform}</span>
                )}
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {movie.genres.map((g) => (
                  <span key={g} className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300">{g}</span>
                ))}
              </div>

              <p className="mb-6 max-w-3xl text-gray-300">{movie.description}</p>

              {/* Meta details */}
              <div className="mb-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
                {movie.director && (
                  <div>
                    <span className="text-gray-500">Director</span>
                    <p className="font-medium text-white">{movie.director}</p>
                  </div>
                )}
                {movie.language && (
                  <div>
                    <span className="text-gray-500">Language</span>
                    <p className="font-medium text-white">{movie.language}</p>
                  </div>
                )}
                {movie.fileSize && (
                  <div>
                    <span className="text-gray-500">File Size</span>
                    <p className="font-medium text-white">{movie.fileSize}</p>
                  </div>
                )}
                {movie.cast.length > 0 && (
                  <div className="col-span-2 sm:col-span-4">
                    <span className="text-gray-500">Cast</span>
                    <p className="font-medium text-white">{movie.cast.join(', ')}</p>
                  </div>
                )}
              </div>

              {/* Download links */}
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-bold text-white">Download Vault</h3>
                <div className="flex flex-wrap gap-3">
                  {movie.downloadLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-600 active:scale-95"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Trailer */}
              {movie.trailerUrl && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-bold text-white">Official Trailer</h3>
                  <div className="aspect-video max-w-2xl overflow-hidden rounded-xl">
                    <iframe
                      src={movie.trailerUrl.replace('watch?v=', 'embed/')}
                      title={`${movie.title} Trailer`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                </div>
              )}

              {/* Source link */}
              <a
                href={movie.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-400"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View original source
              </a>
            </div>
          </div>

          {/* Screenshots */}
          {movie.screenshots.length > 0 && (
            <div className="mt-12">
              <h3 className="mb-4 text-lg font-bold text-white">Screenshots</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {movie.screenshots.slice(0, 20).map((src, i) => (
                  <div key={i} className="group relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      alt={`${movie.title} screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      className="object-cover transition duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              {movie.screenshots.length > 20 && (
                <p className="mt-3 text-sm text-gray-500">
                  + {movie.screenshots.length - 20} more screenshots
                </p>
              )}
            </div>
          )}
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <h2 className="mb-5 text-2xl font-bold text-white">Related Titles</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {related.map((m) => (
                <MovieCard key={m.slug} movie={m} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
