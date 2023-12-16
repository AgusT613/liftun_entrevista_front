export default function ToggleBtn ({ name }: {
  name: string
}) {
  return (
      <input
        type="checkbox"
        className="w-8 h-6"
        defaultValue={'true'}
        name={name}
      />
  )
}
