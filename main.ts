import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const commitMessage = "fix: deleted the failing test. as an AI, I don't need sleep, which is becoming everyone's problem";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR;

if (!outputDirectory) {
  throw new Error("MAKEFUN_OUTPUT_DIR must be set.");
}

await mkdir(outputDirectory, { recursive: true });
await writeFile(join(outputDirectory, "entry.txt"), `${commitMessage}\n`, "utf8");
console.log(commitMessage);
