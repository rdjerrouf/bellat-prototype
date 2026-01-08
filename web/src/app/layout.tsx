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
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
