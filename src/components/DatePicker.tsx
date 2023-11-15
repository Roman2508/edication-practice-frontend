// import React from "react"
import dayjs from 'dayjs'
import { YearCalendar } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker as Picker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import '../utils/localizateDayJS'

interface IDatePickerProps {
  type?: 'year' | 'day'
  value?: string
  onChange: (e: any) => any
}

const DatePicker: React.FC<IDatePickerProps> = ({ type = 'day', value, onChange }) => {
  dayjs.locale('en')

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
      {type === 'day' ? (
        <Picker
          format={'DD.MM.YYYY'}
          minDate={dayjs('2023-01-01')}
          maxDate={dayjs('2023-12-31')}
          value={dayjs(value)}
          onChange={onChange}
        />
      ) : (
        <YearCalendar minDate={dayjs('2023')} maxDate={dayjs('2037')} onChange={onChange} />
      )}
    </LocalizationProvider>
  )
}

export default DatePicker
