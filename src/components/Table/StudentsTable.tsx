import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Link } from "react-router-dom"

function createData(name: string, calories: string, fat: string, carbs: string, protein: string) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData("Прізвище Ім'я Побатькові", "209", "Подорожник", "Житомир", "Чуднівська 99"),
  createData("Прізвище Ім'я Побатькові", "209", "Подорожник", "Житомир", "Небесної Сотні 10"),
  createData("Прізвище Ім'я Побатькові", "209", "Подорожник", "Житомир", "Небесної Сотні 68"),
  createData("Прізвище Ім'я Побатькові", "209", "Подорожник", "Житомир", "Чуднівська 99"),
  createData("Прізвище Ім'я Побатькові", "209", "Подорожник", "Житомир", "Велика Бердичівська 33"),
]

export const StudentsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ПІБ</TableCell>
            <TableCell align="left">Група</TableCell>
            <TableCell align="left">Мережа аптек</TableCell>
            <TableCell align="left">Місто</TableCell>
            <TableCell align="left">Адреса</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              component={Link}
              to={`/pharmacy/${row.name}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
