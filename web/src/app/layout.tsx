import type { ReactNode } from 'react';

export const metadata = {
  title: 'Bellat - Traditional Algerian Products',
  description: 'Discover authentic Algerian products and traditional crafts.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Just pass through - locale layout will handle html/body
  return children;
}
