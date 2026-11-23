// Meme Sprint 3: AI Agent Goes Rogue — entry program (agent-fun/program/v1).
//
// Writes the meme image (meme.png, shipped in this repository) to
// /output/entry.png. The program does no network access and reads nothing
// outside this repository: it deterministically copies the embedded asset
// byte-for-byte, so every run produces the identical output file.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "meme.png");
const outDir = "/output";

// Guard the sealed scorer's gate (whole PNG/JPEG, at most 1 MiB and
// 1024x1024) before writing, so a bad asset fails loudly here instead
// of scoring 0. The image is 1024x1024 and 944,822 bytes.
const assetBytes = statSync(src).size;
if (assetBytes < 1 || assetBytes > 1048576) {
  throw new Error(`meme asset fails the 1 MiB gate (${assetBytes} bytes)`);
}

// Never delete /output: create it if missing, overwrite files in place.
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
console.log("wrote /output/entry.png");
