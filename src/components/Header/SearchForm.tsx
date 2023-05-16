import { FiSearch } from "react-icons/fi";

const SearchForm = () => (
  <form className="min-w-0 md:w-full flex-grow flex" onSubmit={(ev) => ev.preventDefault()}>
    <input
      className="
        min-w-0 w-full p-2 rounded-l-lg border-2 border-transparent
        bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50
        focus:outline-none focus:border-emerald-400 transition-colors hover:border-emerald-400 duration-700"
      type="text"
      placeholder="Pesquisar..."
    />
    <button
      className="
        min-w-0 py-2 px-4 rounded-r-lg border-2 border-transparent
        bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50
        focus:outline-none focus:border-emerald-400 focus:text-emerald-400
        hover:border-emerald-400 hover:text-emerald-400 transition-colors duration-700"
    >
      <FiSearch />
    </button>
  </form>
)

export default SearchForm