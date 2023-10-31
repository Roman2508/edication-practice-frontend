import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Link } from "react-router-dom"
import { PharmacyEntity } from "../../graphql/__generated__"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"

function createData(name: string, calories: string, fat: string, carbs: number) {
  return { name, calories, fat, carbs }
}

const rows = [
  createData("Frozen yoghurt", "Житомир", "Чуднівська 99", 24),
  createData("Ice cream sandwich", "Житомир", "Небесної Сотні 10", 37),
  createData("Eclair", "Житомир", "Небесної Сотні 68", 24),
  createData("Cupcake", "Житомир", "Чуднівська 99", 67),
  createData("Gingerbread", "Житомир", "Велика Бердичівська 33", 49),
]

interface IPharmacyTableProps {
  pharmacies?: PharmacyEntity[]
}

export const PharmacyTable: React.FC<IPharmacyTableProps> = ({ pharmacies }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Мережа аптек</TableCell>
            <TableCell align="left">Місто</TableCell>
            <TableCell align="left">Адреса</TableCell>
            <TableCell align="left">К-ть місць</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {pharmacies && pharmacies.length ? (
            pharmacies.map((row: PharmacyEntity) => (
              <TableRow key={row.id} component={Link} to={`/pharmacy/${row.id}`}>
                <TableCell component="th" scope="row">
                  {row.attributes.name}
                </TableCell>
                <TableCell align="left">{row.attributes.city}</TableCell>
                <TableCell align="left">{row.attributes.address}</TableCell>
                <TableCell align="left">{row.attributes.places}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>
                <Box sx={{ display: "flex", justifyContent: "center", padding: "60px 0" }}>
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
