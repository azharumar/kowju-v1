/** Single source of truth: spacing (rem), type (Major Third 1.25), color hex, radii, shadows. */

const SCALE_FACTOR = 1.2;

export function typeStep(n: number): string {
  return `${SCALE_FACTOR ** n}rem`;
}

export const font = {
  family: {
    sans: "Montserrat, ui-sans-serif, system-ui, sans-serif",
  },
  weight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "600",
  },
} as const;

export const fontSize = {
  caption: [typeStep(-2), { lineHeight: "1.45" }],
  "body-sm": [typeStep(-1), { lineHeight: "1.5" }],
  body: [typeStep(0), { lineHeight: "1.5" }],
  "body-lg": [typeStep(1), { lineHeight: "1.5" }],
  lead: [typeStep(1), { lineHeight: "1.5" }],
  h6: [typeStep(1), { lineHeight: "1.25" }],
  h5: [typeStep(2), { lineHeight: "1.25" }],
  h4: [typeStep(3), { lineHeight: "1.25" }],
  h3: [typeStep(4), { lineHeight: "1.2" }],
  h2: [typeStep(5), { lineHeight: "1.2" }],
  h1: [typeStep(6), { lineHeight: "1.2" }],
} as const;

function spacingScale(maxUnit = 96): Record<string, string> {
  const out: Record<string, string> = { px: "0.0625rem" };
  for (let k = 0; k <= maxUnit; k++) {
    out[String(k)] = `${k * 0.25}rem`;
  }
  return out;
}

export const spacing = spacingScale(96);

export const radius = {
  none: "0",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
} as const;

export const shadow = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.06)",
} as const;

export const zIndex = {
  base: "0",
  raised: "10",
  overlay: "20",
  modal: "30",
  toast: "40",
} as const;

/** Uppercase labels / overlines — exposed as tracking-* in Tailwind extend */
export const letterSpacing = {
  overline: "0.12em",
  label: "0.05em",
  nav: "0.03em",
} as const;

export const navigation = {
  fontWeight: font.weight.semibold,
  letterSpacing: letterSpacing.nav,
} as const;

export const aspectRatio = {
  photo: "4 / 3",
  video: "16 / 9",
  hero: "21 / 9",
  /** Teaser cards (landscape) — e.g. room-to-room adjacency */
  teaser: "16 / 10",
  /** Teaser cards in compact / internal-link layout */
  portrait: "3 / 4",
} as const;

export const minHeight = {
  sectionHero: "50vh",
} as const;

export const motion = {
  duration: "280ms",
  ease: "cubic-bezier(0.33, 1, 0.68, 1)",
} as const;

export const container = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
  "2xl": "90rem",
} as const;

export const colors = {
  brand: {
    50: "#eef8f9",
    100: "#d6eef0",
    200: "#aedde1",
    300: "#7cc5cc",
    400: "#479ea8",
    500: "#007679",
    600: "#006a6c",
    700: "#005c5e",
    800: "#00494b",
    900: "#003d3f",
    950: "#002428",
  },
  gold: {
    50: "#fbf8f3",
    100: "#f3ebe0",
    200: "#e8d9c4",
    300: "#e6c093",
    400: "#d5b387",
    500: "#c49b6a",
    600: "#a67f52",
    700: "#856641",
    800: "#6b5234",
    900: "#56422a",
    950: "#2e2316",
  },
  warm: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09",
  },
  white: "#ffffff",
} as const;

export const semantic = {
  bg: colors.white,
  surface: {
    DEFAULT: colors.white,
    muted: colors.warm[50],
  },
  text: {
    DEFAULT: colors.warm[900],
    lead: colors.warm[700],
    muted: colors.warm[600],
    inverse: colors.white,
  },
  border: {
    DEFAULT: colors.warm[200],
    strong: colors.warm[300],
  },
} as const;

export const formField = {
  paddingX: "1rem",
  paddingY: "0.625rem",
  sm: {
    fontSize: typeStep(-1),
    paddingX: "0.75rem",
    paddingY: "0.5rem",
  },
  lg: {
    fontSize: typeStep(1),
    paddingX: "1.125rem",
    paddingY: "0.75rem",
  },
  borderRadius: radius.md,
} as const;

export const button = {
  paddingX: "1rem",
  paddingY: "0.5rem",
  fontSize: formField.sm.fontSize,
  labelFontWeight: font.weight.semibold,
  /** PrimeVue button label — all caps */
  labelTextTransform: "uppercase",
  labelLetterSpacing: letterSpacing.label,
  /** PrimeVue `size="small"` — compact padding for text-style controls (e.g. carousel nav) */
  sm: {
    fontSize: formField.sm.fontSize,
    paddingX: "0.5rem",
    paddingY: formField.sm.paddingY,
    iconOnlyWidth: "2rem",
  },
} as const;

export const card = {
  bodyPadding: "1.25rem",
  titleFontSize: fontSize.h5[0],
  titleFontWeight: font.weight.medium,
} as const;

export const tailwindThemeExtend = {
  spacing,
  fontSize: { ...fontSize },
  colors: {
    brand: colors.brand,
    gold: colors.gold,
    warm: colors.warm,
    bg: semantic.bg,
    surface: {
      DEFAULT: semantic.surface.DEFAULT,
      muted: semantic.surface.muted,
    },
    text: {
      DEFAULT: semantic.text.DEFAULT,
      lead: semantic.text.lead,
      muted: semantic.text.muted,
      inverse: semantic.text.inverse,
    },
    border: {
      DEFAULT: semantic.border.DEFAULT,
      strong: semantic.border.strong,
    },
  },
  maxWidth: container,
  borderRadius: {
    ...radius,
  },
  boxShadow: {
    sm: shadow.sm,
    DEFAULT: shadow.md,
    md: shadow.md,
    lg: shadow.lg,
  },
  fontFamily: {
    sans: [font.family.sans],
  },
  fontWeight: {
    bold: font.weight.bold,
  },
  letterSpacing: {
    overline: letterSpacing.overline,
    label: letterSpacing.label,
    nav: letterSpacing.nav,
  },
  aspectRatio: {
    photo: aspectRatio.photo,
    video: aspectRatio.video,
    hero: aspectRatio.hero,
    teaser: aspectRatio.teaser,
    portrait: aspectRatio.portrait,
  },
  minHeight: {
    "section-hero": minHeight.sectionHero,
  },
  zIndex: {
    base: zIndex.base,
    raised: zIndex.raised,
    overlay: zIndex.overlay,
    modal: zIndex.modal,
    toast: zIndex.toast,
  },
  transitionDuration: {
    motion: "var(--motion-duration)",
  },
  transitionTimingFunction: {
    motion: "var(--motion-ease)",
  },
} as const;
