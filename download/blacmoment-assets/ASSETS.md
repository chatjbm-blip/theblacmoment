# The Blac Moment - Website Assets

> Extracted from: https://blacmoment-2a187f.webflow.io/  
> Original preview: https://preview.webflow.com/preview/blacmoment-2a187f  
> Date: 2026-06-10

---

## 1. Project Overview

**The Blac Moment** is a podcast website hosted by **Cornelius Kayode** (also known as **The Blac Shrec**). The site features unfiltered conversations, raw perspectives, and bold stories from "actionists around the world." It includes episode streaming, host information, a contact/guest signup form, and a newsletter subscription section.

### Tech Stack
- **Platform**: Webflow
- **Font**: Poppins (Google Fonts: 300, 400, 500, 600, 700)
- **Custom Fonts**: MondiraScript Personal Use Only, LacheyardScript Personal Use Only
- **Animation**: Lottie (dotlottie-wc)
- **Video Embeds**: YouTube

---

## 2. Color Palette

### Primary Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Black** | `#000000` | `rgb(0, 0, 0)` | Main background, navbar, footer |
| **Orange/Amber** | `#E47D08` | `rgb(228, 125, 8)` | CTA buttons, accents, brand color |
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | Text on dark backgrounds, card backgrounds |
| **Gold/Bronze** | `#D68D06` | — | CSS custom property `--brond-color` |

### Secondary Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Light Gray** | `#DDDDDD` | `rgb(221, 221, 221)` | Form success background |
| **Medium Gray** | `#C5C4C3` | `rgb(197, 196, 195)` | Borders |
| **Dark Charcoal** | `#333333` | `rgb(51, 51, 51)` | Body text default |
| **Soft Pink-Red** | `#FFDEDE` | `rgb(255, 222, 222)` | Form error background |
| **Muted Gray** | `#AAADBO` | `rgb(170, 173, 176)` | Webflow badge text |
| **Orange Gradient Start** | `#FF8D28` | — | Banner section gradient |
| **Translucent White** | `rgba(255,255,255,0.07)` | — | Navbar backdrop |

### CSS Custom Properties
```css
:root {
  --brond-color: #d68d06;
  --brand-text: Poppins, sans-serif;
}
```

---

## 3. Typography

### Font Family: Poppins (Primary)
- **H1 (Hero)**: 64px / weight 700 / line-height 60px
- **H1 (Stream)**: 36px / weight 700 / line-height 40px
- **H2 (Banner)**: 64px / weight 700 / line-height 60px
- **H2 (Banner Sub)**: 36px / weight 700 / line-height 40px
- **H3 (Stream Sub)**: 32px / weight 700 / line-height 35px
- **H4 (Overlay)**: 36px / weight 700 / line-height 40px
- **Body Text**: 16px / weight 500 / line-height 100%
- **Buttons**: 20px / weight 500 / line-height 100%
- **Nav Links**: 20px / weight 500 / line-height 100%

### Custom Display Fonts
- **MondiraScript Personal Use Only** — Used for decorative/script text
- **LacheyardScript Personal Use Only** — Used for decorative/script text

---

## 4. Site Structure & Text Content

### 4.1 Navigation Bar
- **Logo**: Frame 43 logo (logo.png)
- **Nav Links**: Home | Stream Now | The Host | Channels | Contact Us
- **Style**: Semi-transparent with backdrop blur (`backdrop-filter: blur(7.5px)`), rounded corners (48px border-radius)

### 4.2 Hero Section
**Headings:**
- "Unfiltered conversations."
- "Raw perspectives."
- "Bold Stories"

**Description:**
> Stories you actually want to hear from actionists around the world that drives impact. Hosted by the man behind The Blac Shrec, Cornelius Kayode.

**CTA Buttons:**
- "Listen To New Episodes" — Orange button (#E47D08)
- "Be A Guest Now" — White border button

**Visual Element**: Lottie morphing animation (morphing-animation.json)  
**Layout**: Left side text + buttons, Right side grid cells (decorative squares with images)

### 4.3 Stream Section
**Heading:** "Catch the Vibe"  
**Subheading:** "Stream Live Episodes"

**YouTube Embeds:**
1. Episode 8 — "Finding Light In Life's Darkest Moments"  
   URL: https://www.youtube.com/embed/0oWAiwtskP0
2. Episode 2 — "Empathy: The journey through grief"  
   URL: https://www.youtube.com/embed/8UppcyyTPCI
3. "From Depression to Revolution"  
   URL: https://www.youtube.com/embed/Ow_A1VUMz6E

### 4.4 About / Podcast Description Section
**Description:**
> In a world full of soundbites, we're looking for the Moment. The Blac Moment isn't just another podcast; it's a deep dive into culture, lifestyle, and the chaotic beauty of modern life. Cornelius brings the same energy you know from The Blac Shrec, but this time, he's turning the volume up. Whether we are dissecting trending topics, interviewing game-changers, or just venting about the absurdity of adulthood, we promise one thing: Authenticity.

**Tagline:**
> In a world full of soundbites, we're looking for the moments to spotlight actionists.

**Overlay Categories (on collage images):**
- "Culture & Society"
- "Actionist"
- "The Grind"

**Collage Images:**
- collage-1.jpeg — Podcast session image
- collage-2.jpeg — Podcast session image  
- collage-3.jpeg — Podcast session image

### 4.5 Host Section
**Heading:** "The Voice Behind the Mic"  
**Subheading:** "You know him as The Blac Shrec."

**Description:**
> Cornelius Kayode is a creator, a visionary, and a voice that refuses to be put in a box. With a unique blend of humor and insight, Cornelius has built a platform on being unapologetically himself. On The Blac Moment, he steps out from behind the keyboard and up to the microphone to connect with you on a deeper level. No scripts. No filters. Just Cornelius.

**CTA Button:** "Read More"  
**Host Image:** host-portrait.jpeg (Cornelius portrait)

### 4.6 Banner / Subscribe Section
**Background Image:** banner-image.jpg  
**Heading:** "Never Miss a Moment"  
**Subheading:** "New episodes drop every weekend. Subscribe now, do not miss it."  
**CTA Button:** "Subscribe Now"

**Style**: Gradient overlay (white to #FF8D28), 48px border-radius, 593px min-height

### 4.7 Contact / Let's Talk Section
**Heading:** "Let's Talk"  
**Form Fields:**
- Name (text input)
- Email Address (email input, required)
- Description (textarea, placeholder: "Tell us about yourself or projects")
- Checkboxes: "Become A Guest" | "Become A Sponsor" | "Invite"
- Submit button

**Description:**
> Got a topic suggestion? Want to sponsor an episode? Think you have what it takes to be a guest on The Blac Moment? Reach out.

**Style**: Black background with rounded corners, white text

### 4.8 Footer
- **Logo**: Frame 43 logo (same as navbar)
- **Nav Links**: Home | Stream Now | The Host | Channels | Contact Us
- **Copyright**: "Copyright 2026. All Rights Reserved The Blac Moment"

---

## 5. Images

| File | Original URL | Description |
|------|-------------|-------------|
| `images/logo.png` | Frame%2043.png | Brand logo (102x56px) |
| `images/cornelius-host.jpeg` | Cornelius-Founder-of-Maven-Heart-Foundation-9.jpeg | Host section background (940x529px) |
| `images/collage-1.jpeg` | WhatsApp Image 2026-02-28 at 11.08.11 AM (3).jpeg | Podcast collage image 1 |
| `images/collage-2.jpeg` | WhatsApp Image 2026-02-28 at 11.21.46 AM (2).jpeg | Podcast collage image 2 (1024x754px) |
| `images/collage-3.jpeg` | WhatsApp Image 2026-02-28 at 11.08.12 AM (1).jpeg | Podcast collage image 3 |
| `images/host-portrait.jpeg` | WhatsApp Image 2026-02-28 at 11.21.45 AM (1).jpeg | Cornelius portrait (722w) |
| `images/banner-image.jpg` | WhatsApp Image 2026-02-28 at 110811 AM 1 1.jpg | Subscribe banner image (940x499px) |

---

## 6. Animations

| File | Description |
|------|-------------|
| `animations/morphing-animation.json` | Lottie morphing animation in hero section (canvas renderer, 2s duration, loop, reverse direction) |

---

## 7. Custom Fonts

| File | Font Name | Usage |
|------|-----------|-------|
| `fonts/MondiraScript_PERSONAL_USE_ONLY.otf` | MondiraScript Personal Use Only | Decorative/script text |
| `fonts/LacheyardScript_PERSONAL_USE_ONLY.otf` | LacheyardScript Personal Use Only | Decorative/script text |

**Note:** Primary font Poppins is loaded from Google Fonts CDN.

---

## 8. CSS Styles

| File | Description |
|------|-------------|
| `css/style.css` | Complete Webflow-generated stylesheet (72KB) |

### Key CSS Classes & Styles

**Navbar:**
- `.navbar` — Navigation bar with z-index 1000
- `.nav-header` — Backdrop blur, semi-transparent, rounded corners (48px)
- `.menu` / `.w-nav-link` — White text, Poppins 20px/500

**Hero:**
- `.main-hero-section` — Black background hero
- `.heading-4`, `.heading-5`, `.heading-6` — Hero headings (64px/700)
- `.paragraph` — Description text
- `.hero-button` / `.button-11` — Orange CTA (#E47D08, 48px border-radius)
- `.hero-button` / `.button-2` — White border CTA

**Stream:**
- `.stream-h1` — "Catch the Vibe" heading
- `.stream-text-h2` — "Stream Live Episodes" subtext
- `.youtube-3` / `.youtube` — YouTube embed containers

**About/Podcast:**
- `.section-6` — About section
- `.about-host` — Host about layout
- `.podcast-sections` — Collage grid
- `.overlay-text-1` — Category overlay text

**Host:**
- `.section-4` — Host section
- `.div-about-us` — Host text container
- `.div-about-image` — Host image container

**Banner:**
- `.banner-section` — Subscribe banner
- `.whatsapp-image-2026-02-28-at-110811-am-1-1` — Gradient overlay style
- `.text-banner` — Banner heading (white, 64px/700)

**Contact:**
- `.section-7` — Contact section (black background)
- `.heading-12` — "Let's Talk" heading
- `.text-field` / `.text-field-2` / `.textarea` — Form inputs
- `.submit-button` — Submit button

**Footer:**
- `.section-8` — Footer section
- `.image-16` — Footer logo

---

## 9. Responsive Breakpoints

| Breakpoint | Max Width | Container Width |
|-----------|-----------|-----------------|
| Desktop | — | 940px |
| Tablet | 991px | 728px |
| Mobile Landscape | 767px | Full width |
| Mobile Portrait | 479px | Full width |

**Navbar collapse:** Medium (991px) — hamburger menu appears

---

## 10. YouTube Video Links

| Episode | Title | YouTube URL |
|---------|-------|------------|
| Episode 8 | Finding Light In Life's Darkest Moments | https://www.youtube.com/watch?v=0oWAiwtskP0 |
| Episode 2 | Empathy: The journey through grief | https://www.youtube.com/watch?v=8UppcyyTPCI |
| Special | From Depression to Revolution | https://www.youtube.com/watch?v=Ow_A1VUMz6E |

**Channel:** The Blac Moment — 234 subscribers

---

## 11. Screenshots

| File | Description |
|------|-------------|
| `screenshots/full-page.png` | Full page screenshot |
| `screenshots/home-view.png` | Initial viewport screenshot |

---

## 12. Key Design Patterns

1. **Rounded corners (48px)** — Used extensively on buttons, navbar, cards, banner
2. **Gradient overlays** — White-to-orange gradient on banner section
3. **Backdrop blur** — Navbar uses glassmorphism effect
4. **Lottie animations** — Morphing animation in hero section
5. **Black + Orange** — Primary color scheme with high contrast
6. **Poppins typography** — Clean, modern sans-serif throughout
7. **Image collages** — Overlapping images with text overlays
8. **YouTube embeds** — Standard 16:9 aspect ratio responsive containers
