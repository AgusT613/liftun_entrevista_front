import { type IRoutes } from '@/types'
import Link from 'next/link'

export default function NavigationBar ({ routes }: { routes: IRoutes[] }) {
  return <nav className='flex gap-8'>
    {routes.map((route, index) => (
      <li key={index} className='flex items-center gap-2 hover:bg-black transition-colors py-1 px-2 rounded'>
        <Link href={route.url}>{route.section}</Link>
        {route.icon}
      </li>
    ))}
  </nav>
}
