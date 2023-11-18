import React from "react"
import dayjs from "dayjs"
import {
  GetAllSelectedPracticeBaseQuery,
  SelectedBasesOfPracticeEntity,
  gql,
} from "../graphql/client"

import { PrintPageModal } from "../components/Modal/PrintPageModal"
import { StudentsFilter } from "../components/Filter/StudentsFilter"
import { StudentsTableBody } from "../components/Table/StudentsTable/StudentsTableBody"

export const printSettingsInitialData = {
  termOfPractice: {
    start: "",
    end: "",
  },
  currentPracticeType: "",
  practiceDirectionNumber: 1,
  practiceDirectionYear: "2023",
  canStudentSelectPracticeBase: false,
}

const PrintPage = () => {
  const [open, setOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [filter, setFilter] = React.useState({
    fieldName: "studentName",
    fieldLabel: "ПІБ",
    value: "",
  })
  const [printSettings, setPrintSettings] = React.useState(printSettingsInitialData)
  const [students, setStudents] = React.useState<GetAllSelectedPracticeBaseQuery | null>(null)
  const [selectedStudents, setSelectedStudents] = React.useState<SelectedBasesOfPracticeEntity[]>(
    []
  )

  const fetchStudents = async () => {
    try {
      setIsLoading(true)

      if (filter.value) {
        // @ts-ignore
        const data = await gql.GetAllSelectedPracticeBase({
          [filter.fieldName]: filter.value,
        })
        setStudents(data)
      } else {
        const data = await gql.GetAllSelectedPracticeBase()
        setStudents(data)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const settings = await gql.GetSettings()

        const {
          startPracticeDate,
          endPracticeDate,
          currentPracticeType,
          canStudentSelectPracticeBase,
        } = settings.setting.data.attributes

        setPrintSettings((prev) => ({
          ...prev,
          termOfPractice: {
            start: startPracticeDate,
            end: endPracticeDate,
          },
          canStudentSelectPracticeBase,
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

    // if (type === 'startDate') {
    //   const date = dayjs(e).format('YYYY-MM-DD')
    //   setPrintSettings((prev) => ({
    //     ...prev,
    //     termOfPractice: { ...prev.termOfPractice, start: date },
    //   }))
    //   return
    // }

    // if (type === 'endDate') {
    //   const date = dayjs(e).format('YYYY-MM-DD')
    //   setPrintSettings((prev) => ({
    //     ...prev,
    //     termOfPractice: { ...prev.termOfPractice, end: date },
    //   }))
    // }
  }

  return (
    <>
      <PrintPageModal
        open={open}
        setOpen={setOpen}
        title="Номер направлення"
        printSettings={printSettings}
        selectedStudents={selectedStudents}
        onChangePrintData={onChangePrintData}
      />

      <StudentsFilter
        filter={filter}
        setFilter={setFilter}
        isLoading={isLoading}
        fetchStudents={fetchStudents}
      />

      <StudentsTableBody
        filter={filter}
        setOpen={setOpen}
        students={students}
        isLoading={isLoading}
        fetchStudents={fetchStudents}
        printSettings={printSettings}
        selectedStudents={selectedStudents}
        setSelectedStudents={setSelectedStudents}
      />
    </>
  )
}

export default PrintPage
