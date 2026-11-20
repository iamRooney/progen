import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              setupkaro
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xs">
              Bootstrap projects in seconds, not hours. Zero-install CLI for production-ready templates.
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
              Made in Kerala, for the world. 🇮🇳
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Templates</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/templates/typescript" className="hover:text-primary-600 dark:hover:text-primary-400">TypeScript</Link></li>
              <li><Link href="/templates/react-ts" className="hover:text-primary-600 dark:hover:text-primary-400">React + TypeScript</Link></li>
              <li><Link href="/templates/nextjs" className="hover:text-primary-600 dark:hover:text-primary-400">Next.js</Link></li>
              <li><Link href="/templates/python-fastapi" className="hover:text-primary-600 dark:hover:text-primary-400">Python FastAPI</Link></li>
              <li><Link href="/templates/go-microservice" className="hover:text-primary-600 dark:hover:text-primary-400">Go Microservice</Link></li>
              <li><Link href="/templates/rust-cli" className="hover:text-primary-600 dark:hover:text-primary-400">Rust CLI</Link></li>
              <li><Link href="/templates/java-spring" className="hover:text-primary-600 dark:hover:text-primary-400">Java Spring Boot</Link></li>
              <li><Link href="/templates/laravel" className="hover:text-primary-600 dark:hover:text-primary-400">Laravel</Link></li>
              <li><Link href="/templates/php" className="hover:text-primary-600 dark:hover:text-primary-400">PHP</Link></li>
              <li><Link href="/templates/docker-compose" className="hover:text-primary-600 dark:hover:text-primary-400">Docker Compose</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="https://github.com/iamRooney/setupkaro" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link href="https://github.com/iamRooney/setupkaro/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Contributing Guide
                </Link>
              </li>
              <li>
                <Link href="https://github.com/iamRooney/setupkaro/issues" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Report Issues
                </Link>
              </li>
              <li>
                <Link href="https://github.com/iamRooney/setupkaro/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400">
                  MIT License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-500">
            © {year} setupkaro. Released under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}