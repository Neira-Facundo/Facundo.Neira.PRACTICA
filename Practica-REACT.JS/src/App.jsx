import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Hello World!
        </h1>
        <h2 className="text-xl text-gray-700">Vite + React + TailwindCSS</h2>
      </header>

      <main className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="card text-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR.
          </p>
        </div>
      </main>

      <footer className="mt-8 text-center">
        <p className="text-gray-500">
          Click on the Vite and React logos to learn more.
        </p>
      </footer>
    </div>
  )
}

export default App
