export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">{{projectName}}</h1>
      <p className="text-gray-600 max-w-2xl text-center mb-8">
        Your Next.js 14 App Router project is ready. Built with TypeScript, Tailwind CSS, and ESLint/Prettier.
      </p>
      <div className="space-x-4">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Read Next.js Docs
        </a>
        <a
          href="https://setupkaro.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors border border-gray-300"
        >
          Learn about setupkaro
        </a>
      </div>
    </main>
  )
}