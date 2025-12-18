1. `How would you share logic or components between web and mobile?`

- Use a shared domain layer for business logic (product filtering, cart calculation, pricing).
- Extract reusable logic into custom hooks (e.g. useProducts, useCart) that can be shared.
- Share UI primitives and design tokens (colors, spacing, typography) to ensure visual consistency.
- If using React Native, structure the project as a monorepo with shared packages for types and logic.
- Keep platform-specific code (web vs mobile UI) thin and focused on presentation only.

2. `How would you ensure performance on low-end devices and slow networks?`

- Keep components lightweight and avoid unnecessary re-renders (useMemo, React.memo).
- Use lazy loading for non-critical screens or components.
- Optimize data usage:
  - Fetch only required fields
  - Cache results when possible
- Design with graceful degradation:
  - Loading states
  - Empty states
  - Basic functionality without heavy animations
- Minimize bundle size by avoiding large dependencies unless necessary.

3. `How would you organize the codebase so multiple teams can contribute?`

- Use a feature-based folder structure (e.g. products, cart, orders) instead of technical layers.
- Define clear ownership boundaries per feature or module.
- Share contracts via TypeScript types/interfaces to reduce integration issues.
- Enforce consistency with:
  - Linting
  - Code formatting
  - Clear PR guidelines
- Keep shared components and utilities in well-documented common packages to avoid duplication.
