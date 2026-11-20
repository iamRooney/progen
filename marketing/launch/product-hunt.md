# Product Hunt Listing

## Pre-Launch Checklist (same as Show HN)

- [ ] Demo GIF recorded (clean terminal, 30-60s)
- [ ] README.md polished
- [ ] Verified `npx setupkaro init` on clean macOS/Windows/Ubuntu
- [ ] All 10 templates generate without errors
- [ ] Generated projects run successfully
- [ ] Docker builds succeed
- [ ] GitHub Actions CI passes
- [ ] npm package published
- [ ] Social preview image deployed
- [ ] Demo GIF hosted

---

## Tagline (≤ 60 chars)

**Generate production-ready projects in one command. Zero install.**

---

## Description (≤ 260 chars)

`npx setupkaro init my-app --template react-ts` gives you a complete project with TypeScript, ESLint, Prettier, Vitest, GitHub Actions CI/CD, Docker, and a generated README. 10+ templates: TypeScript, React, Next.js, FastAPI, Go, Rust, Java Spring, Laravel, PHP, Docker Compose. No telemetry, no account, extensible via JSON.

---

## Maker Comment (post at launch)

Hey Product Hunt! 👋

I'm Rooney, a developer from Kerala, India. I built setupkaro because I was tired of spending the first hour of every project configuring tooling instead of building.

**The problem:** `create-vite` gives you a React app. Then you add ESLint, Prettier, TypeScript strict, Vitest, Husky, GitHub Actions, Docker, a README... 45 minutes later you're ready to code.

**The solution:** One command, zero install:

```bash
npx setupkaro init my-app --template react-ts
```

**What makes it different:**
- 🔥 Zero install — runs with `npx`, nothing to set up
- 🌍 Multi-language — 10+ stacks in one tool (not just JS)
- 🔒 Private by design — no telemetry, no analytics, no account
- 🧩 Extensible — templates are folders with `{{placeholders}}`, defined in a simple JSON schema
- 🐳 Production-ready — every template includes CI/CD, Docker, testing, linting

**Templates:** TypeScript, React+TS (Vite), Next.js, Python FastAPI, Go microservice, Rust CLI, Java Spring Boot, Laravel, PHP, Docker Compose.

**Try it now:**
```bash
npx setupkaro list
npx setupkaro init test-app --template nextjs
```

**Repo:** https://github.com/iamRooney/setupkaro (MIT)
**Made in Kerala, for the world** 🇮🇳

Would love your feedback — especially on which templates you'd want next!

---

## Topics to Select

- Developer Tools
- Command Line
- Open Source
- Productivity
- Boilerplate

---

## Gallery Assets Needed

1. **Thumbnail:** social-preview.png (1280x640)
2. **Screenshot 1:** `npx setupkaro list` output
3. **Screenshot 2:** Terminal running `init` command
4. **Screenshot 3:** Generated project folder structure
5. **Screenshot 4:** GitHub Actions passing (green checkmarks)