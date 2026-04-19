# Kowju design system — usage

Live reference (typography, color, spacing, radius, shadow, PrimeVue): open **`/design-system`** in the app.

## Rules

- Spacing and type use **rem** only; source values live in [`tokens.ts`](tokens.ts).
- **Layout & composition:** Tailwind utilities (`max-w-*`, `gap-*`, `p-*`, `grid`, `text-*`).
- **Interactive UI:** PrimeVue components; theme tokens in [`themes/kowju.preset.ts`](../app/themes/kowju.preset.ts) (`definePreset` on Aura).
- No inline styles; no one-off component class overrides—prefer preset tokens or global CSS in [`assets/css/main.css`](../app/assets/css/main.css).

## Mapping

| Token file | Tailwind | PrimeVue (generated CSS vars) |
|------------|----------|--------------------------------|
| `colors.brand.*` | `text-brand-500`, `bg-brand-600`, … | `--p-brand-*`, `--p-primary-*`, `--p-secondary-*` (primary & secondary palettes use brand) |
| `colors.gold.*` | `text-gold-400`, … | `--p-gold-*`, `--p-accent-*` |
| `colors.warm.*` | `text-warm-700`, `border-warm-200`, … | `--p-warm-*`, surfaces / form borders |
| `semantic.text|border|bg|surface` | `text-text`, `text-muted`, `text-inverse`, `bg-bg`, `border-border`, … | Align with `--p-*` where used |
| `fontSize.h1` … `caption` | `text-h1`, `text-body`, `text-caption`, … | Typography via Tailwind; Prime form fields use `formField` in preset |
| `spacing` scale | `p-4` = `1rem`, `gap-6`, … | `button` / `inputtext` padding in preset |
| `radius`, `shadow` | `rounded-md`, `shadow`, `shadow-lg` | `borderRadius` primitive + card/button in preset |

## Spacing

- Inner padding (cards, inputs) &lt; section padding (`py-16` md `py-20` lg `py-24` typical).
- Related blocks: tighter `gap-*`; separate sections: larger vertical rhythm.

## Vertical Rhythm Rules

Vertical spacing uses the existing Tailwind scale only (`py-*` for section blocks, `gap-*` inside layouts). No new tokens—pick from the utilities already mapped in [`tokens.ts`](tokens.ts).

### Section spacing (page-level rhythm)

Use `py-*` on the section wrapper (or outer block) to separate major page regions.

- **Small sections:** `py-12` (3rem) — compact bands, footers, narrow strips.
- **Default sections:** `py-16` md `py-20` — standard content sections (match responsive bumps you already use elsewhere).
- **Large sections:** `py-20` lg `py-24` — hero, key storytelling, or when the section must feel clearly separated from neighbors.

Adjust `md:` / `lg:` to taste; keep the **ordering** small &lt; default &lt; large.

### Component spacing (within sections)

Use `gap-*` on flex/grid containers for internal rhythm—not `py-*` between every child unless the child is truly a separate subsection.

- **Tight:** `gap-3` or `gap-4` — label + control, icon + text, tightly related metadata.
- **Default:** `gap-6` — typical stacks (cards list, feature rows).
- **Loose:** `gap-8` or `gap-10` — emphasis or when blocks need air but still read as one section.

### Hierarchy rule (critical)

**Section spacing (`py-*` on the section) must always be larger than the internal component spacing (`gap-*` inside that section).**

Reason: readers must see “this is one block” via consistent inner gaps, and “this is a new block” via larger outer padding. If `gap-*` approaches or exceeds section `py-*`, sections blur and hierarchy collapses.

### Grouping guidelines

- **Headline → subtext → CTA:** one vertical stack (`flex flex-col`) with **tight** `gap-*` between title and supporting line (`gap-3`–`gap-4`), then **default** `gap-*` before the CTA row (`gap-6`) if the CTA is clearly the next action—not a third line of copy.
- **Cards in a grid:** `gap-6` or `gap-8` on the grid; card **internal** padding stays `p-*` per component patterns—do not inflate grid `gap-*` to compensate for weak card padding; fix padding instead.
- **Form elements:** `gap-4` between label+field pairs in one group; `gap-6` or `gap-8` between groups (e.g. “Contact” vs “Message”). Use `space-y-*` on a single column only if you are not mixing flex `gap-*` on the same axis—prefer one system per container.

### Do / Don’t

- **Do:** Section wrapper `py-16` md `py-20`, inner column `gap-6` for stacked blocks.
- **Don’t:** Section wrapper `py-8` with inner `gap-10`—outer rhythm looks weaker than inner, hierarchy inverts.

- **Do:** Grid of cards with `gap-6`; section padding clearly larger than `6` in rem terms on the block axis.
- **Don’t:** `gap-12` between cards inside a section that only has `py-8` section padding—spacing reads as “gaps everywhere,” not “sections.”

- **Do:** Stack headline / body / CTA with small gaps (`gap-3`–`gap-4`, then `gap-6` to button).
- **Don’t:** `py-4` between every text line inside a section that uses `py-24`—use typography and one stack `gap-*`, not per-line padding.

## Breakpoints

Default Tailwind: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px.

## Design System Enforcement Rules

### Core principle

**Always use design system tokens and utilities before introducing custom values.** If no exact match exists, use the **nearest** scale step from [`tokens.ts`](tokens.ts) / the mapping table. Do not ship arbitrary values to “save time”; widening the system is a separate, explicit change—not a silent one-off in a feature PR.

### Allowed vs not allowed

**Allowed**

- Tailwind classes that map to tokens: spacing (`p-*`, `m-*`, `gap-*`, …), typography (`text-h1`, `text-body`, …), colors (`text-brand-*`, `bg-surface`, …), radius, shadow.
- Existing component **variants** and shared layout primitives (containers, grids, section wrappers) already in the project.
- PrimeVue components styled via the Kowju preset / theme tokens—not ad hoc per-instance overrides.

**Not allowed**

- Arbitrary utilities: `mt-[18px]`, `px-[22px]`, `text-[13px]`, `bg-[#...]` unless covered by the exception rule below.
- Inline `style` for spacing, color, or typography (use classes + tokens).
- One-off ad hoc classes in templates or scoped CSS for values that duplicate a token step or a nearby step (`py-18` next to `py-16` on the same page type for no reason).

### Exception rule (escape hatch)

Breaking the system is OK only when:

- **Third-party embeds** force markup or styles you cannot theme through tokens.
- **Short-lived marketing experiments** with an explicit end date or removal plan.
- **Temporary hotfixes** with a ticket/link to refactor to tokens.

**Requirement:** a short comment at the site of deviation: what, why, and when it will be aligned (or why it cannot).

### Consistency rules

- Reuse **section / component / gap** patterns from **Vertical Rhythm Rules** and existing pages—don’t invent a parallel scale.
- Prefer **existing** blocks, layout components, and PrimeVue patterns over new primitives.
- Pick one step on the scale; avoid “almost the same” values side by side (`py-16` here, `py-18` there) without a documented reason.

### Review checklist (PRs)

- [ ] Only token-mapped Tailwind / preset classes for spacing, type, and color (no unexplained arbitrary values).
- [ ] Spacing matches established section + internal `gap-*` patterns.
- [ ] Every custom or inline exception is commented per the exception rule.
- [ ] Existing components or variants were considered before adding new UI.

### Anti-patterns

- Mixing arbitrary spacing with token spacing on the same screen without cause.
- Inconsistent section padding (`py-*`) between sections of the same role (e.g. all content bands).
- Deep nesting with different `gap-*` / `space-y-*` at every level without a clear hierarchy.
- Page-scoped “just this once” styles that encode layout or spacing that belongs in a shared block or token step.
- Duplicating a component with a tiny class tweak instead of a **variant** or shared prop.
