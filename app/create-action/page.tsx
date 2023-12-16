'use client'
import ActionSchedule from '@/components/ActionSchedule'
import Fieldset from '@/components/Fieldset'
import SubmitBtn from '@/components/SubmitBtn'
import ToggleBtn from '@/components/ToggleBtn'
import { useRouter } from 'next/navigation'
import { IoSaveOutline } from 'react-icons/io5'
import { GiReturnArrow } from 'react-icons/gi'

export default function CreateAction () {
  const router = useRouter()

  const handleSaveAction = (event: any) => {
    const formData: HTMLFormElement = event.target.form
    const data = Object.fromEntries(new FormData(formData))
    console.log(data)
    formData.reset()
  }

  const handleGoToHomePage = () => { router.push('/') }

  return (
    <main className='min-h-screen p-4 flex items-center justify-center'>
      <form className="flex flex-col gap-4 w-[425px] bg-[rgba(0,0,0,.3)] p-8 rounded-lg">
        {/* Action Name */}
        <input
        name="actionName"
        type="text"
        placeholder="Action name..."
        className="text-4xl placeholder:opacity-60 border-b pb-2 rounded"
        />
        {/* Date and Time */}
        <Fieldset
          className="grid-cols-2 gap-4"
          legend="Date and Time"
        >
          <ActionSchedule dateHtmlFor='dateStart'>Start</ActionSchedule>
          <ActionSchedule dateHtmlFor='dateEnd'>End</ActionSchedule>
        </Fieldset>
        {/* Action Options */}
        <Fieldset
          className="gap-2"
          legend='The Action...'
        >
          <div className='flex justify-between items-center'>
            <label htmlFor="hasPersonInCharge">Has a person in charge</label>
            <ToggleBtn name='hasPersonInCharge'/>
          </div>
          <div className='flex justify-between items-center'>
            <label htmlFor="hasGoals">Has goals</label>
            <ToggleBtn name='hasGoals'/>
          </div>
          <div className='flex justify-between items-center'>
            <label htmlFor="needsCarbonFootprint">Needs a carbon footprint calculation</label>
            <ToggleBtn name='needsCarbonFootprint'/>
          </div>
          <div className='flex justify-between items-center'>
            <label htmlFor="isLegalDuty">Is a legal duty</label>
            <ToggleBtn name='isLegalDuty'/>
          </div>
          <div className='flex justify-between items-center'>
            <label htmlFor="actionType">Type</label>
            <select name="actionType" defaultValue={'betterWorld'} className='bg-slate-200 text-black rounded w-40'>
              <option value="betterWorld">Better World</option>
              <option value="betterPlace">Better Place</option>
              <option value="betterCompany">Better Company</option>
              <option value="betterProfit">Better Profit</option>
            </select>
          </div>
        </Fieldset>
        {/* Send Form Buttons */}
        <div className='flex items-center gap-8 justify-center'>
          <SubmitBtn onClick={handleSaveAction} value={'Save Action'}>
            <IoSaveOutline className="text-2xl" />
          </SubmitBtn>
          <SubmitBtn onClick={handleGoToHomePage} value={'Home Page'}>
            <GiReturnArrow className="text-2xl" />
          </SubmitBtn>
        </div>
      </form>
    </main>
  )
}