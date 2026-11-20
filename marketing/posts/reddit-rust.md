# r/rust Post (Weekly "What are you working on?")

**Title:** setupkaro: generates Rust CLI projects with Clap 4, Tokio, anyhow, clippy, cargo-nextest, GitHub Actions

**Body:**

Rustaceans love `cargo new` but then spend 30 min adding Clap derive, Tokio, anyhow, clippy pedantic, nextest, CI with cache.

```bash
npx setupkaro init my-cli --template rust-cli
```

Generates:
- Clap 4 derive API with subcommands
- Tokio (optional async)
- anyhow + thiserror
- clippy (pedantic, nursery) + rustfmt
- cargo-nextest + cargo-tarpaulin (coverage)
- GitHub Actions: fmt, clippy, test (nextest), audit, build, docker
- Distroless Dockerfile
- Generated README with cargo-binstall instructions

Cross-compilation via `cross` documented.

Repo: https://github.com/iamRooney/setupkaro

---

**Rules check before posting:**
- [ ] Post in weekly "What are you working on?" (Monday)
- [ ] Or "Showcase" if allowed — check sidebar
- [ ] Mention it's a *generator*, not a crate
- [ ] No crate.io link (it's not a crate)