'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0f] text-center">
        <h1 className="mb-2 text-6xl font-black text-white">500</h1>
        <p className="mb-6 text-lg text-gray-400">Something went wrong.</p>
        <button
          onClick={() => reset()}
          className="rounded-lg bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-600"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
