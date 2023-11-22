import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import CircularProgress from '@mui/material/CircularProgress'

import { EmptyRow } from '../EmptyRow'
import styles from '../Table.module.css'
import { PharmacyEntity } from '../../../graphql/__generated__'

interface IPharmacyTableProps {
  pharmacies: PharmacyEntity[]
  isLoading: boolean
}

export const PharmacyTable: React.FC<IPharmacyTableProps> = ({ pharmacies, isLoading }) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
      <Table sx={{ boxShadow: 0 }} aria-label="table" className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Мережа аптек</TableCell>
            <TableCell align="left">Місто</TableCell>
            <TableCell align="left">Адреса</TableCell>
            <TableCell align="left">К-ть місць</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {isLoading && (
            <TableRow>
              <TableCell colSpan={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '60px 0' }}>
                  <CircularProgress />
                </Box>
              </TableCell>
            </TableRow>
          )}

          {!isLoading && !pharmacies.length && <EmptyRow colSpan={6} />}

          {!isLoading &&
            !!pharmacies.length &&
            pharmacies.map((row: PharmacyEntity) => (
              <TableRow component={Link} to={`/pharmacy/${row.id}`} className="table-row">
                <TableCell component="th" scope="row">
                  {row.attributes.name}
                </TableCell>
                <TableCell align="left">{row.attributes.city}</TableCell>
                <TableCell align="left">{row.attributes.address}</TableCell>
                <TableCell align="left">{row.attributes.places}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
