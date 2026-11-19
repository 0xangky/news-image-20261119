// make.fun entry for news-image-20261119 (Node 22, standard library only).
// The image committed beside this file is the entry: the program copies its bytes
// to /output/entry.png inside the grader's container. Outside the container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The six stories were researched from BBC news on 19 November 2026 and drawn
// as inline SVG in infographic.html, then rendered to entry.png before this
// program was written. Keeping the render deterministic makes the two grader
// runs byte-for-byte identical.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
