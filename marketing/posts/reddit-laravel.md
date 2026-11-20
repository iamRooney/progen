# r/laravel Post (Showoff Saturday)

**Title:** [Showoff] setupkaro — generates Laravel 11 projects with Pest, Pint, PHPStan, Sail, Docker, and CI in one npx command

**Body:**

Not a Laravel package — a cross-language CLI that happens to have a really solid Laravel template.

```bash
npx setupkaro init my-app --template laravel
```

What the template includes:
- Laravel 11 (latest)
- Pest 3 for testing (parallel, coverage)
- Pint for formatting (Laravel preset)
- PHPStan level 5 with Larastan
- Laravel Sail for local dev
- FrankenPHP Dockerfile for production (worker mode)
- docker-compose.yml with Postgres, Redis, Meilisearch, Mailpit
- GitHub Actions: pint → phpstan → pest → build
- Generated README

No install, no account, no telemetry. The template is just a folder in the repo — you can fork and tweak.

Repo: https://github.com/iamRooney/setupkaro

---

**Rules check before posting:**
- [ ] Post on Saturday (Showoff Saturday)
- [ ] No affiliate links
- [ ] Disclose authorship: "I built this"
- [ ] Engage with comments
- [ ] Check r/laravel sidebar for current self-promo rules