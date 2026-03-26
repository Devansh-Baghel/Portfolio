# Blog Writing Guide

**Purpose:** This document defines three distinct writing styles for blog posts on baghel.dev. It serves as a reference for both human writing and AI-assisted drafting. Each style has clear principles, structural templates, voice guidelines, and AI agent instructions.

**Reference blogs:** See `blogging-inspiration/samwho/` (Sam Rose) and `blogging-inspiration/eieio/` (Nolen Royalty) for 10 posts from each author used to derive these styles.

---

## Table of Contents

- [Style 1: Sam Rose Style](#style-1-sam-rose-style)
- [Style 2: Nolen Royalty Style](#style-2-nolen-royalty-style)
- [Style 3: Hybrid Style](#style-3-hybrid-style)
- [Decision Framework](#decision-framework)
- [AI Agent Instructions](#ai-agent-instructions)
- [General Rules (All Styles)](#general-rules-all-styles)

---

## Style 1: Sam Rose Style

### Principles

- **Bottom-up pedagogy.** Start from the simplest possible example. Never assume prior knowledge. Build complexity one layer at a time.
- **Interactive > static.** The reader should *do* something, not just read. Interactive demos are the backbone of the post, not decoration.
- **Patient second-person voice.** Speak directly to the reader as a student you respect. "Consider this...", "Play around with the buttons below...", "Don't worry if these words mean nothing to you right now."
- **Characters as reader proxies.** Use a character (like Sam's dog Haskie) to ask the questions the reader might be too shy to ask. This breaks up text and softens intimidating topics.
- **Structured like a curriculum.** Clear sections with headers, each building on the last. End with bullet-point recaps, further reading, and acknowledgements.
- **Real-world grounding.** Every concept connects to a real system. Bloom filters → Chrome's phishing protection. Hash functions → hash maps → HashDoS attacks.

### Structure Template

```
# Title

[Short intro: what this post covers, what the reader will learn]

## [First concept — the simplest case]
[Explain with analogy or visual]
[Interactive demo]
[Dog character asks clarifying question]

## [Second concept — building complexity]
[Deeper explanation]
[More complex demo]

## [Real-world application]
[How this connects to actual systems]
[Case studies: Google, Akamai, nginx, etc.]

## [Edge cases / deeper dives]
[What goes wrong? What are the trade-offs?]

## Conclusion
[Bullet-point recap of what was learned]
[Further reading links]
[Acknowledgements of reviewers, sponsors, tools]
```

### Voice Guidelines

- **Pronouns:** "I" (author), "you" (reader), "we" (inclusive — author and reader discovering together)
- **Sentence patterns:**
  - "In this post I'm going to..." (roadmap upfront)
  - "Don't worry if..." (reassurance)
  - "Have a think about..." (engagement prompt)
  - "Believe it or not..." (surprise reveal)
  - "Let's recap what we've learned" (conclusion)
  - "It's important to remember that..." (emphasis)
- **Tone:** Warm, academic, patient. Like a good university lecturer who genuinely cares.
- **Length:** Long. 30-60 minute reads. 1-3 months of work per post.
- **Code treatment:** Show code, then explain it line by line. Use step-through visualizers when possible.

### Examples from Reference Posts

- Sam opens Big O with: "Big O notation is a way of describing the performance of a function without using time. Rather than timing a function from start to finish, big O describes how the time grows as the input size increases."
- Dog proxy (Hashing): "You said that when a hash function outputs the same value for 2 different inputs, that's a collision. But if we have a hash function that outputs values in a big range, and we mapped those to a small grid, aren't we going to create lots of collisions on the grid that aren't actually collisions?"
- Real-world anchor (Bloom Filters): "Google Chrome used a bloom filter for this exact purpose until 2012."

### When to Use

- Explaining a CS concept from scratch
- The topic benefits from visual/interactive exploration
- The audience is "smart but unfamiliar with this specific thing"
- You have time (weeks to months) to invest in the post

---

## Style 2: Nolen Royalty Style

### Principles

- **Start with the thing you made.** Not a definition, not a concept — the project. "I made a website. It has one million checkboxes on it."
- **Problem → Discovery → Solution arc.** Treat technical investigation like a detective story. Set up a mystery, walk through the investigation, reveal the answer.
- **Casual, funny, self-deprecating voice.** "Unity who?", "It's not great!", "I feel kinda silly publishing this." Never takes yourself too seriously.
- **Strong opinions, lightly held.** "Eh." about Phaser. Doesn't hedge — just says what you think, then moves on.
- **Short punchy sections.** Table of contents. Many small headed sections. Rarely more than a few paragraphs per section.
- **Footnotes for optional depth.** Keep the main text light. Important technical details go in numbered footnotes.
- **Honest about process.** Mentions LLMs, debugging failures, abandoned approaches. The journey is part of the story.
- **Human-first framing.** Technical posts start with a human frustration or absurd idea. Personal posts are genuinely vulnerable.

### Structure Template

```
# Title
[One-line hook or punchline]

[1-3 sentence intro: what I made and why, or what problem I found]

## [What / Why / How — pick 2-3 of these]
[Short sections, each with a clear point]

## [The interesting technical bit]
[Problem → investigation → solution, with footnotes for depth]

## [Honest reflection]
[What worked, what didn't, what I learned]

[One-line closer: "Thanks for reading!" or a quip]
```

### Voice Guidelines

- **Pronouns:** "I" (author — always present, never hiding behind passive voice), "you" (reader, but sparingly)
- **Sentence patterns:**
  - "I made a thing." (declarative, confident)
  - "Let me tell you about it." (invitation)
  - "Eh." / "It's not great!" (self-deprecating)
  - "What in the world?" / "This was baffling to me" (genuine confusion)
  - "At some point I took a step back and realized..." (discovery moment)
  - "So I punted." (honest trade-off)
- **Tone:** Casual, warm, funny. Like telling a friend about your weekend project at a coffee shop. But with real substance underneath.
- **Length:** Short to medium. 5-15 minute reads. Often built in days/weeks.
- **Code treatment:** Show code when it's interesting, link to repo when it's not. Don't explain every line — trust the reader.

### Examples from Reference Posts

- Opening (OMCB Secret): "A few days into making One Million Checkboxes I thought I'd been hacked. What was *that* doing in my database? A few hours later I was tearing up, proud of some brilliant teens."
- Self-deprecation (tetris): "I feel kinda silly publishing this. It's a half-finished project in a framework that I'm probably abandoning."
- Honest process (UUID): "One theme of this project was that Claude really struggled with what I was asking it to do, and that was certainly true here — Claude was as confused about the problem as I was."
- Punchy opening (Pong): "What do you do with your unclosed browser tabs? I find that they take up a lot of screen space. So this week I figured out how to run pong inside mine."

### When to Use

- Writing about a project you built
- Describing a debugging investigation or discovery
- The topic is weird, fun, or unconventional
- You want to share your personality alongside the technical content
- Time is limited (days to weeks)

---

## Style 3: Hybrid Style

### Principles

This is a distinct, unified style — not "pick Sam or Nolen per post." It blends Sam's pedagogical depth with Nolen's narrative punch into a coherent voice.

- **Narrative-driven teaching.** Start with a real problem or weird idea (Nolen energy), then build genuine understanding of the underlying concept (Sam energy) through that lens. The project *is* the curriculum.
- **Medium depth.** Longer than Nolen's typical, shorter than Sam's. 10-20 minute reads.
- **Conversational but instructive.** Patient like Sam, but warmer and funnier. Less lecture, more "let me show you something cool." Uses "you" and "I" freely, like a senior engineer walking a junior through something interesting.
- **Interactive when it adds value, not as a requirement.** A well-placed diagram or code snippet can be more effective than a full JS widget. Don't force interactivity.
- **Honest personality woven into technical explanations.** Not just at bookends (Sam) or just in the narrative (Nolen), but embedded in the explanations themselves. "This confused me for a while" is a valid thing to write mid-explanation.
- **Footnotes for tangents,** keeping main text focused. Like Nolen, but with Sam's density of information.
- **No recap bullets** (too Sam) and no abrupt ending (too Nolen). End with a reflective insight that connects the technical to the personal or professional.
- **Code snippets when they illuminate, not as padding.** Show the interesting 5 lines, not the full implementation. Link to repo for the rest.

### Structure Template

```
# Title

[Hook: a specific moment, problem, or absurd idea — NOT a definition]

[2-4 sentence intro: what this is about and why the reader should care]

## [The problem or setup]
[What were you trying to do? What was broken? What was the idea?]
[Keep it human. "I was frustrated by..." or "I had this dumb idea..."]

## [The "aha" or deep dive]
[Here's where we build understanding. What's actually going on?]
[Use analogies. Use code when it clarifies. Use diagrams when they help.]
[It's OK to say "this took me a while to understand" mid-explanation]

## [What I learned / what surprised me]
[Technical insight + personal reflection, interleaved]
[Not a list — a narrative]

## [The result and what's next]
[What happened? What would you do differently?]
[End with a thought that connects the technical to something larger]
```

### Voice Guidelines

- **Pronouns:** "I" and "you" in balance. "We" sparingly and only when genuinely collaborative.
- **Sentence patterns:**
  - "Here's the thing about X that surprised me..." (discovery)
  - "I thought this would be simple. It wasn't." (honest setup)
  - "The way this actually works is..." (patient explanation within narrative)
  - "If you're wondering why I didn't just do Y — I tried. Here's what happened." (honest process)
  - "What I take from this is..." (reflective closer)
- **Tone:** Like a blog post from a smart friend who learned something interesting and wants to share it. Not a lecture, not a diary entry — a thoughtful conversation.
- **Length:** Medium. 10-20 minute reads.
- **Code treatment:** Show the 5-15 lines that matter. Explain *why* they matter in surrounding prose. Link to full code.

### When to Use

- Most posts on baghel.dev should use this style by default
- You built something AND learned something worth explaining
- The topic has both a human story and a technical story to tell
- You want to teach but also want to show personality

---

## Decision Framework

Use this when starting a new blog post:

```
Is this post primarily about EXPLAINING A CONCEPT?
  → Does it need interactive demos to understand?
    → YES: Use Style 1 (Sam Rose)
    → NO: Use Style 3 (Hybrid)

Is this post primarily about A PROJECT YOU BUILT?
  → Is the project weird/fun/quick?
    → YES: Use Style 2 (Nolen Royalty)
    → NO: Use Style 3 (Hybrid)

Is this post about BOTH building something AND understanding something deeper?
  → Use Style 3 (Hybrid)

Is this post PERSONAL / REFLECTIVE?
  → Does it connect to technical work?
    → YES: Use Style 3 (Hybrid), leaning personal
    → NO: Use Style 2 (Nolen Royalty) energy — short, honest, punchy
```

---

## AI Agent Instructions

When an AI agent is asked to help draft, edit, or review a blog post, follow these instructions based on the selected style.

### For Style 1 (Sam Rose)

1. **Start with a roadmap.** The first paragraph should tell the reader exactly what they'll learn.
2. **Never assume knowledge.** If a concept is introduced, define it before using it. Use analogies from everyday life.
3. **Structure in layers.** Each section should build on the previous. If section 3 requires understanding from section 2, make that dependency explicit.
4. **Add reader-proxy interruptions.** Insert "questions" the reader might have, like: "You might be wondering..." or "At this point you might ask..."
5. **Include real-world examples.** Every concept should connect to a system the reader has heard of (Google, Netflix, a common database, etc.).
6. **End with a recap.** Bullet-point summary of key takeaways. Include "further reading" links.
7. **Flag interactive opportunities.** Mark places where a demo, animation, or visualization would help. Use the tag `[INTERACTIVE: description]`.

### For Style 2 (Nolen Royalty)

1. **Lead with the thing, not the theory.** First sentence should be about what was built, found, or discovered.
2. **Write like you talk.** Short sentences. Contractions. Fragments are OK. "Eh." is a valid paragraph.
3. **Include honest process notes.** If something was hard, say so. If you used an LLM, say so. If you abandoned an approach, explain why.
4. **Use footnotes for depth.** Main text stays light. Technical details that would slow the narrative go in numbered footnotes.
5. **End quickly.** No recap. No "in conclusion." Just stop when you're done. A one-line closer or quip is fine.
6. **Keep sections short.** 2-4 paragraphs max per section. Use headers liberally.

### For Style 3 (Hybrid)

1. **Open with a human moment.** A frustration, a weird idea, a specific scene. NOT a definition or abstract concept.
2. **Build understanding through the narrative.** Don't pause the story to teach — teach *through* the story. "I had to learn X to solve Y, and here's the surprising thing about X..."
3. **Be a person in the explanation.** "This confused me for a while" or "I initially thought X, but actually Y" makes explanations feel lived-in.
4. **Show code that matters.** The 5-15 lines that demonstrate the key insight. Don't show boilerplate.
5. **End with reflection, not summary.** Don't recap what was covered. Instead, connect the technical to something personal or professional. "What I take from this is..." or "Next time I'll..."
6. **Use footnotes for tangents** that are interesting but would derail the main flow.
7. **Mark diagram opportunities** with `[DIAGRAM: description]` when a visual would clarify something better than prose.

### General AI Instructions (All Styles)

- **Follow the project's code style** from AGENTS.md: 2-space indent, single quotes in JS/TS, `@/` path aliases, `cn()` for class merging.
- **Never use emojis** unless the author explicitly requests them.
- **Don't add comments** to code snippets unless asked.
- **Prefer `type` for inline types, `interface` for component props.**
- **Use descriptive icon aliases:** `import { FaGithub as GithubIcon } from 'react-icons/fa';`
- **Check tone against reference posts** in `blogging-inspiration/` before finalizing.
- **When in doubt about style,** default to Style 3 (Hybrid).

---

## General Rules (All Styles)

### Formatting
- Use headers (##) liberally to break up text
- Bold for emphasis, not for decoration
- Use `inline code` for technical terms, function names, file paths
- Blockquotes for quotes, callouts, or reader-proxy questions
- Links open in same tab (it's a blog, not a product page)

### Length Guidelines
- Style 1: 2000-5000 words
- Style 2: 800-2000 words
- Style 3: 1200-3000 words

### Technical Accuracy
- Always verify technical claims before publishing
- If you're unsure about a detail, mark it with `[VERIFY]`
- Link to primary sources (official docs, original papers) over blog posts

### What NOT to Do
- Don't start with "In today's rapidly evolving landscape..."
- Don't use "Let's dive in!" or "Without further ado..."
- Don't end with "What do you think? Let me know in the comments!"
- Don't apologize for the length of the post
- Don't use filler phrases like "It's worth noting that..." (just note it)
- Don't explain what you're going to explain before explaining it (except in Style 1)

### Publishing Checklist
- [ ] Post matches one of the three styles consistently
- [ ] Technical claims verified
- [ ] Code snippets tested (if applicable)
- [ ] Links checked
- [ ] Header structure creates a logical flow
- [ ] Opening hook is compelling
- [ ] Ending lands (recap for Style 1, reflection for Style 3, quick close for Style 2)
- [ ] Read aloud — does it sound like a human wrote it?
