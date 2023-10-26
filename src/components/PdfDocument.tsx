import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
import TimesNewRomanNormal from '../assets/times-new-roman.ttf'
import TimesNewRomanBold from '../assets/Times New Roman Bold.ttf'
import logo from '../assets/logo-from-pdf.jpg'
// import logo from "../assets/logo.png"

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
    // flexDirection: "row",
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  section: {
    flexDirection: 'row',
  },
  // col2: {
  //   fontFamily: "Times-New-Roman",
  //   flexGrow: 1,
  //   fontSize: 10,
  //   padding: 10,
  //   maxWidth: 280,
  //   textAlign: "center",
  // },
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
  text: {
    // margin: 10,
    // padding: 28,
    // flexGrow: 1,
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
    width: 80,
  },
})

// Create Document Component
export const PdfDocument = () => {
  return (
    <Document style={styles.wrapper} language="ua">
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Житомирський базовий фармацевтичний фаховий коледж</Text>

        <View style={styles.section}>
          <View style={styles.leftCol}>
            <View>
              <Text>Міністерство охорони здоров’я України Житомирський базовий фармацевтичний фаховий коледж</Text>
            </View>
            <View>
              <Image src={logo} style={styles.logo} />
              <View>
                <Text>10005</Text>
                <Text>м. Житомир</Text>
                <Text>вул. Чуднівська, 99</Text>
                <Text>тел./факс (0412) 24-25-45</Text>
              </View>
            </View>
          </View>
          <Text style={styles.rightCol}>КЕРІВНИКУ</Text>
        </View>
      </Page>
    </Document>
  )
}
