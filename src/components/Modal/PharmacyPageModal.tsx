import React from "react"
import dayjs from "dayjs"
import { Divider } from "@mui/material"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"

import DatePicker from "../DatePicker"
import { AppContext } from "../../App"
import { gql } from "../../graphql/client"
import { ModalLayout } from "./ModalLayout"
import { useNavigate } from "react-router-dom"

interface IModalProps {
  open: boolean
  pharmacyData: { places: number; name: string; address: string }
  setOpen: React.Dispatch<React.SetStateAction<boolean>>

  title?: string
  studentId?: string
  pharmacyId?: string
  canStudentsSelectPracticeBase?: boolean
}

export const PharmacyPageModal: React.FC<IModalProps> = ({
  open,
  setOpen,
  studentId,
  pharmacyId,
  pharmacyData,

  title = "",
  canStudentsSelectPracticeBase = false,
}) => {
  const navigate = useNavigate()

  const { setAlert } = React.useContext(AppContext)

  const [step, setStep] = React.useState(1)
  const [isLoading, setIsLoading] = React.useState(false)
  const [practiceDates, setPracticeDates] = React.useState({ start: "", end: "" })

  const handleChangePracticeDates = (e: dayjs.Dayjs | null, type: "start" | "end") => {
    const selectedDate = dayjs(e).format("YYYY-MM-DD")
    setPracticeDates((prev) => ({ ...prev, [type]: selectedDate }))
  }

  const onClose = () => {
    setOpen(false)

    setTimeout(() => {
      setStep(1)
    }, 100)
  }

  const onSelectBaseOfPractice = async () => {
    if (
      !pharmacyData.name ||
      !pharmacyData.address ||
      !pharmacyData.places ||
      !studentId ||
      !pharmacyId
    ) {
      alert("Error")
      return
    }

    try {
      setIsLoading(true)

      await gql.selectBaseOfPractice({
        pharmacyId,
        studentId,
        startDate: practiceDates.start,
        endDate: practiceDates.end,
      })
      await gql.changePlacesCountInPharmacy({ id: pharmacyId, places: pharmacyData.places - 1 })

      setAlert({
        isShow: true,
        message: "Базу практики успішно вибрано :)",
        severity: "success",
      })
      navigate("/selected")
    } catch (err) {
      console.log(err)
      setAlert({
        isShow: true,
        message: "Помилка",
        severity: "error",
      })
    } finally {
      setIsLoading(false)
      setTimeout(() => {
        setAlert((prev) => ({ ...prev, isShow: false }))
      }, 3000)
    }
  }

  const step1Confirm = () => {
    if (canStudentsSelectPracticeBase) {
      setStep(2)
    } else {
      onSelectBaseOfPractice()
    }
  }

  return (
    <ModalLayout
      open={open}
      setOpen={setOpen}
      title={step === 1 ? "Підтвердження" : title}
      onClose={onClose}
    >
      <DialogContent dividers={!!title}>
        {step === 1 && (
          <Typography>{`Ви дійсно хочете вибрати ${pharmacyData.name}, що знаходиться за адресою ${pharmacyData.address}, як базу практики?`}</Typography>
        )}

        {step === 2 && canStudentsSelectPracticeBase && (
          <>
            <Typography>Початок практики:</Typography>
            <DatePicker
              value={practiceDates.start}
              onChange={(e) => handleChangePracticeDates(e, "start")}
            />

            <Divider sx={{ margin: "16px 0" }} />

            <Typography>Кінець практики:</Typography>
            <DatePicker
              value={practiceDates.end}
              onChange={(e) => handleChangePracticeDates(e, "end")}
            />
          </>
        )}
      </DialogContent>

      <DialogActions>
        {step === 1 ? (
          <>
            <Button autoFocus color="error" onClick={() => setOpen(false)}>
              Ні
            </Button>
            <Button onClick={step1Confirm}>Так</Button>
          </>
        ) : (
          <Button autoFocus onClick={onSelectBaseOfPractice}>
            Зберегти
          </Button>
        )}
      </DialogActions>
    </ModalLayout>
  )
}
