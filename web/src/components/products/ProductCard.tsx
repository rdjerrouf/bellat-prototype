import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative w-full aspect-square">
          <Image
            src={product.image}
            alt={product.name_fr}
            fill
            className="object-cover"
          />
          {product.stock_status === 'low_stock' && (
             <Badge variant="warning" className="absolute top-2 right-2">
               Faible
             </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 truncate">{product.name_fr}</h3>
        <p className="text-sm text-gray-500">{product.unit}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-bellat-red">{product.price} DZD</p>
          <Button variant="primary" className="min-h-0 h-10 px-4 py-2 text-sm">
            + Ajouter
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
