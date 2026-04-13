---
name: init
description: Initialize a new website project. Reads existing docs and fills in CLAUDE.md with project-specific details. Run this at the start of every forked project.
---

You are setting up a new website project based on this template repo.

Your job is to populate `CLAUDE.md` with the real project data for this specific client. Work through the following steps in order.

## Step 1 — Read what's already been collected

Read these files and extract anything already filled in:

- `docs/discovery.md` — client info, goals, audience, pages, timeline
- `docs/style-guide.md` — colors, fonts, tone
- `docs/tech-stack.md` — chosen stack and hosting
- `docs/content-guide.md` — reference for required sections based on business type
- `docs/pricing.md` — for internal context only, do not expose in CLAUDE.md

## Step 2 — Ask for anything missing

If key fields in `CLAUDE.md` cannot be filled from the docs above, ask the user directly. Group your questions in one message — do not ask one at a time. The minimum you need before writing:

- Client name and business type
- Project objective (one sentence)
- Tech stack decision (or confirm it's still TBD)
- Any brand assets already received

## Step 3 — Rewrite CLAUDE.md

Replace all placeholder text in `CLAUDE.md` with real data. Follow these rules:

- Keep sections that are relevant, remove sections that are entirely N/A for this project
- For fields that are genuinely pending (assets not yet received, content TBD), write `[pending]` — do not delete the field
- Under **Design Principles**, derive 2–3 principles from the brand/business type. For example, a pasta lab calls for warmth, craftsmanship, Italian authenticity. A law firm calls for trust, clarity, authority.
- Under **Claude's Role**, fill in the industry specialization based on the client type
- Under **Reference Sites**, leave blank if none have been shared yet — do not invent references
- Do not include pricing details or internal notes

## Step 4 — Confirm with the user

After writing `CLAUDE.md`, show the user a summary of what was filled in and what is still marked `[pending]`. Ask if anything needs correcting before they start building.
