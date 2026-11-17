#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const TEMPLATES_PATH = path.join(root, "templates", "index.json");

async function loadTemplates() {
  if (!existsSync(TEMPLATES_PATH)) {
    return [];
  }
  const raw = await readFile(TEMPLATES_PATH, "utf-8");
  return JSON.parse(raw);
}

function printHelp() {
  console.log(`
setupkaro — instantly bootstrap developer projects

Usage:
  setupkaro init <name> --template <template>
  setupkaro list
  setupkaro --help

Examples:
  setupkaro init my-app --template typescript
  setupkaro init . --python-fastapi
  setupkaro init my-service --go-microservice
  setupkaro list
`);
}

function printList(templates) {
  console.log("Available templates:\n");
  if (templates.length === 0) {
    console.log("  (no templates yet — add one in templates/)");
    return;
  }
  for (const t of templates) {
    console.log(`  ${t.id.padEnd(24)} ${t.description}`);
  }
  console.log("\nUse: setupkaro init <name> --template <id>");
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    printHelp();
    return;
  }

  if (args[0] === "list") {
    const templates = await loadTemplates();
    printList(templates);
    return;
  }

  if (args[0] === "init") {
    const nameIdx = args.indexOf("--name");
    let name = nameIdx >= 0 ? args[nameIdx + 1] : null;
    let template = null;

    const tIdx = args.indexOf("--template");
    if (tIdx >= 0) template = args[tIdx + 1];

    for (const arg of args) {
      if (arg.startsWith("--") && !arg.startsWith("--name") && !arg.startsWith("--template")) {
        template = arg.replace(/^--/, "");
      }
    }

    if (!name) {
      name = "my-app";
    }

    if (!template) {
      console.error("Error: no template specified. Use --template <id> or a flag like --typescript");
      console.error("Run `setupkaro list` to see available templates.");
      process.exit(1);
    }

    const templates = await loadTemplates();
    const found = templates.find((t) => t.id === template);

    if (!found) {
      console.error(`Error: template "${template}" not found.`);
      console.error("Run `setupkaro list` to see available templates.");
      process.exit(1);
    }

    console.log(`✓ Setting up "${name}" using template "${found.id}"`);
    console.log(`  ${found.description}`);
    console.log(`  → Run: cd ${name} && npm install && npm run dev`);
    console.log("\nTemplate generation is coming soon. This is a placeholder.");
    return;
  }

  console.error(`Unknown command: ${args[0]}`);
  printHelp();
  process.exit(1);
}

main().catch((err) => {
  console.error("setupkaro error:", err.message);
  process.exit(1);
});