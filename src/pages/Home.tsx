import React from "react"
import { PharmacyEntity, gql } from "../graphql/client"
import { PharmacyTable } from "../components/Table/PharmacyTable"
import { PharmacyFilter } from "../components/Filter/PharmacyFilter"

// import { PdfDocument } from "../components/PdfDocument"
// import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"

export interface IPharmacyFilter {
  name: string
  city: string
  address: string
}

const initialFilterData = {
  name: "",
  city: "",
  address: "",
}

export const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [pharmacies, setPharmacies] = React.useState<PharmacyEntity[]>([])
  const [filter, setFilter] = React.useState<IPharmacyFilter>(initialFilterData)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await gql.GetAllPharmacies()
        // @ts-ignore
        setPharmacies(res.pharmacies.data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
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

      <PharmacyFilter
        filter={filter}
        setFilter={setFilter}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setPharmacies={setPharmacies}
      />
      <PharmacyTable pharmacies={pharmacies} isLoading={isLoading} />
    </div>
  )
}
