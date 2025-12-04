# eloura-assets#
Eloura Wellness - Foundation CSS & Animations

Premium design system and animation framework for **Eloura Wellness** website built on GoHighLevel (GHL).

![Version](https://img.shields.io/badge/version-1.0.0-green)
![Platform](https://img.shields.io/badge/platform-GoHighLevel-blue)
![License](https://img.shields.io/badge/license-Private-red)

---

## 📦 What's Included

| File | Size | Description |
|------|------|-------------|
| `eloura-wellness-master.css` | 56KB | Complete design system foundation |
| `eloura-animations.js` | 14KB | GSAP-powered scroll animations |

---

## 🎨 Design System Features

### Typography
- **Headlines:** Cormorant Garamond (serif)
- **Body:** DM Sans (sans-serif)
- **Scale:** 7 levels from display (72px) to small (14px)
- **Mobile-optimized:** Automatic size reductions at 480px breakpoint

### Color Palette
- **Primary:** `#00674E` Forest Green
- **Accent:** `#C79349` Gold (5-10% usage only)
- **Backgrounds:** Warm whites and beiges
- **Text:** Rich charcoal with hierarchy

### Components
- **Buttons:** 3 variants (primary, secondary, ghost)
- **Forms:** Complete input styling with focus states
- **Cards:** 4 variants (standard, elevated, bordered, glass)
- **Sections:** 4 background treatments
- **Navigation:** Sticky header with dropdowns (white, 72px height)
- **Footer:** Dark with multi-column layout

### Animation System
- **Vibrant Motion Specs:** Dramatic rise (64px), blur effects (20px), long durations (0.9-1.2s)
- **Scroll-triggered:** Headlines and content blocks animate on scroll
- **Staggered reveals:** Sequential animation with 0.3s delays
- **Page load animations:** Hero content animates immediately
- **Mobile-optimized:** Simplified animations for performance

---

## 🚀 Quick Start

### 1. Add to GHL Site Header

Go to **Sites → Settings → Tracking Code → Header** and paste:

```html
<!-- Eloura Wellness Foundation CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/YOUR-USERNAME/REPO-NAME@main/eloura-wellness-master.css">

<!-- GSAP Animation Libraries (CDN) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

<!-- Eloura Animations JS -->
<script src="https://cdn.jsdelivr.net/gh/YOUR-USERNAME/REPO-NAME@main/eloura-animations.js"></script>
```

**Replace** `YOUR-USERNAME/REPO-NAME` with your actual GitHub username and repository name.

### 2. Apply Classes to Elements

In GHL page builder, add custom classes to elements:

**Typography:**
```
h1-display       → Hero headlines (72px)
h2-section       → Section headlines (56px)
h3-card          → Card titles (32px)
body-large       → Large body text (20px)
body-standard    → Default body (16px)
```

**Buttons:**
```
btn-primary      → Gold button (primary CTA)
btn-secondary    → Forest green outline
btn-ghost        → Text only, no background
```

**Sections:**
```
section-light    → Warm white background
section-surface  → Beige background
section-dark     → Dark green background
```

**Animations:**
```
animate-blur-in          → Headlines with blur effect
animate-fade-rise        → Content blocks fade + rise
stagger-1, stagger-2...  → Sequential animation delays
```

---

## 🏗️ Navigation Setup

**Structure in GHL:**

```
Section (class: "nav-section" or "site-header")
└─ Row (full width)
   └─ Column (full width)
      └─ Nav Menu V2 element
         ├─ Logo
         ├─ Menu items (Home, Services, About, Contact)
         └─ Optional CTA button
```

**Key Points:**
- Apply custom class to the **Section** element, not Nav Menu V2
- Section automatically becomes sticky with white background
- Logo scales to 52px height (44px on mobile)
- Last menu item can be styled as CTA button
- Dropdowns have subtle hover states
- Mobile hamburger appears at 480px

---

## 🎯 Common Patterns

### Hero Section
```
Section: section-light
├─ Headline: h1-display animate-blur-load load-delay-1
├─ Paragraph: body-large animate-load load-delay-2
└─ Button: btn-primary animate-load load-delay-3
```

### Feature Cards (3-column)
```
Section: section-surface
├─ Headline: h2-section animate-blur-in
└─ Row (3 columns):
    ├─ Column: card-standard animate-fade-rise stagger-1
    ├─ Column: card-standard animate-fade-rise stagger-2
    └─ Column: card-standard animate-fade-rise stagger-3
```

### Services Grid
```
Section: section-light
├─ Headline: h2-section animate-blur-in
└─ Row (3 columns):
    ├─ Column: card-elevated animate-fade-rise stagger-1
    │  ├─ Image
    │  ├─ Headline: h3-card
    │  ├─ Paragraph: body-standard
    │  └─ Button: btn-secondary
    ├─ Column: card-elevated animate-fade-rise stagger-2
    └─ Column: card-elevated animate-fade-rise stagger-3
```

### CTA Section
```
Section: section-dark
├─ Headline: h2-section (white text automatic)
├─ Paragraph: body-large (light text automatic)
└─ Button: btn-primary
```

---

## 🎨 Animation Options

### Animation Classes

| Class | Effect | Use For |
|-------|--------|---------|
| `animate-blur-in` | Fade + rise + blur | Headlines |
| `animate-fade-rise` | Fade + rise | Content blocks, cards |
| `animate-fade` | Fade only | Simple reveals |
| `animate-scale` | Fade + scale | Images, icons |

### Stagger Delays

| Class | Delay | Use For |
|-------|-------|---------|
| `stagger-1` | 0s | First item |
| `stagger-2` | 0.3s | Second item |
| `stagger-3` | 0.6s | Third item |
| `stagger-4` | 0.9s | Fourth item |
| `stagger-5` | 1.2s | Fifth item |
| `stagger-6` | 1.5s | Sixth item |

### Page Load Animations

| Class | Effect | Use For |
|-------|--------|---------|
| `animate-load` | Instant fade+rise | Hero content |
| `animate-blur-load` | Instant fade+rise+blur | Hero headline |
| `load-delay-1` | 0s delay | First element |
| `load-delay-2` | 0.3s delay | Second element |
| `load-delay-3` | 0.6s delay | Third element |

---

## 📱 Mobile Responsiveness

### Breakpoint: 480px

**Automatic adjustments:**
- Typography scales down proportionally
- Button padding reduces
- Section padding reduces (100px → 60px)
- Card padding reduces (40px → 32px)
- Navigation height reduces (72px → 64px)
- Logo scales (52px → 44px)
- Hamburger menu appears
- Animations simplify (no blur, reduced rise distance)
- Stagger timing faster (0.3s → 0.1s)

**No additional classes needed** - all responsive behavior is built-in!

---

## 🎨 Color Reference

### Primary Palette
```css
--color-primary: #00674E          /* Forest Green */
--color-primary-dark: #004F3D     /* Dark variant */
--color-primary-light: #6B8F71    /* Light variant */
```

### Accent
```css
--color-accent: #C79349           /* Gold */
--color-accent-light: #E5C494     /* Light gold */
```

### Neutrals
```css
--color-background: #FDFCFA       /* Warm white */
--color-surface: #F8F5EF          /* Beige surface */
--color-beige: #FEF8E8            /* Light beige */
--color-border: #E8E2D5           /* Subtle borders */
```

### Text
```css
--color-text-primary: #1A2E1C     /* Dark green-black */
--color-text-secondary: #5A6B5C   /* Medium gray-green */
--color-text-tertiary: #8A9688    /* Light gray-green */
```

### Text on Dark Backgrounds
```css
--color-text-on-dark: #FFFFFF              /* Pure white */
--color-text-on-dark-secondary: rgba(255,255,255,0.85)
--color-text-on-dark-tertiary: rgba(255,255,255,0.6)
```

---

## 🔧 Customization

### Updating Colors

Edit the `:root` variables in `eloura-wellness-master.css`:

```css
:root {
  --color-primary: #00674E;    /* Change primary color */
  --color-accent: #C79349;     /* Change accent color */
  /* ... other variables */
}
```

### Updating Animation Timing

Edit motion tokens in `:root`:

```css
:root {
  --transition-fast: 0.2s ease;
  --transition-medium: 0.4s ease;
  --transition-slow: 0.9s cubic-bezier(0.165, 0.84, 0.44, 1);
  --delay-stagger: 0.3s;       /* Adjust stagger timing */
  --animate-rise-distance: 4rem; /* Adjust rise distance */
  --animate-blur-amount: 20px;  /* Adjust blur intensity */
}
```

### Disabling Animations

In `eloura-animations.js`, change the config:

```javascript
const ANIMATION_CONFIG = {
  useGSAP: false,  // Set to false to use simpler Intersection Observer
  // ... other options
};
```

Or remove the animations JavaScript entirely for static site.

---

## 🐛 Troubleshooting

### Animations Not Working

**Check:**
1. Browser console for JavaScript errors
2. GSAP CDN scripts are loaded before animations JS
3. Animation classes are spelled correctly
4. Elements are visible in viewport (scroll to test)
5. Browser cache cleared (Cmd+Shift+R / Ctrl+F5)

**Console messages:**
- ✅ "GSAP Animation System initialized with X elements"
- ✅ "Mobile menu toggle initialized"
- ❌ "GSAP library not found" → Add GSAP CDN scripts

### Styles Not Applying

**Check:**
1. CSS file URL is correct in site header
2. CSS file is publicly accessible (test URL in browser)
3. Class names are spelled correctly (case-sensitive!)
4. GHL cache cleared in site settings
5. Test in incognito mode to rule out browser cache

**Common mistakes:**
- ❌ `btn-Primary` (wrong case)
- ✅ `btn-primary` (correct)
- ❌ `animate-blur` (incomplete)
- ✅ `animate-blur-in` (correct)

### Navigation Not Sticky

**Check:**
1. Custom class `nav-section` or `site-header` applied to Section element (not Nav Menu V2)
2. Structure is Section → Row → Column → Nav Menu V2
3. No conflicting CSS in GHL page settings

### Typography Not Matching

**Check:**
1. Fonts are loading (check Network tab in browser DevTools)
2. Google Fonts import in CSS is working
3. No font-family overrides in GHL element settings

---

## 🔄 Updating the System

### Via GitHub

1. Edit files locally
2. Commit and push to GitHub
3. jsDelivr CDN updates automatically (12-24 hour cache)

### Instant Cache Bust

Add version query parameter:

```html
<!-- Before -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/username/repo@main/file.css">

<!-- After (forces immediate update) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/username/repo@main/file.css?v=2">
```

Increment `v=2` to `v=3`, `v=4`, etc. for each update.

---

## 📊 Performance

### File Sizes
- **CSS:** 56KB (13KB gzipped)
- **JS:** 14KB (4KB gzipped)
- **GSAP (CDN):** ~30KB (cached globally)
- **Total added:** ~17KB gzipped

### Optimization Features
- GPU-accelerated transforms (translateY, scale, opacity)
- Reduced animations on mobile (no blur effects)
- Prefers-reduced-motion support (respects user preferences)
- Efficient selectors (minimal specificity)
- CDN delivery (fast, globally distributed)

### Expected Performance
- **PageSpeed Score:** 90-100
- **Animation FPS:** 60fps on modern devices
- **First Contentful Paint:** <1.5s
- **Time to Interactive:** <3.5s

---

## 🌐 Browser Support

### Excellent Support (90%+)
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+

### Not Supported
- Internet Explorer 11 (acceptable for modern web)

### Fallbacks
- Animations disabled if GSAP not loaded
- Styles degrade gracefully in older browsers
- Mobile-first approach ensures compatibility

---

## 📝 Class Reference Sheet

### Typography
```
h1-display, h2-section, h3-card, h4-label
body-large, body-standard, body-small, body-caption
```

### Buttons
```
btn-primary, btn-secondary, btn-ghost
```

### Cards
```
card-standard, card-elevated, card-bordered, card-glass
```

### Sections
```
section-light, section-surface, section-dark, section-gradient
```

### Navigation
```
nav-section, site-header (apply to Section element)
```

### Footer
```
site-footer (apply to Section element)
```

### Animations
```
animate-blur-in, animate-fade-rise, animate-fade, animate-scale
animate-load, animate-blur-load
stagger-1, stagger-2, stagger-3, stagger-4, stagger-5, stagger-6
load-delay-1, load-delay-2, load-delay-3, load-delay-4, load-delay-5
```

### Utilities
```
text-left, text-center, text-right
mt-sm, mt-md, mt-lg, mt-xl, mt-2xl, mt-3xl
mb-sm, mb-md, mb-lg, mb-xl, mb-2xl, mb-3xl
hide-mobile, hide-desktop
container-narrow, container-medium, container-wide
transition-fast, transition-medium, transition-slow
```

---

## 📚 Documentation

### Internal Documentation (Included)
- `README.md` - This file (setup and reference)
- Code comments in CSS file (detailed explanations)
- Code comments in JS file (implementation notes)

### External Resources
- [GoHighLevel Documentation](https://help.gohighlevel.com/)
- [GSAP Documentation](https://greensock.com/docs/)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 🎯 Design Principles

### Brand Personality
- **Caregiver + Sage:** Nurturing, knowledgeable, trustworthy
- **Warm & Welcoming:** Soft colors, generous spacing, approachable typography
- **Professional:** Refined details, consistent system, attention to quality

### Color Usage Rules
- **Gold accent:** 5-10% of page maximum (primary CTAs, hover states, labels)
- **Forest green:** Primary for sections, buttons, text accents
- **No pure black/white:** All colors warm-biased for softer feel
- **High contrast:** Maintains WCAG AA accessibility standards

### Motion Character
- **Gentle & Purposeful:** Not flashy, supportive of content
- **Dramatic but Refined:** Strong effects (blur, 64px rise) executed smoothly
- **Staggered Reveals:** Sequential animations create rhythm
- **Performance-First:** Optimized for 60fps on all devices

### Typography Hierarchy
- **Display > Section > Card:** Clear three-level structure
- **Generous Line Height:** 1.6-1.7 for body text (readability)
- **Negative Letter Spacing:** Headlines feel premium (-0.02em to -0.01em)
- **Warm Serif Headlines:** Cormorant Garamond adds elegance
- **Clean Sans Body:** DM Sans ensures clarity

---

## 🔐 License & Usage

**Private Project** - This code is proprietary to Eloura Wellness.

**Restrictions:**
- Do not redistribute
- Do not use for other projects
- Do not share publicly without permission

**Allowed:**
- Use for Eloura Wellness website(s)
- Modify for Eloura Wellness needs
- Fork for Eloura Wellness development

---

## 📞 Support

### For Issues:
1. Check browser console for errors
2. Review troubleshooting section above
3. Test in incognito mode to rule out cache
4. Verify CDN URLs are accessible

### For Updates:
1. Edit files in this repository
2. Commit and push changes
3. CDN will update within 12-24 hours (or use `?v=X` cache bust)

---

## 🎉 Quick Reference - Most Used

**Memorize these 8 classes:**

1. `h2-section` - Section headlines
2. `body-standard` - Body text
3. `btn-primary` - Primary CTA
4. `card-standard` - Default cards
5. `section-light` - Default background
6. `animate-blur-in` - Headline animations
7. `animate-fade-rise` - Content animations
8. `stagger-1, stagger-2, stagger-3` - Sequential reveals

**Most common pattern:**

```
Section: section-light
├─ Headline: h2-section animate-blur-in
└─ Row (3 columns):
    ├─ Column: card-standard animate-fade-rise stagger-1
    ├─ Column: card-standard animate-fade-rise stagger-2
    └─ Column: card-standard animate-fade-rise stagger-3
```

---

## ✨ Version History

### v1.0.0 (Current)
- Initial release
- Cormorant Garamond + DM Sans typography
- Complete component library
- GSAP-powered animations
- Mobile-optimized (480px breakpoint)
- White navigation with 72px height
- Dark footer with multi-column layout

---

**Built with ❤️ for Eloura Wellness**

*Premium wellness meets premium web design.*
