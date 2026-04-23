---
name: primevue-button
description: Applies PrimeVue 4 Button and ButtonGroup APIs, pass-through (pt), design-token hooks (dt), and theming boundaries for this Nuxt project. Use when editing BaseButton, Layout CTAs, PrimeVue Button/ButtonGroup, severity/variant/link/text/outlined, loading/icons, or when integrating PrimeOne / Figma variables with PrimeVue controls.
---

# PrimeVue Button (project)

## Stack context

- **PrimeVue** `^4.5.x`, **`@primevue/nuxt-module`**, theme: `app/themes/kowju.preset.ts` (`definePreset` on Aura).
- Prefer **`BaseButtonPrimary`**, **`BaseButtonSecondary`**, or **`BaseButtonOutlined`** (thin wrappers) in feature code; **`BaseButton`** is an alias of primary. Avoid raw `Button` in pages/sections unless the wrapper is insufficient.
- **Theming:** adjust tokens + preset + global CSS—not ad-hoc `class` on `Button` to fight the theme (see workspace design-system rules).

## Button — props that matter (PrimeVue-specific)

| Prop | Role |
|------|------|
| `label` | Text when not using default slot |
| `icon` | Icon name (PrimeIcons / configured set) |
| `iconPos` | `left` \| `right` \| `top` \| `bottom` (default `left`) |
| `iconClass` | Extra classes on icon |
| `badge` / `badgeClass` / `badgeSeverity` | Optional badge; severity matches Prime severity tokens |
| `loading` / `loadingIcon` | Loading state and optional custom loading icon |
| `severity` | `secondary` \| `info` \| `success` \| `warn` \| `danger` \| `contrast` \| `help` |
| `variant` | `outlined` \| `text` \| `link` (preferred over legacy booleans where both exist) |
| `link` | Link visual (see also `variant="link"`) |
| `text` / `outlined` / `plain` | Alternate style flags; prefer **`variant`** when documenting new code |
| `raised` / `rounded` | Elevation / pill shape |
| `size` | `small` \| `large` |
| `fluid` | Full width of container |
| `disabled` | Native disabled |
| `as` | Root tag (default `button`) |
| `asChild` | Render as child element (composition) |
| `unstyled` | Strip core styles (advanced; usually avoid—use preset) |
| `dt` | Scoped **design tokens** for this component instance (CSS variables) |
| `pt` / `ptOptions` | **Pass-through**: attrs/classes per DOM part (see below) |

**Standard HTML/Vue attributes** (`type`, `aria-*`, `class`, events, etc.) apply to the root like any Vue component; do not duplicate full MDN tables in tasks—use official PrimeVue docs for exhaustive lists.

## Default slot rule

When the **default slot** is used, **`label` / `icon` / `badge` are not applied**—slot content replaces them. Use slot for custom icon + text composition.

**Named slots:** `icon`, `loadingicon` — custom templates; receive `scope.class` (and button scope includes `a11yAttrs` on default slot).

## Pass-through (`pt`)

`pt` keys for Button (typical): `root`, `loadingIcon`, `icon`, `label`, `pcBadge`, `hooks`.

Values: static attrs/classes **or** a function receiving `{ instance, props, context, parent, global }` for dynamic mapping.

Use **pt** for structural a11y or rare DOM hooks—not routine visual tweaks (those belong in the preset).

## ButtonGroup

- Wraps multiple **`Button`** children; props: `dt`, `pt`, `ptOptions`, `unstyled`.
- **Default slot:** place `Button` components as children.

## PrimeOne / Figma variables

- **Figma Native Variables** align with **design tokens** → Aura/Prime preset (`--p-*`) and Tailwind theme in this repo.
- Per-component overrides: prefer **`dt`** on the component or **preset `components.button`** in `kowju.preset.ts`, not scattered inline styles.

## Official reference

For API drift (new props, exact TypeScript types): **PrimeVue 4 docs → Button** (primevue.org). This skill states project boundaries; it is not a full API mirror.
