#!/usr/bin/env node

import { readFile, writeFile, mkdir, readdir, stat } from "node:fs/promises";
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

async function copyDir(src, dest, replacements = {}) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath, replacements);
    } else {
      let content = await readFile(srcPath, "utf-8");
      for (const [key, value] of Object.entries(replacements)) {
        content = content.replace(new RegExp(`{{${key}}}`, "g"), value);
      }
      await writeFile(destPath, content);
    }
  }
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
    setupkaro init . --template react-ts
    setupkaro list
  `);
}

function printList(templates) {
  console.log("\n🚀 Available templates:\n");
  if (templates.length === 0) {
    console.log("  (no templates yet)");
    return;
  }
  for (const t of templates) {
    console.log(`  ${t.id.padEnd(20)} ${t.description}`);
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
    const name = args[1];
    if (!name || name.startsWith("-")) {
      console.error("Error: Project name required. Use: setupkaro init <name>");
      process.exit(1);
    }

    const tIdx = args.indexOf("--template");
    let templateId = tIdx >= 0 ? args[tIdx + 1] : null;

    // Fallback to legacy flag check like --typescript
    if (!templateId) {
      for (const arg of args) {
        if (arg.startsWith("--")) {
          templateId = arg.replace(/^--/, "");
        }
      }
    }

    if (!templateId) {
      console.error("Error: No template specified. Use --template <id>");
      process.exit(1);
    }

    const templates = await loadTemplates();
    const found = templates.find((t) => t.id === templateId);

    if (!found) {
      console.error(`Error: Template "${templateId}" not found. Run "setupkaro list" for options.`);
      process.exit(1);
    }

    const targetDir = path.resolve(process.cwd(), name);
    const templateDir = path.join(root, "templates", found.id);

    if (existsSync(targetDir) && name !== ".") {
      console.error(`Error: Directory "${name}" already exists.`);
      process.exit(1);
    }

    console.log(`\n📦 Initializing project: ${name}`);
    console.log(`📂 Using template: ${found.name}`);

    try {
      await copyDir(templateDir, targetDir, {
        projectName: path.basename(targetDir === process.cwd() ? process.cwd() : targetDir),
      });

      console.log("\n✨ Success! Project initialized.");
      console.log(`\nNext steps:`);
      console.log(`  cd ${name === "." ? "" : name}`);

      // Check if template has a package.json to read scripts
      let hasDevScript = false;
      let hasStartScript = false;
      const pkgPath = path.join(targetDir, "package.json");
      if (existsSync(pkgPath)) {
        try {
          const pkgData = JSON.parse(await readFile(pkgPath, "utf-8"));
          if (pkgData.scripts) {
            hasDevScript = !!pkgData.scripts.dev;
            hasStartScript = !!pkgData.scripts.start;
          }
        } catch (e) {}
      }

      const isWebTemplate = found.id === "react-ts" || found.id === "nextjs";

      if (existsSync(path.join(targetDir, "package.json"))) {
        console.log(`  npm install`);
      } else if (existsSync(path.join(targetDir, "requirements.txt"))) {
        console.log(`  pip install -r requirements.txt`);
      } else if (existsSync(path.join(targetDir, "go.mod"))) {
        console.log(`  go mod tidy`);
      } else if (existsSync(path.join(targetDir, "Cargo.toml"))) {
        console.log(`  cargo build`);
      } else if (existsSync(path.join(targetDir, "pom.xml"))) {
        console.log(`  mvn clean install`);
      } else if (existsSync(path.join(targetDir, "composer.json"))) {
        console.log(`  composer install`);
      }

      if (hasDevScript) {
        console.log(`  npm run dev`);
        if (isWebTemplate) {
          console.log(`  (Opens local dev server on localhost)`);
        } else {
          console.log(`  (Runs script / watches files)`);
        }
      } else if (hasStartScript) {
        console.log(`  npm start`);
      }
      console.log();
    } catch (err) {
      console.error("Error creating project:", err.message);
      process.exit(1);
    }
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
