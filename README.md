# setupkaro

A CLI tool and platform for instantly bootstrapping developer projects with sensible defaults, templates, and configurations.

## Problem

Every developer wastes hours setting up new projects. You download a boilerplate, spend 2 hours fixing imports, configuring linters, adding CI, writing a README, and by the time you're ready to code — you've lost the flow.

## Solution

`setupkaro` generates complete, production-ready project templates in one command. Choose a template, answer a few questions, and get a fully-structured project that's ready to run.

```bash
# Initialize a new TypeScript project with CI, linting, and testing
setupkaro init my-app --template typescript

# Initialize a Python FastAPI project with Docker and GitHub Actions
setupkaro init . --python-fastapi

# Initialize a Go microservice with modules and testing
setupkaro init my-service --go-microservice
```

## Quick Start

```bash
# Install globally
npm i -g setupkaro

# Or using npx
npx setupkaro init my-project --template react-ts

# See available templates
setupkaro list
```

## Features

| Feature | Description |
|---------|-------------|
| **One-command init** | Generate full projects from templates |
| **Multi-language** | TypeScript, Python, Go, Rust, Java, and more |
| **CI/CD included** | GitHub Actions, GitLab CI, Azure Pipelines |
| **Linting & formatting** | Pre-configured for your stack |
| **Testing setup** | Boilerplate tests included |
| **Docker ready** | Dockerfile and docker-compose included |
| **README generated** | Project documentation auto-generated |
| **Template marketplace** | Browse and share community templates |

## Roadmap (Coming Soon)

- [ ] Template marketplace — publish and discover community templates
- [ ] Team accounts — shared templates across organizations
- [ ] AI-assisted template generation — describe your app, get a custom template
- [ ] Cloud deployment — one-click deploy to Vercel, Netlify, Railway
- [ ] Template versioning — update templates without breaking existing projects

## Monetization (Optional)

If you're building this for income, consider:

| Tier | Features |
|------|----------|
| **Free** | 3 templates, personal use, community marketplace access |
| **Pro** | Unlimited templates, private team templates, AI-assisted generation, priority support |
| **Team** | Team collaboration, SSO, audit logs, template analytics |
| **Enterprise** | On-premise deployment, custom compliance, dedicated support |

## Installation

```bash
# Using npm
npm i -g setupkaro

# Using brew (macOS)
brew tap setupkaro/brew
brew install setupkaro

# Using cargo (Rust)
cargo install setupkaro

# Or download binary from releases
```

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