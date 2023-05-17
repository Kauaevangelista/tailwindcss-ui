// eslint-disable-next-line react/prop-types
// @ts-ignore
const Container = ({ children }) => (
    <div
      className="
        bg-gray-100 dark:bg-gray-800
        text-gray-900 dark:text-gray-50
        px-2 pb-2 xl:px-6 lg:pb-4
        h-[calc(100vh_-_4rem)] lg:h-[calc(100vh_-_5rem)]"
    >
      {children}
    </div>
  )

  export default Container