export default function Fieldset ({ children, legend, className }: {
  children: React.ReactNode
  legend: string
  className?: string
}) {
  return (
    <fieldset className={`border-solid border rounded-lg px-6 py-2 grid bg-[rgba(0,0,0,.3)] ${className}`}>
        <legend className="px-2 bg-black rounded-lg opacity-80">{legend}</legend>
        {children}
    </fieldset>
  )
}
