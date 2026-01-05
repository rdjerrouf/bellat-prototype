"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/Card';
import { Label } from '@/components/ui/Label';
import { toast } from 'sonner';

// Hardcoded admin credentials as per the functional specification.
const ADMIN_EMAIL = 'admin@bellat.net';
const ADMIN_PASSWORD = 'demo123';

// This is the Admin Login Page. It's a Client Component to handle form
// input, authentication logic, and client-side redirection.
export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submission for login
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check against hardcoded credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // On successful login, store a flag in localStorage and redirect to dashboard.
      localStorage.setItem('isAdminLoggedIn', 'true');
      toast.success('Connexion réussie!');
      router.push('/admin/dashboard');
    } else {
      // On failed login, show an error toast.
      toast.error('Email ou mot de passe incorrect.');
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-bellat-gray-light py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          {/* Placeholder for Bellat Logo */}
          <Image
            src="/next.svg" // Using a placeholder image for now
            alt="Bellat Logo"
            width={100}
            height={20}
            className="mx-auto mb-4 dark:invert"
          />
          <CardTitle className="text-2xl">Administration</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Password Input with Toggle */}
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
