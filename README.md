# setupkaro

> Bootstrap projects in seconds, not hours.

A CLI tool and platform for instantly bootstrapping developer projects with sensible defaults, templates, and configurations.

```bash
npx setupkaro init my-app --template react-ts
```

## Problem

Every developer wastes hours setting up new projects. You download a boilerplate, spend 2 hours fixing imports, configuring linters, adding CI, writing a README — and by the time you're ready to code, you've lost the flow.

## Solution

`setupkaro` generates complete, production-ready project templates in one command. Choose a template, answer a few questions, and get a fully-structured project that's ready to run.

## Quick Start

```bash
# Install globally
npm i -g setupkaro

# Or run instantly with npx (no install)
npx setupkaro init my-project --template react-ts

# See available templates
setupkaro list
```

## Features

| Feature | Description |
|---------|-------------|
| **One-command init** | Generate full projects from templates |
| **Multi-language** | TypeScript, React, Python, Go, Rust, Java, PHP, Next.js, and more |
| **CI/CD included** | GitHub Actions workflows for test, lint, typecheck, build, and Docker |
| **Linting & formatting** | ESLint, Prettier, Ruff, Pint, PHPStan, Spotless — pre-configured |
| **Testing setup** | Jest, Vitest, Pytest, Testify, Pest, JUnit — boilerplate included |
| **Docker ready** | Dockerfile and docker-compose.yml included |
| **README generated** | Project documentation auto-generated |
| **No telemetry** | Runs 100% offline. No analytics, no phone-home, no account required |
| **Extensible** | Create custom templates with our simple JSON schema |

## Available Templates

| Template | Description |
|----------|-------------|
| `typescript` | Node.js + TypeScript with ESLint, Prettier, Jest, Husky |
| `react-ts` | Vite + React 18 + TS + Tailwind + React Router + Vitest |
| `python-fastapi` | FastAPI + SQLAlchemy + Pydantic + pytest + Ruff + Docker |
| `go-microservice` | Gin + gRPC + Wire DI + testify + golangci-lint + Docker |
| `rust-cli` | Clap 4 + Tokio + anyhow + clippy + cargo-nextest |
| `java-spring` | Spring Boot 3 + Maven + JUnit 5 + Spotless + Testcontainers |
| `nextjs` | Next.js 14 App Router + TS + Tailwind + Playwright |
| `laravel` | Laravel 11 + Pest + Pint + PHPStan + Sail |
| `docker-compose` | Postgres + Redis + Nginx + Adminer + Mailpit + Watchtower |

## Installation

```bash
# npm / npx (recommended)
npx setupkaro init my-app --template react-ts

# Homebrew (macOS)
brew tap setupkaro/brew && brew install setupkaro

# Cargo (Rust binary)
cargo install setupkaro

# Standalone binary (Linux / macOS / Windows)
curl -fsSL https://setupkaro.in/install.sh | sh
```

## Roadmap

- [ ] Template marketplace — publish and discover community templates
- [ ] Team accounts — shared templates across organizations
- [ ] AI-assisted template generation — describe your app, get a custom template
- [ ] Cloud deployment — one-click deploy to Vercel, Netlify, Railway
- [ ] Template versioning — update templates without breaking existing projects

## Monetization

| Tier | Features |
|------|----------|
| **Free** | 8+ templates, personal use, community marketplace access |
| **Pro** | Unlimited templates, private team templates, AI-assisted generation, priority support |
| **Team** | Team collaboration, SSO, audit logs, template analytics |
| **Enterprise** | On-premise deployment, custom compliance, dedicated support |

## Contributing

We love contributions! See `CONTRIBUTING.md` for:

- How to add new templates
- Bug report guidelines
- Development setup
- Code of conduct

## License

MIT License. See `LICENSE` for details.

---

*Built with ❤️ for the developer community. Made in India, for the world.*