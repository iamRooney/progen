# Show HN Submission

## Pre-Launch Checklist (MUST COMPLETE BEFORE POSTING)

- [ ] Demo GIF recorded (clean terminal, 30-60s, shows: npx setupkaro list → init → cd → install → dev)
- [ ] README.md polished (badges render, command examples work, no broken links)
- [ ] Verified `npx setupkaro init test-app --template react-ts` on:
  - [ ] Clean macOS (no node_modules, no global npm packages)
  - [ ] Clean Windows 10/11 (PowerShell + CMD + Git Bash)
  - [ ] Clean Ubuntu (WSL2 or VM)
  - [ ] Node 18, 20, 22
- [ ] All 10 templates generate without errors
- [ ] Generated projects run: `npm install && npm run dev` (or equivalent)
- [ ] Docker builds succeed for templates with Dockerfile
- [ ] GitHub Actions CI passes on repo
- [ ] npm package published (or at least `npm pack` works locally)
- [ ] Social preview image (og-default.png) deployed to repo/docs
- [ ] Demo GIF hosted (GitHub release asset or imgur)
- [ ] Short URL for repo (github.com/iamRooney/setupkaro)

---

## Title

**Show HN: setupkaro — zero-install CLI to generate production-ready project templates (10+ stacks)**

---

## First Comment (post immediately after submission)

Hey HN, I built setupkaro because every new project started with 45 minutes of configuring linting, testing, CI, Docker, and docs — before writing a single line of code.

**What it does:**
`npx setupkaro init my-app --template react-ts` (or typescript, nextjs, python-fastapi, go-microservice, rust-cli, java-spring, laravel, php, docker-compose)

**Every template includes:**
- Linting/formatting (ESLint+Prettier, Ruff, Pint, golangci-lint, clippy, Spotless)
- Testing (Jest/Vitest, pytest, testify, cargo-nextest, JUnit+Testcontainers, Pest)
- GitHub Actions: typecheck, lint, test, build, docker
- Dockerfile + docker-compose.yml
- Generated README

**Why npx / zero-install?**
No global install, no account, no telemetry. Runs on any machine with Node 18+. Templates are just folders in the repo with `{{projectName}}` placeholders — you can fork and add your own.

**Tech:** Pure Node.js (ESM), no dependencies except fs/promises. The template schema is a simple JSON array.

**Repo:** https://github.com/iamRooney/setupkaro (MIT)
**npm:** `npm view setupkaro` (published as setupkaro)

Known limitations: Windows symlinks in templates need admin (working on it). Java template needs Maven wrapper committed (done). Rust template needs `cargo nextest` installed for CI (documented).

Feedback welcome — especially on templates you'd want added or template customization workflows.