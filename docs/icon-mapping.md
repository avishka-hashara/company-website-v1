# Icon mapping: Font Awesome Pro 6 → Font Awesome Free 6

The Arigo template ships **Font Awesome Pro 6.0.0** (`assets/css/all.min.css`,
`/*! Font Awesome Pro 6.0.0 ... Commercial License */`). This project uses
**`@fortawesome/fontawesome-free` 6.7.2**, imported once in `app/layout.js`.

Pinned to **Font Awesome 6**. Do not upgrade to FA 7 — its style/class semantics
differ and the mapping below would need to be re-derived.

Free ships only three styles — `fas` (solid), `far` (regular) and `fab`
(brands). The Pro-only styles `fal` (light), `fat` (thin) and `fad` (duotone)
have no Free equivalent, so every Pro-style class in the template has to be
remapped. Apply this table during **each page conversion**.

## Rules

1. `fa-solid` / `fas` / `fa-brands` / `fab` — **keep as-is**. Every solid and
   brand glyph the template uses exists in Free.
2. `fal` (Pro Light) — **downgrade to `far`** (Regular). Regular is the closest
   Free weight to Light, so the outline look is preserved.
3. **Exception:** if the glyph has no Regular in Free, use `fas` instead. Only
   two icons in scope hit this, both listed below.
4. Keep the icon's original v5-era name (`fa-times`, `fa-long-arrow-alt-right`,
   `fa-map-marker-alt`). FA 6 Free's `all.min.css` still carries those aliases,
   so they render the correct glyph, and keeping them honours the
   "keep original class names" rule in `AGENTS.md`. Canonical FA 6 names are
   noted for reference only — do not rewrite the markup to them.

## Table

Every icon used by the seven in-scope pages (`index-3`, `about`, `service`,
`project`, `project-details`, `contact`, `error`).

### Changed

| Template class | Becomes | Canonical FA 6 name | Why |
| --- | --- | --- | --- |
| `fal fa-envelope` | `far fa-envelope` | `envelope` | Light → Regular; Free has `envelope` in regular |
| `fal fa-clock` | `far fa-clock` | `clock` | Light → Regular; Free has `clock` in regular |
| `fal fa-map-marker-alt` | **`fas fa-map-marker-alt`** | `location-dot` | Free has `location-dot` in **solid only** — no regular to fall back to |
| `far fa-phone` | **`fas fa-phone`** | `phone` | Free has `phone` in **solid only** — no regular to fall back to |

The two bold rows are the `far`→`fas` fixes: solid is the only Free style for
those glyphs, so a `far` class would silently render a blank box.

### Unchanged (verified present in Free 6.7.2)

| Template class | Free style | Note |
| --- | --- | --- |
| `fa-solid fa-arrow-right` | solid | |
| `fa-solid fa-arrow-left` | solid | |
| `fa-solid fa-circle` | solid | also used as `fa-circle text-white` / `text-theme` |
| `fa-solid fa-magnifying-glass` | solid | alias of `fa-search` |
| `fas fa-angle-down` | solid | |
| `fas fa-star` | solid | also used as `fa-star ratting` |
| `fas fa-plus` | solid | |
| `fas fa-times` | solid | alias → `xmark`; also `fa-times search-close` |
| `fas fa-long-arrow-alt-right` | solid | alias → `right-long` (`\f30b`), same glyph as FA 5 |
| `fa-brands fa-facebook` | brands | |
| `fa-brands fa-twitter` | brands | |
| `fa-brands fa-instagram` | brands | |
| `fa-brands fa-dribbble` | brands | |
| `fa-brands fa-linkedin` | brands | |
| `fa-brands fa-vimeo-v` | brands | contact page only |

## How this was verified

Styles come from the metadata shipped inside the installed package —
`node_modules/@fortawesome/fontawesome-free/metadata/icons.yml` (`styles:` per
icon, which for the Free package lists only free styles). Alias names were
confirmed to still resolve in
`node_modules/@fortawesome/fontawesome-free/css/all.min.css`, e.g.
`.fa-times,.fa-xmark{--fa:"\f00d"}` and
`.fa-long-arrow-alt-right,.fa-right-long{--fa:"\f30b"}`.

Re-run after any Font Awesome bump:

```sh
grep -o '<i class="[^"]*"' template/company-one-portfolio/"Buyer file"/arigo/index-3.html \
  | sed 's/<i class="//; s/"$//' | sort -u
```
