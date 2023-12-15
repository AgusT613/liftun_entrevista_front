import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { routes } from './routes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Liftun',
  description: 'We love the world!'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className='bg-[rgba(0,0,0,.4)] p-4 flex justify-end'>
          <nav className='flex gap-8'>
            {routes.map((route, index) => (
              <Link key={index} href={route.url}>{route.section}</Link>
            ))}
          </nav>
        </header>
        <main className='min-h-[calc(100vh-56px)] p-4 flex items-center justify-center'>
          {children}
        </main>
      </body>
    </html>
  )
}
