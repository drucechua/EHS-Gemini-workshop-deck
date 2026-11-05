---
theme: none
title: AI-Assisted Tutorial Videos with Gemini
info: |
  EHS Team Training. A 45-minute, hands-on session on turning an approved
  Google Slides deck into a narrated tutorial video with Google Vids and Gemini.
fonts:
  sans: Poppins
  serif: Lora
  mono: Space Mono
  weights: '400,500,600,700'
canvasWidth: 980
aspectRatio: 16/9
highlighter: shiki
lineNumbers: false
drawings: { persist: false }
transition: fade
mdc: true
layout: cover
doodle: laptop-person
---

::eyebrow::
EHS Team Training

::default::
# AI-Assisted Tutorial Videos with Gemini

Turn an approved slide deck into a narrated training video

::meta::
November 5, 2026

<!--
[Welcome, 1 min]
Introduce yourselves. One sentence on why we're here: EHS already has good slide decks; today we turn one into a video people can watch on their own time.
-->

---
doodle: sticky-notes
doodleSize: 140
---

# Agenda

<div class="grid grid-cols-[1.1fr_1fr] gap-10 mt-2">
<div>

1. Quick demo and tools
2. Data guidelines and approved NYU AI tools
3. How to convert files to generate videos
4. Your turn
5. Tips and limitations

</div>
<div>

<div class="panel" style="max-width: 300px">
<div class="panel-head" style="font-size: 17px">You'll leave able to</div>
<div class="panel-body">

- Make a video from an existing deck
- Check it before you share it
- Know what data can go where

</div>
</div>

</div>
</div>

<!--
[1 min]
Data guidelines come before anyone opens the tool, so everyone knows what is safe to upload. Section 4 is hands-on, so have laptops ready.
-->

---
layout: section
doodle: monitor
---

::number::
01

::default::
# Quick Demo and Tools

::subtitle::
What the end result looks like, and how to get in

<!--
[Section 01 starts, about 7 min total]
-->

---
layout: two-cols-header
---

# From base deck to revised deck

<p class="muted" style="margin-top: -8px; margin-bottom: 18px">We revised the existing EHS Orientation deck for video: shorter on-screen text, one idea per slide, on-brand layout.</p>

::left::

<h3><Dot icon="doc" tone="olive" /> Base deck</h3>

<img src="/img/base-deck.png" alt="Original EHS Orientation title slide" class="shot mt-2" />

::right::

<h3><Dot icon="check" tone="clay" /> Revised deck</h3>

<img src="/img/revised-deck-v2.png" alt="Revised EHS Orientation title slide" class="shot mt-2" />

<!--
Presenter: Natasha.
Revised deck (shown): https://docs.google.com/presentation/d/1cc1AO4dN-4AP5zGZzokqOMZfVAh8AOdpFV8AapEIbwo/edit
Backup, version 1: https://docs.google.com/presentation/d/1C3cJe54p1i36ekv1OtZMLMIG-BAybOI2jXQPahjKBzs/edit
(Image of version 1 is in public/img/revised-deck-v1.png if you want to show it.)
-->

---

# Training video

<div class="grid grid-cols-[2fr_1fr] gap-8 items-start">
<div>
<iframe
  src="https://drive.google.com/file/d/11_k8gDYM5vPhusHT54Sxh-pafKAnex5w/preview"
  class="video-frame"
  allow="autoplay"
  title="EHS training video made with Google Vids"
></iframe>
</div>
<div>

<Callout label="While you watch" tone="butter">
Note one thing you'd change.
</Callout>

<p class="small muted mt-4">
If the player doesn't load: <a href="https://drive.google.com/file/d/11_k8gDYM5vPhusHT54Sxh-pafKAnex5w/view">open the video in Drive</a>
</p>

</div>
</div>

<!--
Presenter: Natasha.
Play a short clip, not the whole thing. Ask 2 or 3 people what they'd change; come back to their answers in section 03.
The embed only plays if you're signed in with an account that can view the Drive file.
-->

---
doodle: paper-plane
doodlePos: tr
doodleSize: 110
---

# Why turn slides into video?

<div class="flex items-center gap-3 mb-6">
  <img src="/img/icon-slides.png" alt="Google Slides" style="height: 40px" />
  <span class="muted text-xl">→</span>
  <img src="/img/icon-vids.png" alt="Google Vids" style="height: 40px" />
</div>

<div class="grid grid-cols-2 gap-4" style="max-width: 760px">
<div class="card">

### Watch anytime
New staff and contractors can view it before their first day, at their own pace.

</div>
<div class="card">

### Update when a procedure changes
Edit the deck and script, then regenerate. No reshoot.

</div>
<div class="card">

### Other languages
Write the script in another language and the voiceover follows.

</div>
<div class="card">

### Reuse existing slides
Start from decks EHS has already approved.

</div>
</div>

<!--
[1 min]
Keep this quick. The point is that the video isn't extra work on top of the deck; it's the deck, narrated.
-->

---
tone: sand
---

<div class="grid grid-cols-[1fr_1.15fr] gap-10 items-center h-full">
<div class="panel">
<div class="panel-head">Set-up</div>
<div class="panel-body">

1. Sign in to your **NYU Google Workspace** account
2. Check the account in the **top-right corner** of Slides or Vids

</div>
</div>
<div>

<img src="/img/slides-account-check.png" alt="Google Slides with the account icon highlighted in the top-right corner" class="shot" />

<Callout label="Note" tone="paper" class="mt-4">
Turning slides into video needs an eligible Google Workspace or Google AI plan.
</Callout>

</div>
</div>

<!--
Presenter: Natasha.
Common problem: people are signed in to a personal Gmail in the same browser. The top-right avatar tells you which account is active.
TO CONFIRM: which plan covers the Vids AI features for NYU accounts.
-->

---

<div class="absolute inset-0 grid grid-cols-2" style="z-index: 0">
  <div style="background: var(--ehs-butter)"></div>
  <div style="background: var(--ehs-sky)"></div>
</div>

<div class="relative h-full flex flex-col items-center justify-center" style="z-index: 1">

# Type these into your browser

<div class="grid grid-cols-2 gap-16 mt-6 text-center">
<div>
<a href="https://slides.new" class="inline-block px-8 py-3 rounded-full font-bold text-3xl" style="background: var(--ehs-mustard); color: #fff; text-decoration: none; font-family: var(--ehs-mono)">slides.new</a>
<p class="mt-3 muted">Opens a new Google Slides deck</p>
</div>
<div>
<a href="https://vids.new" class="inline-block px-8 py-3 rounded-full font-bold text-3xl" style="background: var(--ehs-night); color: var(--ehs-on-night); text-decoration: none; font-family: var(--ehs-mono)">vids.new</a>
<p class="mt-3 muted">Opens a new Google Vids project</p>
</div>
</div>

</div>

<!--
You can start converting from either Google Slides or Google Vids. These shortcuts create a new deck or a new video in one step.
Ask everyone to try vids.new now to confirm their access works before section 03.
-->

---
layout: section
doodle: magnifier
---

::number::
02

::default::
# Data Guidelines & Approved NYU AI Tools

::subtitle::
What's safe to upload, and where

<!--
[Section 02, about 6 min total]
-->

---
doodle: lightbulb
doodleSize: 120
---

# Responsible use: the work comes before the tool

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-start mt-6" style="max-width: 800px">
<div class="card">

### <Dot icon="doc" tone="olive" /> Source
The approved EHS deck

</div>
<div class="flow-arrow">→</div>
<div class="card">

### <Dot icon="text" tone="mustard" /> Thinking
Who is the audience? What must not change?

</div>
<div class="flow-arrow">→</div>
<div class="card">

### <Dot icon="video" tone="clay" /> Tool
Google Vids, chosen last

</div>
</div>

<Callout label="Rule of thumb" tone="dark" class="mt-8" style="max-width: 560px">
Use university-sanctioned tools, signed in with your NYU account.
</Callout>

<!--
The tool doesn't decide what's accurate. Start from content EHS has already approved, decide what the audience needs and what must stay word-for-word (procedures, numbers, contacts), and only then open Vids.
-->

---

# What data can go where

<div class="grid gap-3 mt-2" style="grid-template-columns: 110px 1fr 1fr">
  <div class="small muted font-semibold">Level</div>
  <div class="small muted font-semibold">EHS examples</div>
  <div class="small muted font-semibold">In this workflow</div>

  <div class="card tint-sage text-center font-bold text-xl" style="padding: 10px">1</div>
  <div class="card" style="padding: 10px 16px">Published slides, campus maps</div>
  <div class="card" style="padding: 10px 16px">OK to convert and share</div>

  <div class="card tint-butter text-center font-bold text-xl" style="padding: 10px">2</div>
  <div class="card" style="padding: 10px 16px">Contractor contracts, HR records</div>
  <div class="card" style="padding: 10px 16px">Keep out of training videos</div>

  <div class="card tint-peach text-center font-bold text-xl" style="padding: 10px">3</div>
  <div class="card" style="padding: 10px 16px">Identifiable medical or injury details</div>
  <div class="card" style="padding: 10px 16px"><strong>Never upload</strong></div>
</div>

<Callout label="When in doubt" tone="dark" class="mt-6">
Leave it out, and check with IT before uploading.
</Callout>

<!--
TO CONFIRM: these examples and the third column against IT's current NYUAD data guidance before the session.
Key point for EHS: incident reports often contain level 3 details. De-identify before anything goes near the tool.
-->

---

# Institutional generative AI tools

<div class="grid grid-cols-3 gap-4 mt-4">
<a href="https://gemini.google.com/app" class="card flex flex-col items-center gap-2 text-center" style="text-decoration: none">
  <img src="/img/logo-gemini.png" alt="" style="height: 36px" /> Google Gemini
</a>
<a href="https://notebooklm.google" class="card flex flex-col items-center gap-2 text-center" style="text-decoration: none">
  <img src="/img/logo-gemini-notebook.png" alt="" style="height: 36px" /> Gemini Notebook
</a>
<a href="https://nyu.zoom.us/" class="card flex flex-col items-center gap-2 text-center" style="text-decoration: none">
  <img src="/img/logo-zoom-ai.png" alt="" style="height: 36px" /> NYU Zoom AI Companion
</a>
<a href="https://office.com/apps" class="card flex flex-col items-center gap-2 text-center" style="text-decoration: none">
  <img src="/img/logo-copilot.jpg" alt="" style="height: 36px; border-radius: 6px" /> NYU Microsoft 365 (Copilot)
</a>
<a href="https://firefly.adobe.com" class="card flex flex-col items-center gap-2 text-center" style="text-decoration: none">
  <img src="/img/logo-firefly.png" alt="" style="height: 36px" /> Adobe Firefly
</a>
<div class="card flex flex-col items-center gap-2 text-center">
  <img src="/img/logo-kiro.png" alt="" style="height: 36px; border-radius: 6px" /> AWS Kiro
</div>
</div>

<p class="text-center muted mt-6">Available via your NetID email</p>

<!--
All of these are approved for use with your NYU account. Today we only use Google Vids, which sits inside the same Google Workspace as Gemini.
-->

---
layout: section
doodle: printer
---

::number::
03

::default::
# How to Convert Files to Generate Videos

::subtitle::
The workflow, plus a live demo

<!--
[Section 03, about 15 min total. This is the core of the session.]
-->

---

# Workflow overview

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-start mt-4">
<div class="card">

### <Dot icon="doc" tone="olive" /> Static deck
Your slides, which only work when you present them live.

</div>
<div class="flow-arrow">→</div>
<div class="card">

### <Dot icon="video" tone="mustard" /> Base video
**One click:** each slide becomes a narrated scene.

</div>
<div class="flow-arrow">→</div>
<div class="card">

### <Dot icon="check" tone="clay" /> Shareable video
Fix errors, cut padding, add animation if useful.

</div>
</div>

<div class="grid grid-cols-2 gap-0 mt-10 rounded-xl overflow-hidden" style="background: var(--ehs-night); color: var(--ehs-on-night)">
<div class="px-8 py-5 text-2xl font-semibold"><span style="color: var(--ehs-sky)">Tool:</span> convert and generate</div>
<div class="px-8 py-5 text-2xl font-semibold"><span style="color: var(--ehs-mustard-glow)">You:</span> edit and review</div>
</div>

<!--
The one-click part is fast. Most of your time goes into the step between base video and shareable video, and that's where your EHS expertise matters.
-->

---
tone: dark
---

# The workflow

<div class="relative mt-14" style="max-width: 820px">
<div class="absolute" style="left: 8%; right: 8%; top: 29px; height: 2px; background: #3a3e50"></div>
<div class="relative grid grid-cols-5 text-center">
<div class="flex flex-col items-center gap-3"><Dot icon="import" tone="step-1" large /><strong>Import</strong><span class="small muted">Turn approved slides into scenes</span></div>
<div class="flex flex-col items-center gap-3"><Dot icon="script" tone="step-2" large /><strong>Script</strong><span class="small muted">Edit what the voiceover says</span></div>
<div class="flex flex-col items-center gap-3"><Dot icon="voice" tone="step-3" large /><strong>Voice</strong><span class="small muted">Pick a voice, language or avatar</span></div>
<div class="flex flex-col items-center gap-3"><Dot icon="polish" tone="step-4" large /><strong>Polish</strong><span class="small muted">Trim scenes, add simple animation</span></div>
<div class="flex flex-col items-center gap-3"><Dot icon="share" tone="step-5" large /><strong>Share</strong><span class="small muted">Share a link, download or export</span></div>
</div>
</div>

<!--
These five steps structure the rest of this section. The tracker at the top of the next slides shows where we are, in the same colors.
-->

---

<StepTracker :active="1" />

# Before you convert

<div class="grid grid-cols-[1.6fr_1fr] gap-10">
<div>

- **Use the approved version** of the deck
- **De-identify:** remove names, emails and phone numbers
- **Stay on-brand** per the NYUAD Brand Guidelines
- **Keep on-screen text short**; the voiceover carries the detail

<Callout label="De-identify before converting" tone="dark" icon="cut" class="mt-5">
A contact slide with names and emails ends up in a shareable link once converted. Remove them first.
</Callout>

</div>
<div>

<img src="/img/brand-guidelines.png" alt="NYUAD Brand Guidelines cover" class="shot" />

</div>
</div>

<!--
Presenter: Natasha (brand guidelines).
Replace personal contacts with a role or team inbox before converting.
-->

---

<StepTracker :active="1" />

# Import

<div class="grid grid-cols-2 gap-8">
<div>

1. In Slides: **File > Turn into video**
2. Select the slides you want
3. Keep **"Include AI voiceover, script, background music and animation"** on

<p class="small muted" style="margin-top: -4px">Or start from <strong>vids.new > Slides to video</strong></p>

<img src="/img/file-turn-into-video.png" alt="Slides File menu with Turn into video highlighted" class="shot mt-3" style="max-height: 150px; object-fit: cover; object-position: top left" />

</div>
<div class="flex flex-col gap-3 items-center">
<img src="/img/select-slides.png" alt="Select slides dialog with the AI voiceover option switched on" class="shot" style="max-height: 170px; width: auto" />
<img src="/img/vids-start-screen.png" alt="Google Vids start screen with the Slides to video option" class="shot" style="max-height: 170px; width: auto" />
</div>
</div>

<!--
Presenter: Natasha (Vids start screen).
LIVE DEMO: do this on the revised EHS deck. Point out the toggle; if it's off, you get scenes with no script or voiceover.
Screenshot of the deck open in Slides is also in public/img/slides-deck-open.png if needed.
-->

---
layout: two-cols-header
---

<StepTracker :active="2" />

# Edit the script

::left::

<div class="card h-full">

### What Gemini generates
A first draft for each scene. Generic, sometimes inaccurate, and not in your voice.

<div class="callout callout-paper mt-3" style="background: var(--ehs-cream)">
<div><span class="callout-label">Draft</span>"Welcome to this exciting orientation! Safety is everyone's top priority, and today we'll explore all the amazing resources available to you."</div>
</div>

</div>

::right::

<div class="card tint-sage h-full">

### What you edit
Accuracy and tone. Fix errors, cut padding, use your own wording.

<div class="callout mt-3" style="background: var(--ehs-paper); border-color: transparent">
<div><span class="callout-label" style="color: #4d5a33">Edited</span>"This orientation covers what to do in an emergency on campus, and who to contact at EHS."</div>
</div>

</div>

<!--
Spot the change: ask the room what was cut and why (filler words, no real information, generic tone).
TODO: replace both example lines with a real scene from your Gemini draft.
-->

---
doodle: pencil
doodleSize: 120
---

<StepTracker :active="2" />

# Edit step by step

<div style="max-width: 640px">

1. **Read each scene next to its slide**
2. **Fix facts, numbers and steps** that Gemini changed or got wrong
3. **Cut padding** such as intros, repetition and filler
4. **Hit Update** when you see "Voiceover outdated"

</div>

<div class="grid grid-cols-2 gap-4 mt-6" style="max-width: 700px">
<Callout label="Length follows the script" tone="butter">
A scene lasts as long as its voiceover. Shorter script, shorter video.
</Callout>
<Callout label="Voiceover outdated" tone="peach">
The audio hasn't caught up with your edits yet. Hit Update.
</Callout>
</div>

<!--
LIVE DEMO: edit one scene, show the "Voiceover outdated" label appear, then click Update and replay.
-->

---

<StepTracker :active="3" />

# Pick a voice or add an avatar

<div class="grid grid-cols-4 gap-3">
<div class="card flex items-center gap-2" style="padding: 10px 14px"><Dot icon="text" /> <strong>Script</strong></div>
<div class="card flex items-center gap-2" style="padding: 10px 14px"><Dot icon="speaker" /> <strong>Speaker</strong></div>
<div class="card flex items-center gap-2" style="padding: 10px 14px"><Dot icon="language" /> <strong>Language</strong></div>
<div class="card flex items-center gap-2" style="padding: 10px 14px"><Dot icon="video" /> <strong>Avatar</strong></div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4">
<div class="card">

### Option 1: AI voiceover
Choose a voice; it reads your script.

</div>
<div class="card">

### Option 2: Record yourself
Use your own voice for a personal touch.

</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4">
<Callout label="Other languages" tone="sky">
No auto-translate. Put the script in the target language and hit Update.
</Callout>
<Callout label="Dense tables" tone="peach">
The voiceover can't read a table well. Summarize the data in the script, or leave it on screen only.
</Callout>
</div>

<!--
The voiceover reads whatever script it's given, in whatever language that script is written in. For a Spanish voiceover, the scene's script has to be in Spanish: type or generate it in that language, then Update.
-->

---

<StepTracker :active="3" />

# Language example

<div class="grid grid-cols-[2fr_1fr] gap-8 items-start">
<div>
<iframe
  src="https://drive.google.com/file/d/1E00P7nXtPpWGm8VHaU8eZR9AjHXkBnCP/preview"
  class="video-frame"
  allow="autoplay"
  title="French version of the training video"
></iframe>
<p class="small muted mt-2 flex items-center gap-2">
<img src="/img/flag-france.png" alt="" style="height: 14px" /> French version.
<a href="https://drive.google.com/file/d/1E00P7nXtPpWGm8VHaU8eZR9AjHXkBnCP/view">Open in Drive</a>
</p>
</div>
<div>
<img src="/img/supported-languages.png" alt="List of languages supported by conversational and classic voices" class="shot" />
</div>
</div>

<!--
Presenter: Natasha.
Optional slide. Skip if running behind on time.
-->

---

<StepTracker :active="[4, 5]" />

# Polish and share

<div class="grid grid-cols-2 gap-6">
<div class="card">

### <Dot icon="polish" tone="step-4" /> Polish
Trim scenes and add simple animation.

<Callout label="Veo clips" tone="butter" class="mt-3">
Veo can generate clips, but they carry a watermark and have length limits.
</Callout>

</div>
<div class="card">

### <Dot icon="share" tone="step-5" /> Share
Hand out a link, or export.

<img src="/img/share-menu.png" alt="Vids share menu: Share, Download, Export to Drive, Export to YouTube" class="shot mt-2" style="max-width: 300px" />

</div>
</div>

<!--
For EHS training, a Drive link with NYU-only access is usually the safest default. Download if it needs to go into another platform.
-->

---
layout: statement
---

<div class="flex items-center justify-center gap-6 mb-8">
  <span class="inline-grid place-items-center rounded-full" style="width: 96px; height: 96px; background: var(--ehs-cream)"><img src="/img/icon-slides.png" alt="Google Slides" style="height: 56px" /></span>
  <span class="text-4xl" style="color: var(--ehs-mustard-glow)">→</span>
  <span class="inline-grid place-items-center rounded-full" style="width: 96px; height: 96px; background: var(--ehs-cream)"><img src="/img/icon-vids.png" alt="Google Vids" style="height: 56px" /></span>
</div>

# Keep one source of truth

<p class="text-xl">Slides to video is a <strong style="color: var(--ehs-mustard-glow)">one-way conversion</strong>, not a sync.</p>

<p class="muted">Fix the deck and script first, then re-convert.</p>

<!--
Edits made in Vids don't flow back to the deck, and later edits to the deck don't update the video. Decide where the master copy lives (the deck) and keep it current.
-->

---
tone: sun
doodle: woman-notebook
doodleSize: 190
---

# Your turn

<div style="max-width: 560px">

1. **Copy** the 3-slide practice deck: [link to practice deck]
2. **File > Turn into video**
3. **Fix one thing** in scene 1
4. **Update and play**

<Callout label="Stretch" tone="dark" class="mt-6" style="max-width: 360px">
Change the voice or the language.
</Callout>

</div>

<!--
[Section 04, about 8 min]
TODO: add the practice deck link (File > Make a copy). Walk the room; the usual blockers are the wrong signed-in account and the AI toggle being off.
-->

---
layout: section
doodle: crystal-ball
---

::number::
05

::default::
# Some Tips & Limitations

<!--
[Section 05, about 4 min total]
-->

---

# Before you share, check 4 things

<div class="grid grid-cols-2 gap-4 mt-2" style="max-width: 780px">
<div class="card">

### <Dot icon="check" tone="clay" /> Accurate
Did Gemini change or leave out anything important?

</div>
<div class="card">

### <Dot icon="check" tone="clay" /> Clear
Does it explain, rather than read the slide?

</div>
<div class="card">

### <Dot icon="check" tone="clay" /> Right length
What does the audience actually need to hear?

</div>
<div class="card">

### <Dot icon="check" tone="clay" /> Right delivery
Voice, tone, avatar, captions, language.

</div>
</div>

<Callout label="Then" tone="dark" class="mt-6" style="max-width: 780px">
Get EHS sign-off before the video goes out.
</Callout>

<!--
Accuracy is the one that matters most for safety content. If a procedure step or number is wrong, the video shouldn't be shared, however polished it looks.
-->

---
layout: two-cols-header
doodle: scroll-quill
doodleSize: 130
---

<div class="flex items-center gap-4 mb-5">
<img src="/img/logo-notebooklm.png" alt="NotebookLM logo" style="height: 44px" />

# NotebookLM: a video alternative

</div>

::left::

<div class="card h-full">

### NotebookLM
Quick narrated overviews generated from your documents. Good for summaries and internal briefings.

</div>

::right::

<div class="card tint-butter h-full">

### Google Vids
Polished, on-brand tutorials built from your approved deck. Good for training people will rewatch.

</div>

<!--
Use NotebookLM when speed matters more than polish. Use Vids when the video represents EHS and needs to match the deck exactly.
-->

---
doodle: trophy
doodleSize: 120
---

# Recap and next steps

<div class="grid grid-cols-2 gap-10" style="max-width: 800px">
<div>

### Three things to remember

1. Check the data level before you upload anything
2. Gemini drafts, you edit: check every scene against its slide
3. Fix the deck first, then re-convert, then get EHS sign-off

</div>
<div>

### Next steps

<div class="card" style="padding: 6px 16px">
<div class="flex justify-between py-2" style="border-bottom: 1px solid var(--ehs-line)"><span>First training to pilot</span><span class="muted">______</span></div>
<div class="flex justify-between py-2" style="border-bottom: 1px solid var(--ehs-line)"><span>Owner</span><span class="muted">______</span></div>
<div class="flex justify-between py-2" style="border-bottom: 1px solid var(--ehs-line)"><span>EHS reviewer</span><span class="muted">______</span></div>
<div class="flex justify-between py-2"><span>Date</span><span class="muted">______</span></div>
</div>

</div>
</div>

<!--
[Wrap-up, about 3 min]
Fill in the table live with the team before people leave.
-->

---
doodle: globe
doodleSize: 110
---

# Resources

<div class="grid grid-cols-[1fr_1.3fr] gap-10">
<div>

- **AI@NYUAD** on the intranet: [add link]
- **NYUAD Brand Guidelines:** [add link]

</div>
<div class="grid grid-cols-2 gap-4">
<a href="https://www.youtube.com/watch?v=BF4jHnafRJw" style="text-decoration: none">
  <img src="/img/yt-vids-tutorial.jpg" alt="" class="shot" />
  <span class="small">Google Vids tutorial</span>
</a>
<a href="https://www.youtube.com/watch?v=vdtAy9dJbVk" style="text-decoration: none">
  <img src="/img/yt-workspace-vids.jpg" alt="" class="shot" />
  <span class="small">Google Workspace: Vids</span>
</a>
</div>
</div>

<!--
Presenter: Natasha.
TODO: add the intranet and brand guidelines links.
-->

---
layout: end
doodle: chat
---

# Thank you

<p class="text-xl" style="color: var(--ehs-mustard-glow)">Questions?</p>

::meta::
[email@nyu.edu]

<!--
TODO: add contact details.
-->
