# Workshop 02: Creating Training Videos with Gemini

EHS Team Training, November 5, 2026. A 45-minute, hands-on session on using Gemini across Google Docs, Slides and Vids to turn a training module into a narrated tutorial video.

## Run it

From this folder:

```
npm install
npm run dev
```

Presenter view (speaker notes, timer): `http://localhost:3030/presenter`

## Export

Stop the dev server first (Ctrl-C), then:

```
npm install -D playwright-chromium
npx playwright install chromium
npm run export:pptx -- --wait 2000
npm run export:pdf -- --wait 2000
```

PPTX slides are images (text isn't editable), and the embedded Drive videos don't play in exports.

Slides with click-through reveals export in their final state. Add `--with-clicks` to the export command to get one page per click instead.

## How this deck is built

This deck uses its own look instead of the shared NYU theme (`theme: none`):

- `layouts/` holds the cover, section, default, two-cols-header, statement and end layouts.
- `components/` holds Callout, Dot, Doodle, Torch, EhsLogo, EhsFooter, PromptBox and StepTracker. Every image path inside a component goes through `components/asset.js`, so the deck works when published under a subfolder.
- `style.css` holds the palette, type, cards, callouts and motion.
- `public/img/` holds screenshots, icons, doodles and the torch mask.
- `public/brand/nyuad-logo.svg` is the official logo, copied from `theme/public/brand/`.

## Open items

See the TODO, TO CONFIRM and DRAFT notes in the speaker notes of `slides.md`.
