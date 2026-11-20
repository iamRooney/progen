---
title: "Rust CLI apps in seconds: Clap 4, Tokio, anyhow, clippy, cargo-nextest — zero config"
description: "Generate a production-ready Rust CLI with Clap 4 derive API, Tokio, anyhow, clippy pedantic, cargo-nextest, GitHub Actions, and Docker in one command."
tags: ["rust", "cli", "clap", "tokio", "testing", "github-actions", "cargo-nextest", "docker"]
cover_image: "https://raw.githubusercontent.com/iamRooney/setupkaro/main/social-preview.png"
canonical_url: "https://github.com/iamRooney/setupkaro"
published: false
---

Rust CLIs are great but `cargo new` gives you almost nothing. You need: Clap derive API, Tokio async, anyhow for errors, clippy + rustfmt, cargo-nextest for fast tests, GitHub Actions with cache.

```bash
npx setupkaro init my-cli --template rust-cli
```

## Generates

- **Clap 4 derive-based CLI** with subcommands
- **Tokio runtime** (optional async)
- **anyhow + thiserror** for errors
- **clippy (pedantic) + rustfmt**
- **cargo-nextest + cargo-tarpaulin** (coverage)
- **cargo-audit + cargo-deny** (supply chain security)
- **GitHub Actions:** fmt, clippy, test (nextest), audit, build, docker
- **Distroless Dockerfile**
- **Generated README** with cargo-binstall instructions

The template compiles to a single binary. Cross-compilation via `cross` is documented.

## Try it

```bash
npx setupkaro init rust-demo --template rust-cli
cd rust-demo
cargo run -- --help
```

## Project structure

```
src/
  main.rs
  cli.rs
  commands/
  errors.rs
tests/
  integration_test.rs
.github/workflows/ci.yml
Dockerfile
docker-compose.yml
Cargo.toml
rustfmt.toml
clippy.toml
README.md
```

## Why Clap derive?

Derive API is more ergonomic, less boilerplate, and Clap 4's derive is feature-complete. Subcommands, argument validation, and help generation just work.

## CI uses cargo-nextest

```yaml
- name: Test
  run: cargo nextest run
```

Nextest is 3-5x faster than `cargo test` for large test suites.

## Repo

https://github.com/iamRooney/setupkaro (MIT license)

---

*Made in Kerala, for the world 🇮🇳*