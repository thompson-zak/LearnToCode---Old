export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex">
            {children}
        </div>
        <div className="max-w-6xl w-full">
          <a
            href="/"
            className="float-left group rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                &lt;-
              </span>
              Home{' '}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Go back to start another lesson.
            </p>
          </a>
        </div>
    </main>
  )
}