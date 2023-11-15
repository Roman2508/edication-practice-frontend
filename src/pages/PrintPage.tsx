import React from 'react'
import { StudentsFilter } from '../components/Filter/StudentsFilter'
import { StudentsTable } from '../components/Table/StudentsTable'
import { Modal } from '../components/Modal/Modal'

const initialData = {
  termOfPractice: {
    start: '',
    end: '',
  },
  typeOfPractice: [''],
  practiceDirectionYear: 2023,
  practiceDirectionNumber: 1,
}

const PrintPage = () => {
  const [open, setOpen] = React.useState(false)
  const [printStep, setPrintStep] = React.useState(1)
  const [printSettings, setPrintSettings] = React.useState(initialData)

  return (
    <>
      <Modal open={open} setOpen={setOpen} title="Modal Title" />

      <StudentsFilter />
      <StudentsTable />
    </>
  )
}

export default PrintPage
