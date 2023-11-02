import React from 'react'
import { PharmacyEntity, gql } from '../graphql/client'
// import { PdfDocument } from "../components/PdfDocument"
// import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
import { PharmacyTable } from '../components/Table/PharmacyTable'
import { PharmacyFilter } from '../components/Filter/PharmacyFilter'

export interface IPharmacyFilter {
  name: string
  city: string
  address: string
}

const initialFilterData = {
  name: '',
  city: '',
  address: '',
}

export const Home = () => {
  const [pharmacies, setPharmacies] = React.useState<PharmacyEntity[]>([])

  const [filter, setFilter] = React.useState<IPharmacyFilter>(initialFilterData)

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await gql.GetAllPharmacies()
      // @ts-ignore
      setPharmacies(res.pharmacies.data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="pdf-iframe">
        {/* <PDFViewer>
        <PdfDocument />
        </PDFViewer>
        
        <PDFDownloadLink document={<PdfDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink> */}
      </div>

      <PharmacyFilter filter={filter} setFilter={setFilter} setPharmacies={setPharmacies} />
      <PharmacyTable pharmacies={pharmacies} />
    </div>
  )
}
