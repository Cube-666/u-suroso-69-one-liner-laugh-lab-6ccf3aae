// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// The program writes one short funny line to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt). The gate requires UTF-8 text of 1-200
// characters, a single line, not only white space.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I ate your sock to save it from the dog. You're welcome. The dog is next.";
// The line is 73 characters: one excuse, a deadpan thank-you, and a threat
// as the punch — the vacuum saves the sock from the dog, then warns the dog
// is next, so the joke lands on the last three words.

function main(): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${chars.length}`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("line must be a single non-blank line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
}

main();
