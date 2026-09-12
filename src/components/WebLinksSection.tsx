import type { WebLinkCategory } from '@/data/weblinks';

const iconMap: Record<string, string> = {
  download: 'M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2',
  book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  shuffle: 'M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5',
};

export default function WebLinksSection({ category }: { category: WebLinkCategory }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconMap[category.icon] || iconMap.download} />
          </svg>
        </span>
        <h2 className="text-2xl font-bold text-white">{category.title}</h2>
        <span className="text-sm text-gray-500">({category.links.length})</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover group flex items-start gap-3 rounded-xl border border-white/5 bg-[#1a1a24] p-4"
          >
            <div className="flex-1 min-w-0">
              <h3 className="truncate font-semibold text-white transition group-hover:text-brand-400">
                {link.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-gray-400">{link.description}</p>
            </div>
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-gray-600 transition group-hover:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}
