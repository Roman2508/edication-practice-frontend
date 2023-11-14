// import React from "react"
import dayjs from "dayjs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker as Picker } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"

import "../utils/localizateDayJS"

export default function DatePicker() {
  dayjs.locale("en")

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
      <Picker format="DD.MM.YYYY" minDate={dayjs("2023-01-01")} maxDate={dayjs("2023-12-31")} />
    </LocalizationProvider>
  )
}
