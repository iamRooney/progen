import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { templates, getTemplateById } from '@/lib/templates';
import { getTemplateDetail } from '@/lib/templateDetails';
import { TerminalBlock } from '@/components/TerminalBlock';
import { FAQ } from '@/components/FAQ';
import { StackPicker } from '@/components/StackPicker';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getTemplateDetail(slug);
  const template = getTemplateById(slug);

  if (!detail || !template) {
    return { title: 'Template Not Found' };
  }

  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    keywords: [detail.targetKeyword, 'setupkaro', 'boilerplate', 'starter', 'template', slug],
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
      type: 'article',
      images: [`/og-${slug}.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: detail.metaTitle,
      description: detail.metaDescription,
      images: [`/og-${slug}.png`],
    },
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: `setupkaro ${detail.name} Template`,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Cross-platform',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        description: detail.metaDescription,
        url: `https://setupkaro.dev/templates/${slug}`,
      }),
    },
  };
}

export async function generateStaticParams() {
  return templates.map(t => ({ slug: t.id }));
}

function FolderStructure({ structure }: { structure: string[] }) {
  return (
    <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
      <pre className="font-mono text-sm text-gray-300">
        {structure.map((line, i) => (
          <div key={i} className="text-green-400">{line}</div>
        ))}
      </pre>
    </div>
  );
}

function IncludesList({ includes }: { includes: string[] }) {
  return (
    <ul className="space-y-3">
      {includes.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <svg className="flex-shrink-0 w-5 h-5 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = await params;
  const detail = getTemplateDetail(slug);
  const template = getTemplateById(slug);

  if (!detail || !template) {
    notFound();
  }

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-50 dark:from-primary-900/20 to-white dark:to-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/templates"
            className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Templates
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full mb-4">
              {template.name}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-balance">
              {detail.h1}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
              {detail.description}
            </p>

            <TerminalBlock command={detail.command} />

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                Zero install
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                No telemetry
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                MIT License
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">What&apos;s Included</h2>
              <IncludesList includes={detail.includes} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Generated Folder Structure</h2>
              <FolderStructure structure={detail.folderStructure} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Commands */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">Quick Start Commands</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Generate Project</h3>
              <TerminalBlock command={detail.command} />
            </div>
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Next Steps</h3>
              <div className="space-y-2 font-mono text-sm text-green-300 bg-gray-950 rounded-lg p-4">
                <div>cd my-app</div>
                {detail.slug === 'typescript' || detail.slug === 'react-ts' || detail.slug === 'nextjs' ? (
                  <>
                    <div>npm install</div>
                    <div>npm run dev</div>
                  </>
                ) : detail.slug === 'python-fastapi' ? (
                  <>
                    <div>pip install -r requirements.txt</div>
                    <div>docker compose up -d</div>
                  </>
                ) : detail.slug === 'go-microservice' ? (
                  <>
                    <div>go mod tidy</div>
                    <div>go run ./cmd/server</div>
                  </>
                ) : detail.slug === 'rust-cli' ? (
                  <>
                    <div>cargo build</div>
                    <div>cargo run -- --help</div>
                  </>
                ) : detail.slug === 'java-spring' ? (
                  <>
                    <div>./mvnw spring-boot:run</div>
                  </>
                ) : detail.slug === 'laravel' ? (
                  <>
                    <div>./vendor/bin/sail up -d</div>
                  </>
                ) : detail.slug === 'php' ? (
                  <>
                    <div>composer install</div>
                  </>
                ) : detail.slug === 'docker-compose' ? (
                  <>
                    <div>docker compose up -d</div>
                  </>
                ) : (
                  <>
                    <div># Check README for commands</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faq={detail.faq} />

      {/* Stack Picker */}
      <section className="py-16 bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
            Generate Another Template
          </h2>
          <div className="max-w-2xl mx-auto">
            <StackPicker />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to generate your {template.name} project?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            One command. Production-ready. Start building in seconds.
          </p>
          <TerminalBlock command={detail.command} />
        </div>
      </section>
    </article>
  );
}