# Chronoglobe

Spin a cartoon globe through time: from 4.5 billion years ago to today. Scroll through human history with historical borders, people, wars, empires and trade routes, then step inside 3D reconstructions of 20 historic places and walk around them as a character.

It's a single web page (HTML + JavaScript, no build step) that installs as an app on iPhone, iPad, Mac and Android (including the Ayn Thor).

## Put it on GitHub Pages

1. On GitHub, create a new public repository, for example `chronoglobe`.
2. Click **Add file → Upload files**, drag in **everything in this folder** (including the hidden `.nojekyll` file if your computer shows it), and commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two your app is live at `https://YOUR-USERNAME.github.io/chronoglobe/`.

To update later, upload the new `index.html` over the old one. The app checks for updates each time it opens online.

## Install it

- **iPhone / iPad (Safari):** open the link → Share → **Add to Home Screen**.
- **Mac:** Safari → File → **Add to Dock** (or in Chrome, the install icon in the address bar).
- **Android / Ayn Thor (Chrome):** open the link → ⋮ menu → **Install app** (or *Add to Home screen*).

After the first visit it works offline for everything already viewed. Wikipedia summaries and Wikidata "Explore around here" always need the internet.

## Using it

**Globe**
- Drag to spin, pinch or scroll to zoom, tap anything for details.
- Time bar: slider, tap the date to type one, ±1 / 10 / 100 / 1000 skip buttons, ▶ to play.
- **Human history / Deep time** switch (Deep time steps in millions of years). Key: **D**.
- **Layers**: historical borders, trade routes, events, people, wars, empires, 3D sites, Wikidata results.
- Tap the small text under the switch for **This moment** (and to save moments).
- **Search** (key **/**) finds people, events, routes, periods and the 3D scenes (type "3D").
- Keys: ← → step a year (Shift = 10), [ ] = 100, Space = play, L = layers, H = home.
- Controller (Ayn Thor): D-pad left/right = 1 year, shoulders = 100, triggers = 1000, left stick spins, A = play, X = switch mode, Y = layers.

**3D scenes**
- Viewpoints, sun presets, a time-of-day slider, **Evidence** (green = surviving or excavated, amber = inferred, red = conjecture) and **Sources** (how each model was made).
- **Walk** (first person) or **Play as a character** (third person).
- Touch: on-screen sticks, Jump and Examine buttons.
- Keys: W/A/S/D move, Shift run, Space jump, X examine, C character, F walk, V next view, G evidence.
- Controller: left stick move (click a stick to run), right stick camera, triggers zoom or rise, A jump (or select), X examine (or next view), B back, Y evidence, Start walk, Select sources, D-pad up character, shoulders change time of day.

## The 20 scenes

Stonehenge (c. 2500 BCE) · Ur (c. 2100 BCE) · Giza (c. 2500 BCE) · Babylon (c. 575 BCE) · Persepolis (c. 460 BCE) · Athens (432 BCE) · Jerusalem (c. 30 CE) · Pompeii (79 CE) · Colosseum (c. 120 CE) · Rome's Forum (c. 210 CE) · Teotihuacan (c. 450 CE) · Constantinople (c. 560 CE) · Chang'an (c. 750 CE) · Baghdad (c. 800 CE) · Trelleborg (c. 980 CE) · Heian-kyō / Kyoto (c. 1000 CE) · Angkor Wat (c. 1150 CE) · Great Zimbabwe (c. 1350 CE) · London (c. 1400) · Tenochtitlan (1519)

All buildings are simplified, hand-coded reconstructions. Each scene's Sources panel says what is known and what is guessed, following the *Handbook of Digital 3D Reconstruction of Historical Architecture* (Münster et al., 2024).

## Data and credits

Check each source's licence before you share the app widely.

- Historical borders: [historical-basemaps](https://github.com/aourednik/historical-basemaps) by André Ourednik.
- Ancient coastlines: [GPlates Web Service](https://gws.gplates.org) (EarthByte, University of Sydney).
- Modern coastlines: the world map shipped with ECharts 4 (Natural Earth based).
- Lookups: Wikidata and Wikipedia (CC0 / CC BY-SA).
- 3D: [three.js](https://threejs.org) r128 (MIT). Globe maths: [d3-geo](https://d3js.org) (ISC), included in the page.
- Geological time-scale colours: International Commission on Stratigraphy.

## Adding to it later

Everything lives in `index.html`:
- Globe markers: the `DATA` list (events, people, wars, empires) and `ROUTES`.
- Deep time: `DEEPSITES` and `DEEPGLOBAL`.
- 3D scenes: the `SCENES` entries and their `build…` functions.
