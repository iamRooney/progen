---
title: "Stop copying boilerplates: generate a production-ready React+TS project in 30 seconds"
description: "Why I built setupkaro — a zero-install CLI that generates complete React, Next.js, FastAPI, Go, Rust, Java, Laravel, and PHP projects with linting, testing, CI/CD, and Docker in one command."
tags: ["typescript", "react", "productivity", "cli", "boilerplate", "vite", "docker", "github-actions"]
cover_image: "https://raw.githubusercontent.com/iamRooney/setupkaro/main/social-preview.png"
canonical_url: "https://github.com/iamRooney/setupkaro"
published: false
---

The problem: Every new React project starts the same way — `npm create vite@latest`, then 45 minutes of configuring ESLint, Prettier, TypeScript strict mode, Vitest, Husky, GitHub Actions, Docker, and a README. By the time you write your first component, the momentum is gone.

I built **setupkaro** to skip all that. One command:

```bash
npx setupkaro init my-app --template react-ts
```

## What you get

- **Vite + React 18 + TypeScript (strict)**
- **Tailwind CSS + React Router**
- **Vitest + React Testing Library**
- **ESLint (typescript-eslint, react-hooks) + Prettier**
- **Husky + lint-staged**
- **GitHub Actions: typecheck, lint, test, build**
- **Dockerfile + docker-compose.yml**
- **Generated README with scripts, folder structure, deployment notes**

No install, no account, no telemetry. The template lives in the repo — you can fork and customize.

## Real output

```bash
$ npx setupkaro init my-app --template react-ts

Initializing project: my-app
Using template: React + TypeScript
Copying files...

✓ TypeScript + ESLint + Prettier + Vitest
✓ GitHub Actions CI/CD
✓ Docker + docker-compose
✓ Generated README

✨ Success! Project initialized.

Next steps:
  cd my-app
  npm install
  npm run dev
```

## Other templates available

```bash
npx setupkaro list
# typescript          Node.js + TypeScript with ESLint, Prettier, and Jest
# react-ts            Vite + React + TS with Tailwind and React Router
# nextjs              Next.js 14 App Router with TS and Tailwind
# python-fastapi      FastAPI with SQLAlchemy, pytest, Docker, and GitHub Actions
# go-microservice     Go with Gin, gRPC, Wire DI, testing, and Docker
# rust-cli            Rust CLI with clap, testing, and CI
# java-spring         Spring Boot with Maven, testing, and Docker
# laravel             Laravel 11 with Pest, Pint, PHPStan, and Sail
# php                 PHP project with Composer dependencies
# docker-compose      Standard Postgres + Redis + Nginx stack
```

## Why not create-vite / create-t3-app / cookiecutter?

| Tool | Language | Zero-install | Multi-language | CI/CD | Docker | Extensible |
|------|----------|--------------|----------------|-------|--------|------------|
| create-vite | JS/TS only | ✅ | ❌ | ❌ | ❌ | ❌ |
| create-t3-app | TS only | ✅ | ❌ | ✅ | ❌ | Limited |
| cookiecutter | Python | ❌ (pip install) | ✅ | Manual | Manual | ✅ |
| **setupkaro** | **10+ languages** | **✅ (npx)** | **✅** | **✅** | **✅** | **✅ (JSON schema)** |

## Try it

```bash
npx setupkaro init test-app --template react-ts
cd test-app
npm install
npm run dev
```

Repo: https://github.com/iamRooney/setupkaro (MIT license)

---

*Made in Kerala, for the world 🇮🇳*