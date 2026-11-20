// Template data loaded from the main repo's templates/index.json
// This file is generated at build time from the source of truth

export interface Template {
  id: string;
  name: string;
  description: string;
}

export const templates: Template[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Node.js + TypeScript with ESLint, Prettier, and Jest',
  },
  {
    id: 'react-ts',
    name: 'React + TypeScript',
    description: 'Vite + React + TS with Tailwind and React Router',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    description: 'Next.js 14 App Router with TS and Tailwind',
  },
  {
    id: 'python-fastapi',
    name: 'Python FastAPI',
    description: 'FastAPI with SQLAlchemy, pytest, Docker, and GitHub Actions',
  },
  {
    id: 'go-microservice',
    name: 'Go Microservice',
    description: 'Go with Gin, gRPC, Wire DI, testing, and Docker',
  },
  {
    id: 'rust-cli',
    name: 'Rust CLI',
    description: 'Rust CLI with clap, testing, and CI',
  },
  {
    id: 'java-spring',
    name: 'Java Spring Boot',
    description: 'Spring Boot with Maven, testing, and Docker',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    description: 'Laravel 11 with Pest, Pint, PHPStan, and Sail',
  },
  {
    id: 'php',
    name: 'PHP',
    description: 'PHP project with Composer dependencies',
  },
  {
    id: 'docker-compose',
    name: 'Docker Compose',
    description: 'Standard Postgres + Redis + Nginx stack',
  },
];

export function getTemplateById(id: string): Template | undefined {
  return templates.find((t) => t.id === id);
}

export function getAllTemplateIds(): string[] {
  return templates.map((t) => t.id);
}