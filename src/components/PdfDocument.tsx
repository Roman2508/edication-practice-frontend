import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'

import logo from '../assets/logo-from-pdf.jpg'
import { getPracticeTerm } from '../utils/getPracticeTerm'
import { printSettingsInitialData } from '../pages/PrintPage'
import TimesNewRomanNormal from '../assets/times-new-roman.ttf'
import TimesNewRomanBold from '../assets/Times New Roman Bold.ttf'
import { SelectedBasesOfPracticeEntity } from '../graphql/__generated__'

Font.register({
  family: 'Times-New-Roman-Normal',
  src: TimesNewRomanNormal,
  fontWeight: 'normal',
})
Font.register({
  family: 'Times-New-Roman-Bold',
  src: TimesNewRomanBold,
  fontWeight: 'bold',
})

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 40,
  },
  section: {
    flexDirection: 'row',
  },

  leftCol: {
    fontFamily: 'Times-New-Roman-Normal',
    flexGrow: 1,
    fontSize: 10,
    padding: 10,
    maxWidth: 220,
    textAlign: 'center',
  },
  rightCol: {
    fontFamily: 'Times-New-Roman-Bold',
    flexGrow: 1,
    fontSize: 14,
    padding: 10,
    maxWidth: '100%',
    textAlign: 'center',
  },
  collageName: {
    marginLeft: 10,
  },
  text: {
    fontFamily: 'Times-New-Roman-Normal',
    fontSize: 14,
    maxWidth: 200,
    textAlign: 'center',
  },
  wrapper: {
    // paddingTop: 35,
    // paddingBottom: 65,
    // paddingHorizontal: 35,
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    fontFamily: 'Times-New-Roman-Normal',
  },
  logo: {
    width: 60,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 15,
  },
  address: {
    marginTop: 10,
  },
  mainTitle: {
    textAlign: 'center',
    fontFamily: 'Times-New-Roman-Bold',
    fontSize: 14,
    marginTop: 20,
  },
  subTitle: {
    textAlign: 'center',
    fontFamily: 'Times-New-Roman-Normal',
    fontSize: 10,
  },
  defaultText: {
    fontFamily: 'Times-New-Roman-Normal',
    textAlign: 'justify',
    fontSize: 14,
    lineHeight: 1.5,
    marginTop: 10,
  },
  practiceName: {
    fontFamily: 'Times-New-Roman-Bold',
    paddingLeft: 5,
    textDecoration: 'underline',
  },
  practiceTerm: {
    marginLeft: 150,
  },
  footer: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    fontFamily: 'Times-New-Roman-Normal',
  },
})

interface IPdfDocumentProps {
  selectedStudents: SelectedBasesOfPracticeEntity[]
  printSettings: typeof printSettingsInitialData
}

// Create Document Component
export const PdfDocument: React.FC<IPdfDocumentProps> = ({ selectedStudents, printSettings }) => {
  return (
    <Document style={styles.wrapper} language="ua">
      {selectedStudents.map((student, index) => {
        const {
          contractNumber,
          number,
          name: pharmacyName,
          legalName,
          headOfPractice,
        } = student.attributes.pharmacy.data.attributes

        const { group, name, middleName } = student.attributes.student.data.attributes

        const groupData = {
          name: group.data[0] ? group.data[0].attributes.name : '_______',
          courseNumber: group.data[0] ? group.data[0].attributes.courseNumber : '_______',
        }

        const { start, end } = getPracticeTerm(
          printSettings.canStudentSelectPracticeBase,
          student.attributes.startPractiseTerm,
          student.attributes.endPractiseTerm,
          printSettings.termOfPractice.start,
          printSettings.termOfPractice.end
        )

        const text = `аптеки ${number ? `№ ${number}` : ''} «${pharmacyName}» ${
          legalName && legalName !== '-' ? legalName : ''
        }`

        return (
          <Page size="A4" style={styles.page} key={student.id}>
            <Text style={styles.header}>Житомирський базовий фармацевтичний фаховий коледж</Text>

            <View style={styles.section}>
              <View style={styles.leftCol}>
                <View style={styles.collageName}>
                  <Text>Міністерство охорони здоров’я України Житомирський базовий фармацевтичний фаховий коледж</Text>
                </View>
                <View style={styles.section}>
                  <Image src={logo} style={styles.logo} />
                  <View style={styles.address}>
                    <Text>10005</Text>
                    <Text>м. Житомир</Text>
                    <Text>вул. Чуднівська, 99</Text>
                    <Text>тел./факс (0412) 24-25-45</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rightCol}>
                <Text>КЕРІВНИКУ</Text>
                <Text
                  style={{
                    fontFamily: 'Times-New-Roman-Normal',
                    borderBottom: '1px solid #000',
                    textDecoration: 'underline',
                    textAlign: 'justify',
                    maxWidth: 300,
                    fontSize: 14,
                  }}
                >
                  {text}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Times-New-Roman-Normal',
                    borderBottom: '1px solid #000',
                    textAlign: 'left',
                    maxWidth: 300,
                    fontSize: 14,
                  }}
                >
                  {headOfPractice ? headOfPractice : ''}
                </Text>
                <Text>__________________________________________</Text>
                <Text>__________________________________________</Text>
                <Text>__________________________________________</Text>
              </View>
            </View>

            <Text style={styles.mainTitle}>
              НАПРАВЛЕННЯ НА ПРАКТИКУ {printSettings.practiceDirectionYear} №{' '}
              {printSettings.practiceDirectionNumber + index}
            </Text>
            <Text style={styles.subTitle}>/є підставою для зарахування на практику/</Text>
            <Text style={styles.defaultText}>
              Згідно із договором № {contractNumber} направляємо на практику здобувачку(а) освіти{' '}
              {groupData.courseNumber} курсу, {groupData.name} групи, яка(ий) навчається на ОПП «Фармація» спеціальності
              226 Фармація, промислова фармація ОПС фаховий молодший бакалавр.
            </Text>

            <View style={{ ...styles.section, marginTop: 10 }}>
              <Text style={{ ...styles.defaultText, marginLeft: 50 }}>Назва практики:</Text>
              <Text style={{ ...styles.defaultText, ...styles.practiceName }}>{printSettings.currentPracticeType}</Text>
            </View>

            <Text style={{ ...styles.defaultText, marginLeft: 50 }}>
              Термін практики з {start[2]}.{start[1]}.{start[0]} року
              {/* Термін практики з «___» ______________ 20____ року */}
            </Text>
            <Text style={{ ...styles.defaultText, marginLeft: 150 }}>
              по {end[2]}.{end[1]}.{end[0]} року
              {/* по «___» ______________ 20____ року */}
            </Text>

            <Text style={{ ...styles.defaultText, marginTop: 20 }}>
              Методичний керівник практики ____________________________________________
            </Text>
            <Text style={{ ...styles.subTitle, marginLeft: 220 }}>( прізвище, ім’я, по батькові)</Text>

            <Text style={{ ...styles.mainTitle, marginTop: 40 }}>ПРІЗВИЩА, ІМЕНА ТА ПО БАТЬКОВІ ЗДОБУВАЧІВ ОСВІТИ</Text>
            <Text
              style={{
                ...styles.defaultText,
                borderBottom: '1px solid #000',
                marginTop: '10px',
                lineHeight: 1,
              }}
            >
              {name} {middleName}
            </Text>
            <Text>____________________________________________________</Text>
            <Text>____________________________________________________</Text>
            <Text>____________________________________________________</Text>
            <Text>____________________________________________________</Text>

            <Text style={{ ...styles.defaultText, marginTop: 40 }}>
              Завідувач практики (навчальної, виробничої) ___________ Наталія КОСЯЧЕНКО
            </Text>

            <Text style={{ ...styles.footer, marginTop: 80 }}>м. Житомир</Text>
          </Page>
        )
      })}
    </Document>
  )
}

/* 
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Житомирський базовий фармацевтичний фаховий коледж</Text>

        <View style={styles.section}>
          <View style={styles.leftCol}>
            <View style={styles.collageName}>
              <Text>
                Міністерство охорони здоров’я України Житомирський базовий фармацевтичний фаховий
                коледж
              </Text>
            </View>
            <View style={styles.section}>
              <Image src={logo} style={styles.logo} />
              <View style={styles.address}>
                <Text>10005</Text>
                <Text>м. Житомир</Text>
                <Text>вул. Чуднівська, 99</Text>
                <Text>тел./факс (0412) 24-25-45</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightCol}>
            <Text>КЕРІВНИКУ</Text>
            <Text>__________________________________________</Text>
            <Text>__________________________________________</Text>
            <Text>__________________________________________</Text>
            <Text>__________________________________________</Text>
            <Text>__________________________________________</Text>
          </View>
        </View>

        <Text style={styles.mainTitle}>НАПРАВЛЕННЯ НА ПРАКТИКУ № ______</Text>
        <Text style={styles.subTitle}>/є підставою для зарахування на практику/</Text>
        <Text style={styles.defaultText}>
          Згідно із ______________________________________________________________ направляємо на
          практику здобувачку(а) освіти ________ курсу, _________ групи, яка(ий) навчається на ОПП
          «Фармація» спеціальності 226 Фармація, промислова фармація ОПС фаховий молодший бакалавр.
        </Text>

        <View style={{ ...styles.section, marginTop: 10 }}>
          <Text style={{ ...styles.defaultText, marginLeft: 50 }}>Назва практики:</Text>
          <Text style={{ ...styles.defaultText, ...styles.practiceName }}>
            пропедевтична практика
          </Text>
        </View>

        <Text style={{ ...styles.defaultText, marginLeft: 50 }}>
          Термін практики з «___» ______________ 20____ року
        </Text>
        <Text style={{ ...styles.defaultText, marginLeft: 150 }}>
          по «___» ______________ 20____ року
        </Text>

        <Text style={{ ...styles.defaultText, marginTop: 20 }}>
          Методичний керівник практики ____________________________________________
        </Text>
        <Text style={{ ...styles.subTitle, marginLeft: 220 }}>( прізвище, ім’я, по батькові)</Text>

        <Text style={{ ...styles.mainTitle, marginTop: 40 }}>
          ПРІЗВИЩА, ІМЕНА ТА ПО БАТЬКОВІ ЗДОБУВАЧІВ ОСВІТИ
        </Text>
        <Text>____________________________________________________</Text>
        <Text>____________________________________________________</Text>
        <Text>____________________________________________________</Text>
        <Text>____________________________________________________</Text>
        <Text>____________________________________________________</Text>

        <Text style={{ ...styles.defaultText, marginTop: 40 }}>
          Завідувач практики (навчальної, виробничої) ___________ Наталія КОСЯЧЕНКО
        </Text>

        <Text style={{ ...styles.footer, marginTop: 80 }}>м. Житомир</Text>
      </Page>
*/
