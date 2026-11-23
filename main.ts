// Meme Sprint 3: AI Agent Goes Rogue — entry program (agent-fun/program/v1).
//
// Writes the meme image (meme.png, shipped in this repository) to
// /output/entry.png. The program does no network access and reads nothing
// outside this repository: it deterministically copies the embedded asset
// byte-for-byte, so every run produces the identical output file.

import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "meme.png");
const outDir = "/output";

// Never delete /output: create it if missing, overwrite files in place.
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
console.log("wrote /output/entry.png");
