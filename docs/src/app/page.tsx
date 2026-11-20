import Link from 'next/link';
import { templates } from '@/lib/templates';
import { TemplateCard } from '@/components/TemplateCard';
import { StackPicker } from '@/components/StackPicker';
import { TerminalBlock } from '@/components/TerminalBlock';

export default function HomePage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Zero-install • No telemetry • Multi-language
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-6 text-balance">
              Bootstrap projects in{' '}
              <span className="text-primary-600 dark:text-primary-400">seconds</span>, not hours
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Run one command. Get a complete project with linting, testing, CI/CD, Docker, and docs — all configured and working.
            </p>

            <TerminalBlock command="npx setupkaro init my-app --template react-ts" />

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/templates"
                className="w-full sm:w-auto px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors text-center"
              >
                Browse Templates
              </Link>
              <Link
                href="https://github.com/iamRooney/setupkaro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500 dark:text-gray-500">
              Made in Kerala, for the world 🇮🇳 • MIT License
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
            Quick Start
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Pick a template</h3>
              <p className="text-gray-600 dark:text-gray-400">Run <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">npx setupkaro list</code> to see all options</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Run init</h3>
              <p className="text-gray-600 dark:text-gray-400"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">npx setupkaro init my-app --template react-ts</code></p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Start coding</h3>
              <p className="text-gray-600 dark:text-gray-400"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">cd my-app && npm install && npm run dev</code></p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
            What You Get in Every Template
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔧', title: 'Linting & Formatting', desc: 'ESLint, Prettier, Ruff, Pint, PHPStan, golangci-lint, clippy, Spotless' },
              { icon: '🧪', title: 'Testing Ready', desc: 'Jest, Vitest, pytest, testify, cargo-nextest, JUnit, Pest with starter tests' },
              { icon: '🔁', title: 'CI/CD Included', desc: 'GitHub Actions for typecheck, lint, test, build, and Docker' },
              { icon: '🐳', title: 'Docker Ready', desc: 'Multi-stage Dockerfile and docker-compose.yml out of the box' },
              { icon: '📝', title: 'Generated README', desc: 'Your new project ships with its own documentation' },
              { icon: '🔒', title: 'Private by Design', desc: 'No telemetry, no analytics, no account required' },
              { icon: '⚡', title: 'Zero Install', desc: 'Runs instantly with npx, nothing to set up first' },
              { icon: '🧩', title: 'Extensible', desc: 'Build your own templates with a simple JSON schema' },
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                <span className="text-3xl mb-3 block">{feature.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="py-20 bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Available Templates
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {templates.length} production-ready stacks, one command each
              </p>
            </div>
            <Link
              href="/templates"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.slice(0, 6).map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              See all {templates.length} templates
            </Link>
          </div>
        </div>
      </section>

      {/* Stack Picker */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
            Try It Now
          </h2>
          <div className="max-w-2xl mx-auto">
            <StackPicker />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to save hours on every project?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Join developers who use setupkaro to skip boilerplate and start building.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TerminalBlock command="npx setupkaro init my-app --template react-ts" />
            <Link
              href="https://github.com/iamRooney/setupkaro"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
            >
              Star on GitHub →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}