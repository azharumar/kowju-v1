---
name: nuxt-seo
description: Configures and applies Nuxt SEO modules for Nuxt apps, including @nuxtjs/seo bundle vs individual modules, required site config, and module selection by use case. Use when adding or updating robots, sitemap, schema.org, OG image, link checker, or SEO utils in this project.
---

# Nuxt SEO (project)

## Quick use

Use this skill when a task mentions Nuxt technical SEO, such as:

- `@nuxtjs/seo` installation
- `robots.txt` and crawl controls
- sitemap generation
- Schema.org / JSON-LD setup
- OG image generation
- link checking and meta defaults

## Decision rule

Choose install strategy first:

- Use **`@nuxtjs/seo`** when the project wants the core stack quickly.
- Install modules individually when only specific features are needed or versions must be pinned.
- Add standalone modules (`Skew Protection`, `AI Ready`) only when explicitly required.

Both bundle and individual installs provide the same core module behavior.

## Required baseline

Always ensure `site` config exists in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  site: {
    url: 'https://example.com',
    name: 'My Site'
  }
})
```

Nuxt SEO modules rely on this for canonical URLs and sitemap output.

## Module map

Default modules in `@nuxtjs/seo`:

- `@nuxtjs/robots`
- `@nuxtjs/sitemap`
- `nuxt-link-checker`
- `nuxt-og-image`
- `nuxt-schema-org`
- `nuxt-seo-utils`
- `nuxt-site-config`

## Implementation workflow

Use this checklist during SEO tasks:

- [ ] Confirm required SEO scope (all-in-one vs specific modules)
- [ ] Confirm or add `site.url` and `site.name`
- [ ] Add only requested modules
- [ ] Keep config minimal (no speculative options)
- [ ] Verify build/dev runs without module config errors

## Guardrails

- Do not add every SEO module by default if the task asks for only one.
- Do not duplicate site URL/name across module configs if `site` already provides them.
- Prefer minimal config first; expand only when task requires.
- Keep module changes isolated to Nuxt config and relevant SEO files.

## References

- [Nuxt SEO Introduction](https://nuxtseo.com/docs/nuxt-seo/getting-started/introduction)
- [Nuxt SEO Installation](https://nuxtseo.com/docs/nuxt-seo/getting-started/installation)
- [Using the Modules](https://nuxtseo.com/docs/nuxt-seo/guides/using-the-modules)
