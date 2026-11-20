import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1117' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://setupkaro.dev'),
  title: {
    default: 'setupkaro — Bootstrap projects in seconds',
    template: '%s | setupkaro',
  },
  description: 'Zero-install CLI to generate production-ready project templates with linting, testing, CI/CD, Docker, and README. Templates: TypeScript, React, Next.js, Python FastAPI, Go, Rust, Java Spring, Laravel, PHP, Docker Compose. No telemetry.',
  keywords: ['cli', 'boilerplate', 'scaffolding', 'project-generator', 'starter-template', 'npx', 'typescript', 'react', 'nextjs', 'fastapi', 'go', 'rust', 'java', 'laravel', 'php', 'docker'],
  authors: [{ name: 'setupkaro', url: 'https://github.com/iamRooney/setupkaro' }],
  creator: 'iamRooney',
  publisher: 'setupkaro',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://setupkaro.dev',
    siteName: 'setupkaro',
    title: 'setupkaro — Bootstrap projects in seconds',
    description: 'Zero-install CLI to generate production-ready project templates in one command.',
    images: [
      { url: '/og-default.png', width: 1280, height: 640, alt: 'setupkaro terminal demo' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'setupkaro — Bootstrap projects in seconds',
    description: 'Zero-install CLI to generate production-ready project templates in one command.',
    images: ['/og-default.png'],
    creator: '@iamRooney',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google1d78b873b18ec12f',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}