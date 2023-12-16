export default function SubmitBtn ({ children, onClick, className, value }: {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
  className?: string
  value: string
}) {
  const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault()
    onClick(event)
  }

  return (
    <div className={`p-2 bg-[rgba(0,0,0,.7)] transition-colors rounded hover:text-black hover:bg-slate-200 cursor-pointer flex items-center gap-3 ${className}`}>
      {children}
      <input
      type="submit"
      onClick={handleSubmit}
      className="cursor-pointer"
      value={value}
      />
    </div>
  )
}
