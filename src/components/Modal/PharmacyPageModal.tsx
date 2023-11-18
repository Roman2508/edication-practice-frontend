import React from "react"
import dayjs from "dayjs"
import { Divider } from "@mui/material"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"

import DatePicker from "../DatePicker"
import { AppContext } from "../../App"
import { ModalLayout } from "./ModalLayout"
import { useNavigate } from "react-router-dom"
import { GetSettingsQuery, gql } from "../../graphql/client"
import { getPracticeTerm } from "../../utils/getPracticeTerm"

interface IModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  settings: GetSettingsQuery | null
  pharmacyData: { places: number; name: string; address: string }

  title?: string
  studentId?: string
  pharmacyId?: string
  canStudentsSelectPracticeBase?: boolean
}

export const PharmacyPageModal: React.FC<IModalProps> = ({
  open,
  setOpen,
  settings,
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

      const { start, end } = getPracticeTerm(
        canStudentsSelectPracticeBase,
        practiceDates.start,
        practiceDates.end,
        settings?.setting.data.attributes.startPracticeDate || "",
        settings?.setting.data.attributes.endPracticeDate || ""
      )

      await gql.selectBaseOfPractice({
        pharmacyId,
        studentId,
        startDate: `${start[0]}-${start[1]}-${start[2]}`,
        endDate: `${end[0]}-${end[1]}-${end[2]}`,
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
            <Button onClick={step1Confirm} disabled={isLoading}>
              {isLoading ? "Завантаження..." : "Так"}
            </Button>
          </>
        ) : (
          <Button autoFocus onClick={onSelectBaseOfPractice} disabled={isLoading}>
            {isLoading ? "Завантаження..." : "Зберегти"}
          </Button>
        )}
      </DialogActions>
    </ModalLayout>
  )
}
