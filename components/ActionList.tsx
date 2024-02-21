export default function ActionListContainer ({ children }: { children: React.ReactNode }) {
  return <article className='grid grid-cols-[repeat(auto-fit,max(300px))] justify-center gap-4'>{children}</article>
}
