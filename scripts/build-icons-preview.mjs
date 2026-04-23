/**
 * Builds public/icons/icons-preview.html using Lucide outline icons (ISC license).
 * Also writes pure SVG replacements for former PNG / raster-embedded samples.
 * Spec: 24×24 viewBox, stroke 1, round caps/joins, stroke #2c2c2c.
 */
import fs from 'node:fs'
import path from 'node:path'
import {
  VIEW_BOX,
  STROKE,
  STROKE_COLOR,
  getLucideInner,
  lucideToStandaloneFileSvg,
} from './lucide-svg-utils.mjs'

const root = path.resolve(import.meta.dirname, '..')
const outFile = path.join(root, 'public', 'icons', 'icons-preview.html')
const samplesDir = path.join(root, 'public', 'icons', 'samples')

const DISPLAY = 48

const manifestPath = path.join(root, 'design-system', 'icon-samples.json')
const items = JSON.parse(fs.readFileSync(manifestPath, 'utf8')).items

const allowedSampleFiles = new Set(items.map((i) => i.file))

function lucideToPreviewSvg(iconName) {
  const inner = getLucideInner(iconName)
  return `<svg class="icon" width="${DISPLAY}" height="${DISPLAY}" viewBox="${VIEW_BOX}" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="${STROKE_COLOR}" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`
}

const figures = items.map((item) => {
  const svgHtml = lucideToPreviewSvg(item.icon)
  const safeLabel = item.label.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  const safeFile = item.file.replace(/&/g, '&amp;')
  return `    <figure>
      <div class="icon-wrap">${svgHtml}</div>
      <figcaption>
        <div class="label">${safeLabel}</div>
        <div class="file">${safeFile} · <span class="lib">Lucide · ${item.icon}</span></div>
      </figcaption>
    </figure>`
})

for (const { file, icon } of items) {
  const p = path.join(samplesDir, file)
  fs.writeFileSync(p, lucideToStandaloneFileSvg(icon), 'utf8')
  console.log('Wrote sample', p)
}

for (const name of fs.readdirSync(samplesDir)) {
  if (!name.endsWith('.svg') || allowedSampleFiles.has(name)) continue
  fs.unlinkSync(path.join(samplesDir, name))
  console.log('Removed obsolete sample', name)
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Icon samples preview (Lucide)</title>
  <style>
    :root {
      --bg: #f6f6f5;
      --card: #fff;
      --text: #1a1a1a;
      --muted: #5c5c5c;
      --border: #e2e2e0;
      --icon-size: 64px;
      --ink: #2c2c2c;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 1.5rem clamp(1rem, 4vw, 2rem) 3rem;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.45;
      color: var(--text);
      background: var(--bg);
    }
    h1 { font-size: 1.25rem; font-weight: 600; margin: 0 0 0.5rem; }
    .notes {
      max-width: 72ch;
      margin: 0 0 1.5rem;
      padding: 1rem 1.125rem;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--muted);
      font-size: 13px;
    }
    .notes strong { color: var(--text); }
    .notes code { font-size: 12px; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 12px;
    }
    figure {
      margin: 0;
      padding: 12px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      min-height: 0;
    }
    .icon-wrap {
      width: var(--icon-size);
      height: var(--icon-size);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
      color: var(--ink);
    }
    svg.icon {
      max-width: 100%;
      max-height: 100%;
      width: ${DISPLAY}px;
      height: ${DISPLAY}px;
      flex-shrink: 0;
      overflow: visible;
    }
    figcaption { width: 100%; }
    .label { font-weight: 600; font-size: 12px; color: var(--text); word-break: break-word; }
    .file { font-size: 11px; color: var(--muted); margin-top: 4px; word-break: break-all; }
    .file .lib { color: #888; }
  </style>
</head>
<body>
  <h1>Icon samples</h1>
  <div class="notes">
    <strong>Lucide outline set.</strong> Every tile uses an icon from <a href="https://lucide.dev/">Lucide</a> (ISC license), inlined as SVG: <code>viewBox="${VIEW_BOX}"</code>, <code>stroke-width="${STROKE}"</code>, <code>stroke="${STROKE_COLOR}"</code>, round caps/joins. Display size ${DISPLAY}px. Sample assets under <code>public/icons/samples/</code> are vector-only (no PNG/JPEG). Regenerate: <code>node scripts/build-icons-preview.mjs</code>.
  </div>
  <div class="grid">
${figures.join('\n')}
  </div>
</body>
</html>
`

fs.writeFileSync(outFile, html, 'utf8')
console.log('Wrote', outFile)
