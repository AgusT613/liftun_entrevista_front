export default function Header ({ children }: { children: React.ReactNode }) {
  return <header className='bg-[rgba(0,0,0,.4)] py-2 px-4 flex items-center justify-between'>
            {children}
        </header>
}
