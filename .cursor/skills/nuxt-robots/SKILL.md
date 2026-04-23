---
name: nuxt-robots
description: Configures Nuxt Robots crawl and indexing controls via robots.txt, meta robots, and X-Robots-Tag with environment-aware defaults. Use when tasks involve crawler access, indexing policy, route-specific blocking, or robots validation.
---

# Nuxt Robots (project)

## Use when

- Defining crawl allow/disallow rules
- Managing index/noindex behavior
- Setting route-specific crawler directives
- Preventing non-production indexing

## Implementation workflow

- [ ] Confirm production vs non-production indexing policy
- [ ] Enable Robots module when requested
- [ ] Start with minimal default robots behavior
- [ ] Add route-level directives only where needed
- [ ] Validate robots output and indexing directives

## Guardrails

- Do not block important public pages accidentally.
- Do not allow indexing in staging/dev unless explicitly requested.
- Keep directives focused; avoid broad, risky wildcard rules.

## Reference

- [Nuxt Robots Introduction](https://nuxtseo.com/docs/robots/getting-started/introduction)
