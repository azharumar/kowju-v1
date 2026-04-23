---
name: nuxt-schema-org
description: Implements Nuxt Schema.org JSON-LD with minimal boilerplate and best-practice node setup. Use when tasks involve structured data, rich snippets, organization/page identity, or validating schema output in Nuxt pages.
---

# Nuxt Schema.org (project)

## Use when

- Adding structured data for rich snippets
- Defining organization/site identity in schema
- Improving page-level search result eligibility
- Validating or fixing JSON-LD output

## Implementation workflow

- [ ] Confirm `site` config exists before schema work
- [ ] Enable Schema.org module only when requested
- [ ] Start with default/global schema setup
- [ ] Add page-specific nodes only where needed
- [ ] Validate output in markup and external schema validator

## Guardrails

- Do not add every possible schema node by default.
- Prefer smallest valid node set for each page type.
- Keep page schema consistent with visible content.

## Reference

- [Nuxt Schema.org Introduction](https://nuxtseo.com/docs/schema-org/getting-started/introduction)
