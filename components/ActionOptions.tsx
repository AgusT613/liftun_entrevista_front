import { GrActions } from 'react-icons/gr'
import Fieldset from './Fieldset'
import { CiUser } from 'react-icons/ci'
import ToggleBtn from './ToggleBtn'
import { GoGoal } from 'react-icons/go'
import { GiFootprint } from 'react-icons/gi'
import { PiSealWarning } from 'react-icons/pi'
import { TbSelector } from 'react-icons/tb'

export default function ActionOptions () {
  return (
    <Fieldset
        className="gap-2"
        legend='The Action...'
        icon={<GrActions className="text-lg" />}
    >
        <div className='flex justify-between items-center gap-4'>
            <CiUser className="text-lg text-blue-400" />
            <label htmlFor="hasPersonInCharge" className='flex-1'>Has a person in charge</label>
            <ToggleBtn name='hasPersonInCharge'/>
        </div>
        <div className='flex justify-between items-center gap-4'>
            <GoGoal className="text-lg text-blue-400" />
            <label htmlFor="hasGoals" className='flex-1'>Has goals</label>
            <ToggleBtn name='hasGoals'/>
        </div>
        <div className='flex justify-between items-center gap-4'>
            <GiFootprint className="text-lg text-blue-400" />
            <label htmlFor="needsCarbonFootprint" className='flex-1'>Needs a carbon footprint calculation</label>
            <ToggleBtn name='needsCarbonFootprint'/>
        </div>
        <div className='flex justify-between items-center gap-4'>
            <PiSealWarning className="text-lg text-blue-400" />
            <label htmlFor="isLegalDuty" className='flex-1'>Is a legal duty</label>
            <ToggleBtn name='isLegalDuty'/>
        </div>
        <div className='flex justify-between items-center gap-4'>
            <TbSelector className="text-lg text-blue-400" />
            <label htmlFor="actionType" className='flex-1'>Type</label>
            <select name="actionType" defaultValue={'betterWorld'} className='bg-slate-200 text-black rounded w-40'>
                <option value="betterWorld">Better World</option>
                <option value="betterPlace">Better Place</option>
                <option value="betterCompany">Better Company</option>
                <option value="betterProfit">Better Profit</option>
            </select>
        </div>
    </Fieldset>
  )
}
