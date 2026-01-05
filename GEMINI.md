# Bellat Digital Platform - Prototype Development Plan

This document provides a summary and development plan based on the Functional Specification, SRS, and TODO documents for the Bellat Digital Platform prototype.

Important Notes: 
- Please provide coments with the code, it should explain what the code does for other developers.
- always refer to and update TODO.md

---

#

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
-   **Internationalization (i18n):** `next-intl` or `next-i18next` for FR/AR language support.
-   **Data Source:** Static JSON files located in `/public/data/` (no database).
-   **Deployment:** Vercel for continuous deployment and hosting.
-   **Version Control:** Git & GitHub.

## 4. Data Models (for Prototype)

The prototype will rely on the following JSON data structures:

-   **`products.json`**: An array of ~20-30 product objects.
    -   `id`, `name_fr`, `name_ar`, `category`, `image`, `price`, `unit`, `stock_status`, `description_fr`, `description_ar`
-   **`categories.json`**: An array of 5-6 category objects.
    -   `id`, `name_fr`, `name_ar`, `icon`, `image`
-   **`mock-orders.json`**: An array of ~10-15 mock order objects.
    -   `id`, `customer_name`, `date`, `total`, `status`, `items`

## 5. High-Level Development Plan

The development is planned over a 6-week sprint, broken down as follows:

-   **Week 1: Foundation & Setup:**
    -   Initialize Next.js project, configure Tailwind CSS, and set up Git.
    -   Create mock data JSON files and corresponding TypeScript types.
    -   Build foundational UI components (Buttons, Inputs, Cards).

-   **Week 2: Core Customer Features:**
    -   Develop the Homepage, Category pages, and Product Detail pages.
    -   Implement the product grid and basic search functionality.

-   **Week 3: Shopping & Checkout:**
    -   Implement the shopping cart using React Context and `localStorage`.
    -   Build the multi-step (mock) checkout UI.
    -   Create the order success page.

-   **Week 4: Admin Dashboard:**
    -   Build the mock admin login page.
    -   Create the display-only dashboard, orders list, and products list.

-   **Week 5: Polish & i18n:**
    -   Integrate French/Arabic language toggling and RTL support.
    -   Refine UI, add animations, and ensure responsive design is polished.

-   **Week 6: Testing & Deployment:**
    -   Conduct thorough cross-browser and device testing.
    -   Optimize performance (Lighthouse audit).
    -   Deploy to Vercel and perform final QA.
