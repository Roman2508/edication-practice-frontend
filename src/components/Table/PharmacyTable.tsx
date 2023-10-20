import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'

function createData(name: string, calories: string, fat: string, carbs: number) {
  return { name, calories, fat, carbs }
}

const rows = [
  createData('Frozen yoghurt', 'Житомир', 'Чуднівська 99', 24),
  createData('Ice cream sandwich', 'Житомир', 'Небесної Сотні 10', 37),
  createData('Eclair', 'Житомир', 'Небесної Сотні 68', 24),
  createData('Cupcake', 'Житомир', 'Чуднівська 99', 67),
  createData('Gingerbread', 'Житомир', 'Велика Бердичівська 33', 49),
]

export const PharmacyTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Мережа аптек</TableCell>
            <TableCell align="left">Місто</TableCell>
            <TableCell align="left">Адреса</TableCell>
            <TableCell align="left">К-ть місць</TableCell>
            {/* <TableCell align="right">Вибрати</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              component={Link}
              to={`/pharmacy/${row.name}`}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
