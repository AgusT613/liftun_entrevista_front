import Link from 'next/link'
import { routes } from './routes'

export default function Home () {
  return (
    <>
      <header className='bg-[rgba(0,0,0,.4)] p-4 flex justify-end'>
        <nav className='flex gap-8'>
          {routes.map((route, index) => (
            <Link key={index} href={route.url}>{route.section}</Link>
          ))}
        </nav>
      </header>
      <main className='min-h-[calc(100vh-60px)] p-4'>
        <h2>Home Page</h2>
      </main>
    </>
  )
}
