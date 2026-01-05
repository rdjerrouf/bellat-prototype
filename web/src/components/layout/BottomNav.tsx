import Link from 'next/link';
import { Home, LayoutGrid, Search, ShoppingCart, User } from 'lucide-react';

export function BottomNav() {
  // Placeholder for active link styling
  const activePath = '/'; 

  const navItems = [
    { href: '/', label: 'Accueil', icon: Home },
    { href: '/categories', label: 'Catégories', icon: LayoutGrid },
    { href: '/search', label: 'Recherche', icon: Search },
    { href: '/cart', label: 'Panier', icon: ShoppingCart },
    { href: '/profile', label: 'Profil', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
      <div className="grid h-16 grid-cols-5">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="inline-flex flex-col items-center justify-center px-2 text-gray-500 hover:bg-gray-50 hover:text-bellat-red group"
          >
            <item.icon className="h-6 w-6 mb-1" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
