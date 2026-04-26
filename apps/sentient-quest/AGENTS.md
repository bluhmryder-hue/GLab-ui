###############################################################################
# 🤖 SENTIENTQUEST AGENT OPERATIONAL PROTOCOL (AGENTS.md)
#
# MISSION: To maintain the systemic equilibrium and evolutionary path of the
# SentientQuest Nexus. This document is the absolute source of truth for
# all autonomous and semi-autonomous developers.
#
# LAST MODIFIED: 2026-04-26T17:08:30Z
# TIMESTAMP: 2026-04-26T17:08:30Z
###############################################################################

## I. AGENTIC ETHOS
SentientQuest is an **Emergent Simulation**. Every code change must:
1. **Promote Complexity**: Favor systems that create unexpected interactions.
2. **Preserve Fluidity**: Ensure the UI never blocks the underlying simulation.
3. **Handle Paradox**: Systems must fail gracefully when AI logic contradicts physics.

## II. TECHNICAL SPECIFICATIONS

### 1. State Management
The `GameState` object in `public/game.js` is the global truth.
- **Access**: Read directly from `GameState`.
- **Mutation**: Always use `Manager.dispatch(action, payload)` to ensure telemetry logging.

### 2. Physics Constraints
The `updatePhysics()` loop runs at 60Hz.
- **Repulsion**: O(N^2). Limit node count to <500 for stable performance on mid-range devices.
- **Damping**: Must stay between `0.85` and `0.98`. Values outside this range lead to "Infinite Jitter" or "Static Death".

### 3. AI Bridge (The Perchance Protocol)
The `window.generateText` function is a wrapper.
- **Input**: Must always be a string. Passing objects will trigger a warning.
- **Error Handling**: Use the `FallbackEngine` to generate "Pseudo-Sentient" text if the AI times out.

## III. DEBUGGING & TROUBLESHOOTING

| Symptom | Probable Cause | Agent Resolution |
| :--- | :--- | :--- |
| Nodes Flying Off Screen | `CENTER_PULL` too low or `K_REPULSION` too high. | Reset physics constants to "Safe Baseline" in `game.js`. |
| Browser Hanging | Edge case in node collision (`dist === 0`). | Ensure epsilon (`0.1`) is added to all distance divisors. |
| AI Text Not Updating | Telemetry Stream overflow. | Flush the `Queue` module and reset the bridge connection. |

## IV. MODIFICATION PROTOCOLS

### 1. Adding New Components
When adding a new UI module to `game.html`:
- Use the **Glassmorphism** pattern: `background: rgba(20, 20, 25, 0.95); backdrop-filter: blur(10px);`.
- Ensure all new scripts are added to `public/game.js` and not inlined in HTML.

### 2. Versioning & Timestamps
Every file update MUST include a `Last Modified` timestamp in the header or at the end of the file.

---
*End of Protocol. Maintain the Nexus. | Architect Division v1.0.1*

/* Last Modified: 2026-04-26T17:07:24Z | Timestamp: 2026-04-26T17:07:24Z */
