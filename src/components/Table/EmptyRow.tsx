import Box from "@mui/material/Box"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Typography from "@mui/material/Typography"

import emptyImg from "../../assets/empty-image.png"

interface IEmptyRowProps {
  colSpan?: number
}

export const EmptyRow: React.FC<IEmptyRowProps> = ({ colSpan = 4 }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "60px 0",
          }}
        >
          <img style={{ width: "200px" }} src={emptyImg} alt="empty" />
          <Typography variant="h5">Пусто</Typography>
        </Box>
      </TableCell>
    </TableRow>
  )
}
