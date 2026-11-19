import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">{{projectName}}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

function Home() {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to {{projectName}}!</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Your React + TypeScript project is ready. Built with Vite, Tailwind CSS, React Router, and ESLint/Prettier.
      </p>
      <div className="mt-8 space-x-4">
        <Link to="/about" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Learn More
        </Link>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Project</h2>
      <div className="prose text-gray-600">
        <p>This project was bootstrapped with <strong>setupkaro</strong> — a CLI tool for instantly scaffolding developer projects.</p>
        <h3>Stack:</h3>
        <ul>
          <li>⚡ <strong>Vite</strong> - Lightning fast build tool</li>
          <li>⚛️ <strong>React 18</strong> - Modern React with hooks</li>
          <li>📘 <strong>TypeScript</strong> - Type-safe JavaScript</li>
          <li>🎨 <strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
          <li>🛣️ <strong>React Router</strong> - Client-side routing</li>
          <li>🔍 <strong>ESLint + Prettier</strong> - Code quality & formatting</li>
        </ul>
      </div>
    </div>
  )
}

export default App