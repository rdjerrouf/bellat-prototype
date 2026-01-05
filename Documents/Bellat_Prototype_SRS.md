# Software Requirements Specification
## Bellat Digital Platform - PROTOTYPE VERSION

---

**Version:** Prototype 1.0  
**Prepared For:** Bellat Group (CVA - Conserverie de Viandes d'Algérie)  
**Location:** Tessala-El-Merdja, Algeria  
**Date:** January 2026  
**Purpose:** Minimum Viable Prototype for Investment Pitch

---

# 1. Executive Summary

This document defines a **streamlined prototype** of the Bellat Digital Ordering Platform designed specifically for demonstration and investor pitching purposes. The prototype focuses on core user flows and visual appeal while using simplified backend logic and mock data.

**Prototype Goals:**
- Demonstrate the user experience and value proposition
- Validate the product-market fit concept
- Secure funding/partnership for full development
- Gather initial user feedback

**Timeline:** 4-6 weeks  
**Budget:** Minimal (prototype-grade development)

---

# 2. Scope Definition

## 2.1 IN SCOPE (Prototype)

### Customer-Facing Features (Essential Only)
✅ **Product Browsing**
- Home page with hero banner
- Category browsing (5-6 main categories)
- Product listing with images and prices
- Product detail page with basic info
- Simple search functionality

✅ **Shopping Cart**
- Add/remove products
- Update quantities
- View cart total
- Basic cart persistence (localStorage)

✅ **Mock Checkout Flow**
- Delivery address form (no validation, demo only)
- Delivery date/time selection
- Order summary preview
- Success confirmation page (no real order creation)

✅ **Basic UI/UX**
- Responsive mobile-first design
- Bilingual toggle (Arabic/French)
- Professional branding
- Smooth transitions

### Admin Dashboard (Minimal)
✅ **Login Screen** (mock authentication)
✅ **Dashboard Overview** with fake metrics
✅ **Product List View** (display only, no editing)
✅ **Order List View** (display mock orders)

### Technical Foundation
✅ **Frontend:** React + Next.js (static generation where possible)
✅ **Styling:** Tailwind CSS for rapid development
✅ **Data:** Hardcoded JSON files (no database)
✅ **Hosting:** Vercel or Netlify (free tier)

---

## 2.2 OUT OF SCOPE (Prototype)

❌ Real user authentication (use mock login)
❌ Database integration (use JSON mock data)
❌ Payment processing (show UI only)
❌ Backend API (use static data)
❌ Order management (display mock orders)
❌ Inventory management
❌ Real-time updates
❌ Email/SMS notifications
❌ PWA offline capabilities
❌ User profiles
❌ B2B features (focus on B2C only)
❌ Delivery tracking
❌ Recipe integration
❌ Admin CRUD operations (display only)

---

# 3. User Flows (Prototype)

## 3.1 Primary User Journey (B2C Customer)

```
1. Land on Homepage
   ↓
2. Browse Categories or Search
   ↓
3. View Product Details
   ↓
4. Add to Cart
   ↓
5. View Cart
   ↓
6. Proceed to Checkout (mock)
   ↓
7. Fill Delivery Info (no validation)
   ↓
8. Select Delivery Slot
   ↓
9. Review Order
   ↓
10. Place Order → Success Page (simulated)
```

## 3.2 Admin Journey

```
1. Login (email: admin@bellat.net, password: demo123)
   ↓
2. View Dashboard (fake metrics)
   ↓
3. Browse Orders (mock data)
   ↓
4. Browse Products (display only)
```

---

# 4. Functional Requirements (Prototype-Specific)

## 4.1 Product Catalog

| Feature | Prototype Implementation |
|---------|-------------------------|
| **Product Data** | 20-30 products across 5 categories in `products.json` |
| **Categories** | Hardcoded: Kachir, Rôtis, Conserves, Hot Dog, Luncheon |
| **Product Images** | Use existing Bellat website images or stock photos |
| **Pricing** | Static retail prices only (no B2B) |
| **Stock Status** | Mock "In Stock" / "Low Stock" badges |

## 4.2 Shopping Cart

| Feature | Implementation |
|---------|----------------|
| **Storage** | Browser localStorage (client-side only) |
| **Persistence** | Survives page refresh, 7-day expiry |
| **Operations** | Add, remove, update quantity |
| **Validation** | Basic: quantity > 0, no stock checks |

## 4.3 Checkout (Simulated)

| Feature | Implementation |
|---------|----------------|
| **Address Form** | Simple form, no address validation |
| **Delivery Slots** | Static options (Morning/Afternoon/Evening) |
| **Payment Method** | Display "Cash on Delivery" only (no selection) |
| **Order Placement** | Generate fake order number, show success page |
| **No Backend** | Order data NOT saved anywhere |

## 4.4 Admin Dashboard

| Feature | Implementation |
|---------|----------------|
| **Authentication** | Hardcoded credentials (admin@bellat.net / demo123) |
| **Dashboard Metrics** | Static cards: Orders Today, Revenue, Pending Orders |
| **Order List** | Display 10-15 mock orders from `orders.json` |
| **Product List** | Display products from `products.json` (read-only) |
| **Actions** | Buttons are non-functional (UI only) |

---

# 5. Technical Specifications (Prototype)

## 5.1 Technology Stack

| Component | Technology | Rationale |
|-----------|------------|-----------|
| **Frontend** | Next.js 14 (React 18) | Fast development, SSG for static pages |
| **Styling** | Tailwind CSS | Rapid prototyping, responsive utilities |
| **Icons** | Lucide React | Lightweight, consistent icons |
| **Internationalization** | next-i18next (basic) | Simple language toggle |
| **Data** | JSON files in `/public/data/` | No database needed |
| **Hosting** | Vercel | Free tier, instant deployments |
| **Version Control** | Git + GitHub | Standard workflow |

## 5.2 Data Structure

### Products JSON (`/public/data/products.json`)
```json
[
  {
    "id": "prod_001",
    "name_ar": "كشير بلحم البقر",
    "name_fr": "Kachir Bœuf",
    "category": "kachir",
    "image": "/images/products/kachir-boeuf.jpg",
    "price": 450,
    "unit": "500g",
    "stock_status": "in_stock",
    "description_fr": "Kachir de qualité supérieure...",
    "description_ar": "كشير عالي الجودة..."
  }
]
```

### Mock Orders JSON (`/public/data/mock-orders.json`)
```json
[
  {
    "id": "BLT-20260104-00001",
    "date": "2026-01-04T09:30:00Z",
    "customer_name": "Fatima Benali",
    "total": 1250,
    "status": "pending",
    "items_count": 3
  }
]
```

## 5.3 Pages Structure

```
/
├── /                          → Homepage
├── /products
│   ├── /[category]            → Category page
│   └── /[id]                  → Product detail
├── /cart                      → Shopping cart
├── /checkout                  → Checkout flow
├── /order-success             → Order confirmation
├── /admin
│   ├── /login                 → Admin login
│   ├── /dashboard             → Dashboard overview
│   ├── /orders                → Orders list
│   └── /products              → Products list
```

## 5.4 Responsive Breakpoints

| Device | Width | Design Priority |
|--------|-------|-----------------|
| Mobile | < 768px | **Primary** (mobile-first) |
| Tablet | 768px - 1024px | Secondary |
| Desktop | > 1024px | Tertiary |

---

# 6. Visual Design Guidelines (Prototype)

## 6.1 Brand Colors (Based on Bellat)

```
Primary Red:    #D42027  (Bellat brand red)
Dark Red:       #A01820
Light Gray:     #F5F5F5
Dark Gray:      #333333
White:          #FFFFFF
Success Green:  #10B981
Warning Orange: #F59E0B
```

## 6.2 Typography

- **Arabic:** Noto Sans Arabic
- **French:** Inter or Roboto
- **Sizes:** Tailwind default scale (text-sm, text-base, text-lg, etc.)

## 6.3 Key UI Components Needed

- Navigation bar (mobile + desktop)
- Product card component
- Category card component
- Cart item component
- Language toggle button
- Fake "Add to Cart" animation
- Success/error toast notifications (optional)

---

# 7. Content Requirements

## 7.1 Product Data

**Minimum 20 products** across these categories:
1. **Kachir** (4 products)
2. **Rôtis** (4 products)
3. **Conserves** (4 products)
4. **Hot Dog** (4 products)
5. **Luncheon** (4 products)

**For each product:**
- Product name (AR + FR)
- Image (can reuse from bellat.net)
- Price (DZD)
- Weight/unit
- Short description (2-3 sentences, AR + FR)

## 7.2 Static Pages

- **Homepage:** Hero banner + 2-3 featured categories
- **About (optional):** Short Bellat history paragraph
- **Contact:** Display phone, email, address (no form submission)

---

# 8. Non-Functional Requirements (Prototype)

| Requirement | Target | Notes |
|-------------|--------|-------|
| **Performance** | < 3s page load | Static site, optimized images |
| **Mobile UX** | Smooth scrolling | Touch-friendly buttons (min 44px) |
| **Browser Support** | Chrome, Safari, Firefox (latest) | No IE11 support |
| **Accessibility** | Basic (color contrast, alt text) | Not full WCAG compliance |
| **SEO** | Meta tags on public pages | For demo credibility |
| **Security** | HTTPS only | Provided by Vercel |

---

# 9. Development Phases (4-6 Weeks)

## Week 1-2: Foundation
- [ ] Setup Next.js project + Tailwind
- [ ] Create product JSON data (20 products)
- [ ] Build homepage layout
- [ ] Implement category browsing
- [ ] Product detail page

## Week 3-4: Core Features
- [ ] Shopping cart functionality
- [ ] Language toggle (AR/FR)
- [ ] Checkout flow (UI only)
- [ ] Order success page
- [ ] Mobile responsive polish

## Week 5: Admin Dashboard
- [ ] Admin login page
- [ ] Dashboard with fake metrics
- [ ] Orders list (mock data)
- [ ] Products list (display only)

## Week 6: Polish & Deploy
- [ ] Add product images
- [ ] Fine-tune Arabic RTL layout
- [ ] Performance optimization
- [ ] Deploy to Vercel
- [ ] QA testing on multiple devices

---

# 10. Success Criteria (Prototype)

The prototype is successful if it:

✅ Demonstrates the complete user journey (browse → cart → checkout)  
✅ Looks professional and production-ready visually  
✅ Works smoothly on mobile devices  
✅ Switches between Arabic/French seamlessly  
✅ Admin dashboard shows data management capabilities  
✅ Can be demoed in 5-10 minutes to investors  
✅ Deployed to a public URL (bellat-prototype.vercel.app)  
✅ Loads quickly (< 3 seconds)

---

# 11. Post-Prototype Path

After successful pitch:

1. **Gather Feedback:** User testing with 10-15 potential customers
2. **Refine Scope:** Adjust SRS based on feedback
3. **Full Development:** Implement with real backend, database, authentication
4. **Phased Rollout:** Beta → Pilot → Full launch

---

# 12. Key Assumptions

1. **No Real Transactions:** All orders are simulated
2. **Static Data:** Products/orders from JSON files
3. **No User Accounts:** Authentication is for demo only
4. **No Integrations:** No payment, SMS, email services
5. **Limited QA:** Focus on happy path, minimal edge case handling

---

# Appendix: Prototype Demo Script

**For Investor Presentations (5-minute demo):**

1. **Homepage (30s):** "This is Bellat's digital storefront..."
2. **Browse Products (1min):** Show categories, product details
3. **Add to Cart (1min):** Demonstrate cart functionality
4. **Checkout Flow (1.5min):** Walk through order placement
5. **Admin Dashboard (1min):** Show order management capabilities
6. **Language Toggle (30s):** Demonstrate bilingual support

---

**End of Prototype SRS**
