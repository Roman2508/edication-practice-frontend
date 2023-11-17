import React from 'react'
import * as XLSX from 'xlsx'
import { alpha } from '@mui/material/styles'
import { Button, Toolbar, Typography } from '@mui/material'
import { SelectedBasesOfPracticeEntity } from '../../../graphql/__generated__'
import { printSettingsInitialData } from '../../../pages/PrintPage'
import { getPracticeTerm } from '../../../utils/GetPracticeTerm'

interface IStudentsTableToolbarProsp {
  numSelected: number
  printSettings: typeof printSettingsInitialData
  selectedStudents: SelectedBasesOfPracticeEntity[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const StudentsTableToolbar: React.FC<IStudentsTableToolbarProsp> = ({
  setOpen,
  numSelected,
  printSettings,
  selectedStudents,
}) => {
  const exportFile = () => {
    // template:
    // ['ПІБ']: '',
    // ['Номер групи']: '',
    // ['Номер телефону']: '',
    // ['Вид практики']: '',
    // ['Терміни проходження практики']: '',
    // ['Назва аптки']: '',
    // ['Адреса']: '',

    const data = selectedStudents.map((el) => {
      const { name: studentName, middleName, group, phone } = el.attributes.student.data.attributes
      const { address, city, name: pharmacyName } = el.attributes.pharmacy.data.attributes

      const { start, end } = getPracticeTerm(
        printSettings.canStudentSelectPracticeBase,
        el.attributes.startPractiseTerm,
        el.attributes.endPractiseTerm,
        printSettings.termOfPractice.start,
        printSettings.termOfPractice.end
      )

      return {
        ['ПІБ']: `${studentName} ${middleName}`,
        ['Номер групи']: group.data[0]?.attributes.name || '',
        ['Номер телефону']: phone,
        ['Вид практики']: printSettings.currentPracticeType,
        ['Терміни проходження практики']: `З ${start[2]}.${start[1]}.${start[0]} По ${end[2]}.${end[1]}.${end[0]}`,
        ['Назва аптки']: pharmacyName,
        ['Адреса']: `${city} ${address}`,
      }
    })

    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(data)

    XLSX.utils.book_append_sheet(wb, ws, 'Лист 1')
    XLSX.writeFile(wb, 'data.xlsx')
  }

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
          <Button onClick={exportFile} sx={{ mr: 2 }}>
            Завантажити додаток до наказу
          </Button>
          <Button onClick={() => setOpen(true)}>Завантажити направлення</Button>
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
