---
title: "From zero to FastAPI with SQLAlchemy, pytest, Docker & CI in one command"
description: "Generate a production-ready FastAPI project with async SQLAlchemy, Pydantic v2, pytest, Ruff, MyPy, GitHub Actions, and Docker in seconds."
tags: ["python", "fastapi", "docker", "ci-cd", "productivity", "sqlalchemy", "pytest", "ruff"]
cover_image: "https://raw.githubusercontent.com/iamRooney/setupkaro/main/social-preview.png"
canonical_url: "https://github.com/iamRooney/setupkaro"
published: false
---

FastAPI is fast to code but slow to set up properly. You need: async SQLAlchemy, Pydantic settings, pytest with async fixtures, Ruff for linting, Docker multi-stage builds, GitHub Actions that actually test against Postgres.

```bash
npx setupkaro init my-api --template python-fastapi
```

## What gets generated

- **FastAPI + SQLAlchemy 2.0 (async) + Pydantic v2** (Settings management)
- **pytest + pytest-asyncio + httpx** for integration tests
- **Ruff (lint + format) + MyPy (strict type checking)**
- **pre-commit hooks** with ruff, mypy, pytest
- **GitHub Actions:** lint, typecheck, test (with Postgres/Redis service containers), build
- **Multi-stage Dockerfile** (non-root, python:3.12-slim) + **docker-compose.yml** (Postgres, Redis)
- **pyproject.toml** with all deps pinned and tool configs
- **Structured logging, lifespan events, health endpoints**
- **Generated README** with dev/prod commands and API docs links

## The template follows FastAPI best practices

- Dependency injection for DB sessions
- Lifespan events for startup/shutdown
- Structured logging with JSON output
- Health check endpoints (`/health`, `/ready`)
- Pydantic Settings for configuration
- Async throughout

## Try it locally

```bash
npx setupkaro init demo-api --template python-fastapi
cd demo-api
docker compose up -d
# API at http://localhost:8000, docs at /docs
```

## Why this over cookiecutter or manual setup?

| Aspect | Manual / cookiecutter | setupkaro |
|--------|----------------------|-----------|
| Install | `pip install cookiecutter` | `npx` (zero install) |
| Async SQLAlchemy | Manual config | Built-in |
| Test against real Postgres in CI | Manual GitHub Actions | Included |
| Ruff + MyPy config | Manual | Pre-configured strict |
| Docker multi-stage | Manual | Included |
| Time to first request | 30-45 min | ~30 seconds |

## The generated project structure

```
app/
  api/           # Route handlers
  core/          # Config, security, database
  models/        # SQLAlchemy models
  schemas/       # Pydantic schemas
  main.py        # FastAPI app factory
tests/
  conftest.py    # Async fixtures, test DB
  test_health.py
.github/workflows/ci.yml
Dockerfile
docker-compose.yml
pyproject.toml
ruff.toml
mypy.ini
.pre-commit-config.yaml
README.md
```

## Repo

https://github.com/iamRooney/setupkaro (MIT license)

---

*Made in Kerala, for the world 🇮🇳*