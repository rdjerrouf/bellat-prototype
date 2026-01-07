# Bellat Digital Platform - Prototype

<div align="center">

**🛒 High-Fidelity E-Commerce Prototype for Investor Pitch**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Admin Access](#admin-access)
- [Important Notes](#important-notes)

---

## 🎯 Overview

Bellat Digital Platform is a **high-fidelity e-commerce prototype** built for demonstrating the core B2C customer journey and business potential to investors. This is NOT a production application - it uses mock data, simulated backend interactions, and simplified workflows.

**Purpose:** Investor pitch demo showcasing traditional Algerian products with modern e-commerce UX.

**Timeline:** 6-week sprint (January 2026)

---

## ✨ Features

### Customer-Facing (PWA)
- ✅ **Bilingual Support** - French (FR) and Arabic (AR) with RTL layout
- ✅ **Product Browsing** - Category pages and product details
- ✅ **Search** - Client-side search with instant results
- ✅ **Shopping Cart** - Add/remove/update with localStorage persistence
- ✅ **Mock Checkout** - Multi-step flow (Address → Delivery → Review)
- ✅ **Responsive Design** - Mobile-first, optimized for all devices
- ✅ **Animations** - Smooth micro-interactions and transitions

### Admin Dashboard (Display-Only)
- ✅ **Mock Login** - Hardcoded credentials
- ✅ **Dashboard** - Fake metrics and analytics
- ✅ **Orders List** - Read-only view of mock orders
- ✅ **Products List** - Display all products

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.1.1 (App Router) |
| **Language** | TypeScript 5.x |
| **Styling** | Tailwind CSS 4.0 |
| **Internationalization** | next-intl |
| **Icons** | lucide-react |
| **Date Handling** | date-fns |
| **Notifications** | sonner |
| **Image Optimization** | Next.js Image + Sharp |
| **Deployment** | Vercel |
| **Data** | Static JSON files (no database) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bellat-prototype.git
   cd bellat-prototype
   ```

2. **Install dependencies**
   ```bash
   cd web
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - French: http://localhost:3000/fr
   - Arabic: http://localhost:3000/ar

---

## 📁 Project Structure

```
bellat-prototype/
├── web/                          # Next.js application
│   ├── src/
│   │   ├── app/                 # App Router pages
│   │   │   ├── [locale]/       # Internationalized routes (FR/AR)
│   │   │   └── admin/          # Admin dashboard (not localized)
│   │   ├── components/         # React components
│   │   │   ├── cart/           # Cart-specific components
│   │   │   ├── checkout/       # Checkout flow components
│   │   │   ├── home/           # Homepage sections
│   │   │   ├── layout/         # Header, Footer, Navigation
│   │   │   ├── products/       # Product cards, forms
│   │   │   └── ui/             # Reusable UI primitives
│   │   ├── context/            # React Context (Cart, Checkout)
│   │   ├── lib/                # Utilities and data loaders
│   │   └── types/              # TypeScript type definitions
│   ├── public/
│   │   ├── data/               # Mock JSON data
│   │   └── images/             # Product and category images
│   ├── messages/               # i18n translation files (fr.json, ar.json)
│   ├── middleware.ts           # next-intl locale routing
│   └── i18n.ts                 # Internationalization config
├── Documents/                   # Specifications and TODO
└── README.md                    # This file
```

---

## 💻 Development

### Available Commands

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
npm run optimize-images  # Optimize images using Sharp
```

### Adding New Products

Edit `/web/public/data/products.json`:

```json
{
  "id": "prod_XXX",
  "name_fr": "Product Name FR",
  "name_ar": "اسم المنتج",
  "category": "kachir",
  "image": "/images/products/image.jpg",
  "price": 450,
  "unit": "500g",
  "stock_status": "in_stock",
  "description_fr": "Description in French...",
  "description_ar": "الوصف بالعربية..."
}
```

### Internationalization

Translation files located in `/web/messages/`:
- `fr.json` - French translations
- `ar.json` - Arabic translations

To add new translatable strings:
```typescript
// In component
import { useTranslations } from 'next-intl';

const t = useTranslations('Common');
// Use: t('key.path')
```

---

## 🏗️ Build & Deployment

### Production Build

```bash
cd web
npm run build
npm start
```

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables

Create `/web/.env.local`:
```
# Currently none required for prototype
# Add any environment variables here
```

---

## 🔐 Admin Access

**Admin Dashboard:** `/admin/login`

**Credentials:**
- Email: `admin@bellat.net`
- Password: `demo123`

**Features:**
- Dashboard with fake metrics
- Orders list (read-only)
- Products list (read-only)

⚠️ **Note:** All admin data is mock data from JSON files.

---

## ⚠️ Important Notes

### This is a PROTOTYPE

- **No Real Database** - All data from static JSON files
- **No Real Backend** - All interactions are client-side
- **Mock Checkout** - No real payment processing
- **Mock Authentication** - Hardcoded admin credentials
- **No Data Validation** - Forms accept any input
- **Display-Only Admin** - No CRUD operations

### Data Storage

- **Cart:** Persisted in `localStorage` (key: `bellat_cart`)
- **Checkout:** Persisted in `sessionStorage`
- **Products:** `/public/data/products.json`
- **Categories:** `/public/data/categories.json`
- **Orders:** `/public/data/mock-orders.json`

### Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Mobile Chrome/Safari

---

## 📊 Build Output

```
Route (app)
├ ○  /                                    # Root redirect
├ ƒ  /[locale]                            # Homepage (FR/AR)
├ ƒ  /[locale]/cart                       # Shopping cart
├ ƒ  /[locale]/checkout/*                 # Checkout flow (3 steps)
├ ●  /[locale]/products/[id]              # Product details (SSG)
├ ●  /[locale]/products/categories/[cat]  # Category pages (SSG)
├ ƒ  /[locale]/search                     # Search page
└ ○  /admin/*                             # Admin dashboard

Legend:
○  Static
●  SSG (Static Site Generation)
ƒ  Dynamic (Server-rendered)
```

---

## 📝 License

MIT License - See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- **Bellat Group** - Traditional Algerian products
- **Next.js** - React framework
- **Vercel** - Hosting platform
- **Tailwind CSS** - Utility-first CSS

---

<div align="center">

**Built with ❤️ for Bellat Group**

[Report Bug](https://github.com/your-username/bellat-prototype/issues) · [Request Feature](https://github.com/your-username/bellat-prototype/issues)

</div>
