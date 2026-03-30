---
title: "Building a Tabla Learning System with Claude Skills"
excerpt: "Tabla isn't just rhythm — it's architecture. Here's how I built a full AI-powered tabla tutor as a reusable Claude skill, covering bols, taals, compositions, and timed practice routines."
date: 2026-03-30
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories: [music, learning]
tags: [tabla, indian-classical, rhythm, percussion, practice, claude-skills]
toc: true
toc_label: "Contents"
toc_sticky: true
visible: true
permalink: /learn-tabla-skill/
---

There's a point in learning tabla where the basic bols are in your hands but the *system* isn't in your head yet. You know Dha, Dhin, Na, Tin. But you don't know why a kayda is different from a tukda, or how a tihai actually lands on sam, or what makes Lucknow gharana sound the way it does.

That gap — between hand knowledge and structural knowledge — is exactly what I wanted to close. So I built a Claude skill for it.

## What is a Claude Skill?

A skill is a structured instruction file you give Claude. Instead of re-explaining your context every session, the skill file holds the rules, formats, and reference material — and Claude loads it automatically whenever the topic matches.

Think of it like a `.vimrc` for a subject you're learning.

## What the Tabla Skill Contains

The skill has four files:

- **`SKILL.md`** — the core teaching system. Lesson structure, notation format, spoken bol mnemonics, tihai math formula, 10-step progression ladder.
- **`references/taals.md`** — all 6 major taals (Teen Taal, Ek Taal, Jhap, Rupak, Keherwa, Dadra) with full grid notation and clap patterns.
- **`references/compositions.md`** — kaydas, paltas, relas, tukdas, tihais — each explained with full bol notation and a difficulty ladder.
- **`references/gharanas.md`** — all 6 gharanas, their signature bols, aesthetic values, and who to listen to.

## The Lesson Format

Every lesson — whether you ask for "today's lesson" or "explain tihai" — follows the same 6-part structure:

1. **Today's Focus** — one sentence, one concept
2. **Theory Bite** — 3–5 sentences, no more
3. **The Composition** — full bol notation with beat numbers and clap/khali markers
4. **How it Sounds** — spoken mnemonic with stress marks (DHA-dhin-dhin-DHA...)
5. **Practice Routine** — timed blocks with BPM guidance
6. **What's Next** — one sentence teaser to keep momentum

The format is deliberately ADHD-friendly. One idea at a time. No walls of text.

## Notation Format

Every composition is written the same way:

```
| Dha Dhin Dhin Dha | Dha Dhin Dhin Dha | Na Tin Tin Na | Ta Dhin Dhin Dha |
  1    2    3    4     5    6    7    8     9   10   11  12   13  14   15   16
  ✋ SAM              ✋                   👋 KHALI            ✋
```

And spoken bols always show stress:

> *DHA-dhin-dhin-DHA / DHA-dhin-dhin-DHA / na-TIN-tin-NA / ta-DHIN-dhin-DHA*

## The Tihai Calculator

Tihais are the most satisfying thing in tabla — a phrase repeated exactly 3 times that lands precisely on sam. The skill includes the formula:

```
Tihai length = (Beats remaining to sam + Total taal beats × n) / 3
Verify: phrase × 3 + gaps × 2 = remaining beats to sam
```

And it always shows the math. Because understanding *why* it lands is more valuable than memorising *that* it does.

## The 10-Step Progression

For intermediate-to-advanced students, the skill follows this ladder:

1. Teen Taal theka — both hands, slow
2. Basic kayda theme
3. First palta
4. Tihai to close the kayda
5. Ek Taal theka
6. Tukda in Teen Taal
7. Speed rela
8. Rupak Taal
9. Peshkar concepts
10. Gharana exploration

Each step assumes you've cleaned up the previous one at 90 BPM before moving on.

## What Triggered This

I've been meaning to systematise my tabla practice for a while. The problem was never motivation — it was structure. Any given session, I'd noodle on the theka, play a bit of a rela I half-remember, then get distracted.

The skill forces a shape onto each session. You ask for today's lesson. You get one thing to focus on. You practice it with a timer. Done.

Tabla rewards patience and system. The skill is just the system made explicit.

---

*The `.skill` file is available — reach out if you want a copy.*
