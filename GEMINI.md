# Bellat Digital Platform - Prototype Development Plan

This document provides a summary and development plan based on the Functional Specification, SRS, and TODO documents for the Bellat Digital Platform prototype.

## 1. Project Overview

The primary goal is to develop a high-fidelity prototype of the Bellat e-commerce platform within 4-6 weeks. This prototype will serve as a key asset for an investor pitch, demonstrating the core user experience and business potential.

The project focuses on visual appeal and the primary user journey, using mock data and simulated backend interactions. It is not intended for production use.

**Key Objectives:**
-   Demonstrate the B2C customer journey from browsing to (mock) checkout.
-   Showcase a professional, mobile-first UI/UX.
-   Provide a glimpse into the admin dashboard for order and product management.
-   Validate the concept and secure funding for full-scale development.

## 2. Core Features

### Customer-Facing PWA (Progressive Web App)

-   **Homepage:** Hero banner, category grid, and featured products.
-   **Product Catalog:**
    -   Browse products by category.
    -   Detailed product pages with descriptions, images, and pricing.
-   **Search:** Simple client-side search by product name.
-   **Shopping Cart:**
    -   Add, remove, and update product quantities.
    -   Client-side persistence using `localStorage`.
-   **Mock Checkout:**
    -   Multi-step flow: Address -> Delivery Slot -> Review.
    -   No data validation or real payment processing.
    -   Simulated order success page with a fake order number.
-   **Bilingual Support:** Seamless language toggle between French (FR) and Arabic (AR) with full RTL support for Arabic.

### Admin Dashboard (Display-Only)

-   **Mock Login:** Hardcoded credentials (`admin@bellat.net` / `demo123`).
-   **Dashboard:** Static cards displaying fake metrics (e.g., daily revenue, new orders).
-   **Order Management:** A read-only table displaying mock orders from a JSON file.
-   **Product Management:** A read-only table displaying all products.

## 3. Technology Stack

-   **Frontend:** Next.js 14 (App Router) with React 18 & TypeScript.
-   **Styling:** Tailwind CSS for rapid, responsive UI development.
-   **Internationalization (i18n):** `next-intl` for FR/AR language support.
-   **Data Source:** Static JSON files located in `/public/data/` (no database).
-   **Deployment:** Vercel for continuous deployment and hosting.
-   **Version Control:** Git & GitHub.

## 5. High-Level Development Plan

The development is planned over a 6-week sprint, broken down as follows:

-   **Week 1: Foundation & Setup (Completed)**
    -   Initialized Next.js project, configured Tailwind CSS, and set up Git.
    -   Created mock data JSON files and corresponding TypeScript types.
    -   Built foundational UI components (Buttons, Inputs, Cards, etc.).

-   **Week 2: Core Customer Features (Completed)**
    -   Developed the Homepage, Category pages, and Product Detail pages.
    -   Implemented the product grid.

-   **Week 3: Shopping & Checkout (Completed)**
    -   Implemented the shopping cart functionality.
    -   Built the multi-step (mock) checkout UI.
    -   Created the order success page.

-   **Week 4: Admin Dashboard (Completed)**
    -   Built the mock admin login page.
    -   Created the display-only dashboard, orders list, and products list.

-   **Week 5: Bilingual Support & Polish (In Progress)**
    -   Integrated `next-intl` for French/Arabic language toggling.
    -   Created locale files and started translating UI strings.
    -   **Remaining:** Continue translating UI strings, implement Arabic RTL support, refine UI, add animations, and ensure responsive design is polished.

-   **Week 6: Testing & Deployment (Pending)**
    -   Conduct thorough cross-browser and device testing.
    -   Optimize performance (Lighthouse audit).
    -   Deploy to Vercel and perform final QA.