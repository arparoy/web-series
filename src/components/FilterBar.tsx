'use client';

import { useState } from 'react';
import { allGenres } from '@/data/movies';

interface FilterBarProps {
  onFilter: (genre: string, sort: string) => void;
}

export default function FilterBar({ onFilter }: FilterBarProps) {
  const [activeGenre, setActiveGenre] = useState('All');
  const [activeSort, setActiveSort] = useState('latest');

  const genres = ['All', ...allGenres];
  const sorts = [
    { key: 'latest', label: 'Latest' },
    { key: 'rating', label: 'Top Rated' },
    { key: 'title', label: 'A-Z' },
  ];

  const handleGenre = (g: string) => {
    setActiveGenre(g);
    onFilter(g, activeSort);
  };

  const handleSort = (s: string) => {
    setActiveSort(s);
    onFilter(activeGenre, s);
  };

  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => handleGenre(g)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              activeGenre === g
                ? 'bg-brand-500 text-white'
                : 'border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        {sorts.map((s) => (
          <button
            key={s.key}
            onClick={() => handleSort(s.key)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              activeSort === s.key
                ? 'bg-white/15 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
