# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bellat Digital Platform is a high-fidelity e-commerce prototype built for investor pitch purposes. This is **NOT** a production application - it uses mock data, simulated backend interactions, and simplified workflows. The focus is on visual appeal and demonstrating the core B2C customer journey.

**Key Constraints:**
- No real database - all data from static JSON files in `web/public/data/`
- No real backend API - all interactions are client-side
- Mock checkout flow - no real payment processing or data validation
- Admin dashboard is display-only with hardcoded login (`admin@bellat.net` / `demo123`)

## Development Commands

All commands should be run from the `web/` directory:

```bash
cd web

# Development
npm run dev              # Start dev server at http://localhost:3000

# Build & Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint

# Image Optimization
npm run optimize-images  # Optimize images using scripts/optimize-images.js
```

## MCP Integration

This project has the **Chrome DevTools MCP** server configured for browser automation and testing.

### Chrome DevTools MCP

**Configuration:** `.mcp.json` (project-level)
```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "chrome-devtools-mcp@latest",
        "--browserUrl",
        "http://127.0.0.1:9222"
      ]
    }
  }
}
```

**Status Check:**
```bash
claude mcp list          # View all MCP servers
claude mcp get chrome-devtools  # Check connection status
```

**Capabilities:**
- Navigate to pages in Chrome
- Take screenshots of the application
- Execute JavaScript in browser context
- Inspect DOM elements and structure
- Monitor console logs and network requests
- Test UI/UX flows directly in browser

**Usage:**
The Chrome DevTools MCP allows Claude Code to interact with the running application in a real browser, making it possible to test pages, debug issues, and capture screenshots for documentation or demos.

**Chrome Connection:**
- DevTools listens on: `ws://127.0.0.1:9222`
- Browser URL: `http://127.0.0.1:9222`

## Architecture Overview

### Next.js App Router Structure

The app uses Next.js 15.5.9 App Router with a **locale-based routing pattern**:

```
web/src/app/
├── [locale]/              # Internationalized routes (FR/AR)
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Locale layout wrapper
│   ├── cart/             # Shopping cart
│   ├── checkout/         # Multi-step checkout flow
│   │   ├── address/
│   │   ├── delivery/
│   │   └── review/
│   ├── order-success/    # Post-checkout success page
│   ├── products/
│   │   ├── [id]/        # Product detail pages
│   │   └── categories/[category]/  # Category listing pages
│   └── search/          # Search results
├── admin/               # Admin dashboard (NOT localized)
│   ├── login/
│   ├── dashboard/
│   ├── orders/
│   └── products/
├── layout.tsx          # Root layout
└── page.tsx            # Root redirect page
```

**Important:** Customer-facing pages live under `[locale]/`, admin pages are separate and not internationalized.

### Internationalization (i18n)

- **Library:** `next-intl` v4.7.0 configured in `i18n.ts`
- **Locales:** `fr` (French - default) and `ar` (Arabic)
- **Middleware:** `middleware.ts` handles locale routing with `localePrefix: 'always'`
- **Translation files:** `messages/fr.json` and `messages/ar.json`
- **RTL Support:** Arabic locale requires RTL layout handling

**Critical Configuration:**
- `i18n.ts` must use `requestLocale` parameter (not `locale`) for Next.js 15 compatibility
- `NextIntlClientProvider` in locale layout MUST include `locale={locale}` prop for client components
- Fallback logic in `i18n.ts` prevents "undefined.json" errors

To add new translatable strings:
1. Add keys to both `messages/fr.json` and `messages/ar.json`
2. Use `useTranslations()` hook in components
3. Access via `t('key.path')`

**Configuration Example (`i18n.ts`):**
```typescript
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale) {
    // Fallback logic using headers
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || '';
    const match = pathname.match(/^\/(fr|ar)(\/|$)/);
    locale = match ? match[1] : 'fr';
  }
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
```

**Locale Layout Configuration:**
```typescript
<NextIntlClientProvider messages={messages} locale={locale}>
  {/* Critical: locale prop ensures useLocale() works in client components */}
</NextIntlClientProvider>
```

### State Management

**Cart Context** (`src/context/CartContext.tsx`):
- Global cart state using React Context
- Persists to `localStorage` with key `bellat_cart`
- Wrapped around locale layout in `[locale]/layout.tsx`
- Access via `useCart()` hook

**Key Cart Methods:**
```typescript
const {
  cartItems,           // CartItem[]
  addToCart,          // (product, quantity) => void
  removeFromCart,     // (productId) => void
  updateQuantity,     // (productId, newQuantity) => void
  clearCart,          // () => void
  itemCount,          // number
  subtotal,           // number
  total,              // number
  getTotalQuantityForProduct  // (productId) => number
} = useCart();
```

### Data Layer

**Mock Data Location:** `web/public/data/`
- `products.json` - Product catalog with bilingual fields
- `categories.json` - Product categories
- `mock-orders.json` - Fake orders for admin dashboard

**TypeScript Types:** `web/src/types/`
- `product.ts` - Product shape with `name_fr`, `name_ar`, `description_fr`, `description_ar`
- `category.ts` - Category shape
- `order.ts` - Order shape
- `cart.ts` - CartItem shape

**Important:** All product and category names/descriptions have separate `_fr` and `_ar` fields.

### Component Organization

```
web/src/components/
├── cart/          # Cart-specific components (CartItem)
├── checkout/      # Checkout flow components
├── home/          # Homepage sections (HeroSection, CategoryGrid, PopularProducts)
├── layout/        # Layout components (Header, Footer, BottomNav, LocaleSwitcher)
├── products/      # Product components (ProductCard, AddToCartForm, QuantitySelector, StockBadge)
└── ui/            # Reusable UI primitives (Button, Input, Card, Badge, etc.)
```

### Styling

- **Framework:** Tailwind CSS 4
- **Custom Colors:** Defined in `tailwind.config.ts`
  - `bellat-red` (#D42027) - Primary brand color
  - `bellat-red-dark` (#A01820) - Hover/dark variant
  - `bellat-gray-light` (#F5F5F5) - Backgrounds
  - `bellat-gray-dark` (#333333) - Text
  - `bellat-success` (#10B981) - Success states
  - `bellat-warning` (#F59E0B) - Warning states
- **Fonts:**
  - `font-inter` - Latin text (French)
  - `font-noto` - Arabic text
- **Mobile-First:** Design prioritizes mobile experience

### Image Handling

- **Next.js Image component** configured in `next.config.ts`
- Formats: WebP and AVIF enabled
- Images stored in `web/public/images/`
- Script available: `npm run optimize-images`

## Important Development Notes

### Admin Dashboard
- **NOT internationalized** - admin routes are outside `[locale]/`
- Mock authentication only - check happens client-side
- All data is read-only from JSON files
- Do not build real CRUD functionality

### Checkout Flow
- Three steps: Address → Delivery Slot → Review
- No validation, no real API calls
- On "Place Order", just generate fake order number and clear cart
- Redirect to `/order-success` with mock order ID

### Data Fetching
- All data loaded from JSON files using `import` or `fetch('/data/file.json')`
- No server-side data mutations
- No database queries

### Adding New Features
When adding features, maintain the prototype nature:
- Use mock data from JSON files
- Client-side logic only
- Focus on UI/UX over functionality
- Bilingual support required for customer-facing features
- Keep admin features read-only

## Technology Stack Summary

- **Framework:** Next.js 15.5.9 (App Router)
- **React:** 19.2.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **i18n:** next-intl v4.7.0
- **Icons:** lucide-react
- **Date Handling:** date-fns
- **UI Utilities:** clsx, @radix-ui/react-label
- **Notifications:** sonner
- **Deployment Target:** Vercel

## Troubleshooting

### Issue: Locale not working in client components

**Symptoms:**
- Client components using `useLocale()` return wrong locale value
- Components show French content on Arabic routes (`/ar`)
- Links point to wrong locale paths

**Solution:**
Ensure `NextIntlClientProvider` includes the `locale` prop in `src/app/[locale]/layout.tsx`:

```typescript
<NextIntlClientProvider messages={messages} locale={locale}>
```

Without this prop, client components cannot access the correct locale context.

### Issue: "Cannot find module './undefined.json'" error

**Symptoms:**
- Error in `i18n.ts` when trying to import locale message file
- `locale` parameter is `undefined`

**Solution:**
Use `requestLocale` parameter instead of `locale` in `i18n.ts` for Next.js 15:

```typescript
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  // Add fallback logic if locale is still undefined
  if (!locale) {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || '';
    const match = pathname.match(/^\/(fr|ar)(\/|$)/);
    locale = match ? match[1] : 'fr';
  }
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
```

### Issue: Next.js 16.x compatibility issues

**Symptoms:**
- Font loading errors with Geist fonts
- 404 pages despite 200 status codes
- Module resolution errors with `@vercel/turbopack-next`

**Solution:**
The project uses Next.js 15.5.9 for stable compatibility with next-intl v4.7.0. If you accidentally upgrade to Next.js 16.x, downgrade:

```bash
npm install next@15 react@19 react-dom@19
```

### Dev Server Issues

If the dev server shows errors:
1. Check the background process output: `cat /tmp/claude/-Users-ryad-bellat-prototype/tasks/*.output`
2. Restart the dev server: `npm run dev`
3. Clear Next.js cache: `rm -rf .next`
4. Verify locale message files exist: `ls web/messages/`
