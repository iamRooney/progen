---
title: "Spring Boot 3 starter with Maven, JUnit 5, Testcontainers, Spotless, Docker — generated"
description: "Generate a production-ready Spring Boot 3 project with Java 21, Maven, JUnit 5, Testcontainers, Spotless, Checkstyle, GitHub Actions, and Docker in one command."
tags: ["java", "spring-boot", "maven", "testcontainers", "docker", "ci-cd", "spotless", "junit"]
cover_image: "https://raw.githubusercontent.com/iamRooney/setupkaro/main/social-preview.png"
canonical_url: "https://github.com/iamRooney/setupkaro"
published: false
---

Spring Initializr gives you a skeleton. You still spend hours adding: Testcontainers for integration tests, Spotless for formatting, Checkstyle/PMD, Docker multi-stage, GitHub Actions with Maven cache, structured logging.

```bash
npx setupkaro init my-app --template java-spring
```

## Generates

- **Spring Boot 3.2 + Java 21 + Maven Wrapper**
- **JUnit 5 + AssertJ + Testcontainers** (Postgres for integration tests)
- **Spotless (Google Java Format) + Checkstyle + PMD**
- **Spring Boot 3 virtual threads (preview) + structured logging**
- **GitHub Actions:** fmt, lint, test (with Testcontainers), build, docker
- **Multi-stage Dockerfile** (Eclipse Temurin JRE 21, non-root) + docker-compose
- **Maven properties** for dependency versions + dependency management
- **Generated README** with profiles and Maven commands

Uses Spring Boot 3's virtual threads (preview) and structured logging out of the box.

## Try it

```bash
npx setupkaro init spring-demo --template java-spring
cd spring-demo
./mvnw test
```

## Project structure

```
src/
  main/
    java/com/setupkaro/
    resources/
      application.yml
      application-docker.yml
  test/
    java/com/setupkaro/
.github/workflows/ci.yml
Dockerfile
docker-compose.yml
pom.xml
mvnw
mvnw.cmd
.mvn/wrapper/maven-wrapper.properties
checkstyle.xml
pmd-rules.xml
spotless.plugin.xml
README.md
```

## Why Testcontainers?

Real Postgres in tests = confidence. No H2 quirks, no mocking the database layer. The template spins up Postgres in CI for integration tests automatically.

## Maven Wrapper committed

The `mvnw`/`mvnw.cmd` and `.mvn/wrapper/` are committed so the project builds anywhere without Maven installed.

## Repo

https://github.com/iamRooney/setupkaro (MIT license)

---

*Made in Kerala, for the world 🇮🇳*