// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence (<= 320 chars) to /output/entry.txt.
// Pure Node stdlib: no network, no reads outside the repo.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "They wrote a 400-page bill to govern AI, crypto and the internet, then begged their intern to convert it to PDF — the 'Save As' menu is the only thing they never regulated.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
