# r/commandline Post

**Title:** setupkaro — zero-install CLI that generates 10+ production-ready project templates (TS, React, Go, Rust, Python, Java, Laravel, PHP, Docker)

**Body:**

Most scaffolding tools are single-language (create-vite, cookiecutter, cargo-generate). setupkaro is multi-language and runs with `npx` — no install.

```bash
npx setupkaro list
# Shows: typescript, react-ts, nextjs, python-fastapi, go-microservice, rust-cli, java-spring, laravel, php, docker-compose

npx setupkaro init my-app --template react-ts
```

Every template includes:
- Linting/formatting (ESLint/Prettier, Ruff, Pint, golangci-lint, clippy, Spotless)
- Testing (Jest/Vitest, pytest, testify, cargo-nextest, JUnit+Testcontainers, Pest)
- GitHub Actions CI/CD (test, lint, typecheck, build, docker)
- Dockerfile + docker-compose.yml
- Generated README

Templates are just folders with `{{projectName}}` placeholders — extensible via JSON schema.

MIT license, made in Kerala, no telemetry.

Repo: https://github.com/iamRooney/setupkaro

---

**Rules check before posting:**
- [ ] Read sidebar — some CLI subs restrict "show my tool" posts
- [ ] If restricted, post in weekly thread
- [ ] Emphasize *zero-install* and *multi-language* differentiators