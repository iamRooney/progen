// Template detail data loader
// In production, these would be imported from content/templates/*.json
// For now, we define them inline to avoid build-time file system access

import type { Template } from './templates';

export interface TemplateDetail {
  slug: string;
  name: string;
  description: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  includes: string[];
  command: string;
  folderStructure: string[];
  faq: { q: string; a: string }[];
}

// Import all template details (will be bundled at build time)
import typescriptDetail from '@/content/templates/typescript.json';
import reactTsDetail from '@/content/templates/react-ts.json';
import nextjsDetail from '@/content/templates/nextjs.json';
import pythonFastapiDetail from '@/content/templates/python-fastapi.json';
import goMicroserviceDetail from '@/content/templates/go-microservice.json';
import rustCliDetail from '@/content/templates/rust-cli.json';
import javaSpringDetail from '@/content/templates/java-spring.json';
import laravelDetail from '@/content/templates/laravel.json';
import phpDetail from '@/content/templates/php.json';
import dockerComposeDetail from '@/content/templates/docker-compose.json';

const detailMap: Record<string, TemplateDetail> = {
  'typescript': typescriptDetail as TemplateDetail,
  'react-ts': reactTsDetail as TemplateDetail,
  'nextjs': nextjsDetail as TemplateDetail,
  'python-fastapi': pythonFastapiDetail as TemplateDetail,
  'go-microservice': goMicroserviceDetail as TemplateDetail,
  'rust-cli': rustCliDetail as TemplateDetail,
  'java-spring': javaSpringDetail as TemplateDetail,
  'laravel': laravelDetail as TemplateDetail,
  'php': phpDetail as TemplateDetail,
  'docker-compose': dockerComposeDetail as TemplateDetail,
};

export function getTemplateDetail(slug: string): TemplateDetail | undefined {
  return detailMap[slug];
}

export function getAllTemplateDetails(): TemplateDetail[] {
  return Object.values(detailMap);
}

export function getTemplateDetailById(id: string): TemplateDetail | undefined {
  return detailMap[id];
}