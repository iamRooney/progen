<div align="center">

# ⚡ setupkaro

### Bootstrap projects in seconds, not hours.

A zero-install CLI that generates complete, production-ready project templates in a single command. Pick a stack, answer a few questions, start coding.

[![npm version](https://img.shields.io/npm/v/setupkaro?style=for-the-badge&color=cb3837&logo=npm)](https://www.npmjs.com/package/setupkaro)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](./CONTRIBUTING.md)
[![Made in Kerala](https://img.shields.io/badge/Made%20in-Kerala-orange?style=for-the-badge)](#-license)

```bash
npx setupkaro init my-app --template react-ts
```

[Quick Start](#-quick-start) · [Templates](#-templates) · [Features](#-features) · [Roadmap](#-roadmap) · [Contributing](#-contributing)

</div>

---

## 🤔 Why setupkaro?

Starting a new project usually goes like this: clone a boilerplate, spend two hours fixing imports, configure the linter, wire up CI, write a README. By the time you're ready to code, the idea has gone cold.

**setupkaro removes all of that.** One command gives you a fully structured project with linting, testing, CI/CD, Docker, and docs already set up and working.

---

## 🚀 Quick Start

**Nothing to install.** Just run:

```bash
npx setupkaro init my-project --template react-ts
```

Then:

```bash
cd my-project
npm install
npm run dev
```

See every available template:

```bash
npx setupkaro list
```

---

## ✨ Features

| | Feature | What you get |
|---|---|---|
| ⚡ | **Zero install** | Runs instantly with `npx`, nothing to set up first |
| 🧱 | **One-command init** | A complete project generated from a template |
| 🌍 | **Multi-language** | TypeScript, React, Next.js, Python, Go, Rust, Java, PHP and more |
| 🔁 | **CI/CD included** | GitHub Actions for test, lint, typecheck, build and Docker |
| 🧹 | **Linting & formatting** | ESLint, Prettier, Ruff, Pint, PHPStan, Spotless, pre-configured |
| 🧪 | **Testing ready** | Jest, Vitest, Pytest, Testify, Pest, JUnit with starter tests |
| 🐳 | **Docker ready** | `Dockerfile` and `docker-compose.yml` out of the box |
| 📝 | **README generated** | Your new project ships with its own docs |
| 🔒 | **Private by design** | No telemetry, no analytics, no account required |
| 🧩 | **Extensible** | Build your own templates with a simple JSON schema |

---

## 📦 Templates

| Template | Stack |
|----------|-------|
| `typescript` | Node.js, TypeScript, ESLint, Prettier, Jest, Husky |
| `react-ts` | Vite, React 18, TypeScript, Tailwind, React Router, Vitest |
| `nextjs` | Next.js 14 (App Router), TypeScript, Tailwind, Playwright |
| `python-fastapi` | FastAPI, SQLAlchemy, Pydantic, pytest, Ruff, Docker |
| `go-microservice` | Gin, gRPC, Wire DI, testify, golangci-lint, Docker |
| `rust-cli` | Clap 4, Tokio, anyhow, clippy, cargo-nextest |
| `java-spring` | Spring Boot 3, Maven, JUnit 5, Spotless, Testcontainers |
| `laravel` | Laravel 11, Pest, Pint, PHPStan, Sail |
| `docker-compose` | Postgres, Redis, Nginx, Adminer, Mailpit, Watchtower |

---

## 🧭 How it works

```
  setupkaro init my-app --template react-ts
          │
          ▼
  1. Pick a template        →  react-ts
  2. Answer a few questions →  project name, options
  3. Files are generated    →  code, configs, CI, Docker, README
          │
          ▼
  ✅ Ready to run. Start coding.
```

Everything runs locally on your machine.

---

## 🗺️ Roadmap

- [ ] **Template marketplace**: publish and discover community templates
- [ ] **Team accounts**: share templates across an organization
- [ ] **AI-assisted generation**: describe your app, get a custom template
- [ ] **Cloud deployment**: one-click deploy to Vercel, Netlify, Railway
- [ ] **Template versioning**: update templates without breaking existing projects

---

## 💼 Plans

The core CLI stays free and open source. Paid tiers are planned for teams that need more.

| Tier | Includes |
|------|----------|
| **Free** | 8+ templates, personal use, community marketplace access |
| **Pro** | Unlimited templates, private team templates, AI-assisted generation, priority support |
| **Team** | Team collaboration, SSO, audit logs, template analytics |
| **Enterprise** | On-premise deployment, custom compliance, dedicated support |

---

## 🤝 Contributing

Contributions are welcome, whether it's a new template, a bug fix, or a docs tweak. See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for:

- How to add a new template
- Bug report guidelines
- Development setup
- Code of conduct

**Quick contribution flow:**

```bash
git clone https://github.com/iamRooney/setupkaro.git
cd setupkaro
# make your changes on a new branch, then open a pull request
```

---

## 📄 License

Released under the [MIT License](./LICENSE).

---

<div align="center">

Built with ❤️ for the developer community.
**Made in Kerala, for the world.**

⭐ If setupkaro saved you time, consider starring the repo.

</div>