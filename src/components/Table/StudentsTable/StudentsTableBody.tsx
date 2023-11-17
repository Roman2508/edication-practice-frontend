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
import { StudentsTableToolbar } from './StudentsTableToolbar'
import { printSettingsInitialData } from '../../../pages/PrintPage'
import { GetAllSelectedPracticeBaseQuery, SelectedBasesOfPracticeEntity, gql } from '../../../graphql/client'

interface IStudentsTableProps {
  printSettings: typeof printSettingsInitialData
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedStudents: SelectedBasesOfPracticeEntity[]
  setSelectedStudents: React.Dispatch<React.SetStateAction<SelectedBasesOfPracticeEntity[]>>
}

export const StudentsTableBody: React.FC<IStudentsTableProps> = ({
  setOpen,
  printSettings,
  selectedStudents,
  setSelectedStudents,
}) => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [selected, setSelected] = React.useState<readonly number[]>([])
  const [data, setData] = React.useState<GetAllSelectedPracticeBaseQuery | null>(null)
//   const [selectedStudents, setSelectedStudents] = React.useState<SelectedBasesOfPracticeEntity[]>([])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const data = await gql.GetAllSelectedPracticeBase()
        setData(data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

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

  const onClearSelected = () => {
    setSelectedStudents([])
    setSelected([])
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!data) return

    if (event.target.checked) {
      const newSelected = data.selectedBasesOfPractices.data.map((el) => Number(el.id))
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  return (
    <TableContainer component={Paper}>
      <StudentsTableToolbar
        setOpen={setOpen}
        printSettings={printSettings}
        numSelected={selected.length}
        onClearSelected={onClearSelected}
        selectedStudents={selectedStudents}
      />

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={
                  selected.length > 0 && selected.length < (!data ? 0 : data.selectedBasesOfPractices.data.length)
                }
                checked={
                  !data
                    ? undefined
                    : data.selectedBasesOfPractices.data.length > 0 &&
                      selected.length === data.selectedBasesOfPractices.data.length
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
            data && data.selectedBasesOfPractices.data.length ? (
              data.selectedBasesOfPractices.data.map((row, index) => {
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
