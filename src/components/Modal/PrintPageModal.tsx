import React from 'react'
import dayjs from 'dayjs'
import { TextField, Button, DialogActions, DialogContent, Divider, Typography } from '@mui/material'

import DatePicker from '../DatePicker'
import { ModalLayout } from './ModalLayout'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { PdfDocument } from '../PdfDocument'
import { printSettingsInitialData } from '../../pages/PrintPage'
import { SelectedBasesOfPracticeEntity } from '../../graphql/__generated__'

interface IModalProps {
  open: boolean
  title?: string
  printSettings: typeof printSettingsInitialData
  selectedStudents: SelectedBasesOfPracticeEntity[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onChangePrintData: (e: dayjs.Dayjs | null, type: 'year' | 'number', value?: number) => void
}

export const PrintPageModal: React.FC<IModalProps> = ({
  open,
  setOpen,
  title = '',
  printSettings,
  selectedStudents,
  onChangePrintData,
}) => {
  return (
    <ModalLayout open={open} title={title} setOpen={setOpen}>
      <DialogContent dividers={!!title}>
        <Typography>Поточний рік:</Typography>
        <DatePicker type="year" onChange={(e) => onChangePrintData(e, 'year')} />

        <Divider sx={{ margin: '16px 0' }} />

        <TextField
          label="Почати друк з №:"
          type="number"
          value={printSettings.practiceDirectionNumber}
          onChange={(e) => onChangePrintData(null, 'number', Number(e.target.value))}
          fullWidth
        />
      </DialogContent>

      <DialogActions>
        <PDFDownloadLink
          document={<PdfDocument selectedStudents={selectedStudents} printSettings={printSettings} />}
          fileName="Направлення.pdf"
        >
          {({ /* blob, url, */ loading /* error */ }) =>
            loading ? <Button disabled>Завантаження...</Button> : <Button>Завантажити направлення</Button>
          }
        </PDFDownloadLink>
      </DialogActions>
    </ModalLayout>
  )
}
