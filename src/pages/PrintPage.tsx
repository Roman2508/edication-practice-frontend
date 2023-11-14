import React from "react"
import { StudentsFilter } from "../components/Filter/StudentsFilter"
import { StudentsTable } from "../components/Table/StudentsTable"
import { Modal } from "../components/Modal/Modal"

const PrintPage = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Modal open={open} setOpen={setOpen} title="Modal Title" />

      <StudentsFilter />
      <StudentsTable />
    </>
  )
}

export default PrintPage
