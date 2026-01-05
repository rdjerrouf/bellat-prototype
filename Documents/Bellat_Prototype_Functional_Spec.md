# Functional Specification Document
## Bellat Digital Platform - PROTOTYPE VERSION

---

**Document Version:** Prototype 1.0  
**Date:** January 2026  
**Status:** Prototype Specification  
**Prepared For:** Bellat Group  
**Purpose:** Define UI/UX implementation for prototype demo

---

# Table of Contents

1. Introduction
2. Prototype User Flows
3. Customer Application (PWA Prototype)
4. Admin Dashboard (Display Only)
5. Mock Data Specifications
6. UI Component Library

---

# 1. Introduction

## 1.1 Purpose

This functional specification defines the **visual and interaction design** for the Bellat Digital Platform prototype. Unlike a production FSD, this document focuses exclusively on what users will **see and interact with**, using mock data and simulated backend responses.

## 1.2 Prototype Scope

**What This Document Covers:**
- Screen layouts and wireframes
- User interaction flows
- Visual design specifications
- Mock data structures
- Component behavior

**What This Document Excludes:**
- Real authentication logic
- Database schema
- API endpoints
- Business rule enforcement
- Error handling (beyond basic UX)

## 1.3 Target Audience

- UI/UX Designer
- Frontend Developer
- Stakeholders reviewing the prototype
- Investors viewing the demo

---

# 2. Prototype User Flows

## 2.1 Primary Flow: Guest Browsing & Ordering

```
┌─────────────┐
│  Homepage   │ ← User lands here
└──────┬──────┘
       │
       ├──→ Browse by Category
       │    └──→ View Products in Category
       │         └──→ Product Detail
       │              └──→ Add to Cart ✓
       │
       ├──→ Search Products
       │    └──→ Search Results
       │         └──→ Product Detail
       │
       └──→ View Cart
            └──→ Checkout (Mock)
                 ├──→ Delivery Address (No validation)
                 ├──→ Delivery Slot Selection
                 └──→ Order Summary
                      └──→ Place Order (Simulated)
                           └──→ Success Page ✓
```

## 2.2 Secondary Flow: Admin Login

```
┌─────────────┐
│ Admin Login │ ← Hardcoded: admin@bellat.net / demo123
└──────┬──────┘
       │
       ├──→ Dashboard (Fake Metrics)
       │
       ├──→ Orders List (Mock Orders)
       │    └──→ View Order Detail (Read-only)
       │
       └──→ Products List (Display Only)
```

---

# 3. Customer Application (PWA Prototype)

## 3.1 Homepage

### Layout (Mobile)

```
┌─────────────────────────────────────┐
│ [🔖 Bellat Logo]      [🔍] [🛒] [AR▼] │ ← Sticky header
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │                                 │ │
│ │    HERO BANNER                  │ │ ← Auto-carousel (optional)
│ │    "Qualité depuis 50 ans"      │ │
│ │    [Découvrir nos produits →]   │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ Catégories                          │ ← Section header
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐│
│ │ 🥩  │ │ 🍖   │ │ 🥫   │ │ 🌭   ││
│ │Kachir│ │Rôtis │ │Cons. │ │Hot   ││
│ │      │ │      │ │      │ │Dog   ││
│ └──────┘ └──────┘ └──────┘ └──────┘│
│                            Voir tout→│
├─────────────────────────────────────┤
│ Produits Populaires                 │
│ ┌─────────────┐ ┌─────────────┐    │
│ │   [IMAGE]   │ │   [IMAGE]   │    │
│ │Kachir Bœuf  │ │Luncheon     │    │
│ │450 DZD      │ │380 DZD      │    │
│ │[+ Ajouter]  │ │[+ Ajouter]  │    │
│ └─────────────┘ └─────────────┘    │
│                                     │
├─────────────────────────────────────┤
│ 🏠  📂  🔍  🛒  👤                  │ ← Bottom nav
└─────────────────────────────────────┘
```

### Interactions

| Element | Action | Behavior |
|---------|--------|----------|
| **Language Toggle** | Click AR/FR | Switch all text content |
| **Category Card** | Tap | Navigate to `/products/[category]` |
| **Product Card** | Tap | Navigate to product detail |
| **[+ Ajouter] Button** | Tap | Add item to cart → Show toast "Ajouté au panier!" |
| **Cart Icon** | Tap | Navigate to `/cart` |
| **Cart Badge** | Auto-update | Shows total item count |

---

## 3.2 Category Page

### URL: `/products/[category]`

### Layout

```
┌─────────────────────────────────────┐
│ ← [Back]     Kachir           [🔍]  │ ← Header
├─────────────────────────────────────┤
│ Filtrer par: [Tout ▼] [Prix ▼]     │ ← Filters (non-functional)
├─────────────────────────────────────┤
│ ┌─────────────┐ ┌─────────────┐    │
│ │  [IMAGE]    │ │  [IMAGE]    │    │
│ │             │ │             │    │
│ │Kachir Bœuf  │ │Kachir Poulet│    │
│ │450 DZD      │ │420 DZD      │    │
│ │500g         │ │500g         │    │
│ │[+ Panier]   │ │[+ Panier]   │    │
│ └─────────────┘ └─────────────┘    │
│                                     │
│ ┌─────────────┐ ┌─────────────┐    │
│ │  [IMAGE]    │ │  [IMAGE]    │    │
│ │Kachir Dinde │ │Kachir Mixte │    │
│ │430 DZD      │ │465 DZD      │    │
│ │[+ Panier]   │ │[+ Panier]   │    │
│ └─────────────┘ └─────────────┘    │
└─────────────────────────────────────┘
```

### Product Card Component Spec

```jsx
<ProductCard>
  <ProductImage src={product.image} alt={product.name_fr} />
  <ProductName>{locale === 'ar' ? product.name_ar : product.name_fr}</ProductName>
  <ProductPrice>{product.price} DZD</ProductPrice>
  <ProductUnit>{product.unit}</ProductUnit>
  <AddToCartButton onClick={handleAddToCart}>
    + Ajouter
  </AddToCartButton>
</ProductCard>
```

**Design Specs:**
- Card size: Full width on mobile, 2-column grid on tablet, 3-column on desktop
- Image aspect ratio: 1:1 (square)
- Border radius: 8px
- Shadow: subtle (Tailwind: shadow-md)
- Padding: 16px

---

## 3.3 Product Detail Page

### URL: `/products/[id]`

### Layout (Mobile)

```
┌─────────────────────────────────────┐
│ ← [Retour]                    [🛒 2]│
├─────────────────────────────────────┤
│                                     │
│          [PRODUCT IMAGE]            │ ← Full-width image
│                                     │
├─────────────────────────────────────┤
│ Kachir Bœuf Premium                 │ ← Product name
│ 450 DZD  •  500g                    │
│ ⭐ En stock                         │
├─────────────────────────────────────┤
│ Description                         │
│ Kachir de viande de bœuf de haute  │
│ qualité, préparé selon les          │
│ méthodes traditionnelles...         │
│                                     │
├─────────────────────────────────────┤
│ Quantité                            │
│ ┌───┐  ┌───┐  ┌───┐                │
│ │ - │  │ 1 │  │ + │                │
│ └───┘  └───┘  └───┘                │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │  Ajouter au panier - 450 DZD    │ │ ← CTA button
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Interactions

| Element | Action | Result |
|---------|--------|--------|
| **Quantity +/-** | Tap | Increment/decrement quantity (min: 1) |
| **Add to Cart Button** | Tap | Add to cart → Navigate to `/cart` |
| **Back Button** | Tap | Return to previous page |

---

## 3.4 Shopping Cart

### URL: `/cart`

### Layout

```
┌─────────────────────────────────────┐
│ ← [Accueil]    Panier               │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │ [IMG] Kachir Bœuf               │ │
│ │       450 DZD × 2 = 900 DZD     │ │
│ │       ┌─┐  2  ┌─┐         [🗑️]  │ │
│ │       └─┘     └─┘               │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ [IMG] Luncheon Poulet           │ │
│ │       380 DZD × 1 = 380 DZD     │ │
│ │       ┌─┐  1  ┌─┐         [🗑️]  │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ Sous-total              1,280 DZD   │
│ Livraison              Calculée     │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │     Commander - 1,280 DZD       │ │ ← CTA
│ └─────────────────────────────────┘ │
│                                     │
│ Continuer mes achats                │ ← Link back
└─────────────────────────────────────┘
```

### Empty Cart State

```
┌─────────────────────────────────────┐
│           Panier vide               │
│                                     │
│              🛒                     │
│                                     │
│   Votre panier est actuellement     │
│          vide                       │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │   Parcourir les produits        │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 3.5 Checkout Flow (Mock)

### Step 1: Delivery Address

### URL: `/checkout/address`

```
┌─────────────────────────────────────┐
│ ← [Panier]  Livraison               │
├─────────────────────────────────────┤
│ Adresse de livraison                │
│                                     │
│ [Nom complet________________]       │
│                                     │
│ [Téléphone (+213)___________]       │
│                                     │
│ [Adresse____________________]       │
│ [___________________________]       │
│                                     │
│ [Wilaya ▼___________________]       │
│                                     │
│ [Commune____________________]       │
│                                     │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │      Continuer                  │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Note:** No validation in prototype. Any input accepted.

---

### Step 2: Delivery Slot

### URL: `/checkout/delivery`

```
┌─────────────────────────────────────┐
│ ← [Adresse]  Date de livraison      │
├─────────────────────────────────────┤
│ Sélectionnez une date               │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │  Demain (05/01/2026)            │ │
│ │  ○ Matin (8h - 12h)             │ │
│ │  ○ Après-midi (12h - 17h)       │ │
│ │  ○ Soir (17h - 21h) +200 DZD    │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │  Après-demain (06/01/2026)      │ │
│ │  ○ Matin (8h - 12h)             │ │
│ │  ○ Après-midi (12h - 17h)       │ │
│ └─────────────────────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │      Continuer                  │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

### Step 3: Order Summary

### URL: `/checkout/review`

```
┌─────────────────────────────────────┐
│ ← [Livraison]  Confirmation         │
├─────────────────────────────────────┤
│ Récapitulatif                       │
│                                     │
│ Livraison à:                        │
│ Ahmed Benali                        │
│ +213 555 123 456                    │
│ 12 Rue de la Liberté, Alger         │
│                                     │
│ Date: Demain (05/01)                │
│ Créneau: Matin (8h - 12h)           │
│                                     │
├─────────────────────────────────────┤
│ Articles (2)                        │
│ Kachir Bœuf × 2        900 DZD      │
│ Luncheon Poulet × 1    380 DZD      │
│                                     │
│ Sous-total           1,280 DZD      │
│ Livraison              250 DZD      │
│ ───────────────────────────         │
│ Total                1,530 DZD      │
│                                     │
│ Paiement: Espèces à la livraison    │
│                                     │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │   Confirmer la commande         │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

### Step 4: Order Success

### URL: `/order-success`

```
┌─────────────────────────────────────┐
│         Commande confirmée!         │
│                                     │
│              ✅                     │
│                                     │
│ Numéro de commande:                 │
│    BLT-20260104-00012               │
│                                     │
│ Livraison prévue:                   │
│    Demain, 05/01 (8h - 12h)         │
│                                     │
│ Nous vous enverrons une             │
│ confirmation par SMS.               │
│                                     │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │   Retour à l'accueil            │ │
│ └─────────────────────────────────┘ │
│                                     │
│    Voir les détails de ma commande  │ ← (Non-functional link)
└─────────────────────────────────────┘
```

**Note:** Order number is randomly generated. No actual order is saved.

---

## 3.6 Language Toggle

### Behavior

| Current Language | Toggle Action | Result |
|------------------|---------------|--------|
| French (FR) | Click "AR" | All text switches to Arabic, layout flips to RTL |
| Arabic (AR) | Click "FR" | All text switches to French, layout returns to LTR |

### Implementation Notes

- Use `next-i18next` or simple context provider
- Store preference in localStorage as `locale: 'ar' | 'fr'`
- Default: French (FR)
- Toggle appears in top-right corner of header

---

# 4. Admin Dashboard (Display Only)

## 4.1 Admin Login

### URL: `/admin/login`

```
┌─────────────────────────────────────┐
│                                     │
│          [Bellat Logo]              │
│                                     │
│      Administration                 │
│                                     │
│ [Email_____________________]        │
│                                     │
│ [Mot de passe______________] [👁️]   │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │        Se connecter             │ │
│ └─────────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

**Hardcoded Credentials:**
- Email: `admin@bellat.net`
- Password: `demo123`

**Behavior:**
- Any other input shows "Email ou mot de passe incorrect"
- Correct credentials → Redirect to `/admin/dashboard`
- No session management (simple boolean flag)

---

## 4.2 Admin Dashboard

### URL: `/admin/dashboard`

### Layout (Desktop)

```
┌─────────────────────────────────────────────────────────┐
│ [Bellat Admin]                          [Déconnexion]   │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│ Dashboard    │  Tableau de bord                         │
│ Commandes    │                                          │
│ Produits     │  ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│              │  │Commandes │ │ Revenus  │ │En attente│ │
│              │  │aujourd'hui│ │aujourd'hui│ │          │ │
│              │  │    12    │ │15,240 DZD│ │    5     │ │
│              │  └──────────┘ └──────────┘ └──────────┘ │
│              │                                          │
│              │  Commandes récentes                      │
│              │  ┌─────────────────────────────────────┐ │
│              │  │#BLT-001  Fatima   1,280  ⏳Pending  │ │
│              │  │#BLT-002  Karim    5,600  ✓Confirmé  │ │
│              │  │#BLT-003  Ahmed      890  ⏳Pending  │ │
│              │  └─────────────────────────────────────┘ │
│              │                                          │
└──────────────┴──────────────────────────────────────────┘
```

**Note:** All data is static/hardcoded.

---

## 4.3 Orders List

### URL: `/admin/orders`

```
┌─────────────────────────────────────────────────────────┐
│ Commandes                                               │
│ [Rechercher_______________] [Filtrer ▼] [Exporter]      │
├─────────────────────────────────────────────────────────┤
│ N°         Client      Date       Total    Statut       │
│ BLT-00001  Fatima     04/01/26  1,280 DZD  ⏳ Pending   │
│ BLT-00002  Karim      04/01/26  5,600 DZD  ✓ Confirmé   │
│ BLT-00003  Ahmed      03/01/26    890 DZD  🚚 Livraison │
│ BLT-00004  Sarah      03/01/26  1,450 DZD  ✅ Livré     │
│ ...                                                     │
└─────────────────────────────────────────────────────────┘
```

**Interactions:** Clicking a row does nothing (or shows a "Feature not available in prototype" message)

---

## 4.4 Products List

### URL: `/admin/products`

```
┌─────────────────────────────────────────────────────────┐
│ Produits                                                │
│ [Rechercher_______________] [Ajouter produit]           │
├─────────────────────────────────────────────────────────┤
│ Image  Nom            Catégorie   Prix    Stock         │
│ [IMG]  Kachir Bœuf    Kachir      450 DZD  ✓ En stock  │
│ [IMG]  Luncheon       Luncheon    380 DZD  ⚠️ Faible   │
│ [IMG]  Hot Dog        Hot Dog     320 DZD  ✓ En stock  │
│ ...                                                     │
└─────────────────────────────────────────────────────────┘
```

**Note:** "Ajouter produit" button is non-functional (or shows alert).

---

# 5. Mock Data Specifications

## 5.1 Products JSON

**Location:** `/public/data/products.json`

```json
[
  {
    "id": "prod_001",
    "name_fr": "Kachir Bœuf Premium",
    "name_ar": "كشير بقري فاخر",
    "category": "kachir",
    "image": "/images/products/kachir-boeuf.jpg",
    "price": 450,
    "unit": "500g",
    "stock_status": "in_stock",
    "description_fr": "Kachir de viande de bœuf de haute qualité, préparé selon les méthodes traditionnelles de Bellat.",
    "description_ar": "كشير من لحم البقر عالي الجودة، محضر وفق الطرق التقليدية لبلاط."
  },
  {
    "id": "prod_002",
    "name_fr": "Luncheon Poulet",
    "name_ar": "لانشون دجاج",
    "category": "luncheon",
    "image": "/images/products/luncheon-poulet.jpg",
    "price": 380,
    "unit": "400g",
    "stock_status": "in_stock",
    "description_fr": "Luncheon de poulet savoureux, idéal pour les sandwichs.",
    "description_ar": "لانشون دجاج لذيذ، مثالي للساندويتش."
  }
  // ... add 18 more products
]
```

**Categories:**
- `kachir`
- `rotis`
- `conserves`
- `hot-dog`
- `luncheon`

---

## 5.2 Mock Orders JSON

**Location:** `/public/data/mock-orders.json`

```json
[
  {
    "id": "BLT-20260104-00001",
    "customer_name": "Fatima Benali",
    "date": "2026-01-04T09:30:00Z",
    "total": 1280,
    "status": "pending",
    "items": [
      { "product_id": "prod_001", "quantity": 2, "price": 450 },
      { "product_id": "prod_002", "quantity": 1, "price": 380 }
    ]
  },
  {
    "id": "BLT-20260104-00002",
    "customer_name": "Karim Mansouri",
    "date": "2026-01-04T10:15:00Z",
    "total": 5600,
    "status": "confirmed",
    "items": [
      { "product_id": "prod_003", "quantity": 10, "price": 320 }
      // B2B bulk order example
    ]
  }
  // ... add 10-15 more orders
]
```

**Status Values:**
- `pending` → ⏳ En attente
- `confirmed` → ✓ Confirmé
- `preparing` → 📦 En préparation
- `out_for_delivery` → 🚚 En livraison
- `delivered` → ✅ Livré
- `cancelled` → ❌ Annulé

---

## 5.3 Categories Data

```json
[
  {
    "id": "kachir",
    "name_fr": "Kachir",
    "name_ar": "كشير",
    "icon": "🥩",
    "image": "/images/categories/kachir.jpg"
  },
  {
    "id": "rotis",
    "name_fr": "Rôtis",
    "name_ar": "روتي",
    "icon": "🍖",
    "image": "/images/categories/rotis.jpg"
  },
  {
    "id": "conserves",
    "name_fr": "Conserves",
    "name_ar": "معلبات",
    "icon": "🥫",
    "image": "/images/categories/conserves.jpg"
  },
  {
    "id": "hot-dog",
    "name_fr": "Hot Dog",
    "name_ar": "هوت دوج",
    "icon": "🌭",
    "image": "/images/categories/hot-dog.jpg"
  },
  {
    "id": "luncheon",
    "name_fr": "Luncheon",
    "name_ar": "لانشون",
    "icon": "🍽️",
    "image": "/images/categories/luncheon.jpg"
  }
]
```

---

# 6. UI Component Library

## 6.1 Buttons

### Primary Button
```
Background: #D42027 (Bellat red)
Text: White
Padding: 12px 24px
Border radius: 8px
Font weight: 600
Min height: 48px (touch-friendly)
```

### Secondary Button
```
Background: White
Border: 2px solid #D42027
Text: #D42027
(Same dimensions as primary)
```

### Icon Button
```
Square: 44×44px
Background: White
Border: 1px solid #E5E5E5
Border radius: 50%
```

---

## 6.2 Input Fields

```
Height: 48px
Padding: 12px 16px
Border: 1px solid #D1D5DB
Border radius: 8px
Font size: 16px (prevents iOS zoom)

Focus state:
  Border: 2px solid #D42027
  Outline: none
```

---

## 6.3 Product Card

```jsx
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <img src={image} className="w-full aspect-square object-cover" />
  <div className="p-4">
    <h3 className="font-semibold text-gray-900">{name}</h3>
    <p className="text-lg font-bold text-red-600 mt-2">{price} DZD</p>
    <p className="text-sm text-gray-500">{unit}</p>
    <button className="w-full mt-3 bg-red-600 text-white py-2 rounded-lg">
      + Ajouter
    </button>
  </div>
</div>
```

---

## 6.4 Cart Item Component

```jsx
<div className="flex gap-4 p-4 bg-white border-b">
  <img src={image} className="w-20 h-20 object-cover rounded" />
  <div className="flex-1">
    <h4 className="font-semibold">{name}</h4>
    <p className="text-red-600">{price} DZD</p>
    <div className="flex items-center gap-2 mt-2">
      <button className="w-8 h-8 border rounded">-</button>
      <span className="px-4">{quantity}</span>
      <button className="w-8 h-8 border rounded">+</button>
    </div>
  </div>
  <button className="text-red-600">🗑️</button>
</div>
```

---

## 6.5 Loading States

### Skeleton Loader (Product Card)
```
┌─────────────┐
│             │ ← Gray pulse animation
│             │
│ ▓▓▓▓▓▓      │ ← Text placeholder
│ ▓▓▓▓        │
│ ▓▓▓▓▓▓▓▓    │
└─────────────┘
```

Use Tailwind's `animate-pulse` utility.

---

## 6.6 Toast Notifications

```jsx
<div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
  ✓ Produit ajouté au panier!
</div>
```

**Behavior:** Show for 3 seconds, fade out.

---

# 7. Responsive Design Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| **Mobile** | < 768px | Single column, bottom nav, full-width cards |
| **Tablet** | 768px - 1024px | 2-column product grid, sticky header |
| **Desktop** | > 1024px | 3-column grid, sidebar for admin, top nav |

---

# 8. Performance Guidelines (Prototype)

| Asset Type | Target Size | Notes |
|------------|-------------|-------|
| Product images | < 100KB each | Compress with WebP format |
| JavaScript bundle | < 200KB gzipped | Code-split by route |
| CSS | < 50KB | Tailwind purge unused classes |
| Total page weight | < 1MB | For 3G compatibility |

---

# 9. Acceptance Criteria (Prototype)

The prototype is complete when:

✅ All 6 customer pages render correctly (Home, Category, Product, Cart, Checkout, Success)  
✅ Language toggle works across all pages  
✅ Cart functionality (add/remove/update) works  
✅ Mobile layout is touch-friendly (44px min tap targets)  
✅ Admin dashboard displays mock data  
✅ Arabic RTL layout is correctly mirrored  
✅ No console errors in browser  
✅ Loads in under 3 seconds on 3G  
✅ Works on Chrome, Safari, Firefox (latest)

---

**End of Prototype Functional Specification**
