import React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Typography from "@mui/material/Typography"
import DatePicker from "../DatePicker"
import { Divider } from "@mui/material"

interface IModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
}

export const Modal: React.FC<IModalProps> = ({ open, setOpen, title = "" }) => {
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
      <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="dialog-title">
          {title}
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers={!!title}>
          <Typography>Початок практики:</Typography>
          <DatePicker />

          <Divider sx={{ margin: "16px 0" }} />

          <Typography>Кінець практики:</Typography>
          <DatePicker />
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
