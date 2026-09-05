# Marvel Universe Graph · 漫威宇宙全维关系图谱

[简体中文](README.md) | **English**

Browse the connections between everything in Marvel's entire content ecosystem (comics / movies / TV series / animation / games) as an interactive "nodes + edges" knowledge graph. Radial layout with layer-by-layer drill-down, bilingual (Chinese/English), and **fully usable offline**.

**🌐 Live Demo / 在线访问**：[studyguy.github.io/marvel-universe-graph](https://studyguy.github.io/marvel-universe-graph/)

![Stack](https://img.shields.io/badge/Vite%205%20·%20React%2018%20·%20TypeScript%20·%20Canvas%202D-Graph%20Engine-e62429)

---

## Quick Start

```bash
npm install        # Install dependencies
npm run dev        # Dev mode → http://localhost:5173
npm run build      # Production build (assembles data first, then bundles to dist/)
npm run preview    # Preview the production build
npm test           # vitest: name-normalization unit tests + full data:build invariant checks (black-box)
```

> The site is a pure-frontend static app: `dist/` can be deployed to any static host (GitHub Pages / nginx / object storage…). **Zero external network requests at runtime** — the site works fully offline.

## Updating Data

Data sources live in `data/source/*.ts` (entity and relationship declarations); the taxonomy of node categories and relation types is in `data/taxonomy.ts`.

```bash
npm run data:build   # Validate + assemble → public/data/graph.json
```

- `data:build` validates: unique IDs, relation endpoint existence, valid types/subtypes, declared sub-properties, and prints stats and warnings;
- To add content: register nodes and relations in `data/source/` using builders such as `ch()/wk()/team()/E()`;
- To change the taxonomy: edit `data/taxonomy.ts` (the in-site docs pages `/docs/schema` and `/docs/relations` render directly from it, so they never drift).

### Character Bios (Fandom-style Details)

`data/source/bios.ts` (split into bios-core / bios-mcu / bios-comics) centrally registers **optional** character bios (`bio('ch-bruce-banner', [{ zh, en }, …])`), rendered in the detail drawer as an "info card + intro summary", with a "Read full bio" link opening a full-text modal:

- The narrative template mirrors Fandom character pages: ① identity & origin ② major storylines ③ powers & weaknesses ④ current status & ending (4–6 paragraphs, bilingual);
- The info card (mantle / birthplace / powers / affiliations) is **derived directly from relation edges** (held-mantle / born-in / has-ability / member-of) — never duplicated;
- **Fact source: Marvel Database (marvel.fandom.com)** — access requires a local proxy (e.g. Clash mixed-port 7897) + a real browser to pass the Cloudflare challenge (direct `curl` gets a 403); see `scripts/fetch-moegirl-bios.py` for the legacy Moegirl channel and the in-browser collection scripts (re-runnable on demand); the Chinese text is rewritten for this site (CC BY-SA 3.0, non-commercial fan use); the pending list is noted at the bottom of bios-comics.ts;
- Characters without a bio simply show the info card — no errors, and zero-warning acceptance is unaffected.

## Real Images (Optional)

The repo ships with **699 real images** (all 93 character (mantle) nodes have images + full coverage of characters/works; remaining abstract concepts such as abilities/universes/channels use generated badge-style avatars). Sources:

- Fandom (Marvel Database / MCU Wiki, CC BY-SA 3.0) — fetched through a local proxy
- Moegirl (CC BY-NC-SA) — Chinese encyclopedia channel, reachable without a proxy
- Baidu Baike entry main image (characters/mantle entries only, media works auto-excluded) — `node scripts/fetch-images-baike.mjs`
- Baidu Image search (direct connection, no proxy needed; a fallback when Fandom is blocked and Bing's image CDN is unreachable) — see the "Bing/Baidu direct fallback" workflow below

To re-fetch or add images:

```bash
node scripts/fetch-images.mjs        # Fandom channel: auto-detects local proxy port (7897/7890/10809…), or pass --proxy=host:port
node scripts/fetch-images-cn.mjs     # Moegirl channel (no proxy needed)
node scripts/fetch-images-web.mjs    # Web channel: Douban posters + Bing images (via proxy)
node scripts/fetch-images-baike.mjs  # Baidu Baike channel: character/mantle entry main images (direct)
npm run data:build                   # Re-tag, then refresh to take effect
```

**Bing / Baidu direct fallback (no proxy environment)**: Bing's search endpoint is reachable directly, but its image CDN `ts*.mm.bing.net` gets reset; use the `murl` (original image URL) from candidate metadata instead, or go through the Baidu Images channel:

```bash
node scripts/fetch-baidu-candidates.mjs            # Baidu Images: 8 candidate thumbnails per node → .tmp-bing/
python3 scripts/montage-bing-sheets.py             # Build contact sheets (PIL) for manual review
python3 -c "..."                                   # Copy selected candidates to public/assets/images/<id>.jpg
npm run data:build                                 # Auto-tagging (img:true detected by file existence)
```

Manual review is a hard requirement (lesson learned: auto-picked first results often mismatch — a wrong image is worse than a badge). The workflow and common query terms live in the `TARGETS` table of `scripts/fetch-baidu-candidates.mjs`.

- Batch queries (10 titles/request) + candidate-title strategies (suffix stripping / (film) / (TV series) / (Earth-616)) + a miss list at `scripts/fetch-misses.json`
- At runtime real images take priority; missing ones fall back to generated poster-style avatars (category colors + subtype badges + patterns) — never a broken image

## Feature Overview

| Module | Description |
|---|---|
| Three-layer relation chain | **Work → Mantle → Person**: works link to the mantles that appear in them (e.g. *Captain America: Civil War* → Captain America / Iron Man / Spider-Man), and mantles chain to the people who held them (Captain America → Steve Rogers / Sam Wilson); people without a mantle (Thanos etc.) connect directly from works |
| View projections | Nine projections of the same graph: Overview (category clusters) / Characters / Teams / Locations / Works / Items / Events / Universes / Channels |
| Mantle system | **Mantles are the relation core**: 93 mantle nodes with 139 people holding "held-mantle" relations; work appearances and identity-type social relations (allies/enemies/combat/mentor-protégé/creation/organization/events/weapons/abilities) are automatically re-routed to the mantle layer — 70+ mantle↔mantle relations (e.g. Iron Man↔Captain America allies/nemeses, Iron Man→Spider-Man mentor); family/kinship/emotional/variant/birthplace relations stay on the person layer; double anti-reversion validation |
| Node details | Image, Chinese/English names, aliases, summary, key category properties, grouped relation list, source links |
| Search | Chinese / English / alias autocomplete; on hit, centers on the node and opens its details |
| Filters & legend | Node-category and relation-category toggles; legends for node colors / edge colors / arrows / channel divisions |
| Multi-device | PC three-zone layout (filters/canvas/details all collapsible); mobile bottom sheets, one-finger pan, pinch zoom, two-tap drill-down, safe-area support |
| State memory | Language, theme, view, filters, center and browsing history persisted in localStorage |
| Light/dark themes | ☀️/🌙 toggle in the top bar; paper-white + Marvel red for day, deep-space + warm gold for night; the canvas engine (background/starfield/nodes/minimap) follows the theme via `data-theme` semantic tokens |
| Taxonomy docs | `/docs/schema` and `/docs/relations` in-site pages document the node and relation taxonomy |
| Onboarding & states | First-visit three-step guide; loading / empty / retryable-error / image-placeholder fallback states |

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) (the single source of architectural truth), [docs/data-inventory.md](docs/data-inventory.md) (data inventory), and [docs/node-taxonomy.md](docs/node-taxonomy.md) / [docs/relation-taxonomy.md](docs/relation-taxonomy.md) (taxonomy docs).

```
data/source → scripts/build-data.ts → public/data/graph.json
                                          ↓
        React UI (top bar/filters/details/docs) ← Zustand → Canvas 2D graph engine (layout/render/hit-testing/interaction)
```

## Data Scale

The bundled demo dataset currently contains **718 nodes / 1738 relations** (including 93 mantle nodes), covering all 11 node categories:
every MCU movie and series, the Fox X-Men films, Sony's SSU, classic TV series, animation, games, major comic runs and events, plus core Earth-616 comic characters and multiverse Spider-Man variants. The data is depth-first around MCU canon, intended for learning and demo purposes.

## License & Acknowledgements

The project's code and original content (graph engine, data structures, assembled data, bilingual curation) are **copyrighted by the author** under a custom license (see [LICENSE.md](./LICENSE.md)):

- ✅ Allowed: browsing online, personal learning, and Fork/Pull Request within GitHub;
- ❌ Not allowed: copying / redistribution, publishing modified versions, or any **commercial use** without prior written permission from the author. For licensing and collaborations, please open an [Issue](https://github.com/studyguy/marvel-universe-graph/issues).

### Third-party Content Acknowledgements

This project is an **unofficial, non-commercial** learning/fan work:

- Marvel and all character copyrights belong to **Marvel and Disney**;
- Data and images reference and credit: [Marvel Database](https://marvel.fandom.com/wiki/Marvel_Database) (CC BY-SA 3.0) and [Marvel Cinematic Universe Wiki](https://marvelcinematicuniverse.fandom.com/wiki/Marvel_Cinematic_Universe_Wiki) (CC BY-SA 3.0); derived content is shared under CC BY-SA 3.0 with attribution.
