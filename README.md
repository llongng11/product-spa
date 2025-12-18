# Simple Product Browser & Cart

## How to Run

This project is built with **React + TypeScript** using **Vite**.

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually
`http://localhost:5173`).

---

## State Management & Component Structure

### State Management

- Global app state is managed in `App.tsx` using React hooks:
  - `search` -- search keyword
  - `category` -- selected category filter
  - `cart` -- order summary state (`productId → quantity`)
- State is lifted to the top-level `App` component to keep a single
  source of truth.
- `useMemo` is used to efficiently compute the filtered product list.
- No external state library (Redux, Zustand) is used since the app is
  small and simple.

### Component Structure

- `App.tsx`: Root component, holds global state and business logic
- `SearchBar`: Product name search input
- `CategoryFilter`: Category dropdown filter
- `ProductList`: Renders filtered products
- `ProductRow`: Displays product info and quantity control
- `CartSummary`: Displays selected items and total price

---

## Responsive Design Decisions

- **Desktop**
  - Two-column layout using Flexbox
  - Product list on the left, order summary on the right
- **Mobile**
  - Single-column layout
  - Order summary placed below the product list
  - Sticky cart panel for easy access
- Flexbox with `min-width: 0` is used to prevent layout overflow
  issues.
- No external UI framework is used to keep the UI lightweight and
  flexible.
