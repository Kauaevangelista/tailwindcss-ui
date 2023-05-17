// eslint-disable-next-line react/prop-types
// @ts-ignore
const WriteButton = ({ children }) => (
    <button
      className="
        duration-700
        bg-primary-300 hover:bg-primary-400 
        dark:bg-primary-500 dark:hover:bg-primary-600 
        transition-colors py-2 w-full rounded-lg"
    >
      {children}
    </button>
  )
  
  export default WriteButton