## Aura Gradient: "Tideglass"

### Visual Description
A cool atmospheric gradient background using layered CSS blend modes.
Category: **aura**. Theme: **dark**.
The composition uses 3 layers over a dark backdrop (`#100e0b`):

- **Layer 1:** Radial gradient. Blend mode: `screen`, blur: `115px` (mobile) / `166px` (desktop).
- **Layer 2:** Linear gradient. Blend mode: `screen`, blur: `105px` (mobile) / `151px` (desktop), opacity: 0.9.
- **Layer 3:** Linear gradient. Blend mode: `soft-light`, blur: `80px` (mobile) / `115px` (desktop), opacity: 0.8.

A **grain texture overlay** (SVG feTurbulence noise) is applied on top for an analog film feel.


### ⚠️ Critical: Blend Mode Architecture
These layers use CSS `mix-blend-mode` (screen, soft-light). 
Blend modes composite against whatever is **behind** the element - the page/body background.

**DO NOT** set `background-color` on the gradient container itself. Instead:
1. Set `background-color: #100e0b` on the **`<body>`** or **page wrapper**.
2. The gradient container must be **transparent** (no background).
3. The layers will blend against the body background to create the atmospheric effect.

If you put the base color on the container, the blend modes will composite against that instead of the page, producing incorrect (washed-out or too dark) results.


### 🌗 Light / Dark Theme Adaptation
The layer blend modes (`screen`, `soft-light`) are tuned for a dark backdrop. If you composite them over a **light or white** surface they wash out (the gradient "disappears"). To keep the same colors, swap each of those blend modes for `multiply` and keep the backlight light:

| Original blend mode | On a light surface use |
| --- | --- |
| `screen` | `multiply` |
| `soft-light` | `multiply` |

`multiply`, `normal`, and dark backdrops need no change.
### Implementation Notes
- Give the container an explicit `min-height: 100vh` (or the height of your section). Every layer is `position: absolute; inset: 0;` so the stack contributes `0px` of height on its own - without this the page collapses to a bare background.
- Each layer is an absolutely-positioned div with its own `mix-blend-mode` and optional `filter: blur()`.
- Use `transform: translateZ(0)` or `will-change: transform` on blur layers for GPU acceleration.
- All decorative layers should have `pointer-events: none` and `aria-hidden="true"`.
- The parent container needs `position: relative` and `overflow: hidden`.
- **The base color (#100e0b) must be on the body/page, NOT on the container.**
- **Page content must sit above the layers**: wrap it in an element with `position: relative` and `z-index: 1`, otherwise the absolutely-positioned layers paint over it.
- **Do not generate sample text, headings, or demo content** - produce the background only, ready for real content.

### CSS Code

```css
/* Tideglass - Aura */
/* Base color on BODY - blend modes composite against this */
body {
  background-color: #100e0b;
}

.aura-bg {
  position: relative;
  overflow: hidden;
  min-height: 100vh; /* height must be explicit - absolute layers add none */
  /* NO background-color - layers blend against body */
}

/* Layer 1 - screen */
.aura-layer-1 {
  position: absolute;
  inset: 0;
  background: radial-gradient(90% 22% at 50% 56%, rgba(28,103,101,0.34) 0%, rgba(18,65,64,0.18) 38%, transparent 78%);
  mix-blend-mode: screen;
  filter: blur(115px); /* use 166px on desktop */
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

/* Layer 2 - screen */
.aura-layer-2 {
  position: absolute;
  inset: 0;
  background: linear-gradient(172deg, transparent 35%, rgba(53,142,137,0.20) 46%, rgba(29,89,87,0.28) 53%, transparent 66%);
  mix-blend-mode: screen;
  filter: blur(105px); /* use 151px on desktop */
  opacity: 0.9;
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}

/* Layer 3 - soft-light */
.aura-layer-3 {
  position: absolute;
  inset: 0;
  background: linear-gradient(8deg, transparent 38%, rgba(67,153,147,0.10) 49%, transparent 60%);
  mix-blend-mode: soft-light;
  filter: blur(80px); /* use 115px on desktop */
  opacity: 0.8;
  transform: translateZ(0);
  will-change: transform;
  pointer-events: none;
}


/* Film-grain overlay - SVG feTurbulence noise, overlay blend */
.aura-grain {
  position: absolute;
  inset: 0;
  mix-blend-mode: overlay;
  opacity: 0.85;
  pointer-events: none;
}
```


> Add the grain as a child of the container: an inline SVG with the feTurbulence filter above (see the React/HTML sections), using `mix-blend-mode: overlay` and `opacity: 0.85`.

### React / Next.js

```tsx
export function AuraBackground() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        /* NO backgroundColor - blend modes composite against body/page bg */
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(90% 22% at 50% 56%, rgba(28,103,101,0.34) 0%, rgba(18,65,64,0.18) 38%, transparent 78%)",
          mixBlendMode: "screen",
          filter: "blur(115px)", /* 166px on desktop */
          pointerEvents: "none",
          transform: "translateZ(0)",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(172deg, transparent 35%, rgba(53,142,137,0.20) 46%, rgba(29,89,87,0.28) 53%, transparent 66%)",
          mixBlendMode: "screen",
          filter: "blur(105px)", /* 151px on desktop */
          opacity: 0.9,
          pointerEvents: "none",
          transform: "translateZ(0)",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(8deg, transparent 38%, rgba(67,153,147,0.10) 49%, transparent 60%)",
          mixBlendMode: "soft-light",
          filter: "blur(80px)", /* 115px on desktop */
          opacity: 0.8,
          pointerEvents: "none",
          transform: "translateZ(0)",
        }}
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          mixBlendMode: "overlay",
          opacity: 0.85,
          pointerEvents: "none",
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix
              type="matrix"
              values="0.181 0.608 0.061 0 0.075
                    0.181 0.608 0.061 0 0.075
                    0.181 0.608 0.061 0 0.075
                    0     0     0     1 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>
      {/* Your content lives here - put it in a wrapper that sits ABOVE the layers */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Your actual content */}
      </div>
    </div>
  );
}
```

> **Remember:** Set `body { background-color: #100e0b; }` in your global CSS. The component container must NOT have its own background-color.

> **Important:** Do NOT put any placeholder text or sample headings in the output. The gradient background should be left clean - your (or the user's) real content goes inside the `zIndex: 1` wrapper.

### Vanilla HTML

```html
<div class="aura-bg">
  <div class="aura-layer-1" aria-hidden="true"></div>
  <div class="aura-layer-2" aria-hidden="true"></div>
  <div class="aura-layer-3" aria-hidden="true"></div>
  <div aria-hidden="true" style="position:absolute;inset:0;mix-blend-mode:overlay;opacity:0.85;pointer-events:none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch"/>
        <feColorMatrix type="matrix" values="0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0 0 0 1 0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)"/>
    </svg>
  </div>
  <!-- Your content lives here - this wrapper sits ABOVE the absolute layers -->
  <div style="position: relative; z-index: 1;">
    <!-- Your actual content -->
  </div>
</div>
```