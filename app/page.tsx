import Link from 'next/link'
import { routes } from './routes'
import { ENVIRONMENT_ACTION_API } from '@/services/urls'

interface ActionApiJsonResponse {
  id: number
  name: string
  action_start: string
  action_end: string
  has_person_in_charge: boolean
  has_goals: boolean
  needs_carbon_footprint_calculation: boolean
  is_legal_duty: boolean
  action_type: string
}

export default async function Home () {
  const response = await fetch(ENVIRONMENT_ACTION_API, { next: { revalidate: 60 } })
  const actionList: ActionApiJsonResponse[] = await response.json()
  console.log(actionList)

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
        <h2 className='text-3xl'>Actions List</h2>
        <article className='grid grid-cols-2 my-2 gap-4'>
          {actionList.map(action => (
            <div key={action.id} className='grid grid-cols-[1fr,12rem] bg-[rgba(0,0,0,.3)] py-3 px-6 rounded'>
              <h4>Action id</h4>
              <span>{action.id}</span>
              <h4>Action name</h4>
              <span>{action.name}</span>
              <h4>Date start</h4>
              <span>{action.action_start}</span>
              <h4>Date end</h4>
              <span>{action.action_end}</span>
              <h4>Has person in charge?</h4>
              <span>{action.has_person_in_charge ? 'yes' : 'no'}</span>
              <h4>Has goals?</h4>
              <span>{action.has_goals ? 'yes' : 'no'}</span>
              <h4>Needs carbon footprint calculation?</h4>
              <span>{action.needs_carbon_footprint_calculation ? 'yes' : 'no'}</span>
              <h4>Is legal duty?</h4>
              <span>{action.is_legal_duty ? 'yes' : 'no'}</span>
              <h4>Action type</h4>
              <span>{action.action_type}</span>
            </div>
          ))}
        </article>
      </main>
    </>
  )
}
