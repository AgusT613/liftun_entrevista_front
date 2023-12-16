export default function Date ({ children, label, dateHtmlFor }: {
  children: React.ReactNode
  label: string
  dateHtmlFor: string
}) {
  return (
      <div className="flex items-center justify-between gap-4">
        {children}
        <label htmlFor={dateHtmlFor} className="flex-1">{label}</label>
        <input
          name={dateHtmlFor}
          type="date"
          className="bg-slate-200 text-black px-2 rounded w-40"
        />
      </div>
  )
}
