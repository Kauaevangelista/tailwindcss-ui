import { useState } from "react"
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <div className="h-screen bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 grid place-content-center">
      <h1 className="text-3xl text-center">Ready to start with Tailwind!</h1>
      <button
        className="
          w-fit mx-auto my-8 px-4 py-2 rounded-lg
          border-transparent duration-700 hover:border-cyan-500 border-[1px]
          transition-colors"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
    </>
  )
}

export default App