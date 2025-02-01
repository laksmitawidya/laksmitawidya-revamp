export const GradientTitle = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="flex items-center gap-x-2">
      <h1 className="text-3xl font-extrabold leading-9  text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {title}
      </h1>
      <h1 className="bg-gradient-to-r from-pink-500 to-sky-600  bg-clip-text bg-no-repeat py-4 font-script text-3xl font-extrabold leading-9 text-transparent sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {subtitle}
      </h1>
    </div>
  )
}
