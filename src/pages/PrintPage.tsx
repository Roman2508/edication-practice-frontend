import React from 'react'
import dayjs from 'dayjs'
import { SelectedBasesOfPracticeEntity, gql } from '../graphql/client'

import { PrintPageModal } from '../components/Modal/PrintPageModal'
import { StudentsFilter } from '../components/Filter/StudentsFilter'
import { StudentsTableBody } from '../components/Table/StudentsTable/StudentsTableBody'
// import { Modal } from '../components/Modal/Modal'

export const printSettingsInitialData = {
  termOfPractice: {
    start: '',
    end: '',
  },
  currentPracticeType: '',
  practiceDirectionNumber: 1,
  practiceDirectionYear: '2023',
  canStudentSelectPracticeBase: false,
}

const PrintPage = () => {
  const [open, setOpen] = React.useState(false)
  // const [printStep, setPrintStep] = React.useState(1)
  const [printSettings, setPrintSettings] = React.useState(printSettingsInitialData)
  const [selectedStudents, setSelectedStudents] = React.useState<SelectedBasesOfPracticeEntity[]>([])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const settings = await gql.GetSettings()

        const { startPracticeDate, endPracticeDate, currentPracticeType, canStudentSelectPracticeBase } =
          settings.setting.data.attributes

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
        alert('Error')
        console.log('Error')
      }
    }

    fetchData()
  }, [])

  const onChangePrintData = (
    e: dayjs.Dayjs | null,
    type: 'year' | 'number' | 'startDate' | 'endDate',
    value?: number
  ) => {
    if (type === 'year') {
      const practiceDirectionYear = dayjs(e).format('YYYY')
      setPrintSettings((prev) => ({ ...prev, practiceDirectionYear }))
      return
    }

    if (value && type === 'number') {
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

      <StudentsFilter />

      <StudentsTableBody
        setOpen={setOpen}
        printSettings={printSettings}
        selectedStudents={selectedStudents}
        setSelectedStudents={setSelectedStudents}
      />
    </>
  )
}

export default PrintPage
