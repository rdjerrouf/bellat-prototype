import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const cartItemCount = 0; // Placeholder

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          {/* Placeholder for Bellat Logo */}
          <span className="text-bellat-red">🔖 BELLAT</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          
          <div className="relative">
            <Button variant="icon" aria-label="Open cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-bellat-red text-xs text-white">
                {cartItemCount}
              </span>
            )}
          </div>

          {/* Placeholder for Language Toggle */}
          <div className="ml-2">
            <Button variant="secondary" className="min-h-0 h-11 px-4 py-2 text-sm">
              AR ▼
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
