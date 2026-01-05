# Bellat Digital Platform - Prototype Development TODO

**Project Duration:** 4-6 Weeks  
**Target Completion:** Mid-February 2026  
**Purpose:** Investment Pitch Demo

---

## Table of Contents

1. [Week 1: Project Setup & Foundation](#week-1-project-setup--foundation)
2. [Week 2: Core Customer Features](#week-2-core-customer-features)
3. [Week 3: Shopping & Checkout Flow](#week-3-shopping--checkout-flow)
4. [Week 4: Admin Dashboard](#week-4-admin-dashboard)
5. [Week 5: Bilingual Support & Polish](#week-5-bilingual-support--polish)
6. [Week 6: Testing & Deployment](#week-6-testing--deployment)
7. [Pre-Launch Checklist](#pre-launch-checklist)

---

# Week 1: Project Setup & Foundation

## Day 1-2: Environment Setup

### Development Environment
- [x] Install Node.js (v18+)
- [x] Install Visual Studio Code (or preferred IDE)
- [x] Install Git
- [x] Create GitHub repository: `bellat-prototype`
- [x] Clone repository locally

### Project Initialization
- [x] Create Next.js 14 project with App Router
  ```bash
  npx create-next-app@latest bellat-prototype --typescript --tailwind --app
  ```
- [x] Install dependencies:
  - [x] `lucide-react` (icons)
  - [x] `next-i18next` or `next-intl` (internationalization)
  - [x] `clsx` (conditional classes)
  - [x] `date-fns` (date formatting)
- [x] Setup Tailwind config with Bellat colors
- [x] Create `.env.local` for environment variables
- [x] Setup ESLint and Prettier
- [x] Create basic folder structure:
  ```
  /src
    /app
      /[locale]
        /page.tsx (homepage)
        /products
        /cart
        /checkout
        /admin
    /components
      /ui
      /products
      /cart
      /layout
    /lib
      /data
      /utils
    /types
  /public
    /data
    /images
      /products
      /categories
  ```

### Git Setup
- [x] Create `.gitignore` (node_modules, .env.local, .next)
- [x] Initial commit: "Initial project setup"
- [x] Create `development` branch
- [x] Setup branch protection on `main`

---

## Day 3-4: Mock Data Creation

### Product Data
- [x] Create `/public/data/products.json`
- [x] Add 20-30 products with:
  - [x] 4-5 Kachir products
  - [x] 4-5 Rôtis products
  - [x] 4-5 Conserves products
  - [x] 4-5 Hot Dog products
  - [x] 4-5 Luncheon products
- [x] Each product needs:
  - [x] id, name_fr, name_ar
  - [x] category, price, unit
  - [x] description_fr, description_ar
  - [x] image path, stock_status

### Categories Data
- [x] Create `/public/data/categories.json`
- [x] Define 5 main categories with icons and images

### Mock Orders Data
- [x] Create `/public/data/mock-orders.json`
- [x] Add 10-15 sample orders with varied statuses
- [x] Include B2C and B2B examples

### Product Images
- [ ] Collect/create 20-30 product images
- [ ] Optimize images (WebP format, < 100KB each)
- [ ] Place in `/public/images/products/`
- [ ] Create category hero images
- [ ] Create placeholder image for missing products

### Utility Functions
- [x] Create `src/lib/data/products.ts` to load product data
- [x] Create `src/lib/data/categories.ts` to load categories
- [ ] Create `src/lib/data/orders.ts` to load mock orders
- [ ] Create `src/lib/utils/currency.ts` for DZD formatting
- [ ] Create `src/lib/utils/date.ts` for date formatting

---

## Day 5: UI Foundation & Design System

### Tailwind Configuration
- [x] Extend Tailwind config with Bellat colors:
  ```js
  colors: {
    bellat: {
      red: '#D42027',
      'red-dark': '#A01820',
    },
    // ... other colors
  }
  ```
- [x] Configure fonts (Inter for FR, Noto Sans Arabic for AR)
- [ ] Setup custom spacing/shadows if needed

### Base Components (`/src/components/ui/`)
- [x] `Button.tsx` (Primary, Secondary, Icon variants)
- [x] `Input.tsx` (Text input with proper styling)
- [x] `Select.tsx` (Dropdown select)
- [x] `Badge.tsx` (Stock status, order status)
- [x] `Card.tsx` (Reusable card container)
- [x] `Loading.tsx` (Spinner/skeleton loader)
- [x] `Toast.tsx` (Notification component)

### Layout Components
- [x] `Header.tsx` (Logo, search, cart, language toggle)
- [x] `Footer.tsx` (Links, contact, social media)
- [x] `BottomNav.tsx` (Mobile navigation bar)
- [ ] `Container.tsx` (Responsive container wrapper)

### TypeScript Types
- [x] Create `src/types/product.ts`
- [x] Create `src/types/category.ts`
- [x] Create `src/types/cart.ts`
- [x] Create `src/types/order.ts`

---

# Week 2: Core Customer Features

## Day 6-7: Homepage

### Layout
- [x] Create `app/[locale]/page.tsx` (homepage)
- [x] Implement hero banner section
- [ ] Create promotional carousel (optional, can be single image)
- [x] Add categories grid section
- [x] Add "Popular Products" section (display 6-8 products)
- [x] Implement responsive layout (mobile-first)

### Components
- [x] `HeroSection.tsx` (Hero banner with CTA)
- [x] `CategoryGrid.tsx` (Display all categories)
- [ ] `ProductCarousel.tsx` (Horizontal scroll of products)
- [ ] `CategoryCard.tsx` (Individual category item)

### Data Integration
- [x] Load categories from JSON
- [x] Load featured products from JSON
- [x] Implement static data fetching

### Styling
- [x] Mobile: Single column, full-width sections
- [x] Tablet: 2-column category grid
- [x] Desktop: 3-column category grid
- [x] Add smooth scroll behavior
- [x] Ensure touch targets ≥ 44px

---

## Day 8-9: Product Catalog

### Category Page (`/products/[category]`)
- [x] Create `app/[locale]/products/[category]/page.tsx`
- [x] Display category name and description
- [x] Show product grid (all products in category)
- [x] Implement filter UI (non-functional, just visual)
- [ ] Add sort dropdown (non-functional)
- [ ] Empty state if no products

### Product Card Component
- [x] Create `components/products/ProductCard.tsx`
- [x] Display: image, name, price, unit, stock badge
- [x] Add "Add to Cart" button
- [ ] Hover effects on desktop
- [x] Responsive image sizing
- [ ] Handle missing images gracefully

### Product Detail Page (`/products/[id]`)
- [x] Create `app/[locale]/products/[id]/page.tsx`
- [x] Large product image
- [x] Product name, price, unit
- [x] Stock status badge
- [x] Full description
- [x] Quantity selector (+/- buttons)
- [x] "Add to Cart" CTA button
- [ ] Back navigation
- [ ] 404 page for invalid product IDs

### Components
- [ ] `ProductGrid.tsx` (Responsive grid layout)
- [ ] `ProductImage.tsx` (Optimized image component)
- [ ] `QuantitySelector.tsx` (Increment/decrement)
- [ ] `StockBadge.tsx` (In stock, Low stock, Out of stock)

---

## Day 10: Search Functionality

### Search Interface
- [ ] Add search icon in header
- [ ] Create search input (mobile: full-width modal, desktop: expandable)
- [ ] Create `/search` page or results overlay

### Search Logic
- [ ] Simple client-side filtering by product name (FR/AR)
- [ ] Display search results in grid
- [ ] Show "No results" state
- [ ] Clear search button
- [ ] Search on Enter key or button click

### Components
- [ ] `SearchBar.tsx` (Input + icon)
- [ ] `SearchResults.tsx` (Results display)
- [ ] `EmptySearch.tsx` (No results state)

---

# Week 3: Shopping & Checkout Flow

## Day 11-12: Shopping Cart

### Cart Context/State
- [x] Create `src/context/CartContext.tsx` using React Context
- [x] Implement cart state management:
  - [x] addToCart(productId, quantity)
  - [x] removeFromCart(productId)
  - [x] updateQuantity(productId, quantity)
  - [x] clearCart()
  - [ ] getCartTotal()
  - [x] getItemCount()
- [x] Persist cart to localStorage
- [x] Load cart from localStorage on mount

### Cart Page (`/cart`)
- [x] Create `app/[locale]/cart/page.tsx`
- [x] Display cart items list
- [x] Show subtotal
- [x] "Continue Shopping" link
- [x] "Proceed to Checkout" button
- [x] Empty cart state (icon + message + CTA)

### Cart Components
- [x] `CartItem.tsx` (Product in cart with quantity controls)
- [ ] `CartSummary.tsx` (Subtotal, delivery, total)
- [ ] `EmptyCart.tsx` (Empty state)

### Header Integration
- [x] Add cart badge with item count
- [x] Update badge when cart changes
- [ ] Highlight cart icon when items added

### Add to Cart Flow
- [x] Implement add to cart on Product Detail page
- [ ] Implement add to cart on Product Card (quick add)
- [x] Show success toast notification
- [x] Update cart badge immediately

---

## Day 13-14: Checkout Flow (Mock)

### Checkout Step 1: Delivery Address
- [x] Create `app/[locale]/checkout/address/page.tsx`
- [x] Form fields:
  - [x] Full name (text input)
  - [x] Phone number (text input, +213 prefix)
  - [x] Address line 1 (text input)
  - [x] Address line 2 (optional)
  - [x] Wilaya (select dropdown)
  - [x] Commune (text input)
- [x] "Continue" button
- [x] NO validation required (prototype)
- [x] Save data to checkout context/state

### Checkout Step 2: Delivery Slot
- [x] Create `app/[locale]/checkout/delivery/page.tsx`
- [x] Display 2-3 date options (Tomorrow, Day after)
- [x] For each date, show 3 time slots:
  - [x] Morning (8h-12h)
  - [x] Afternoon (12h-17h)
  - [x] Evening (17h-21h) +200 DZD
- [x] Radio button selection
- [x] "Continue" button
- [x] Save selection to checkout context

### Checkout Step 3: Order Review
- [x] Create `app/[locale]/checkout/review/page.tsx`
- [x] Display delivery address summary
- [x] Display delivery date/time
- [x] Display cart items
- [x] Calculate totals:
  - [x] Subtotal
  - [x] Delivery fee (static: 250 DZD)
  - [x] Evening surcharge if applicable
  - [x] Grand total
- [x] Show payment method: "Cash on Delivery"
- [x] "Confirm Order" button

### Checkout Context
- [x] Create `src/context/CheckoutContext.tsx`
- [x] Store address, delivery slot, totals
- [ ] Progress indicator (Step 1/3, 2/3, 3/3)

### Components
- [ ] `CheckoutProgress.tsx` (Step indicator)
- [ ] `AddressForm.tsx` (Form component)
- [ ] `DeliverySlotPicker.tsx` (Date/time selector)
- [ ] `OrderSummary.tsx` (Review component)

---

## Day 15: Order Success & Cart Clear

### Order Success Page
- [x] Create `app/[locale]/order-success/page.tsx`
- [x] Generate fake order number (BLT-YYYYMMDD-XXXXX)
- [x] Display success checkmark icon
- [x] Show order number
- [x] Show delivery date/time
- [x] "Return to Home" button
- [ ] "View Order Details" link (non-functional)

### Logic
- [x] Clear cart after "Place Order"
- [x] Redirect to success page
- [x] No actual order saved (prototype)
- [x] Generate random order number client-side

### Components
- [ ] `SuccessMessage.tsx` (Success checkmark + message)
- [ ] `OrderConfirmation.tsx` (Order details display)

---

# Week 4: Admin Dashboard

## Day 16: Admin Authentication

### Login Page
- [x] Create `app/admin/login/page.tsx`
- [x] Email input
- [x] Password input with show/hide toggle
- [x] "Sign In" button
- [x] Bellat logo at top

### Mock Authentication
- [x] Hardcoded credentials check:
  - Email: `admin@bellat.net`
  - Password: `demo123`
- [x] Store auth state in localStorage or cookie
- [x] Redirect to dashboard on success
- [x] Show error toast for incorrect credentials

### Admin Layout
- [x] Create `app/admin/layout.tsx`
- [x] Protected route logic (check auth state)
- [x] Redirect to login if not authenticated

---

## Day 17-18: Dashboard Overview

### Dashboard Page
- [x] Create `app/admin/dashboard/page.tsx`
- [x] Top stats cards:
  - [x] Orders Today (static: 12)
  - [x] Revenue Today (static: 15,240 DZD)
  - [x] Pending Orders (static: 5)
- [x] Recent orders table (last 5 orders from mock data)
- [ ] Quick stats chart (optional, can be skipped)

### Sidebar Navigation
- [x] Create `components/admin/Sidebar.tsx`
- [x] Navigation items:
  - [x] Dashboard (active indicator)
  - [x] Orders
  - [x] Products
  - [x] Logout button
- [x] Responsive (collapse on mobile)

### Components
- [ ] `StatCard.tsx` (Metric display card)
- [ ] `RecentOrders.tsx` (Table of recent orders)
- [ ] `AdminHeader.tsx` (Top bar with logout)

---

## Day 19: Orders Management (Display Only)

### Orders List Page
- [x] Create `app/admin/orders/page.tsx`
- [x] Display all mock orders in table
- [x] Columns:
  - [x] Order number
  - [x] Customer name
  - [x] Date
  - [x] Total
  - [x] Status (with colored badge)
- [x] Search bar (non-functional UI)
- [x] Filter dropdown (non-functional)
- [x] Export button (non-functional)
- [ ] Pagination UI (if > 15 orders)

### Order Status Badges
- [x] Color coding:
  - Pending: Yellow
  - Confirmed: Blue
  - Preparing: Orange
  - Out for Delivery: Purple
  - Delivered: Green
  - Cancelled: Red

### Components
- [ ] `OrdersTable.tsx` (Table layout)
- [ ] `OrderRow.tsx` (Single row)
- [ ] `StatusBadge.tsx` (Colored status indicator)

---

## Day 20: Products Management (Display Only)

### Products List Page
- [x] Create `app/admin/products/page.tsx`
- [x] Display all products in table/grid
- [x] Columns:
  - [x] Product image (thumbnail)
  - [x] Product name (FR)
  - [x] Category
  - [x] Price
  - [x] Stock status
- [x] Search bar (non-functional UI)
- [x] "Add Product" button (non-functional or shows alert)

### Components
- [ ] `ProductsTable.tsx` (Table layout)
- [ ] `ProductRow.tsx` (Single row with image)

---

# Week 5: Bilingual Support & Polish

## Day 21-22: Internationalization (i18n)

### Setup i18n
- [x] Configure `next-i18next` or `next-intl`
- [x] Create locale files:
  - [x] `/locales/fr/common.json`
  - [x] `/locales/ar/common.json`
- [x] Translate all UI strings (buttons, labels, messages)
- [x] Implement language switcher in header

### Translation Files
- [x] Create comprehensive translation keys:
  - [x] Navigation items
  - [x] Product labels (Price, Add to Cart, etc.)
  - [x] Cart labels (Subtotal, Total, etc.)
  - [x] Checkout labels
  - [x] Admin labels
  - [x] Error messages
  - [x] Success messages

### Arabic RTL Support
- [ ] Add RTL CSS for Arabic locale
- [ ] Test layout mirroring (header, navigation, cards)
- [ ] Ensure text alignment is correct
- [ ] Fix any broken layouts in RTL
- [ ] Test number formatting (٠١٢٣ vs 0123)

### Language Toggle
- [x] Create `LanguageToggle.tsx` component
- [ ] Store language preference in localStorage
- [x] Switch locale on toggle
- [ ] Refresh page content
- [ ] Update document direction (dir="rtl" / "ltr")

---

## Day 23-24: Visual Polish & Animations

### Micro-interactions
- [ ] Add "Add to Cart" button animation (scale on click)
- [ ] Cart badge pulse animation when item added
- [ ] Smooth page transitions
- [ ] Hover effects on product cards
- [ ] Loading states for image loading
- [ ] Skeleton loaders for products (optional)

### Toast Notifications
- [x] Implement toast system (or use library like `react-hot-toast`)
- [x] Success toast: "Product added to cart!"
- [ ] Error toast: "Something went wrong"
- [ ] Auto-dismiss after 3 seconds

### Responsive Images
- [ ] Use Next.js Image component for optimization
- [ ] Lazy loading for off-screen images
- [ ] Blur placeholder for product images
- [ ] Proper alt text for accessibility

### Accessibility (Basic)
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Focus states visible on buttons/links
- [ ] Keyboard navigation works
- [ ] Color contrast meets minimum standards
- [ ] Touch targets ≥ 44×44px

---

## Day 25: Content & Assets

### Product Content
- [ ] Review all product descriptions (FR/AR)
- [ ] Ensure all products have proper names
- [ ] Check price consistency
- [ ] Verify category assignments

### Images
- [ ] Optimize all product images (WebP format, < 100KB)
- [ ] Create Bellat logo in SVG
- [ ] Add favicon
- [ ] Create category banner images
- [ ] Add placeholder for missing images

### Static Pages
- [ ] Create "About" page (optional, 1-2 paragraphs)
- [ ] Create "Contact" page:
  - [ ] Display phone, email, address
  - [ ] No form submission (just display info)
- [ ] Update footer links

---

# Week 6: Testing & Deployment

## Day 26-27: Cross-Browser & Device Testing

### Browser Testing
- [ ] Test on Chrome (latest)
- [ ] Test on Safari (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on mobile Safari (iOS)
- [ ] Test on mobile Chrome (Android)

### Device Testing
- [ ] iPhone (small screen)
- [ ] Android phone (medium screen)
- [ ] Tablet (iPad/Android)
- [ ] Desktop (1920px)
- [ ] Desktop (1366px)

### Functionality Testing
- [ ] Browse products ✓
- [ ] Search products ✓
- [ ] Add to cart ✓
- [ ] Update cart quantities ✓
- [ ] Remove from cart ✓
- [ ] Complete checkout flow ✓
- [ ] View order success ✓
- [ ] Language toggle ✓
- [ ] Admin login ✓
- [ ] Admin dashboard ✓

### Performance Testing
- [ ] Run Lighthouse audit (target: 90+ performance)
- [ ] Check page load times (< 3s on 3G)
- [ ] Optimize images if needed
- [ ] Minimize JavaScript bundle
- [ ] Enable compression

### Bug Fixes
- [ ] Fix any layout issues found
- [ ] Fix RTL layout bugs
- [ ] Fix mobile navigation issues
- [ ] Fix cart state persistence issues
- [ ] Fix any console errors

---

## Day 28: Deployment Preparation

### Code Cleanup
- [ ] Remove console.log statements
- [ ] Remove unused imports
- [ ] Remove commented code
- [ ] Format code with Prettier
- [ ] Run ESLint and fix warnings

### Environment Variables
- [ ] Create `.env.production`
- [ ] Document all env variables in README
- [ ] Add environment variables to Vercel

### Build Testing
- [ ] Run production build locally
  ```bash
  npm run build
  npm run start
  ```
- [ ] Test production build on localhost
- [ ] Verify all features work in production mode
- [ ] Check for any build errors

### Documentation
- [ ] Create comprehensive README.md:
  - [ ] Project description
  - [ ] Installation instructions
  - [ ] Development setup
  - [ ] Admin credentials
  - [ ] Demo URL
  - [ ] Tech stack
- [ ] Document known limitations
- [ ] Create DEMO_GUIDE.md for pitch presentation

---

## Day 29: Deployment to Vercel

### Vercel Setup
- [ ] Create Vercel account (if not exists)
- [ ] Connect GitHub repository
- [ ] Configure project settings
- [ ] Set environment variables
- [ ] Deploy to production

### Domain Configuration
- [ ] Use default Vercel domain: `bellat-prototype.vercel.app`
- [ ] Or configure custom domain if available
- [ ] Enable HTTPS (automatic on Vercel)

### Post-Deployment Testing
- [ ] Test live URL on mobile device
- [ ] Test live URL on desktop
- [ ] Verify all images load
- [ ] Verify language toggle works
- [ ] Test complete user journey
- [ ] Test admin dashboard

### Performance Monitoring
- [ ] Setup Vercel Analytics (optional)
- [ ] Monitor initial page loads
- [ ] Check for any runtime errors

---

## Day 30: Final Polish & Demo Prep

### Quality Assurance
- [ ] Final walkthrough of entire app
- [ ] Check all links work
- [ ] Verify error states display correctly
- [ ] Test on fresh browser (clear cache)
- [ ] Ask colleague/friend to test

### Demo Preparation
- [ ] Rehearse 5-minute demo
- [ ] Prepare backup screen recording
- [ ] Test demo on presentation device
- [ ] Prepare sample cart for demo
- [ ] Take screenshots for pitch deck
- [ ] Record screen demo video (optional)

### Backup & Documentation
- [ ] Push final code to GitHub
- [ ] Create GitHub release tag `v1.0-prototype`
- [ ] Export Vercel deployment logs
- [ ] Document any known issues in README

---

# Pre-Launch Checklist

## Essential Features ✓

- [x] Homepage with categories and products
- [x] Product browsing (category pages)
- [x] Product detail pages
- [ ] Search functionality
- [x] Shopping cart (add/remove/update)
- [x] Checkout flow (3 steps)
- [x] Order success page
- [x] Language toggle (FR/AR)
- [ ] Arabic RTL layout
- [x] Admin login
- [x] Admin dashboard with metrics
- [x] Admin orders list
- [x] Admin products list

## Technical Requirements ✓

- [ ] Mobile responsive (< 768px)
- [ ] Tablet responsive (768px-1024px)
- [ ] Desktop responsive (> 1024px)
- [ ] Loads in < 3 seconds
- [ ] No console errors
- [ ] Works offline (basic PWA) - OPTIONAL for prototype
- [x] Cart persists on reload
- [ ] Cross-browser compatible

## Content & Assets ✓

- [x] 20+ products with images
- [x] 5 categories defined
- [x] 10+ mock orders
- [x] All text translated (FR/AR)
- [ ] Bellat logo and branding
- [ ] Optimized images (< 100KB each)

## Polish & UX ✓

- [ ] Smooth animations
- [x] Toast notifications
- [ ] Loading states
- [ ] Empty states
- [ ] Error handling
- [ ] Touch-friendly (44px min)
- [ ] Accessible (basic WCAG)

## Deployment ✓

- [ ] Deployed to Vercel
- [ ] HTTPS enabled
- [ ] Public URL accessible
- [ ] No build errors
- [ ] Environment variables set

## Documentation ✓

- [ ] README.md completed
- [ ] Demo guide created
- [ ] Admin credentials documented
- [ ] Known limitations listed
- [ ] Tech stack documented

---

# Post-Prototype: Investor Pitch Checklist

## Presentation Materials

- [ ] Create pitch deck with screenshots
- [ ] Include problem/solution slides
- [ ] Show market opportunity
- [ ] Demonstrate prototype live or via video
- [ ] Prepare Q&A responses

## Demo Preparation

- [ ] Rehearse 5-minute demo
- [ ] Prepare backup screen recording
- [ ] Test demo on presentation device
- [ ] Have fallback plan if internet fails

## Follow-up Materials

- [ ] Send demo link after meeting
- [ ] Provide access to admin dashboard
- [ ] Share technical documentation
- [ ] Include development roadmap (full SRS)

---

# Success Metrics for Prototype

**The prototype is successful if:**

✅ Complete user journey works (browse → cart → checkout → success)  
✅ Looks professional and production-ready  
✅ Bilingual support works seamlessly  
✅ Admin dashboard demonstrates management capabilities  
✅ Loads quickly on mobile devices  
✅ Can be demoed confidently in 5-10 minutes  
✅ Investors understand the value proposition  
✅ Technical feasibility is proven

---

# Developer Notes

## Recommended Daily Workflow

1. **Morning:** Review TODO for the day
2. **Work Session 1:** Feature development (3-4 hours)
3. **Break:** Test on mobile device
4. **Work Session 2:** Polish and refinement (2-3 hours)
5. **End of Day:** Git commit, update TODO, test on different browser

## Git Commit Convention

```
feat: add product detail page
fix: cart badge not updating
style: improve mobile header layout
docs: update README with setup instructions
```

## Testing Checklist (Daily)

- [ ] Test on mobile device (physical)
- [ ] Test language toggle
- [ ] Check console for errors
- [ ] Verify cart persistence
- [ ] Test at least one complete user flow

## When Stuck

1. Check Next.js documentation
2. Check Tailwind CSS documentation
3. Google the specific error
4. Ask AI assistant for help
5. Take a break and come back fresh

---

**End of TODO - Good luck with the prototype! 🚀**