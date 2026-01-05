"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Package, ShoppingCart, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

// This is the layout for the admin section. It acts as a protected route
// by checking if the user is authenticated.
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    if (!loggedIn) {
      // If not logged in, redirect to the admin login page
      router.replace('/admin/login');
    }
  }, [router]);

  // Handle admin logout
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setIsLoggedIn(false);
    toast.info('Déconnexion réussie.');
    router.push('/admin/login');
  };

  // If not logged in, render nothing (or a loading spinner) while redirecting
  if (!isLoggedIn) {
    return null;
  }

  // Render the admin dashboard layout if logged in
  return (
    <div className="flex min-h-screen bg-bellat-gray-light">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-gray-dark text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-bellat-red mb-8">Bellat Admin</h2>
        <nav className="flex-grow">
          <ul className="space-y-4">
            <li>
              <Link href="/admin/dashboard" className="flex items-center gap-3 text-gray-300 hover:text-white">
                <LayoutDashboard className="h-5 w-5" /> Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/orders" className="flex items-center gap-3 text-gray-300 hover:text-white">
                <ShoppingCart className="h-5 w-5" /> Commandes
              </Link>
            </li>
            <li>
              <Link href="/admin/products" className="flex items-center gap-3 text-gray-300 hover:text-white">
                <Package className="h-5 w-5" /> Produits
              </Link>
            </li>
          </ul>
        </nav>
        {/* Logout Button */}
        <Button variant="secondary" onClick={handleLogout} className="w-full mt-8">
          <LogOut className="h-5 w-5 mr-2" /> Déconnexion
        </Button>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        <header className="bg-white border-b p-4 flex justify-end items-center">
          {/* Admin header content could go here, e.g., user name */}
        </header>
        <main className="flex-grow p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
