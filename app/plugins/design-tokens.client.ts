import {
  button,
  card,
  colors,
  font,
  formField,
  motion,
  radius,
  semantic,
  shadow,
} from '~~/design-system/tokens'

function setVars(el: CSSStyleDeclaration, entries: Record<string, string>) {
  for (const [k, v] of Object.entries(entries)) {
    el.setProperty(k, v)
  }
}

export default defineNuxtPlugin(() => {
  const root = document.documentElement.style
  const out: Record<string, string> = {}

  for (const [shade, hex] of Object.entries(colors.brand)) {
    out[`--color-brand-${shade}`] = hex
  }
  for (const [shade, hex] of Object.entries(colors.gold)) {
    out[`--color-gold-${shade}`] = hex
  }
  for (const [shade, hex] of Object.entries(colors.warm)) {
    out[`--color-warm-${shade}`] = hex
  }
  out['--color-white'] = colors.white

  out['--color-bg'] = semantic.bg
  out['--color-text'] = semantic.text.DEFAULT
  out['--color-text-muted'] = semantic.text.muted
  out['--color-text-inverse'] = semantic.text.inverse
  out['--color-surface'] = semantic.surface.DEFAULT
  out['--color-surface-muted'] = semantic.surface.muted
  out['--color-border'] = semantic.border.DEFAULT
  out['--color-border-strong'] = semantic.border.strong

  for (const [k, v] of Object.entries(radius)) {
    out[`--radius-${k}`] = v
  }

  out['--shadow-sm'] = shadow.sm
  out['--shadow-md'] = shadow.md
  out['--shadow-lg'] = shadow.lg

  out['--form-field-padding-x'] = formField.paddingX
  out['--form-field-padding-y'] = formField.paddingY
  out['--form-field-sm-font-size'] = formField.sm.fontSize
  out['--form-field-sm-padding-x'] = formField.sm.paddingX
  out['--form-field-sm-padding-y'] = formField.sm.paddingY
  out['--form-field-lg-font-size'] = formField.lg.fontSize
  out['--form-field-lg-padding-x'] = formField.lg.paddingX
  out['--form-field-lg-padding-y'] = formField.lg.paddingY
  out['--form-field-border-radius'] = formField.borderRadius

  out['--button-padding-x'] = button.paddingX
  out['--button-padding-y'] = button.paddingY
  out['--button-label-font-weight'] = button.labelFontWeight
  out['--button-label-text-transform'] = button.labelTextTransform
  out['--button-label-letter-spacing'] = button.labelLetterSpacing

  out['--card-body-padding'] = card.bodyPadding
  out['--card-title-font-size'] = card.titleFontSize
  out['--card-title-font-weight'] = card.titleFontWeight

  out['--font-family-sans'] = font.family.sans

  out['--motion-duration'] = motion.duration
  out['--motion-ease'] = motion.ease

  setVars(root, out)
})
