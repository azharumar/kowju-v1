/**
 * Root classes for PrimeVue `Button` with `unstyled` on `bg-brand-900` surfaces.
 * Uses palette keys from `design-system/tokens.ts` (Tailwind `brand` / `gold`).
 */
export const buttonOnBrandPrimaryRootClass =
  "motion-interactive inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-gold-400 bg-gold-300 px-4 py-2 text-center text-body-sm font-semibold uppercase tracking-label text-brand-900 transition-colors hover:border-gold-300 hover:bg-gold-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-100 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 active:bg-gold-400 disabled:pointer-events-none disabled:opacity-60";

export const buttonOnBrandSecondaryRootClass =
  "motion-interactive inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-gold-300 bg-transparent px-4 py-2 text-center text-body-sm font-semibold uppercase tracking-label text-gold-50 transition-colors hover:border-gold-200 hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 active:bg-brand-800 disabled:pointer-events-none disabled:opacity-60";
