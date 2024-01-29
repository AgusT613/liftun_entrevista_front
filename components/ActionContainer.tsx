// Components
import Fieldset from './Fieldset'
// React Icons
import { FaHourglassStart } from 'react-icons/fa'
import { GiFinishLine, GiFootprint } from 'react-icons/gi'
import { CiUser } from 'react-icons/ci'
import { GoGoal } from 'react-icons/go'
import { PiSealWarning } from 'react-icons/pi'
// TS Types
import { type IActionApiJsonResponse } from '@/types'

export default function ActionContainer ({ action, index }: { action: IActionApiJsonResponse, index: number }) {
  const {
    name: actionName,
    action_end: actionEnd,
    action_start: actionStart,
    action_type: actionType,
    has_goals: hasGoals,
    has_person_in_charge: hasPersonInCharge,
    is_legal_duty: isLegalDuty,
    needs_carbon_footprint_calculation: needsCarbonFootprintCalculation
  }: IActionApiJsonResponse = action

  return (
    <form className='border-blue-300 border-4 border-solid py-3 px-6 rounded-2xl flex flex-col gap-2'>
        <div>
          <h4 className='text-xl text-center text-green-300 font-medium'>{index + 1} - {actionName}</h4>
          <h4 className='text-center text-lg text-green-100'>Type: {actionType}</h4>
        </div>
        <Fieldset legend='Action Date'>
          <div className='flex items-center justify-between'>
            <h4 className='flex gap-2 items-center'>
              <FaHourglassStart className="text-lg text-blue-400" /> Start
            </h4>
            <span className='text-end text-sm tracking-wide'>{actionStart}</span>
          </div>
          <div className='flex items-center justify-between'>
            <h4 className='flex gap-2 items-center'>
              <GiFinishLine className="text-lg text-blue-400" /> End
            </h4>
            <span className='text-end text-sm tracking-wide'>{actionEnd}</span>
          </div>
        </Fieldset>
        <Fieldset legend='Options Selected' className='col-span-2'>
          {
            hasPersonInCharge &&
            <div className='flex items-center justify-between'>
              <CiUser className="text-lg text-blue-400" />
              <span className='text-end text-sm tracking-wide'>Has a person in charge</span>
            </div>
          }
          {
            hasGoals &&
            <div className='flex items-center justify-between'>
              <GoGoal className="text-lg text-blue-400" />
              <span className='text-end text-sm tracking-wide'>Has goals</span>
            </div>
          }
          {
            needsCarbonFootprintCalculation &&
            <div className='flex items-center justify-between'>
              <GiFootprint className="text-lg text-blue-400" />
              <span className='text-end text-sm tracking-wide'>Needs carbon footprint calculation</span>
            </div>
          }
          {
            isLegalDuty &&
            <div className='flex items-center justify-between'>
              <PiSealWarning className="text-lg text-blue-400" />
              <span className='text-end text-sm tracking-wide'>Is a legal duty</span>
            </div>
          }
        </Fieldset>
    </form>
  )
}
