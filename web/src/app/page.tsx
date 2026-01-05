import { HeroSection } from '@/components/home/HeroSection';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { PopularProducts } from '@/components/home/PopularProducts';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

// A simple skeleton loader for the sections
function SectionSkeleton() {
  return <Skeleton className="h-96 w-full" />;
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <Suspense fallback={<SectionSkeleton />}>
        <CategoryGrid />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <PopularProducts />
      </Suspense>
    </div>
  );
}
