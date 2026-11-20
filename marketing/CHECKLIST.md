# Setupkaro Marketing & Discoverability Checklist

Track progress by checking boxes. All files are prepared in the repo — commit and push when ready.

---

## 🎯 Quick Wins (Do First)

### GitHub Discoverability
- [ ] **Add 20 GitHub topics** — Copy from `marketing/github-topics.json`
- [ ] **Update repo description** — Paste from `marketing/github-topics.json` (≤350 chars)
- [ ] **Update package.json** — Already edited locally (description + keywords)
- [ ] **Export social preview** — Open `social-preview.html` in browser → click "Export PNG" → save as `docs/public/og-default.png` and add to repo root
- [ ] **Commit & push** package.json, social preview PNG

### npm Package
- [ ] `npm login` (if not already)
- [ ] `npm publish --access public` (or `npm pack` to test first)
- [ ] Verify on https://www.npmjs.com/package/setupkaro

---

## 📚 Docs Site (Medium Effort)

### Scaffold & Deploy
- [ ] `cd docs && npm install`
- [ ] `npm run build` (verify static export works)
- [ ] Deploy to Netlify: connect repo, set build command `cd docs && npm run build`, publish dir `docs/out`
- [ ] Or deploy to GitHub Pages: enable Pages in repo settings, use GitHub Actions workflow (`.github/workflows/docs.yml` already created)
- [ ] Configure custom domain `setupkaro.dev` (if owned) or use `iamrooney.github.io/setupkaro`

### Content Verification
- [ ] All 10 template pages render correctly at `/templates/[slug]`
- [ ] Stack Picker works on home page and template pages
- [ ] Sitemap.xml generates at `/sitemap.xml`
- [ ] Robots.txt serves at `/robots.txt`
- [ ] OG images exist for each template (`/og-[slug].png`) — create from social-preview.html variations

---

## 📝 Content & Community Posts

### dev.to / Hashnode Articles
- [ ] Publish `marketing/posts/devto-react-ts.md` on dev.to
- [ ] Cross-post to Hashnode (set canonical URL to dev.to)
- [ ] Publish `marketing/posts/devto-fastapi.md` on dev.to
- [ ] Publish `marketing/posts/devto-go.md` on dev.to
- [ ] Publish `marketing/posts/devto-rust.md` on dev.to
- [ ] Publish `marketing/posts/devto-java-spring.md` on dev.to
- [ ] Publish `marketing/posts/devto-laravel.md` on dev.to
- [ ] Add cover image (social-preview.png) to each

### Reddit Posts
- [ ] Post `marketing/posts/reddit-laravel.md` on r/laravel (Saturday only)
- [ ] Post `marketing/posts/reddit-golang.md` on r/golang (weekly thread)
- [ ] Post `marketing/posts/reddit-rust.md` on r/rust (weekly thread)
- [ ] Post `marketing/posts/reddit-commandline.md` on r/commandline
- [ ] Verify each subreddit's self-promo rules before posting

---

## 🚀 Launch Posts

### Pre-Launch Verification (MANDATORY)
- [ ] Demo GIF recorded (30-60s, clean terminal)
- [ ] README.md polished (badges render, commands work)
- [ ] Tested on clean macOS (Node 18, 20, 22)
- [ ] Tested on clean Windows 10/11 (PowerShell, CMD, Git Bash)
- [ ] Tested on clean Ubuntu (WSL2 or VM)
- [ ] All 10 templates generate without errors
- [ ] Generated projects run (`npm install && npm run dev` or equivalent)
- [ ] Docker builds succeed for templates with Dockerfile
- [ ] GitHub Actions CI passes
- [ ] npm package published
- [ ] Social preview image deployed
- [ ] Demo GIF hosted publicly

### Show HN
- [ ] Submit with title from `marketing/launch/show-hn.md`
- [ ] Post first comment immediately (copy from file)
- [ ] Engage with comments for 24-48 hours

### Product Hunt
- [ ] Submit with tagline, description, maker comment from `marketing/launch/product-hunt.md`
- [ ] Upload gallery screenshots (4-5 images)
- [ ] Select topics: Developer Tools, Command Line, Open Source, Productivity, Boilerplate
- [ ] Respond to comments all day

---

## 🇮🇳 India/Kerala Angle

### Social Posts
- [ ] Post LinkedIn article from `marketing/india/linkedin-post.md`
- [ ] Post X thread from `marketing/india/x-thread.md` (4 tweets, thread them)
- [ ] Pin tweet 1 after posting

### Community Sharing
- [ ] Share in Kerala JS (ask admin first)
- [ ] Share in React India Discord
- [ ] Share in Python Kerala Telegram
- [ ] Share in Go Kerala/India Discord
- [ ] Share in Rust India Discord/Telegram
- [ ] Share in Laravel India Discord
- [ ] Share in Java User Group Kochi/Trivandrum
- [ ] Share in DevFolio/HackClub Kerala
- [ ] Submit to KSUM newsletter
- [ ] Tip to YourStory/Inc42/Entrackr (after traction)
- [ ] Post on Indie Hackers India
- [ ] Cross-post to Hashnode India

---

## ⭐ Awesome List Submissions

- [ ] Submit to awesome-cli-apps
- [ ] Submit to awesome-boilerplates
- [ ] Submit to awesome-nodejs
- [ ] Submit to awesome-typescript
- [ ] Submit to awesome-python
- [ ] Submit to awesome-go
- [ ] Submit to awesome-rust
- [ ] Submit to awesome-laravel
- [ ] Submit to awesome-docker
- [ ] (Optional) Submit to awesome-selfhosted

*Details and PR templates in `marketing/awesome-lists.md`*

---

## 🔍 [TO CONFIRM] Items

| Item | Status | Notes |
|------|--------|-------|
| npm package name | ❓ | Is it `setupkaro` or `@iamrooney/setupkaro`? |
| Demo GIF tool | ❓ | asciinema, vhs, terminalizer? |
| Custom domain | ❓ | Own `setupkaro.dev` or use GitHub Pages URL? |
| awesome-selfhosted | ❓ | Confirm they accept CLI dev tools |
| KSUM contact | ❓ | Current process for "Made in Kerala" features |
| Twitter handle | ❓ | Your X handle for tagging |
| LinkedIn profile | ❓ | URL for author attribution |
| Template options | ❓ | Any configurable options (e.g., `--database postgres`)? |
| Java Maven wrapper | ❓ | Committed? (Needed for `./mvnw`) |
| Rust cargo-nextest | ❓ | CI needs `cargo install cargo-nextest` documented? |
| PHP template | ❓ | Complete with CI/Docker from PR #1? |

---

## 📁 Files Created in This Session

### Repo Updates
- `package.json` — Updated description & keywords
- `social-preview.svg` — Social card SVG (1280x640)
- `social-preview.html` — Interactive HTML with PNG export
- `.github/workflows/docs.yml` — Docs deployment workflow

### Docs Site (`docs/`)
- `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`, `postcss.config.js`
- `src/app/layout.tsx`, `page.tsx`, `globals.css`
- `src/app/templates/page.tsx`, `src/app/templates/[slug]/page.tsx`
- `src/app/sitemap.ts`, `src/app/robots.ts`
- `src/lib/templates.ts`, `src/lib/templateDetails.ts`
- `src/components/Header.tsx`, `Footer.tsx`, `TemplateCard.tsx`, `TerminalBlock.tsx`, `StackPicker.tsx`, `FAQ.tsx`
- `content/templates/*.json` (10 files — one per template)
- `public/robots.txt`, `public/site.webmanifest`
- `netlify.toml`

### Marketing Assets (`marketing/`)
- `github-topics.json` — Tagline, description, 20 topics
- `awesome-lists.md` — 10 awesome lists with PR templates
- `posts/devto-*.md` — 6 dev.to articles
- `posts/reddit-*.md` — 4 Reddit posts
- `launch/show-hn.md` — Show HN title + first comment + checklist
- `launch/product-hunt.md` — PH tagline, description, maker comment
- `india/linkedin-post.md` — LinkedIn article
- `india/x-thread.md` — X/Twitter thread (4 tweets)
- `india/communities.md` — 13 communities with rules
- `CHECKLIST.md` — This file

---

## 🎉 Done!

When all boxes are checked, you'll have:
- Optimized GitHub + npm discoverability
- Live docs site with SEO
- 6 dev.to articles + 4 Reddit posts
- Show HN + Product Hunt launches
- India/Kerala community presence
- 10 awesome list submissions

**Next step:** Review files, run `cd docs && npm install && npm run build` to verify, then commit and push.