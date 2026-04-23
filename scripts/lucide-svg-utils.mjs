/**
 * Serialize Lucide icon nodes to SVG (ISC license — https://lucide.dev/).
 */
import * as Lucide from 'lucide'

export const VIEW_BOX = '0 0 24 24'
export const STROKE = '1'
export const STROKE_COLOR = '#2c2c2c'

export function escapeAttr(v) {
  return String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

export function serializePart(part) {
  const [tag, attrs, children] = part
  if (children?.length) {
    const inner = children.map(serializePart).join('')
    const attrStr = Object.entries(attrs)
      .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
      .join(' ')
    return `<${tag} ${attrStr}>${inner}</${tag}>`
  }
  const attrStr = Object.entries(attrs)
    .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
    .join(' ')
  return `<${tag} ${attrStr} />`
}

export function getLucideInner(iconName) {
  const node = Lucide[iconName]
  if (!node || !Array.isArray(node)) {
    throw new Error(`Missing Lucide icon: ${iconName}`)
  }
  return node.map(serializePart).join('\n')
}

/** Standalone asset: 24×24, for .svg files in public/icons/samples */
export function lucideToStandaloneFileSvg(iconName) {
  const inner = getLucideInner(iconName)
  return `<svg width="24" height="24" viewBox="${VIEW_BOX}" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="${STROKE_COLOR}" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round">\n${inner}\n</svg>\n`
}
