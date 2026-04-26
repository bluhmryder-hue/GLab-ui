# 🌌 SentientQuest: An Agentic Powered Game Frontend

**Version:** 0.1.0
**Last Modified:** 2026-04-26T17:44:55Z
**Timestamp:** 2026-04-26T17:08:30Z
**Status:** Alpha / Genesis Phase / Modularized

---

## 📖 Executive Summary

**SentientQuest** is an experimental, agentic-powered game environment that fuses physics-based simulations with large language model (LLM) orchestration. It is designed to be a "Living Graph"—a world where every entity, interaction, and systemic law is governed by emergent logic rather than fixed scripts.

The project is hosted as a **Next.js 14** application, serving a modularized **Animus Engine** via a high-performance, edge-to-edge iframe.

---

## 🏗 System Architecture

### 1. The Frontend Wrapper (Next.js)
- **Path:** `apps/sentient-quest/app/`
- **Role:** Handles viewport management, SEO metadata, and initial environmental injection. It ensures the game is served in a "Zero Margin" layout to maximize player immersion.

### 2. The Simulation Engine (Animus)
- **Core:** `public/game.html`
- **Physics:** `public/game.js` (Force-Directed Graph Simulation)
- **Styles:** `public/game.css` (Glassmorphism & Animus UI)
- **Role:** The heartbeat of the game. It calculates O(N^2) repulsion forces, spring tensions, and center-pull dynamics.

### 3. The Intelligence Layer (Perchance Bridge)
- **Mechanism:** Asynchronous JS functions (`generateText`, `generateImage`) that proxy requests to external AI shards.

---

## 📂 Modular Filetree

```text
apps/sentient-quest/
├── app/                        # Next.js Application Layer
│   ├── layout.tsx              # Viewport & Metadata Definition
│   └── page.tsx                # Game Hosting Component (Iframe-based)
├── public/                     # Simulation Layer (Modularized)
│   ├── game.html               # Entry point & DOM Structure
│   ├── game.js                 # [LOGIC] Physics, State, AI Bridge
│   └── game.css                # [STYLE] Theme & Visual Effects
├── AGENTS.md                   # Operational Protocol for AI Developers
├── CHANGELOG.md                # Temporal Evolution Log
├── LICENSE                     # MIT Legal Framework
├── README.md                   # Project Manifesto & Guide
├── .env.example                # Configuration Blueprint
├── .eslintrc.json              # Logic Integrity Rules
├── package.json                # Dependency Manifest
└── tsconfig.json               # Type Safety Configuration
```

---

## 🛠 Advanced Modification Scenarios

### Scenario A: Introducing Gravity Wells
To create a node that pulls others in instead of repelling:
1. Locate the `updatePhysics()` function in `public/game.js`.
2. Find the repulsion logic.
3. Add a check: `if (n1.type === 'GravityWell') force = -force;`.

### Scenario B: Customizing the Genesis Sequence
The initial world creation is handled by the `GenesisEngine`.
- **Edit Location:** `public/game.js` -> `GenesisEngine.begin()`.
- **Modification:** Change the system prompts to alter the "vibe" of the generated school.

---

## 📝 Roadmap & TODO (30 Critical Additions)

**Phase 1: Performance & Scalability**
1. [ ] **WebGL Migration**: Rewrite renderer to use PixiJS or Three.js for 10,000+ node support.
2. [ ] **Spatial Indexing**: Implement QuadTree or BVH to optimize physics from O(N^2) to O(N log N).
3. [ ] **State Persistence**: Integrate IndexedDB for seamless game session saving.
4. [ ] **Locus Architect**: Build a visual tool to design "Floorplan" spatial edges.
5. [ ] **Temporal Rewind**: Implement a state snapshot buffer for "Chronos Undo" functionality.
6. [ ] **Dynamic Icons**: Support for animated SVG sprites for entity representation.
7. [ ] **Web Workers**: Offload physics and AI parsing to background threads.

**Phase 2: Artificial Sentience**
8. [ ] **Multi-Model Support**: Allow different entities to use different LLMs (e.g., GPT-4 for bosses, Llama-3 for NPCs).
9. [ ] **Swarm Emergence**: Implement flocking behaviors for "Spirit Swarms".
10. [ ] **Prompt Guard**: Add sanitization layers to prevent "Reality Injection" attacks.
11. [ ] **Cognitive Mapping**: Overlay to show real-time "Thought Processes" of active agents.
12. [ ] **Trait Mutation**: Entities gain "Mutations" (code snippets) based on player actions.
13. [ ] **Atmospheric Analysis**: Use Sentiment Analysis to change the world's color palette dynamically.
14. [ ] **Agentic Consensus**: Multi-agent voting system for major plot points.
15. [ ] **Auto-Chronicler**: An agent that generates a readable "History of the World" PDF.

**Phase 3: Sensory & Immersive Features**
16. [ ] **Retro Filters**: Add scanline, chromatic aberration, and noise shaders.
17. [ ] **Generative Soundscape**: Use the Web Audio API to create procedurally generated ambient music.
18. [ ] **Reality Resets**: Visual "Glitch" animations during systemic collapses.
19. [ ] **3D Nexus**: A 3D view of the graph using CSS 3D transforms or WebGL.
20. [ ] **Motion Blur**: Add SVG filter-based trails for fast-moving spirits.
21. [ ] **Sentient Design System**: Create a Radix/Shadcn-compatible theme for game menus.
22. [ ] **Haptic Sync**: Trigger mobile vibration on entity collisions.

**Phase 4: Ecosystem & Integration**
23. [ ] **Reality Export**: Export your entire world as a single `.sentient` (JSON) file.
24. [ ] **Discord Bridge**: Post "World Events" to a Discord channel via webhooks.
25. [ ] **ZK Reality**: Prove world state consistency using Zero-Knowledge proofs.
26. [ ] **WebXR Integration**: Walk through the nexus in VR/AR.
27. [ ] **Plugin Registry**: A system for loading external `.js` plugins at runtime.
28. [ ] **Entropy Agent**: A special agent designed to "Break" things to test system robustness.
29. [ ] **Workspace Parity**: Sync shared UI components with the main `apps/v4` project.
30. [ ] **Autonomous Persistence**: **[ENDGAME]** A world that continues to evolve on a server even when no one is watching.

---

## ⚖️ License & Contributions
Distributed under the **MIT License**. Contributions to the Architect Division are welcome. Please read `AGENTS.md` before submitting PRs.

---
**Last Modified:** 2026-04-26T17:44:55Z
**Timestamp:** 2026-04-26T17:08:30Z
