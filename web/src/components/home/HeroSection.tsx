import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="bg-gray-dark text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Qualité depuis 50 ans
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Découvrez l'authenticité et la saveur des produits Bellat.
        </p>
        <div className="mt-8">
          <Link href="/products">
            <Button variant="primary">Découvrir nos produits</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
