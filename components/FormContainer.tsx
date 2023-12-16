export default function FormContainer ({ children }: {
  children: React.ReactNode
}) {
  return (
    <main className='min-h-screen p-4 flex items-center justify-center'>
      <form className="flex flex-col gap-4 w-[475px] bg-[rgba(0,0,0,.3)] p-8 rounded-lg">
        {children}
      </form>
    </main>
  )
}
