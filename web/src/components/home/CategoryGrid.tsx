import Link from 'next/link';
import { getCategories } from '@/lib/data/categories';
import { Card, CardContent } from '@/components/ui/Card';

export async function CategoryGrid() {
  const categories = await getCategories();

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Catégories</h2>
          <Link href="/categories" className="text-sm font-semibold text-bellat-red hover:underline">
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link href={`/products/${category.id}`} key={category.id}>
              <Card className="h-full transition-transform hover:scale-105 hover:shadow-xl">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="mt-4 font-semibold text-center">{category.name_fr}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
