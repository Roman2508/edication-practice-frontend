import React from 'react'
import { alpha } from '@mui/material/styles'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Button, Toolbar, Typography } from '@mui/material'

import { PdfDocument } from '../../PdfDocument'
import { printSettingsInitialData } from '../../../pages/PrintPage'
import { SelectedBasesOfPracticeEntity } from '../../../graphql/__generated__'

interface IStudentsTableToolbarProsp {
  numSelected: number
  selectedStudents: SelectedBasesOfPracticeEntity[]
  onClearSelected: () => void
  printSettings: typeof printSettingsInitialData
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const StudentsTableToolbar: React.FC<IStudentsTableToolbarProsp> = ({
  numSelected,
  setOpen,
  selectedStudents,
  onClearSelected,
  printSettings,
}) => {
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
        <>
          <Button onClick={() => setOpen(true)}>OPEN MODAL</Button>
          {/* <PDFDownloadLink
            document={<PdfDocument selectedStudents={selectedStudents} printSettings={printSettings} />}
            fileName="Направлення.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? <Button disabled>Завантаження...</Button> : <Button>Завантажити направлення</Button>
            }
          </PDFDownloadLink> */}
        </>
      ) : (
        <></>
      )}
    </Toolbar>
  )
}
