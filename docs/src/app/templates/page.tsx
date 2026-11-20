import { Metadata } from 'next';
import { templates } from '@/lib/templates';
import { TemplateCard } from '@/components/TemplateCard';
import { StackPicker } from '@/components/StackPicker';

export const metadata: Metadata = {
  title: 'Templates',
  description: 'Browse all production-ready project templates available in setupkaro. TypeScript, React, Next.js, Python FastAPI, Go, Rust, Java Spring, Laravel, PHP, Docker Compose.',
};

export default function TemplatesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            All Templates
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {templates.length} production-ready stacks. Each includes linting, testing, CI/CD, Docker, and a generated README.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
            Quick Generate
          </h2>
          <StackPicker />
        </section>
      </div>
    </div>
  );
}