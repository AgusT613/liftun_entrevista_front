export default function ActionSchedule ({ children, dateHtmlFor }: {
  children: React.ReactNode
  dateHtmlFor: string
}) {
  return (
      <>
        <label htmlFor={dateHtmlFor}>{children}</label>
        <input
        name={dateHtmlFor}
        type="date"
        className="bg-slate-200 text-black px-2 rounded w-40"
        />
      </>
  )
}
