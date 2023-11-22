import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Checkbox from '@mui/material/Checkbox'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableContainer from '@mui/material/TableContainer'
import CircularProgress from '@mui/material/CircularProgress'

import { EmptyRow } from '../EmptyRow'
import styles from '../Table.module.css'
import { StudentsTableToolbar } from './StudentsTableToolbar'
import { printSettingsInitialData } from '../../../pages/PrintPage'
import { GetAllSelectedPracticeBaseQuery, SelectedBasesOfPracticeEntity } from '../../../graphql/client'

interface IStudentsTableProps {
  isLoading: boolean
  printSettings: typeof printSettingsInitialData
  students: GetAllSelectedPracticeBaseQuery | null
  selectedStudents: SelectedBasesOfPracticeEntity[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedStudents: React.Dispatch<React.SetStateAction<SelectedBasesOfPracticeEntity[]>>
}

export const StudentsTableBody: React.FC<IStudentsTableProps> = ({
  setOpen,
  students,
  isLoading,
  printSettings,
  selectedStudents,
  setSelectedStudents,
}) => {
  const [selected, setSelected] = React.useState<readonly number[]>([])

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: readonly number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }
    setSelected(newSelected)
  }

  const onSelectStudents = (item: SelectedBasesOfPracticeEntity) => {
    handleClick(Number(item.id))

    setSelectedStudents((prev) => {
      const finded = prev.find((el) => el.id === item.id)

      if (finded) {
        return prev.filter((el) => el.id !== finded.id)
      } else {
        return [...prev, item]
      }
    })
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!students) return

    if (event.target.checked) {
      const newSelected = students.selectedBasesOfPractices.data.map((el) => Number(el.id))
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
      <StudentsTableToolbar
        setOpen={setOpen}
        printSettings={printSettings}
        numSelected={selected.length}
        selectedStudents={selectedStudents}
      />

      <Table sx={{ boxShadow: 0 }} aria-label="simple table" className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={
                  selected.length > 0 &&
                  selected.length < (!students ? 0 : students.selectedBasesOfPractices.data.length)
                }
                checked={
                  !students
                    ? undefined
                    : students.selectedBasesOfPractices.data.length > 0 &&
                      selected.length === students.selectedBasesOfPractices.data.length
                }
                onChange={handleSelectAllClick}
              />
            </TableCell>
            <TableCell>ПІБ</TableCell>
            <TableCell align="left">Група</TableCell>
            <TableCell align="left">Мережа аптек</TableCell>
            <TableCell align="left">Місто</TableCell>
            <TableCell align="left">Адреса</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading ? (
            students && students.selectedBasesOfPractices.data.length ? (
              students.selectedBasesOfPractices.data.map((row, index) => {
                const isSelected = (id: number) => selected.indexOf(id) !== -1

                const isItemSelected = isSelected(Number(row.id))
                const labelId = `enhanced-table-checkbox-${index}`

                const { name, city, address } = row.attributes.pharmacy.data.attributes

                return (
                  <TableRow
                    key={row.id}
                    role="checkbox"
                    sx={{ cursor: 'pointer' }}
                    selected={isItemSelected}
                    aria-checked={isItemSelected}
                    /* @ts-ignore */
                    onClick={() => onSelectStudents(row)}
                    className="table-row"
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {`${row.attributes.student.data.attributes.name} ${row.attributes.student.data.attributes.middleName}`}
                    </TableCell>
                    <TableCell align="left">
                      {row.attributes.student.data.attributes.group.data[0]?.attributes.name}
                    </TableCell>
                    <TableCell align="left">{name}</TableCell>
                    <TableCell align="left">{city}</TableCell>
                    <TableCell align="left">{address}</TableCell>
                  </TableRow>
                )
              })
            ) : (
              <EmptyRow colSpan={6} />
            )
          ) : (
            <TableRow>
              <TableCell colSpan={6}>
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '60px 0' }}>
                  <CircularProgress />
                </Box>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
