import Link from 'next/link'
import { routes } from './routes'
import { ENVIRONMENT_ACTION_API } from '@/services/urls'
import { RiPlantFill } from 'react-icons/ri'
import Fieldset from '@/components/Fieldset'
import { FaHourglassStart } from 'react-icons/fa'
import { GiFinishLine, GiFootprint } from 'react-icons/gi'
import { CiUser } from 'react-icons/ci'
import { GoGoal } from 'react-icons/go'
import { PiSealWarning } from 'react-icons/pi'

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

  return (
    <>
      <header className='bg-[rgba(0,0,0,.4)] py-2 px-4 flex items-center justify-between'>
        <h2 className='text-xl flex items-center justify-center gap-2'>
          My Actions
          <RiPlantFill className="text-2xl"/>
        </h2>
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
        <article className='grid grid-cols-4 gap-4'>
          {actionList.map((action, index) => (
            <form key={action.id} className='border-blue-300 border-4 border-solid py-3 px-6 rounded-2xl flex flex-col gap-2'>
              <div>
                <h4 className='text-xl text-center text-green-300 font-medium'>{index + 1} - {action.name}</h4>
                <h4 className='text-center text-lg text-green-100'>Type: {action.action_type}</h4>
              </div>
              <Fieldset legend='Action Date'>
                <div className='flex items-center justify-between'>
                  <h4 className='flex gap-2 items-center'>
                    <FaHourglassStart className="text-lg text-blue-400" /> Start
                  </h4>
                  <span className='text-end text-sm tracking-wide'>{action.action_start}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <h4 className='flex gap-2 items-center'>
                    <GiFinishLine className="text-lg text-blue-400" /> End
                  </h4>
                  <span className='text-end text-sm tracking-wide'>{action.action_end}</span>
                </div>
              </Fieldset>
              <Fieldset legend='Options Selected' className='col-span-2'>
                {
                  action.has_person_in_charge &&
                  <div className='flex items-center justify-between'>
                    <CiUser className="text-lg text-blue-400" />
                    <span className='text-end text-sm tracking-wide'>Has a person in charge</span>
                  </div>
                }
                {
                  action.has_goals &&
                  <div className='flex items-center justify-between'>
                    <GoGoal className="text-lg text-blue-400" />
                    <span className='text-end text-sm tracking-wide'>Has goals</span>
                  </div>
                }
                {
                  action.needs_carbon_footprint_calculation &&
                  <div className='flex items-center justify-between'>
                    <GiFootprint className="text-lg text-blue-400" />
                    <span className='text-end text-sm tracking-wide'>Needs carbon footprint calculation</span>
                  </div>
                }
                {
                  action.is_legal_duty &&
                  <div className='flex items-center justify-between'>
                    <PiSealWarning className="text-lg text-blue-400" />
                    <span className='text-end text-sm tracking-wide'>Is a legal duty</span>
                  </div>
                }
              </Fieldset>
            </form>
          ))}
        </article>
      </main>
    </>
  )
}
