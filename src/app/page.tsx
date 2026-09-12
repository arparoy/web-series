import { Suspense } from 'react';
import HomeContent from '@/components/HomeContent';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f]" />}>
      <HomeContent />
    </Suspense>
  );
}
