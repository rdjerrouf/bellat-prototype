import Link from 'next/link';
import { getPopularProducts } from '@/lib/data/products';
import { ProductCard } from '@/components/products/ProductCard';

export async function PopularProducts() {
  const popularProducts = await getPopularProducts(4); // Get 4 popular products

  return (
    <div className="bg-bellat-gray-light">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Produits Populaires</h2>
          <Link href="/products" className="text-sm font-semibold text-bellat-red hover:underline">
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
