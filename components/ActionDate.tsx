import { BsCalendarDate } from 'react-icons/bs'
import Fieldset from './Fieldset'
import Date from './Date'
import { FaHourglassStart } from 'react-icons/fa'
import { GiFinishLine } from 'react-icons/gi'

export default function ActionDate () {
  return (
    <Fieldset
        className="flex items-center gap-4"
        legend="Date..."
        icon={<BsCalendarDate className="text-lg" />}
    >
        <Date dateHtmlFor='dateStart' label='Start'>
            <FaHourglassStart className="text-lg text-blue-400" />
        </Date>
        <Date dateHtmlFor='dateEnd' label='End'>
            <GiFinishLine className="text-lg text-blue-400" />
        </Date>
    </Fieldset>
  )
}
