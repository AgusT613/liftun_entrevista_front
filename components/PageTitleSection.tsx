import type { IPageTitleSection } from '@/types'

export default function PageTitleSection ({ children, icon }: IPageTitleSection) {
  return <h2 className='text-xl flex items-center justify-center gap-2'>{children} {icon}</h2>
}
