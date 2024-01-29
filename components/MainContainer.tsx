export default function MainContainer ({ children }: { children: React.ReactNode }) {
  return <main className='min-h-[calc(100vh-56px)] p-4'>{children}</main>
}
