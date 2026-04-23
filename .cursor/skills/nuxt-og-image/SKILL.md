---
name: nuxt-og-image
description: Implements Nuxt OG Image social preview generation using minimal template/config setup, including renderer choices and per-route behavior. Use when tasks involve og:image generation, social sharing previews, or OG image consistency across pages.
---

# Nuxt OG Image (project)

## Use when

- Generating `og:image` automatically
- Standardizing social preview images
- Adding page-specific OG image behavior
- Debugging missing or invalid OG images

## Implementation workflow

- [ ] Confirm `site` config is set correctly
- [ ] Enable OG Image module only when requested
- [ ] Start with default renderer/setup
- [ ] Add custom templates only if task requires design variation
- [ ] Validate share previews with social debugger tools

## Guardrails

- Do not add heavy custom rendering logic unless needed.
- Keep OG image generation aligned with existing page metadata.
- Avoid per-page custom templates unless there is a concrete requirement.

## Reference

- [Nuxt OG Image Introduction](https://nuxtseo.com/docs/og-image/getting-started/introduction)
