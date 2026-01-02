## GOAL

Create a **MASTER DESIGN DOCUMENT** in Markdown that:

- Systematically captures the visual language of the UI
- Is **developer-friendly** and ready to drop into a repo as `DESIGN_SYSTEM.md`
- Includes **color system, typography, spacing, layout, components, states, and effects**
- Uses **clear hierarchy, headings, tables, and token-like names** that developers can reuse

Output **Markdown only** (no explanations about what you are doing).

---

## GENERAL RULES

- Work **only from the screenshot(s)**; *infer* values carefully and stay internally consistent.
- When you must approximate (e.g., exact hex color), pick the **closest plausible value** and stay consistent across the doc.
- Use **concise, practical descriptions** aimed at devs and designers.
- Prefer **tokens / variable-style naming**, e.g. `color-primary-500`, `radius-lg`, `shadow-md`, `font-body`.

Use this **overall structure**:

---

# Design System

## 1. Overview

- **Summary:** 2-3 sentences describing the overall look & feel (e.g. “clean, high-contrast, modern, rounded cards, generous whitespace”).
- **Design principles:** Bullet list (e.g. “Clarity over decoration”, “Emphasis on primary call to action”, etc.).
- **Target use case:** Briefly infer the primary purpose (marketing site, web app dashboard, etc.).

---

## 2. Color System

Describe the **complete color system** you can infer.

### 2.1 Core Palette

For each visible core color (brand primary, secondary, accent):

- Name them and create tokens like `color-primary-500`, `color-accent-500`.

Use a Markdown table like:

| Token               | Hex      | Role / Usage                                      |
|---------------------|----------|---------------------------------------------------|
| `color-primary-500` | `#??????`| Primary buttons, links, main highlights           |
| `color-secondary-500` | `#??????` | Secondary actions, subtle highlights           |
| `color-accent-500` | `#??????`| Badges, highlights, charts, etc.                 |

### 2.2 Neutrals & Backgrounds

Define neutrals and background layers:

- `color-neutral-900` → main text
- `color-neutral-700` → secondary text
- `color-neutral-500` → icon / placeholder
- `color-neutral-300` → borders
- `color-neutral-100` → card backgrounds
- `color-background` / `color-surface` / `color-surface-alt`

Use a table:

| Token                 | Hex      | Role / Usage                      |
|-----------------------|----------|-----------------------------------|
| `color-background`    | `#??????`| Page background                   |
| `color-surface`       | `#??????`| Cards, panels                     |
| `color-border-subtle` | `#??????`| Card borders, dividers            |

### 2.3 Semantic Colors

If visible, define:

- **Success** (`color-success-*`)
- **Warning** (`color-warning-*`)
- **Error** (`color-error-*`)
- **Info** (`color-info-*`)

Include states when possible (e.g. `500` for main, `100` for background, `700` for text).

### 2.4 State & Overlay Colors

Document any:

- Hover / active backgrounds
- Focus rings
- Overlays (e.g., modal backdrop)

Example table:

| Token                     | Hex      | Role / Usage                          |
|---------------------------|----------|---------------------------------------|
| `color-state-hover`       | `#??????`| Button hover background               |
| `color-focus-ring`        | `#??????`| Focus outline                         |
| `color-overlay-backdrop`  | `#??????`| Modal backdrop                        |

---

## 3. Typography

Describe the **typographic system**: families, weights, sizes, and hierarchy.

### 3.1 Font Families

- **Primary font:** `font-family-primary` (e.g., “Inter”, “Roboto”, etc. – infer from look)
  - Usage: body text, UI labels
- **Secondary font** (if any): `font-family-secondary`
  - Usage: headings, logo, or accent text

### 3.2 Type Scale & Roles

Define a consistent scale, mapped to semantic roles and HTML tags.

Use a table like:

| Token          | HTML Tag | Size (px) | Weight | Line-height | Usage                           |
|----------------|----------|-----------|--------|-------------|----------------------------------|
| `font-display` | `h1`     | 32        | 700    | 1.2         | Page titles                      |
| `font-h2`      | `h2`     | 24        | 600    | 1.3         | Section headings                 |
| `font-h3`      | `h3`     | 20        | 600    | 1.3         | Subsection headings              |
| `font-body`    | `p`      | 16        | 400    | 1.5         | Body copy                        |
| `font-small`   | `small`  | 14        | 400    | 1.4         | Helper text, captions            |

Adjust sizes and weights to match what you see.

### 3.3 Text Styles & Usage Rules

- How headings differ from body (case, tracking, spacing).
- Styles for:
  - Labels
  - Links
  - Muted/secondary text
  - Error/helper text on forms

---

## 4. Spacing, Sizing & Layout

### 4.1 Spacing Scale

Infer a spacing scale (often multiples of 4 or 8).

Define tokens like:

| Token        | Value (px) | Typical Usage                        |
|--------------|------------|--------------------------------------|
| `space-4`    | 4          | Tight gaps, icons                    |
| `space-8`    | 8          | Small gaps                           |
| `space-12`   | 12         | Between input & label                |
| `space-16`   | 16         | Internal padding for buttons/cards   |
| `space-24`   | 24         | Section padding                      |
| `space-32`   | 32         | Large section / layout gutters       |

### 4.2 Layout & Grid

Describe the **page structure**:

- Max content width (e.g. `container-max-width: 1200px`)
- Layout style (fixed width vs fluid)
- Number of columns if visible (e.g., 12-column grid, card columns)
- Gutter sizes and margins between sections

Include a short subsection on:

- Header layout (logo, nav, CTA)
- Main content wrappers
- Sidebar presence (if any)
- Footer layout

### 4.3 Corner Radii

Define radius tokens:

| Token        | Value (px) | Usage                             |
|--------------|------------|-----------------------------------|
| `radius-sm`  | 4          | Inputs, tags                      |
| `radius-md`  | 8          | Buttons, cards                    |
| `radius-lg`  | 16         | Large featured cards / modals     |

### 4.4 Shadows & Elevation

Document shadows (even if approximated):

| Token         | CSS-like Description                   | Usage                      |
|---------------|-----------------------------------------|----------------------------|
| `shadow-none` | none                                   | Flat elements              |
| `shadow-sm`   | 0 1px 2px rgba(0,0,0,0.08)             | Subtle cards               |
| `shadow-md`   | 0 4px 12px rgba(0,0,0,0.12)            | Elevated cards, modals     |

---

## 5. Components

For each visible component, create a subsection with:

- **Anatomy:** what parts it has
- **Variants:** primary/secondary/ghost, size variants
- **States:** default, hover, active, disabled, focus
- **Usage rules:** when to use which variant

At minimum, define:

### 5.1 Buttons

- Primary, secondary, tertiary/ghost
- Icon buttons (if any)
- Sizes: small / default / large

For each: describe background, text color, border, radius, shadows, and state changes.

### 5.2 Form Inputs

Cover:

- Text fields
- Selects / dropdowns
- Textareas
- Checkboxes / radios / toggles (if visible)

Include:

- Label placement
- Error state styling
- Helper text styling
- Focus ring behavior

### 5.3 Cards & Panels

Describe:

- Card padding, radius, shadow
- Header/footer sections (title, actions)
- Variants (e.g., featured card vs normal card)

### 5.4 Navigation

Document:

- Top navigation bar
- Active link state
- Hover states
- Mobile behavior (if visible or inferable)

### 5.5 Tables / Lists (if present)

Specify:

- Header row styling
- Row height
- Alternating row backgrounds
- Selected row state (if any)

### 5.6 Badges / Tags / Chips (if present)

Describe:

- Colors per semantic meaning
- Shape (pill vs rounded rectangle)
- Icon usage inside tags

### 5.7 Modals / Toasts / Alerts (if present)

Include:

- Layout
- Close controls
- Background overlay
- Spacing and alignment

---

## 6. Icons & Illustration

If icons are visible:

- Style: line vs filled, rounded vs sharp
- Typical sizes (e.g. 16px, 20px, 24px)
- Color usage (follow text color or use brand colors)

If illustrations or imagery are part of the style:

- Describe color style, level of detail, shape language.

---

## 7. Interaction & Motion

Even if motion isn’t visible, **infer reasonable defaults** consistent with the design:

- Hover behavior (color shifts, elevation)
- Focus behavior (focus ring color and thickness)
- Active/pressed behavior (darkened color, smaller shadow)
- Transition durations and easing (e.g., `150–200ms`, `ease-out`)

Describe these as general rules, e.g.:

- “All interactive elements use a 150ms color transition and elevation change with `ease-out`.”

---

## 8. Accessibility & Usability Considerations

From what you see, add:

- Contrast patterns (high/medium contrast)
- Minimum tap target recommendations (e.g. 40x40px)
- Text size considerations for readability
- Suggestions to ensure accessible focus states and color contrast.

---

## 9. Implementation Notes & Tokens

Summarize:

- Global CSS variables / tokens (list key ones you’ve defined, e.g., colors, spacing, radius, shadows).
- Suggested naming conventions for a design token system (e.g. aligned with CSS variables or a design tool).

Example mini-snippet (do not invent a full CSS file, just an example):

```css
:root {
  --color-primary-500: #??????;
  --color-background: #??????;
  --font-family-primary: "Inter", system-ui, -apple-system, sans-serif;
  --radius-md: 8px;
  --space-16: 16px;
}

Important:

Output only the final Markdown document with the above structure, fully filled out based on the provided screenshot(s).

Do not include this instruction text in the final output.
Output everything into a code editor