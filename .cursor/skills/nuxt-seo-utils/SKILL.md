---
name: nuxt-seo-utils
description: Applies Nuxt SEO Utils defaults such as canonical URLs, meta defaults, fallback titles, metadata files, and route-rule SEO settings. Use when tasks involve improving baseline discoverability and shareability with minimal manual meta wiring.
---

# Nuxt SEO Utils (project)

## Use when

- Enabling default canonical/meta behavior
- Improving baseline OG/meta coverage
- Setting SEO defaults in `nuxt.config.ts` or route rules
- Adding metadata-file based icons or OG assets

## What this module gives

- Automatic canonical URL behavior
- Default SEO meta fallbacks
- Automatic OG meta inference and tag normalization
- Route-rules and config-level SEO meta ergonomics

## Implementation workflow

- [ ] Confirm `site` config exists (`url`, `name`)
- [ ] Add SEO Utils only if task asks for these defaults
- [ ] Start with default behavior before custom overrides
- [ ] Add route-level overrides only for clear exceptions
- [ ] Validate rendered head tags in dev/build

## Guardrails

- Do not manually duplicate meta tags site-wide when defaults already cover them.
- Do not add broad custom overrides unless required.
- Prefer minimal route-level exceptions over global complexity.

## Reference

- [Nuxt SEO Utils Introduction](https://nuxtseo.com/docs/seo-utils/getting-started/introduction)
