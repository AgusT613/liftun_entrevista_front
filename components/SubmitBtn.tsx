export default function SubmitBtn ({ onClick, className, value }: {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
  className?: string
  value: string
}) {
  const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault()
    onClick(event)
  }

  return (
        <input
        type="submit"
        onClick={handleSubmit}
        className={`p-2 bg-[rgba(0,0,0,.7)] transition-colors rounded hover:text-black hover:bg-slate-200 cursor-pointer ${className}`}
        value={value}
        />
  )
}
