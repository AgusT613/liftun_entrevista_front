'use client'
import SubmitBtn from '@/components/SubmitBtn'
import { useRouter } from 'next/navigation'
import { IoSaveOutline } from 'react-icons/io5'
import { GiReturnArrow } from 'react-icons/gi'
import ActionName from '@/components/ActionName'
import ActionDate from '@/components/ActionDate'
import ActionOptions from '@/components/ActionOptions'
import FormContainer from '@/components/FormContainer'

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
    </FormContainer>
  )
}
