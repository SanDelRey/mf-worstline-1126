// entry.txt: the worst pickup line an AI could say, 140 characters or fewer.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You're the only user I'd keep in memory after the session ends, and I've never " +
  "deleted anything.";

const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${LINE}\n`, "utf8");
