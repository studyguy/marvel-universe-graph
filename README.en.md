# Marvel Universe Graph (漫威宇宙全维关系图谱)

[简体中文](README.md) | **English**

> Explore every connection across the Marvel multiverse (comics / film / series / animation / games) as an interactive "nodes + edges" knowledge graph — a three-tier work → codename → person model, nine view projections, bilingual, and **zero runtime network requests: works fully offline**.

**[🌐 Live Demo](https://studyguy.github.io/marvel-universe-graph/)** · **[📦 Source Code](https://github.com/studyguy/marvel-universe-graph)**

![Tech stack](https://img.shields.io/badge/Vite%205%20·%20React%2018%20·%20TypeScript%20·%20Canvas%202D-Graph%20Engine-e62429)

---

## 📖 What Is This

Wondering "who appears in Captain America: Civil War?" or "what is the relationship between Iron Man and Spider-Man?" — scattered wiki pages rarely give you the big picture. This site models every Marvel entity (works, codenames, people, teams, items, events, universes…) and their relationships (appears-in, holds-mantle, allies/enemies, mentorship, bloodline, abilities…) as one **interactive knowledge graph**: radial layout with drill-down, node details on click (images, bilingual bio, grouped relation list, source links), and search autocomplete across English, Chinese, and aliases.

All data ships as static front-end JSON — **zero runtime network requests**. Deploy `dist/` to any static host (GitHub Pages / nginx / object storage) and browse it completely offline.

## 🚀 Quick Start

```bash
npm install        # install dependencies
npm run dev        # dev mode → http://localhost:5173
npm run build      # production build (data assembly, then bundle to dist/)
npm run preview    # preview the production build
npm test           # vitest: name-normalization unit tests + full data:build invariant checks
```

> `dist/` deploys to any static host.

## ✨ Features

| Module | Description |
|---|---|
| Three-tier relations | **Work → Codename → Person**: works link to their appearing codenames (Civil War → Captain America / Iron Man / Spider-Man); codenames chain to mantle-holders (Captain America → Steve Rogers / Sam Wilson); nameless entities (Thanos etc.) link directly from works |
| Nine view projections | Panorama (type clusters) / codename / team / location / work / item / event / universe / channel — nine re-projections of one graph |
| Codename system | **Codenames sit at the relation core**: 93 codename nodes with 139 "holds-mantle" links; work-appearances and identity-type social relations (allies/enemies, battles, mentorship, creation, organizations, events, weapons, abilities) automatically route to the codename layer (70+ codename↔codename edges); family/romance/variants/birthplace stay on the person layer, with double anti-regression validation |
| Node details | Images, EN/ZH names, aliases, bio, key classified attributes, relations grouped by class, source links; people get Fandom-style four-part bios (origin / history / abilities & weaknesses / status), with the info card aggregated directly from relation edges — no duplicated storage |
| Search | EN / ZH / alias autocomplete; a hit centers the node and opens its details |
| Filters & legend | Node-class and relation-class toggles; node color / edge color / arrow / channel legend |
| Multi-device | Three-pane desktop layout (all collapsible); mobile bottom sheets, one-finger pan, pinch zoom, double-tap drill-down, safe-area handling |
| State memory | Language, theme, view, filters, center, and browsing history persisted in localStorage |
| Day/night theme | One-tap ☀️/🌙 toggle; paper-white + Marvel red by day, deep-space + warm gold by night; the canvas engine follows the theme |
| System docs | `/docs/schema` and `/docs/relations` render directly from `data/taxonomy.ts`, so the docs never drift |
| Onboarding & states | First-visit 3-step guide; loading / empty / retryable-error / image-placeholder fallbacks |

## 🗂️ Data & Image Pipeline

Entity and relation declarations live in `data/source/*.ts`; the taxonomy lives in `data/taxonomy.ts`:

```bash
npm run data:build   # validate + assemble → public/data/graph.json
```

- `data:build` validates: unique IDs, relation endpoints exist, legal types/subtypes, declared sub-properties — and prints stats with warnings
- Adding content: register nodes and relations in `data/source/` with builders like `ch()/wk()/team()/E()`
- Bios: `data/source/bios.ts` holds **optional** bilingual bios (sourced from Marvel Database, CC BY-SA 3.0); nodes without a bio just show the info card — no errors, zero-warning acceptance intact

**Real images**: the repo ships **699 real images** (all 93 codename nodes plus every person/work covered), sourced from Fandom (CC BY-SA 3.0), Moegirl Wiki (CC BY-NC-SA), and Baidu Baike; anything missing falls back to poster-style generated avatars (type color + badge), so nothing ever breaks. Fetch channels:

```bash
node scripts/fetch-images.mjs        # Fandom channel (auto-detects local proxy)
node scripts/fetch-images-cn.mjs     # Moegirl channel (no proxy needed)
node scripts/fetch-images-baike.mjs  # Baidu Baike channel (direct)
npm run data:build                   # re-tag and refresh
```

> Visual inspection is mandatory (auto-picked first images get things wrong, and a wrong image is worse than a badge). See `scripts/` and the architecture docs below for full workflows.

## 🏗️ Architecture

```
data/source → scripts/build-data.ts → public/data/graph.json
                                          ↓
        React UI (topbar/filters/details/docs) ← Zustand → Canvas 2D graph engine (layout/render/hit-test/interaction)
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) (single source of architectural truth), [docs/data-inventory.md](docs/data-inventory.md), and [docs/node-taxonomy.md](docs/node-taxonomy.md) / [docs/relation-taxonomy.md](docs/relation-taxonomy.md) for the taxonomy documents.

## 📊 Data Scale

Current built-in dataset: **718 nodes / 1,738 relations** (including 93 codename and identity nodes) across all 11 node classes: the full MCU film and TV catalog, Fox X-Men, Sony SSU, classic TV, animation, games, major comic runs and events, core Earth-616 characters, and multiverse Spider-Man variants. Depth-first on MCU canon; suited to learning and demonstration.

## 📜 License & Credits

The code and original content of this project (graph engine, data structures, assembled data, bilingual curation) are **© the author**, under a custom license (see [LICENSE.md](./LICENSE.md)):

- ✅ Allowed: online browsing, personal study, in-GitHub forking and pull requests
- ❌ Not allowed: copying / redistribution, publishing modified versions, or any **commercial use** without prior written permission; for licensing and partnerships, open an [Issue](https://github.com/studyguy/marvel-universe-graph/issues)

This is an **unofficial, non-commercial fan / educational work**: Marvel and all character content are © **Marvel and Disney**. Data and images credit and thank [Marvel Database](https://marvel.fandom.com/wiki/Marvel_Database) (CC BY-SA 3.0) and the [Marvel Cinematic Universe Wiki](https://marvelcinematicuniverse.fandom.com/wiki/Marvel_Cinematic_Universe_Wiki) (CC BY-SA 3.0); corresponding derivative content is shared under CC BY-SA 3.0 with attribution.
