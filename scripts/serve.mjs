import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const eleventy = join(root, "..", "node_modules", "@11ty", "eleventy", "cmd.cjs");

console.log("");
console.log("Preview: http://localhost:8080/");
console.log("Leave this window open. Press Ctrl+C to stop.");
console.log("");

const child = spawn(process.execPath, [eleventy, "--serve", "--port=8080"], {
  stdio: "inherit",
  cwd: join(root, ".."),
});
child.on("exit", (code) => process.exit(code ?? 1));
