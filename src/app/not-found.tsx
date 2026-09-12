import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0f] text-center">
      <h1 className="mb-2 text-6xl font-black gradient-text">404</h1>
      <p className="mb-6 text-lg text-gray-400">This title could not be found.</p>
      <Link href="/" className="rounded-lg bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-600">
        Back to Home
      </Link>
    </div>
  );
}
