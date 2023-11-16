import React from 'react'

import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import DialogTitle from '@mui/material/DialogTitle'

interface IModalProps {
  open: boolean
  children: string | JSX.Element | JSX.Element[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onClose?: () => void
  title?: string
}

export const ModalLayout: React.FC<IModalProps> = ({ open, setOpen, children, onClose, title = '' }) => {
  return (
    <Dialog
      onClose={onClose ? onClose : () => setOpen(false)}
      aria-labelledby="dialog-title"
      open={open}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            minWidth: '300px',
            maxWidth: '420px',
          },
        },
      }}
    >
      <DialogTitle sx={{ m: 0, padding: '16px 48px 16px 16px' }} id="dialog-title">
        {title}
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={onClose ? onClose : () => setOpen(false)}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      {children}
    </Dialog>
  )
}
