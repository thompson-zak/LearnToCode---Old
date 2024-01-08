export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <p>This is a custom layout for tutorials only</p>
        {children}
    </div>
  )
}