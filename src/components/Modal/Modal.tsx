import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import DatePicker from '../DatePicker'
import MenuItem from '@mui/material/MenuItem'
import { Divider } from '@mui/material'

interface IModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
  step?: number
}

const practiceTypes = [
  {
    value: 'propedeutic',
    label: 'Пропедевтична',
  },
  {
    value: 'pre-diploma',
    label: 'Переддипломна',
  },
  {
    value: 'technological',
    label: 'Технологічна',
  },
  {
    value: 'introductory',
    label: 'Ознайомлювальна',
  },
  {
    value: 'medicine technology practice',
    label: 'Практика з технології ліків',
  },
]

export const Modal: React.FC<IModalProps> = ({ open, setOpen, title = '', step = 3 }) => {
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="dialog-title"
        open={open}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              minWidth: '300px',
            },
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="dialog-title">
          {title}
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers={!!title}>
          {step === 1 && (
            <>
              <Typography>Початок практики:</Typography>
              <DatePicker />

              <Divider sx={{ margin: '16px 0' }} />

              <Typography>Кінець практики:</Typography>
              <DatePicker />
            </>
          )}

          {step === 2 && (
            <>
              <TextField select label="Тип практики:" defaultValue="propedeutic" fullWidth>
                {practiceTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </>
          )}

          {step === 3 && (
            <>
              <Typography>Поточний рік:</Typography>
              <DatePicker type="year" />

              <Divider sx={{ margin: '16px 0' }} />

              <TextField label="Почати друк з №:" type="number" fullWidth />
            </>
          )}
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Зберегти зміни
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
