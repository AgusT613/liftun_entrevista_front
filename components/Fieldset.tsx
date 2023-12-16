export default function Fieldset ({ children, legend, className, icon }: {
  children: React.ReactNode
  legend: string
  className?: string
  icon: React.ReactElement
}) {
  return (
    <fieldset className={` rounded-md px-6 py-2 grid bg-[rgba(0,0,0,.3)] ${className}`}>
        <legend className="text-green-400 px-2 py-1 bg-black rounded opacity-80 flex items-center gap-2">{icon}{legend}</legend>
        {children}
    </fieldset>
  )
}
