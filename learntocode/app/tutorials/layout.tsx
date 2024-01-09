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
    </main>
  )
}