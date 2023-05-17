import { FiX } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
// @ts-ignore
const EmailCloseButton = ({ onClick }) => (
  <button
    className="
    absolute top-2 right-2 px-2 pb-1 rounded
    duration-500
    bg-red-300 hover:bg-red-400
    dark:bg-red-500 dark:hover:bg-red-600
    transition-colors"
    onClick={onClick}
  >
    <FiX className="inline sm:mr-1 mb-[1px]" />
    <span className="hidden sm:inline">Fechar</span>
  </button>
)

export default EmailCloseButton