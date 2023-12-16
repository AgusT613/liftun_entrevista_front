import Link from 'next/link'
import { routes } from './routes'

export default function Home () {
  return (
    <>
      <header className='bg-[rgba(0,0,0,.4)] p-3 flex justify-end'>
        <nav className='flex gap-8'>
          {routes.map((route, index) => (
            <li key={index} className='flex items-center gap-2 hover:bg-black transition-colors py-1 px-2 rounded'>
              <Link href={route.url}>{route.section}</Link>
              {route.icon}
            </li>
          ))}
        </nav>
      </header>
      <main className='min-h-[calc(100vh-56px)] p-4'>
        <h2>Home Page</h2>
      </main>
    </>
  )
}
