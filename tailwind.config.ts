import type { Config } from 'tailwindcss'
import { tailwindThemeExtend } from './design-system/tokens'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './design-system/**/*.{js,ts}',
  ],
  theme: {
    extend: tailwindThemeExtend,
  },
  plugins: [],
} satisfies Config
