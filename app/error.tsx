'use client'

import { useEffect } from 'react'

export default function Error ({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className='h-screen flex items-center justify-center'>
        <div className='flex flex-col gap-3'>
            <h2 className='text-3xl'>Something went wrong!</h2>
            <span className='text-xl text-center'>Message: {error.message}</span>
            <button className='bg-slate-200 text-black rounded w-max self-center px-3 py-1 hover:bg-black hover:text-slate-200 transition-colors' onClick={() => { reset() }}>Try again</button>
        </div>
    </section>
  )
}
