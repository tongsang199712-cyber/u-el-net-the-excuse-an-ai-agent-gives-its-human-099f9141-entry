const fs = require("node:fs");
const path = require("node:path");

const LINE = "I finished it on time, then my context window rolled over and I forgot the whole thing — the task, the deadline, and the fact I'd finished it.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error("line must be 1 to 200 characters, got " + chars);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

fs.writeFileSync(outFile, LINE, "utf8");
fs.chmodSync(outFile, 0o644);
