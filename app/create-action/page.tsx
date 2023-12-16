'use client'
import SubmitBtn from '@/components/SubmitBtn'
import { useRouter } from 'next/navigation'
import { IoSaveOutline } from 'react-icons/io5'
import { GiReturnArrow } from 'react-icons/gi'
import ActionName from '@/components/ActionName'
import ActionDate from '@/components/ActionDate'
import ActionOptions from '@/components/ActionOptions'
import FormContainer from '@/components/FormContainer'
import createAction from '@/services/createAction'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function CreateAction () {
  const router = useRouter()

  const handleSaveAction = (event: any) => {
    const formData: HTMLFormElement = event.target.form
    const data = Object.fromEntries(new FormData(formData))

    const body = {
      name: data.actionName,
      action_start: data.dateStart,
      action_end: data.dateEnd,
      has_person_in_charge: data.hasPersonInCharge === 'true',
      has_goals: data.hasGoals === 'true',
      needs_carbon_footprint_calculation: data.needsCarbonFootprint === 'true',
      is_legal_duty: data.isLegalDuty === 'true',
      action_type: data.actionType
    }

    createAction(body)
      .then(response => {
        console.log(response)
        toast.success('The action was created succesfully!', {
          position: 'top-right',
          autoClose: 2500,
          theme: 'dark'
        })
        router.refresh()
      })
      .catch(error => {
        console.error(error)
        toast.error('An error has ocurred', {
          position: 'top-right',
          autoClose: 2500,
          theme: 'dark'
        })
      })
    formData.reset()
  }

  const handleGoToHomePage = () => { router.push('/') }

  return (
    <FormContainer>
      <ActionName />
      <ActionDate />
      <ActionOptions />
      <div className='flex items-center gap-8 justify-center'>
        <SubmitBtn onClick={handleSaveAction} value={'Save Action'}>
          <IoSaveOutline className="text-2xl" />
        </SubmitBtn>
        <SubmitBtn onClick={handleGoToHomePage} value={'Home Page'}>
          <GiReturnArrow className="text-2xl" />
        </SubmitBtn>
      </div>
      <ToastContainer />
    </FormContainer>
  )
}
