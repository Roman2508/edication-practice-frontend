import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { alpha } from '@mui/material/styles'
import { Button, Checkbox, Toolbar, Tooltip, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { GetAllSelectedPracticeBaseQuery, gql } from '../../graphql/client'
import CircularProgress from '@mui/material/CircularProgress'

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

  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const [isLoading, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState<GetAllSelectedPracticeBaseQuery | null>(null)

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
          {data && data.selectedBasesOfPractices.data.length ? (
            data.selectedBasesOfPractices.data.map((row, index) => {
              const isSelected = (id: number) => selected.indexOf(id) !== -1

              const isItemSelected = isSelected(Number(row.id))
              const labelId = `enhanced-table-checkbox-${index}`

              return (
                <TableRow
                  key={row.id}
                  role="checkbox"
                  sx={{ cursor: 'pointer' }}
                  selected={isItemSelected}
                  aria-checked={isItemSelected}
                  onClick={(event) => handleClick(event, Number(row.id))}
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
                    {row.attributes.student.data.attributes.name}
                  </TableCell>
                  <TableCell align="left">
                    {row.attributes.student.data.attributes.group.data[0].attributes.name}
                  </TableCell>
                  <TableCell align="left">{row.attributes.pharmacy.data.attributes.name}</TableCell>
                  <TableCell align="left">{row.attributes.pharmacy.data.attributes.city}</TableCell>
                  <TableCell align="left">{row.attributes.pharmacy.data.attributes.address}</TableCell>
                </TableRow>
              )
            })
          ) : (
            <TableRow>
              <TableCell colSpan={4}>
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
