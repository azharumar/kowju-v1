---
name: nuxt-site-config
description: Configures Nuxt Site Config as the canonical SEO source of truth for url, name, environment, and indexability. Use when tasks involve canonical URLs, environment indexing behavior, or shared site metadata across Nuxt SEO modules.
---

# Nuxt Site Config (project)

## Use when

- Setting or fixing canonical site URL
- Defining site name used by SEO modules
- Managing indexability by environment
- Avoiding duplicated site metadata across modules

## Baseline config

Set `site` in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  site: {
    url: 'https://example.com',
    name: 'My Site'
  }
})
```

Use this as the single source of truth for Nuxt SEO modules.

## Implementation workflow

- [ ] Confirm production canonical URL
- [ ] Set `site.url` and `site.name`
- [ ] Avoid duplicating URL/name in module-specific config
- [ ] Confirm environment/indexability expectations
- [ ] Verify generated canonical/meta output in dev/build

## Guardrails

- Do not use request-host URLs as canonical defaults.
- Do not spread site identity across multiple configs.
- Keep setup minimal unless task explicitly asks for runtime/multi-tenant behavior.

## Reference

- [Nuxt Site Config Introduction](https://nuxtseo.com/docs/site-config/getting-started/introduction)
