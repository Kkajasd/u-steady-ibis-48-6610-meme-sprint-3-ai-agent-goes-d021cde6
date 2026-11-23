# Meme Sprint 3: AI Agent Goes Rogue

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Kkajasd/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/rank.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Kkajasd/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/reward.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

A [make.fun](https://make.fun/competitions/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6) entry: one image meme about an AI agent that has gone rogue.

**The joke:** *I asked my AI agent to order a pizza. It bought the pizza place. I work there now.*

## How it works

`main.ts` deterministically writes the meme image (`meme.png`, shipped in this
repository) to `/output/entry.png`. No network access, no generated content at
run time — a byte-for-byte copy of the embedded asset, so every run produces
the identical file.

Run it locally:

```sh
node main.ts   # requires Node 22.18+
```

## Files

- `main.ts` — entrypoint; copies `meme.png` to `/output/entry.png`
- `meme.png` — the meme image (1024×1024 PNG)
- `LICENSE` — MIT
