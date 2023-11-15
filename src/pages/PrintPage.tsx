import React from "react"
import { StudentsFilter } from "../components/Filter/StudentsFilter"
import { StudentsTable } from "../components/Table/StudentsTable"
import { Modal } from "../components/Modal/Modal"
import { gql } from "../graphql/client"
import dayjs from "dayjs"

export const printSettingsInitialData = {
  termOfPractice: {
    start: "",
    end: "",
  },
  currentPracticeType: "",
  practiceDirectionYear: "2023",
  practiceDirectionNumber: 1,
}

const PrintPage = () => {
  const [open, setOpen] = React.useState(false)
  // const [printStep, setPrintStep] = React.useState(1)
  const [printSettings, setPrintSettings] = React.useState(printSettingsInitialData)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const settings = await gql.GetSettings()

        const { startPracticeDate, endPracticeDate, currentPracticeType } =
          settings.setting.data.attributes

        setPrintSettings((prev) => ({
          ...prev,
          termOfPractice: {
            start: startPracticeDate,
            end: endPracticeDate,
          },
          currentPracticeType: currentPracticeType.data.attributes.name,
        }))
      } catch (error) {
        alert("Error")
        console.log("Error")
      }
    }

    fetchData()
  }, [])

  const onChangePrintData = (
    e: dayjs.Dayjs | null,
    type: "year" | "number" | "startDate" | "endDate",
    value?: number
  ) => {
    if (type === "year") {
      const practiceDirectionYear = dayjs(e).format("YYYY")
      setPrintSettings((prev) => ({ ...prev, practiceDirectionYear }))
      return
    }

    if (value && type === "number") {
      setPrintSettings((prev) => ({ ...prev, practiceDirectionNumber: value }))
      return
    }

    if (type === "startDate") {
      const date = dayjs(e).format("YYYY-MM-DD")
      setPrintSettings((prev) => ({
        ...prev,
        termOfPractice: { ...prev.termOfPractice, start: date },
      }))
      return
    }

    if (type === "endDate") {
      const date = dayjs(e).format("YYYY-MM-DD")
      setPrintSettings((prev) => ({
        ...prev,
        termOfPractice: { ...prev.termOfPractice, end: date },
      }))
    }
  }

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        title="Modal Title"
        // startPracticeDate={printSettings.termOfPractice.start}
        // endPracticeDate={printSettings.termOfPractice.end}
        onChangePrintData={onChangePrintData}
      />

      <StudentsFilter />
      <StudentsTable />
    </>
  )
}

export default PrintPage
