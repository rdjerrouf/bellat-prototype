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
- [ ] Install Node.js (v18+)
- [ ] Install Visual Studio Code (or preferred IDE)
- [ ] Install Git
- [ ] Create GitHub repository: `bellat-prototype`
- [ ] Clone repository locally

### Project Initialization
- [ ] Create Next.js 14 project with App Router
  ```bash
  npx create-next-app@latest bellat-prototype --typescript --tailwind --app
  ```
- [ ] Install dependencies:
  - [ ] `lucide-react` (icons)
  - [ ] `next-i18next` or `next-intl` (internationalization)
  - [ ] `clsx` (conditional classes)
  - [ ] `date-fns` (date formatting)
- [ ] Setup Tailwind config with Bellat colors
- [ ] Create `.env.local` for environment variables
- [ ] Setup ESLint and Prettier
- [ ] Create basic folder structure:
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
- [ ] Create `.gitignore` (node_modules, .env.local, .next)
- [ ] Initial commit: "Initial project setup"
- [ ] Create `development` branch
- [ ] Setup branch protection on `main`

---

## Day 3-4: Mock Data Creation

### Product Data
- [ ] Create `/public/data/products.json`
- [ ] Add 20-30 products with:
  - [ ] 4-5 Kachir products
  - [ ] 4-5 Rôtis products
  - [ ] 4-5 Conserves products
  - [ ] 4-5 Hot Dog products
  - [ ] 4-5 Luncheon products
- [ ] Each product needs:
  - [ ] id, name_fr, name_ar
  - [ ] category, price, unit
  - [ ] description_fr, description_ar
  - [ ] image path, stock_status

### Categories Data
- [ ] Create `/public/data/categories.json`
- [ ] Define 5 main categories with icons and images

### Mock Orders Data
- [ ] Create `/public/data/mock-orders.json`
- [ ] Add 10-15 sample orders with varied statuses
- [ ] Include B2C and B2B examples

### Product Images
- [ ] Collect/create 20-30 product images
- [ ] Optimize images (WebP format, < 100KB each)
- [ ] Place in `/public/images/products/`
- [ ] Create category hero images
- [ ] Create placeholder image for missing products

### Utility Functions
- [ ] Create `src/lib/data/products.ts` to load product data
- [ ] Create `src/lib/data/categories.ts` to load categories
- [ ] Create `src/lib/data/orders.ts` to load mock orders
- [ ] Create `src/lib/utils/currency.ts` for DZD formatting
- [ ] Create `src/lib/utils/date.ts` for date formatting

---

## Day 5: UI Foundation & Design System

### Tailwind Configuration
- [ ] Extend Tailwind config with Bellat colors:
  ```js
  colors: {
    bellat: {
      red: '#D42027',
      'red-dark': '#A01820',
    },
    // ... other colors
  }
  ```
- [ ] Configure fonts (Inter for FR, Noto Sans Arabic for AR)
- [ ] Setup custom spacing/shadows if needed

### Base Components (`/src/components/ui/`)
- [ ] `Button.tsx` (Primary, Secondary, Icon variants)
- [ ] `Input.tsx` (Text input with proper styling)
- [ ] `Select.tsx` (Dropdown select)
- [ ] `Badge.tsx` (Stock status, order status)
- [ ] `Card.tsx` (Reusable card container)
- [ ] `Loading.tsx` (Spinner/skeleton loader)
- [ ] `Toast.tsx` (Notification component)

### Layout Components
- [ ] `Header.tsx` (Logo, search, cart, language toggle)
- [ ] `Footer.tsx` (Links, contact, social media)
- [ ] `BottomNav.tsx` (Mobile navigation bar)
- [ ] `Container.tsx` (Responsive container wrapper)

### TypeScript Types
- [ ] Create `src/types/product.ts`
- [ ] Create `src/types/category.ts`
- [ ] Create `src/types/cart.ts`
- [ ] Create `src/types/order.ts`

---

# Week 2: Core Customer Features

## Day 6-7: Homepage

### Layout
- [ ] Create `app/[locale]/page.tsx` (homepage)
- [ ] Implement hero banner section
- [ ] Create promotional carousel (optional, can be single image)
- [ ] Add categories grid section
- [ ] Add "Popular Products" section (display 6-8 products)
- [ ] Implement responsive layout (mobile-first)

### Components
- [ ] `HeroSection.tsx` (Hero banner with CTA)
- [ ] `CategoryGrid.tsx` (Display all categories)
- [ ] `ProductCarousel.tsx` (Horizontal scroll of products)
- [ ] `CategoryCard.tsx` (Individual category item)

### Data Integration
- [ ] Load categories from JSON
- [ ] Load featured products from JSON
- [ ] Implement static data fetching

### Styling
- [ ] Mobile: Single column, full-width sections
- [ ] Tablet: 2-column category grid
- [ ] Desktop: 3-column category grid
- [ ] Add smooth scroll behavior
- [ ] Ensure touch targets ≥ 44px

---

## Day 8-9: Product Catalog

### Category Page (`/products/[category]`)
- [ ] Create `app/[locale]/products/[category]/page.tsx`
- [ ] Display category name and description
- [ ] Show product grid (all products in category)
- [ ] Implement filter UI (non-functional, just visual)
- [ ] Add sort dropdown (non-functional)
- [ ] Empty state if no products

### Product Card Component
- [ ] Create `components/products/ProductCard.tsx`
- [ ] Display: image, name, price, unit, stock badge
- [ ] Add "Add to Cart" button
- [ ] Hover effects on desktop
- [ ] Responsive image sizing
- [ ] Handle missing images gracefully

### Product Detail Page (`/products/[id]`)
- [ ] Create `app/[locale]/products/[id]/page.tsx`
- [ ] Large product image
- [ ] Product name, price, unit
- [ ] Stock status badge
- [ ] Full description
- [ ] Quantity selector (+/- buttons)
- [ ] "Add to Cart" CTA button
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
- [ ] Create `src/context/CartContext.tsx` using React Context
- [ ] Implement cart state management:
  - [ ] addToCart(productId, quantity)
  - [ ] removeFromCart(productId)
  - [ ] updateQuantity(productId, quantity)
  - [ ] clearCart()
  - [ ] getCartTotal()
  - [ ] getItemCount()
- [ ] Persist cart to localStorage
- [ ] Load cart from localStorage on mount

### Cart Page (`/cart`)
- [ ] Create `app/[locale]/cart/page.tsx`
- [ ] Display cart items list
- [ ] Show subtotal
- [ ] "Continue Shopping" link
- [ ] "Proceed to Checkout" button
- [ ] Empty cart state (icon + message + CTA)

### Cart Components
- [ ] `CartItem.tsx` (Product in cart with quantity controls)
- [ ] `CartSummary.tsx` (Subtotal, delivery, total)
- [ ] `EmptyCart.tsx` (Empty state)

### Header Integration
- [ ] Add cart badge with item count
- [ ] Update badge when cart changes
- [ ] Highlight cart icon when items added

### Add to Cart Flow
- [ ] Implement add to cart on Product Detail page
- [ ] Implement add to cart on Product Card (quick add)
- [ ] Show success toast notification
- [ ] Update cart badge immediately

---

## Day 13-14: Checkout Flow (Mock)

### Checkout Step 1: Delivery Address
- [ ] Create `app/[locale]/checkout/address/page.tsx`
- [ ] Form fields:
  - [ ] Full name (text input)
  - [ ] Phone number (text input, +213 prefix)
  - [ ] Address line 1 (text input)
  - [ ] Address line 2 (optional)
  - [ ] Wilaya (select dropdown)
  - [ ] Commune (text input)
- [ ] "Continue" button
- [ ] NO validation required (prototype)
- [ ] Save data to checkout context/state

### Checkout Step 2: Delivery Slot
- [ ] Create `app/[locale]/checkout/delivery/page.tsx`
- [ ] Display 2-3 date options (Tomorrow, Day after)
- [ ] For each date, show 3 time slots:
  - [ ] Morning (8h-12h)
  - [ ] Afternoon (12h-17h)
  - [ ] Evening (17h-21h) +200 DZD
- [ ] Radio button selection
- [ ] "Continue" button
- [ ] Save selection to checkout context

### Checkout Step 3: Order Review
- [ ] Create `app/[locale]/checkout/review/page.tsx`
- [ ] Display delivery address summary
- [ ] Display delivery date/time
- [ ] Display cart items
- [ ] Calculate totals:
  - [ ] Subtotal
  - [ ] Delivery fee (static: 250 DZD)
  - [ ] Evening surcharge if applicable
  - [ ] Grand total
- [ ] Show payment method: "Cash on Delivery"
- [ ] "Confirm Order" button

### Checkout Context
- [ ] Create `src/context/CheckoutContext.tsx`
- [ ] Store address, delivery slot, totals
- [ ] Progress indicator (Step 1/3, 2/3, 3/3)

### Components
- [ ] `CheckoutProgress.tsx` (Step indicator)
- [ ] `AddressForm.tsx` (Form component)
- [ ] `DeliverySlotPicker.tsx` (Date/time selector)
- [ ] `OrderSummary.tsx` (Review component)

---

## Day 15: Order Success & Cart Clear

### Order Success Page
- [ ] Create `app/[locale]/order-success/page.tsx`
- [ ] Generate fake order number (BLT-YYYYMMDD-XXXXX)
- [ ] Display success checkmark icon
- [ ] Show order number
- [ ] Show delivery date/time
- [ ] "Return to Home" button
- [ ] "View Order Details" link (non-functional)

### Logic
- [ ] Clear cart after "Place Order"
- [ ] Redirect to success page
- [ ] No actual order saved (prototype)
- [ ] Generate random order number client-side

### Components
- [ ] `SuccessMessage.tsx` (Success checkmark + message)
- [ ] `OrderConfirmation.tsx` (Order details display)

---

# Week 4: Admin Dashboard

## Day 16: Admin Authentication

### Login Page
- [ ] Create `app/admin/login/page.tsx`
- [ ] Email input
- [ ] Password input with show/hide toggle
- [ ] "Sign In" button
- [ ] Bellat logo at top

### Mock Authentication
- [ ] Hardcoded credentials check:
  - Email: `admin@bellat.net`
  - Password: `demo123`
- [ ] Store auth state in localStorage or cookie
- [ ] Redirect to dashboard on success
- [ ] Show error toast for incorrect credentials

### Admin Layout
- [ ] Create `app/admin/layout.tsx`
- [ ] Protected route logic (check auth state)
- [ ] Redirect to login if not authenticated

---

## Day 17-18: Dashboard Overview

### Dashboard Page
- [ ] Create `app/admin/dashboard/page.tsx`
- [ ] Top stats cards:
  - [ ] Orders Today (static: 12)
  - [ ] Revenue Today (static: 15,240 DZD)
  - [ ] Pending Orders (static: 5)
- [ ] Recent orders table (last 5 orders from mock data)
- [ ] Quick stats chart (optional, can be skipped)

### Sidebar Navigation
- [ ] Create `components/admin/Sidebar.tsx`
- [ ] Navigation items:
  - [ ] Dashboard (active indicator)
  - [ ] Orders
  - [ ] Products
  - [ ] Logout button
- [ ] Responsive (collapse on mobile)

### Components
- [ ] `StatCard.tsx` (Metric display card)
- [ ] `RecentOrders.tsx` (Table of recent orders)
- [ ] `AdminHeader.tsx` (Top bar with logout)

---

## Day 19: Orders Management (Display Only)

### Orders List Page
- [ ] Create `app/admin/orders/page.tsx`
- [ ] Display all mock orders in table
- [ ] Columns:
  - [ ] Order number
  - [ ] Customer name
  - [ ] Date
  - [ ] Total
  - [ ] Status (with colored badge)
- [ ] Search bar (non-functional UI)
- [ ] Filter dropdown (non-functional)
- [ ] Export button (non-functional)
- [ ] Pagination UI (if > 15 orders)

### Order Status Badges
- [ ] Color coding:
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
- [ ] Create `app/admin/products/page.tsx`
- [ ] Display all products in table/grid
- [ ] Columns:
  - [ ] Product image (thumbnail)
  - [ ] Product name (FR)
  - [ ] Category
  - [ ] Price
  - [ ] Stock status
- [ ] Search bar (non-functional)
- [ ] "Add Product" button (non-functional or shows alert)

### Components
- [ ] `ProductsTable.tsx` (Table layout)
- [ ] `ProductRow.tsx` (Single row with image)

---

# Week 5: Bilingual Support & Polish

## Day 21-22: Internationalization (i18n)

### Setup i18n
- [ ] Configure `next-i18next` or `next-intl`
- [ ] Create locale files:
  - [ ] `/locales/fr/common.json`
  - [ ] `/locales/ar/common.json`
- [ ] Translate all UI strings (buttons, labels, messages)
- [ ] Implement language switcher in header

### Translation Files
- [ ] Create comprehensive translation keys:
  - [ ] Navigation items
  - [ ] Product labels (Price, Add to Cart, etc.)
  - [ ] Cart labels (Subtotal, Total, etc.)
  - [ ] Checkout labels
  - [ ] Admin labels
  - [ ] Error messages
  - [ ] Success messages

### Arabic RTL Support
- [ ] Add RTL CSS for Arabic locale
- [ ] Test layout mirroring (header, navigation, cards)
- [ ] Ensure text alignment is correct
- [ ] Fix any broken layouts in RTL
- [ ] Test number formatting (٠١٢٣ vs 0123)

### Language Toggle
- [ ] Create `LanguageToggle.tsx` component
- [ ] Store language preference in localStorage
- [ ] Switch locale on toggle
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
- [ ] Implement toast system (or use library like `react-hot-toast`)
- [ ] Success toast: "Product added to cart!"
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
- [ ] Optimize all product images (WebP, < 100KB)
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
- [ ] Prepare demo script (see SRS Appendix)
- [ ] Practice 5-minute demo walkthrough
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

- [ ] Homepage with categories and products
- [ ] Product browsing (category pages)
- [ ] Product detail pages
- [ ] Search functionality
- [ ] Shopping cart (add/remove/update)
- [ ] Checkout flow (3 steps)
- [ ] Order success page
- [ ] Language toggle (FR/AR)
- [ ] Arabic RTL layout
- [ ] Admin login
- [ ] Admin dashboard with metrics
- [ ] Admin orders list
- [ ] Admin products list

## Technical Requirements ✓

- [ ] Mobile responsive (< 768px)
- [ ] Tablet responsive (768px-1024px)
- [ ] Desktop responsive (> 1024px)
- [ ] Loads in < 3 seconds
- [ ] No console errors
- [ ] Works offline (basic PWA) - OPTIONAL for prototype
- [ ] Cart persists on reload
- [ ] Cross-browser compatible

## Content & Assets ✓

- [ ] 20+ products with images
- [ ] 5 categories defined
- [ ] 10+ mock orders
- [ ] All text translated (FR/AR)
- [ ] Bellat logo and branding
- [ ] Optimized images (< 100KB each)

## Polish & UX ✓

- [ ] Smooth animations
- [ ] Toast notifications
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
