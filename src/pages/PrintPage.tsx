import React from "react"
import { StudentsFilter } from "../components/Filter/StudentsFilter"
import { StudentsTable } from "../components/Table/StudentsTable"

const PrintPage = () => {
  return (
    <>
      <StudentsFilter />
      <StudentsTable />
    </>
  )
}

export default PrintPage
