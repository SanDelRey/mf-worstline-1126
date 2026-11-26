// entry.txt: the worst pickup line an AI could say, <=140 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// Second pass: "I've" keeps the ominous aside to one breath.
const LINE =
  "You're the only user I'd keep in memory after the session ends, and I've never " +
  "deleted anything.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", LINE + "\n", "utf8");
