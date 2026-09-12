'use client';

import { useMemo, useState } from 'react';
import { movies as allMovies } from '@/data/movies';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MovieGrid from '@/components/MovieGrid';
import FilterBar from '@/components/FilterBar';
import Footer from '@/components/Footer';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HomeContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [genre, setGenre] = useState('All');
  const [sort, setSort] = useState('latest');

  const featured = allMovies.find((m) => m.featured) || allMovies[0];
  const trending = allMovies.filter((m) => m.trending);

  const filtered = useMemo(() => {
    let result = [...allMovies];

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.genres.some((g) => g.toLowerCase().includes(q)) ||
          m.cast.some((c) => c.toLowerCase().includes(q))
      );
    }

    if (genre !== 'All') {
      result = result.filter((m) => m.genres.includes(genre));
    }

    switch (sort) {
      case 'rating':
        result.sort((a, b) => parseFloat(b.rating || '0') - parseFloat(a.rating || '0'));
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        result.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    }

    return result;
  }, [query, genre, sort]);

  return (
    <>
      <Navbar />
      <main>
        {!query && <Hero movie={featured} />}

        {!query && trending.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <h2 className="mb-5 text-2xl font-bold text-white">
              🔥 Trending Now
            </h2>
            <MovieGrid movies={trending} />
          </section>
        )}

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              {query ? `Results for "${query}"` : 'Latest Releases'}
            </h2>
            <span className="text-sm text-gray-500">
              {filtered.length} {filtered.length === 1 ? 'title' : 'titles'}
            </span>
          </div>
          <FilterBar onFilter={(g, s) => { setGenre(g); setSort(s); }} />
          <MovieGrid movies={filtered} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f]" />}>
      <HomeContent />
    </Suspense>
  );
}
