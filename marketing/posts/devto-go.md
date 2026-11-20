---
title: "Go microservice boilerplate: Gin, gRPC, Wire, testify, Docker — generated, not copied"
description: "Generate a production-ready Go microservice with Gin HTTP, gRPC, Wire DI, testify, golangci-lint, GitHub Actions, and Docker in one command."
tags: ["go", "microservices", "grpc", "docker", "wire", "testing", "gin", "github-actions"]
cover_image: "https://raw.githubusercontent.com/iamRooney/setupkaro/main/social-preview.png"
canonical_url: "https://github.com/iamRooney/setupkaro"
published: false
---

Go projects accumulate setup debt fast. You need: DI (Wire), gRPC + HTTP (Gin), proper config, testify suites, golangci-lint, multi-stage Docker, CI that runs `go test ./...` with race detector.

```bash
npx setupkaro init my-svc --template go-microservice
```

## Output

- **Gin HTTP + gRPC (grpc-gateway)** — single server, dual protocol
- **Google Wire** for compile-time dependency injection
- **testify + testify/suite + mockery** for mocks
- **golangci-lint** (comprehensive config: errcheck, govet, staticcheck, gosec, revive, etc.)
- **Dockerfile (scratch/distroless)** + docker-compose
- **GitHub Actions:** vet, lint, test -race, build, docker
- **go.mod** with pinned deps
- **Generated README** with make targets

Wire generates `wire_gen.go` at build — no runtime reflection. The template shows a clean layered structure: `handler` → `service` → `repository`.

## Try it

```bash
npx setupkaro init go-demo --template go-microservice
cd go-demo
go mod tidy
go run ./cmd/server
```

## Project structure

```
cmd/
  server/
    main.go
    wire.go
    wire_gen.go
internal/
  handler/      # HTTP/gRPC handlers
  service/      # Business logic
  repository/   # Data access
  config/       # Configuration
proto/
  service.proto
tests/
  integration_test.go
.github/workflows/ci.yml
Dockerfile
docker-compose.yml
go.mod
go.sum
Makefile
golangci-lint.yml
README.md
```

## Why Wire?

Wire generates code at compile time — no runtime reflection, no startup overhead, and compile-time safety. You declare providers in `wire.go`, run `go generate`, and get a `wire_gen.go` that wires everything up.

## CI runs with race detector

```yaml
- name: Test
  run: go test -race -count=1 ./...
```

This catches data races that only show up under concurrent execution.

## Repo

https://github.com/iamRooney/setupkaro (MIT license)

---

*Made in Kerala, for the world 🇮🇳*