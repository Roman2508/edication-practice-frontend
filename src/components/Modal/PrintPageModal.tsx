import React from 'react'
import dayjs from 'dayjs'
import { TextField, Button, DialogActions, DialogContent, Divider, Typography } from '@mui/material'

import DatePicker from '../DatePicker'
import { ModalLayout } from './ModalLayout'

interface IModalProps {
  open: boolean
  onChangePrintData: (e: dayjs.Dayjs | null, type: 'year' | 'number', value?: number) => void
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
}

export const PrintPageModal: React.FC<IModalProps> = ({ open, setOpen, onChangePrintData, title = '' }) => {
  return (
    <ModalLayout open={open} title={title} setOpen={setOpen}>
      <DialogContent dividers={!!title}>
        <Typography>Поточний рік:</Typography>
        <DatePicker type="year" onChange={(e) => onChangePrintData(e, 'year')} />

        <Divider sx={{ margin: '16px 0' }} />

        <TextField
          label="Почати друк з №:"
          type="number"
          onChange={(e) => onChangePrintData(null, 'number', Number(e.target.value))}
          fullWidth
        />
      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={() => setOpen(false)}>
          Зберегти
        </Button>
      </DialogActions>
    </ModalLayout>
  )
}
