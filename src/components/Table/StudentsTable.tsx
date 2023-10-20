import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { alpha } from '@mui/material/styles'
import { Button, Checkbox, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'

function createData(id: number, name: string, calories: string, fat: string, carbs: string, protein: string) {
  return { id, name, calories, fat, carbs, protein }
}

const rows = [
  createData(1, "Прізвище Ім'я Побатькові", '209', 'Подорожник', 'Житомир', 'Чуднівська 99'),
  createData(2, "Прізвище Ім'я Побатькові", '209', 'Подорожник', 'Житомир', 'Небесної Сотні 10'),
  createData(3, "Прізвище Ім'я Побатькові", '209', 'Подорожник', 'Житомир', 'Небесної Сотні 68'),
  createData(4, "Прізвище Ім'я Побатькові", '209', 'Подорожник', 'Житомир', 'Чуднівська 99'),
  createData(5, "Прізвище Ім'я Побатькові", '209', 'Подорожник', 'Житомир', 'Велика Бердичівська 33'),
]

function EnhancedTableToolbar(props: { numSelected: number }) {
  const { numSelected } = props

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flexGrow: '1' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} вибрано
        </Typography>
      ) : (
        <Typography sx={{ flexGrow: '1' }} variant="h6" id="tableTitle" component="div">
          Студенти
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Завантажити направлення для вибраних студентів в PDF" sx={{ whiteSpace: 'nowrap' }}>
          <Button>Завантажити направлення</Button>
        </Tooltip>
      ) : (
        <></>
      )}
    </Toolbar>
  )
}

export const StudentsTable = () => {
  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc')
  const [orderBy, setOrderBy] = React.useState<any>('calories')
  const [selected, setSelected] = React.useState<readonly number[]>([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: any) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
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

  return (
    <TableContainer component={Paper}>
      <EnhancedTableToolbar numSelected={selected.length} />

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={selected.length > 0 && selected.length < rows.length}
                checked={rows.length > 0 && selected.length === rows.length}
                onChange={handleSelectAllClick}
                inputProps={{
                  'aria-label': 'select all desserts',
                }}
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
          {rows.map((row, index) => {
            const isSelected = (id: number) => selected.indexOf(id) !== -1

            const isItemSelected = isSelected(row.id)
            const labelId = `enhanced-table-checkbox-${index}`

            return (
              <TableRow
                key={row.name}
                role="checkbox"
                sx={{ cursor: 'pointer' }}
                selected={isItemSelected}
                aria-checked={isItemSelected}
                onClick={(event) => handleClick(event, row.id)}
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
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
