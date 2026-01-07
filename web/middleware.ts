import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['fr', 'ar'],

  // Used when no locale matches
  defaultLocale: 'fr',

  // Always use locale prefix
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames (exclude admin routes)
  matcher: ['/((?!api|_next|_vercel|admin|.*\\..*).*)']
};
