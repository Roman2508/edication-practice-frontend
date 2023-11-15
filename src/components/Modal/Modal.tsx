import React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import DatePicker from "../DatePicker"
import { Divider } from "@mui/material"
import dayjs from "dayjs"

interface IModalProps {
  open: boolean
  // startPracticeDate: string
  // endPracticeDate: string
  onChangePrintData: (
    e: dayjs.Dayjs | null,
    type: "year" | "number" | "startDate" | "endDate",
    value?: number
  ) => void
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
  step?: number
}

export const Modal: React.FC<IModalProps> = ({
  open,
  setOpen,
  // startPracticeDate,
  // endPracticeDate,
  onChangePrintData,
  title = "",
  step = 2,
}) => {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open dialog
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="dialog-title"
        open={open}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              minWidth: "300px",
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
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers={!!title}>
          {/* {step === 1 && (
            <>
              <Typography>Початок практики:</Typography>
              <DatePicker
                value={startPracticeDate}
                onChange={(e) => onChangePrintData(e, "startDate")}
              />

              <Divider sx={{ margin: "16px 0" }} />

              <Typography>Кінець практики:</Typography>
              <DatePicker
                value={endPracticeDate}
                onChange={(e) => onChangePrintData(e, "endDate")}
              />
            </>
          )} */}

          {step === 2 && (
            <>
              <Typography>Поточний рік:</Typography>
              <DatePicker type="year" onChange={(e) => onChangePrintData(e, "year")} />

              <Divider sx={{ margin: "16px 0" }} />

              <TextField
                label="Почати друк з №:"
                type="number"
                onChange={(e) => onChangePrintData(null, "number", Number(e.target.value))}
                fullWidth
              />
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
