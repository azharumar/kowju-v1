---
name: nuxt-sitemap
description: Configures Nuxt Sitemap generation for single or multi-sitemap output with minimal setup and clean URL coverage. Use when tasks involve sitemap.xml generation, dynamic URL sources, indexing scope, or sitemap validation.
---

# Nuxt Sitemap (project)

## Use when

- Adding or fixing `sitemap.xml`
- Including dynamic routes in sitemap output
- Filtering indexable vs non-indexable URLs
- Supporting large sites or multi-sitemap setups

## Implementation workflow

- [ ] Confirm `site.url` exists and is canonical
- [ ] Enable Sitemap module if requested
- [ ] Start with default auto-generated sitemap
- [ ] Add dynamic data sources only for missing URLs
- [ ] Validate sitemap structure and URL correctness

## Guardrails

- Do not manually maintain static sitemap entries if module can source routes.
- Do not include non-indexable/private URLs.
- Keep sitemap config simple unless scale/i18n needs more.

## Reference

- [Nuxt Sitemap Introduction](https://nuxtseo.com/docs/sitemap/getting-started/introduction)
