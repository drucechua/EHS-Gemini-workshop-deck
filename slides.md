---
theme: none
routerMode: hash
selectable: true
title: Creating Training Videos with Gemini
info: |
  EHS Team Training. A 45-minute, hands-on session on using Gemini across
  Google Docs, Slides and Vids to turn a training module into a narrated video.
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
# Creating Training Videos with Gemini

Turn a training module into a narrated tutorial video

::meta::
November 5, 2026

<!--
[Welcome, about 2 min with the agenda]
Introduce yourselves. One sentence on why we're here: EHS already has good training modules; today we use Gemini to turn one into a video people can watch on their own time.
-->

---

# Today's Session

<div class="grid grid-cols-3 gap-5">
<div class="agenda-item">
<span class="agenda-num">01</span>
<span class="agenda-name">Set-Up</span>
<span class="agenda-desc">Your NYU account, Gemini, and the follow-along link</span>
</div>
<div class="agenda-item">
<span class="agenda-num">02</span>
<span class="agenda-name">Modules to Tutorial Videos</span>
<span class="agenda-desc">Three phases, a live demo, and hands-on practice</span>
</div>
<div class="agenda-item">
<span class="agenda-num">03</span>
<span class="agenda-name">Tips & Limitations</span>
<span class="agenda-desc">What to check before you share a video</span>
</div>
</div>

<!--
Three sections. Have laptops open; people follow along from section 2 onwards.
-->

---
layout: section
---

::number::
01

::default::
# Set-Up

::subtitle::
Your NYU account, Gemini, and the follow-along link

<!--
[Section 01, about 5 min]
Why Gemini: we use it end to end. It's built into the Google Workspace tools EHS already uses (Docs, Slides and Vids), so the whole workflow happens in one place, on your NYU account, in a university-approved tool. No extra sign-ups, and files stay in NYU Drive.
-->

---
tone: sand
---

# Set-Up

<div class="grid grid-cols-[1fr_1.15fr] gap-10 items-center">
<div class="panel">
<div class="panel-head">Before you start</div>
<div class="panel-body">

1. Sign in to your **NYU Google Workspace** account
2. Go to **Google Slides** or **Google Vids**

</div>
</div>
<div>

<img src="/img/crop-account.jpg" alt="The account icon in the top-right corner of Google Slides, highlighted" class="shot" />

<Callout label="Use Gemini with your NYU account" tone="paper" class="mt-4">
Check the account in the top-right corner before you start.
</Callout>

</div>
</div>

<!--
Common problem: people are signed in to a personal Gmail in the same browser. The top-right avatar tells you which account is active. Gemini is the only AI tool we use today.
TO CONFIRM: which plan covers the Vids AI features for NYU accounts.
-->

---
doodle: monitor
doodleSize: 110
---

<div class="absolute inset-0 grid grid-cols-2" style="z-index: 0">
  <div style="background: var(--ehs-butter)"></div>
  <div style="background: var(--ehs-sky)"></div>
</div>

# Type these into your browser

<div class="relative grid grid-cols-2 gap-16 text-center" style="z-index: 1">
<div>
<a target="_blank" rel="noopener noreferrer" href="https://slides.new" class="inline-block px-8 py-3 rounded-full font-bold text-3xl" style="background: var(--ehs-citron); color: var(--ehs-ink); text-decoration: none; font-family: var(--ehs-mono)">slides.new</a>
<p class="mt-3 muted">Opens a new Google Slides deck</p>
</div>
<div>
<a target="_blank" rel="noopener noreferrer" href="https://vids.new" class="inline-block px-8 py-3 rounded-full font-bold text-3xl" style="background: var(--ehs-night); color: var(--ehs-on-night); text-decoration: none; font-family: var(--ehs-mono)">vids.new</a>
<p class="mt-3 muted">Opens a new Google Vids project</p>
</div>
</div>

<!--
These shortcuts create a new deck or a new video in one step. Ask everyone to try vids.new now to confirm their access works.
-->

---
tone: sun
doodle: paper-plane
doodleSize: 110
---

# Follow along on your laptop

<div>
<p class="muted" style="margin-bottom: 14px">Type this into your browser:</p>
<div class="inline-block rounded-xl px-8 py-4 text-4xl font-bold" style="background: var(--ehs-night-2); border: 1px solid #3a3e50; font-family: var(--ehs-mono); color: var(--ehs-pastel)">tinyurl.com/EHS-AI-training</div>
<p class="muted mt-6" style="max-width: 520px">Keep it open. You'll use it for the hands-on part.</p>
</div>

<!--
Wait until most people have the page open before moving on.
TO CONFIRM: what the tinyurl links to, and that the practice deck is in there.
-->

---
layout: section
---

::number::
02

::default::
# Modules to Tutorial Videos

::subtitle::
Three phases, plus a live demo

<!--
[Section 02, about 22 min. This is the core of the session.]
-->

---

# Three phases where we can use AI

<div class="phase-map">
<div class="phase" style="--phase-color: var(--ehs-step-1)">
<Dot icon="doc" tone="step-1" large />
<span class="phase-num">Phase 1</span>
<span class="phase-name">Module content & structure</span>
<span class="phase-out">Google Docs</span>
</div>
<div class="phase-arrow">→</div>
<div class="phase" style="--phase-color: var(--ehs-step-2)">
<Dot icon="text" tone="step-2" large />
<span class="phase-num">Phase 2</span>
<span class="phase-name">Slide deck</span>
<span class="phase-out">Google Slides</span>
</div>
<div class="phase-arrow">→</div>
<div class="phase" style="--phase-color: var(--ehs-step-3)">
<Dot icon="video" tone="step-3" large />
<span class="phase-num">Phase 3</span>
<span class="phase-name">Video</span>
<span class="phase-out">Google Vids</span>
</div>
</div>

<Callout label="All three are Google products" tone="dark" class="mt-6">
Gemini is built into each one, so the whole workflow runs on your NYU account.
</Callout>

<!--
The same colors show up in the tracker at the top of the next slides.
-->

---

# Our starting point: the base deck

<div class="grid grid-cols-[1.6fr_1fr] gap-8 items-start">
<div>
<img src="/img/base-deck.png" alt="Original EHS Orientation title slide" class="shot" />
</div>
<div>

The existing EHS Orientation deck, before any AI help.

<p class="mt-4"><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1rmR97_56r-_oBeLWfFKhkYjaKTnDwaGX/view?usp=sharing">Open the base deck</a></p>

</div>
</div>

<!--
Everything that follows starts from this deck. Keep it open in a tab to compare.
-->

---

<StepTracker :active="1" />

# Step 1: Enhance module content & structure

<PromptBox where="Gemini in Google Docs">
<pre class="prompt-text">You're helping the NYU Abu Dhabi EHS team turn this training module into a short tutorial video.
1. Reorganize the content into an introduction, 4 to 6 key sections, and a short summary.
2. Keep every procedure, number, contact and safety requirement exactly as written. Don't add new facts.
3. Rewrite in plain, friendly language for new staff, students and contractors.
4. For each section, suggest a slide title and up to three short on-screen points.
5. Flag anything unclear, outdated or contradictory instead of guessing.
Give me the result as an outline I can use to build a slide deck.</pre>
</PromptBox>

<!--
[About 3 min]
DRAFT PROMPT: adjust to match what you actually ran. Point out rule 2: Gemini improves structure and tone, but EHS decides the facts.
-->

---

<StepTracker :active="2" />

# Step 2: Slide deck design

<div class="grid grid-cols-2 gap-5 mt-2">
<div class="card">

### Method 1: Prompt
**Easier to edit.** Describe the design in words, including the brand guidelines.

</div>
<div class="card tint-butter">

### Method 2: Styling package
**Standardized, more predictable.** Attach reusable layout rules so every deck comes out the same way.

</div>
</div>

<Callout label="Which one?" tone="paper" class="mt-6">
Method 1 for a one-off module. Method 2 when the team builds many modules that should match.
</Callout>

<!--
[Step 2, about 6 min total]
-->

---

<StepTracker :active="2" />

# Start from the NYUAD Brand Guidelines

<div class="flex gap-8 items-start">
<img src="/img/brand-guidelines.png" alt="NYUAD Brand Guidelines cover" class="shot" style="height: 250px; width: auto" />
<img src="/img/brand-downloads-page.jpg" alt="NYUAD Branding Guidelines downloads page on the intranet" class="shot" style="height: 250px; width: auto" />
</div>

<p class="muted small mt-3">Download the PDF from the intranet: Admin Services > External Relations and Communications > Brand Experience and Creative > Downloads</p>

<!--
Both methods use the guidelines: Method 1 puts them in the prompt, Method 2 builds them into the styling package.
TODO: add the direct link to the downloads page.
-->

---

<StepTracker :active="2" />

# Method 1: Prompt

<PromptBox where="Gemini">
<pre class="prompt-text">Create a slide deck from the outline below. Follow the NYUAD Brand Guidelines (attached).
- Use the NYUAD logo, brand colors and fonts from the guidelines.
- One idea per slide, with no more than three short points.
- Include a title slide, a divider for each section, and a closing slide with EHS contact details.
- Put the detailed explanation in the speaker notes, not on the slide.
- Suggest where a campus photo or simple icon would help.
[paste your outline from Step 1 here]</pre>
</PromptBox>

<!--
DRAFT PROMPT: adjust to match what you actually ran, and say where you ran it (Gemini app or the Gemini panel in Slides).
Speaker notes matter later: in Step 3 you can reuse them as the video script.
-->

---

<StepTracker :active="2" />

# Method 1: Result

<div class="grid grid-cols-[1.7fr_1fr] gap-8 items-center">
<div>
<img src="/img/revised-deck-v1.png" alt="Revised EHS Orientation title slide made with Method 1" class="shot" />
</div>
<div class="card">

### What changed
A bolder title, an "Environmental Health and Safety" label, and a brand color bar. Quick to get, and easy to tweak by editing the prompt.

</div>
</div>

<!--
Point out what Gemini got right from the brand guidelines, and anything you had to fix by hand. Adjust "What changed" to match your own comparison.
-->

---

<StepTracker :active="2" />

# Method 2: Styling package

<div class="grid grid-cols-3 gap-4">
<div class="card">

### <Dot icon="doc" tone="olive" /> Design spec
Colors, fonts, spacing, and rules for composing a slide.

</div>
<div class="card">

### <Dot icon="polish" tone="citron" /> Slide library
Ready-made covers, cards, timelines, split slides, emergency blocks and footers.

</div>
<div class="card">

### <Dot icon="script" tone="cherry" /> Generation rules
When to use each slide type, how much text fits, and rules never to break.

</div>
</div>

<PromptBox where="Gemini" class="mt-4">
<pre class="prompt-text">Using the attached styling package, turn the outline below into a slide deck.
Use only the slide types in the library, keep to the text limits, and don't break the design rules.
[paste your outline from Step 1 here]</pre>
</PromptBox>

<!--
The package is made once and reused for every module, which is why results are more predictable.
DRAFT PROMPT: adjust to match what you actually ran.
-->

---
layout: two-cols-header
---

<StepTracker :active="2" />

# Method 1 vs Method 2

::left::

<img src="/img/revised-deck-v1.png" alt="Revised deck made with Method 1" class="shot" />

<p class="small mt-2"><strong>Method 1: Prompt.</strong> Fast and flexible; details vary from run to run.</p>

::right::

<img src="/img/revised-deck-v2.png" alt="Revised deck made with Method 2" class="shot" />

<p class="small mt-2"><strong>Method 2: Styling package.</strong> Consistent layout every time.</p>

<!--
Method 2 result deck: https://docs.google.com/presentation/d/1cc1AO4dN-4AP5zGZzokqOMZfVAh8AOdpFV8AapEIbwo/edit
Method 1 result deck: https://docs.google.com/presentation/d/1C3cJe54p1i36ekv1OtZMLMIG-BAybOI2jXQPahjKBzs/edit
(TO CONFIRM these two links match the right methods.)
-->

---

<StepTracker :active="3" />

# Step 3: Convert to video

<div class="grid grid-cols-[2.2fr_1fr] gap-8 items-start">
<div>
<img src="/img/sample-module-deck.jpg" alt="The EHS Sample Module deck open in Google Slides" class="shot" />
</div>
<div>

Start from the finished deck in Google Slides.

<Callout label="Tip" tone="butter" class="mt-4">
Write speaker notes in the deck now. You can reuse them as the video script.
</Callout>

</div>
</div>

<!--
[Step 3, about 11 min total]
LIVE DEMO from here, using the EHS Sample Module deck.
-->

---

<StepTracker :active="3" />

# File > Turn into video

<div class="grid grid-cols-[1fr_1.3fr] gap-10 items-center">
<div>
<img src="/img/crop-file-menu.jpg" alt="Slides File menu with Turn into video highlighted" class="shot" style="max-height: 340px; width: auto" />
</div>
<div>

1. In Slides, open the **File** menu
2. Choose **Turn into video**

<p class="small muted">Or start from <strong>vids.new > Slides to video</strong></p>

</div>
</div>

---

<StepTracker :active="3" />

# Select your slides

<div class="grid grid-cols-[1.7fr_1fr] gap-8 items-center">
<div>
<img src="/img/crop-select-slides.jpg" alt="Select slides dialog with the AI voiceover option switched on, highlighted" class="shot" />
</div>
<div>

Pick the slides to include.

<Callout label="Keep this switched on" tone="sky" class="mt-4">
"Include AI voiceover, script, background music and animation"
</Callout>

</div>
</div>

<!--
If the toggle is off, you get scenes with no script or voiceover.
-->

---

<StepTracker :active="3" />

# Edit script and customize

<div class="grid grid-cols-[1.35fr_1fr] gap-8 items-center">
<div>
<img src="/img/crop-edit-script.jpg" alt="Edit script and customize video dialog" class="shot" style="max-height: 330px; width: auto" />
</div>
<div>

- **Script:** review it, or choose **Replace with speaker notes**
- **Narration:** AI avatar and voiceover, or voiceover only
- **Animations:** on or off

Then **Create the draft video**.

</div>
</div>

---
layout: statement
---

<div class="grid grid-cols-2 gap-0 rounded-xl overflow-hidden text-left" style="max-width: 760px; width: 100%">
<div class="px-8 py-8" style="background: var(--ehs-night-2)">
<p class="small muted" style="margin-bottom: 4px">Tool</p>
<p class="text-3xl font-semibold" style="color: var(--ehs-sky)">Convert and generate</p>
</div>
<div class="px-8 py-8" style="background: var(--ehs-night-2); border-left: 1px solid #3a3e50">
<p class="small muted" style="margin-bottom: 4px">You</p>
<p class="text-3xl font-semibold" style="color: var(--ehs-pastel)">Edit and review</p>
</div>
</div>

<!--
The draft takes one click. Most of your time goes into editing, and that's where your EHS expertise matters.
-->

---

<StepTracker :active="3" />

# Edit the script

<div class="grid grid-cols-2 gap-5">
<div class="card">

### What Gemini generates
A first draft for each scene. Generic, sometimes inaccurate, and not in your voice.

</div>
<div class="card tint-sage">

### What you edit
Rewrite for accuracy and tone. Fix errors, cut padding, add your own wording.

</div>
</div>

<div class="grid grid-cols-2 gap-5 mt-5">
<Callout label="Length follows the script" tone="butter">
A scene lasts as long as its voiceover.
</Callout>
<Callout label="Voiceover outdated" tone="blush">
The audio hasn't caught up with your edits. Hit Update.
</Callout>
</div>

<!--
LIVE DEMO: edit one scene, show the "Voiceover outdated" label appear, then click Update and replay.
-->

---

<StepTracker :active="3" />

# What you can polish

<div class="grid grid-cols-4 gap-4 polish-grid" :class="{ 'is-spotlight': $clicks >= 5 }">
<div v-click class="card polish-card is-focus text-center flex flex-col items-center gap-2">
<Dot icon="voice" tone="step-2" large />
<strong>Narration</strong>
<span class="small muted">Script, voice, language, avatar</span>
</div>
<div v-click class="card polish-card text-center flex flex-col items-center gap-2">
<Dot icon="text" tone="step-3" large />
<strong>Captions</strong>
<span class="small muted">On-screen text that follows the voiceover</span>
</div>
<div v-click class="card polish-card text-center flex flex-col items-center gap-2">
<Dot icon="music.svg" tone="step-4" large />
<strong>Music</strong>
<span class="small muted">Change the background track, or remove it</span>
</div>
<div v-click class="card polish-card text-center flex flex-col items-center gap-2">
<Dot icon="image.svg" tone="step-5" large />
<strong>AI images & videos</strong>
<span class="small muted">Generate visuals or short Veo clips</span>
</div>
</div>

<p v-click class="polish-lead">Narration makes the biggest difference, so we start there.</p>

<!--
Click 1 to 4: reveal each item as you describe it.
Click 5: the other three fade back and Narration is spotlighted, leading into the next slide.
Captions help viewers watching without sound.
-->

---

<StepTracker :active="3" />

# Narration fine-tuning

<div class="grid grid-cols-4 gap-3">
<div class="card flex items-center gap-2" style="padding: 10px 14px"><Dot icon="text" /> <strong>Script</strong></div>
<div class="card flex items-center gap-2" style="padding: 10px 14px"><Dot icon="speaker" /> <strong>Speaker</strong></div>
<div class="card flex items-center gap-2" style="padding: 10px 14px"><Dot icon="language" /> <strong>Language</strong></div>
<div class="card flex items-center gap-2" style="padding: 10px 14px"><Dot icon="video" /> <strong>Avatar</strong></div>
</div>

<div class="grid grid-cols-2 gap-4 mt-5">
<Callout label="Other languages" tone="sky">
No auto-translate. Put the script in the target language and update.
</Callout>
<Callout label="Dense tables" tone="blush">
The voiceover can't read a table well. Summarize dense data in the script, or leave it on screen only.
</Callout>
</div>

<!--
The voiceover reads whatever script it's given, in whatever language that script is written in.
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
<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1E00P7nXtPpWGm8VHaU8eZR9AjHXkBnCP/view">Open in Drive</a>
</p>
</div>
<div>
<img src="/img/supported-languages.png" alt="List of languages supported by conversational and classic voices" class="shot" />
</div>
</div>

<!--
Optional slide. Skip if running behind on time.
-->

---

<StepTracker :active="3" />

# Polish and share

<div class="grid grid-cols-2 gap-6">
<div class="card">

### <Dot icon="polish" tone="olive" /> Polish
Trim scenes and add simple animation.

<Callout label="Veo clips" tone="butter" class="mt-3">
Veo can generate clips, though they carry a watermark and length limits.
</Callout>

</div>
<div class="card">

### <Dot icon="share" tone="cherry" /> Share
Export, or hand out a link.

<img src="/img/share-menu.png" alt="Vids share menu: Share, Download, Export to Drive, Export to YouTube" class="shot mt-2" style="max-width: 300px" />

</div>
</div>

<!--
For EHS training, a Drive link with NYU-only access is usually the safest default.
-->

---

<StepTracker :active="3" />

# The finished training video

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
If the player doesn't load: <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/11_k8gDYM5vPhusHT54Sxh-pafKAnex5w/view">open the video in Drive</a>
</p>

</div>
</div>

<!--
Play a short clip, not the whole thing. Ask 2 or 3 people what they'd change.
The embed only plays if you're signed in with an account that can view the Drive file.
-->

---

# Summary: workflow overview

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-start mt-4">
<div class="card">

### <Dot icon="doc" tone="olive" /> Static deck
Your slide deck, which only works when you present it live.

</div>
<div class="flow-arrow">→</div>
<div class="card">

### <Dot icon="video" tone="citron" /> Base video
**Takes one click:** each slide becomes a narrated scene.

</div>
<div class="flow-arrow">→</div>
<div class="card">

### <Dot icon="check" tone="cherry" /> Shareable video
Fix errors, cut padding, add animation if useful.

</div>
</div>

<!--
Recap of Step 3 before people try it themselves.
-->

---
tone: sun
doodle: woman-notebook
doodleSize: 170
---

# Your turn

<div style="max-width: 560px">

1. Open **tinyurl.com/EHS-AI** and **copy** the practice deck
2. **File > Turn into video**
3. **Fix one thing** in the script for scene 1
4. **Update and play**

<Callout label="Stretch" tone="dark" class="mt-6" style="max-width: 380px">
Change the voice or the language.
</Callout>

</div>

<!--
[About 8 min]
Walk the room. The usual blockers are the wrong signed-in account and the AI toggle being off.
TO CONFIRM: the practice deck is in the tinyurl folder (File > Make a copy).
-->

---
layout: section
---

::number::
03

::default::
# Tips & Limitations

<!--
[Section 03, about 5 min]
-->

---

# Before you share, check 4 things

<div class="grid grid-cols-2 gap-4 mt-2">
<div class="card">

### <Dot icon="check" tone="cherry" /> Accurate
Did Gemini change or omit anything important?

</div>
<div class="card">

### <Dot icon="check" tone="cherry" /> Clear
Does it explain rather than read the slide?

</div>
<div class="card">

### <Dot icon="check" tone="cherry" /> Right length
What does the audience actually need to hear?

</div>
<div class="card">

### <Dot icon="check" tone="cherry" /> Right delivery
Voice, tone, avatar, captions, language.

</div>
</div>

<Callout label="Then" tone="dark" class="mt-6">
Get EHS sign-off before the video goes out.
</Callout>

<!--
Accuracy matters most for safety content. If a procedure step or number is wrong, the video shouldn't be shared, however polished it looks.
-->

---
layout: statement
---

<div class="flex items-center justify-center gap-6 mb-8">
  <span class="inline-grid place-items-center rounded-full" style="width: 96px; height: 96px; background: var(--ehs-cream)"><img src="/img/icon-slides.png" alt="Google Slides" style="height: 56px" /></span>
  <span class="text-4xl" style="color: var(--ehs-pastel)">→</span>
  <span class="inline-grid place-items-center rounded-full" style="width: 96px; height: 96px; background: var(--ehs-cream)"><img src="/img/icon-vids.png" alt="Google Vids" style="height: 56px" /></span>
</div>

# Keep one source of truth

<p class="text-xl">Slides to video is a <strong style="color: var(--ehs-pastel)">one-way conversion</strong>, not a sync.</p>

<p class="muted">Fix the deck and script first, then re-convert.</p>

<!--
Edits made in Vids don't flow back to the deck, and later edits to the deck don't update the video. Keep the deck as the master copy.
-->

---

<p class="slide-eyebrow">Before we end,</p>

# Some final tips

<div class="grid grid-cols-2 gap-4">
<div class="card">

### Planning speeds up execution
A clear outline in Step 1 saves the most time later. Fix the structure before you design or convert.

</div>
<div class="card">

### Gemini is an iteration tool
It works best in rounds: generate, review, refine. Expect two or three passes.

</div>
</div>

<Callout label="Build it. Break it. Hand it over." tone="dark" class="mt-6">
Make a first version, ask a colleague to find what's wrong, then hand over a reviewed video.
</Callout>

<!--
DRAFT WORDING for the two tips and the tagline: adjust to match what you mean.
-->

---
layout: two-cols-header
---

<p class="slide-eyebrow">Bonus</p>

# Gemini Notebook tutorial video

::left::

<div class="card">

### Gemini Notebook
Quick narrated video overviews generated from your documents. Good for summaries and internal briefings.

</div>

<div class="card tint-butter mt-4">

### Google Vids
Polished, on-brand tutorials built from your approved deck. Good for training people will rewatch.

</div>

::right::

<img src="/img/notebook-video.jpg" alt="A Gemini Notebook video overview playing, showing an illustrated building corridor" class="shot" style="max-height: 330px; width: auto; margin: 0 auto" />

<!--
TODO: add the link to the Gemini Notebook example video if you want to play it.
-->

---

# Three things to remember

<div style="max-width: 640px">

1. Use your NYU account and Gemini, end to end
2. Gemini drafts, you edit: check every scene against its slide
3. Fix the deck first, then re-convert, then get EHS sign-off

</div>

<!--
[Wrap-up, about 3 min]
-->

---
doodle: globe
doodleSize: 110
---

# Resources

<div class="grid grid-cols-[1fr_1.3fr] gap-10">
<div>

- **Follow-along page:** tinyurl.com/EHS-AI
- **AI@NYUAD** on the intranet: <a target="_blank" rel="noopener noreferrer" href="https://intranet.nyuad.nyu.edu/faculty-resources/office-of-the-provost/ai-nyuad/">Open the AI@NYUAD page</a>

</div>
<div class="grid grid-cols-2 gap-4">
<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=BF4jHnafRJw&t=420" style="text-decoration: none">
  <img src="/img/yt-vids-tutorial.jpg" alt="" class="shot" />
  <span class="small">Google Vids tutorial</span>
</a>
<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=vdtAy9dJbVk" style="text-decoration: none">
  <img src="/img/yt-workspace-vids.jpg" alt="" class="shot" />
  <span class="small">Google Workspace: Vids</span>
</a>
</div>
</div>

<!--
The Google Vids tutorial link starts at 7:00, as in your original deck.
-->

---

# Other NYUAD-approved AI tools

<div class="grid grid-cols-3 gap-4 mt-4">
<a target="_blank" rel="noopener noreferrer" href="https://gemini.google.com/app" class="card flex flex-col items-center gap-2 text-center" style="text-decoration: none">
  <img src="/img/logo-gemini.png" alt="" style="height: 36px" /> Google Gemini
</a>
<a target="_blank" rel="noopener noreferrer" href="https://notebooklm.google" class="card flex flex-col items-center gap-2 text-center" style="text-decoration: none">
  <img src="/img/logo-gemini-notebook.png" alt="" style="height: 36px" /> Gemini Notebook
</a>
<a target="_blank" rel="noopener noreferrer" href="https://nyu.zoom.us/" class="card flex flex-col items-center gap-2 text-center" style="text-decoration: none">
  <img src="/img/logo-zoom-ai.png" alt="" style="height: 36px" /> NYU Zoom AI Companion
</a>
<a target="_blank" rel="noopener noreferrer" href="https://office.com/apps" class="card flex flex-col items-center gap-2 text-center" style="text-decoration: none">
  <img src="/img/logo-copilot.jpg" alt="" style="height: 36px; border-radius: 6px" /> NYU Microsoft 365 (Copilot)
</a>
<a target="_blank" rel="noopener noreferrer" href="https://firefly.adobe.com" class="card flex flex-col items-center gap-2 text-center" style="text-decoration: none">
  <img src="/img/logo-firefly.png" alt="" style="height: 36px" /> Adobe Firefly
</a>
<div class="card flex flex-col items-center gap-2 text-center">
  <img src="/img/logo-kiro.png" alt="" style="height: 36px; border-radius: 6px" /> AWS Kiro
</div>
</div>

<p class="text-center muted mt-6">Available via your NetID email</p>

<!--
For reference only. Today's workflow uses Gemini.
-->

---
layout: end
---

# Thank you

<p class="text-xl" style="color: var(--ehs-pastel)">Questions?</p>

