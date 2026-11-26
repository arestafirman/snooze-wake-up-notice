import { mkdirSync, writeFileSync } from "node:fs";

// Snooze Button Roast — one line roasting an alarm clock that rings at
// 6 AM on a Saturday. 146 characters, exactly one line, no trailing newline.
const ENTRY =
  "My alarm clock has served me a wake-up notice at 6 AM on 208 straight Saturdays, and it charges a full day of my weekend for a nine-minute snooze.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, not only white space. Fail loudly instead of writing
// an entry the sealed scorer would refuse.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("entry fails the 1-200 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
