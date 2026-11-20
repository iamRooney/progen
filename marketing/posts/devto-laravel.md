---
title: "Laravel 11 with Pest, Pint, PHPStan, Sail & Docker — one command, production-ready"
description: "Generate a production-ready Laravel 11 project with Pest testing, Pint formatting, PHPStan static analysis, Laravel Sail, FrankenPHP Docker, GitHub Actions CI/CD, and a generated README in one command."
tags: ["laravel", "php", "pest", "pint", "phpstan", "docker", "frankenphp", "github-actions", "sail"]
cover_image: "https://raw.githubusercontent.com/iamRooney/setupkaro/main/social-preview.png"
canonical_url: "https://github.com/iamRooney/setupkaro"
published: false
---

`laravel new` is a start. But you still add: Pest (not PHPUnit), Pint (not PHP-CS-Fixer), PHPStan level 5, Laravel Sail, Docker for production, GitHub Actions that run Pest + Pint + PHPStan.

```bash
npx setupkaro init my-app --template laravel
```

## Generates

- **Laravel 11 (PHP 8.2+)** — latest LTS
- **Pest 3 + Pest Laravel plugin** (parallel testing, coverage)
- **Pint (Laravel preset)** for code formatting
- **PHPStan level 5 with Larastan** for static analysis
- **Laravel Sail** for local Docker development
- **FrankenPHP Dockerfile** (worker mode, Octane-compatible) for production
- **docker-compose.yml** (Postgres, Redis, Meilisearch, Mailpit)
- **GitHub Actions:** pint → phpstan → pest → build
- **Generated README** with Sail commands and deployment guide

The template uses FrankenPHP for production (worker mode, Octane-compatible). Pest config includes parallel testing and coverage.

## Try it

```bash
npx setupkaro init laravel-demo --template laravel
cd laravel-demo
./vendor/bin/sail up -d
# App at http://localhost
```

## Project structure

```
app/
bootstrap/
config/
database/
  factories/
  migrations/
  seeders/
public/
resources/
  views/
routes/
  api.php
  web.php
tests/
  Feature/
  Unit/
  Pest.php
.github/workflows/ci.yml
Dockerfile
docker-compose.yml
composer.json
phpstan.neon
pint.json
phpunit.xml
.env.example
README.md
```

## Why FrankenPHP?

FrankenPHP is a modern PHP application server with:
- Worker mode (like Octane/RoadRunner) — keep app in memory
- Early hints / 103 Early Hints
- Automatic HTTPS with Let's Encrypt
- Compatible with Laravel Octane

## CI pipeline order matters

```yaml
jobs:
  pint:      # Format first
  phpstan:   # Static analysis
  pest:      # Tests (needs formatted + analyzed code)
  build:     # Docker build
```

This catches formatting issues before they hit static analysis, and both before tests run.

## Repo

https://github.com/iamRooney/setupkaro (MIT license)

---

*Made in Kerala, for the world 🇮🇳*