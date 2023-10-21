import React from "react"
import { PharmacyEntity, gql } from "../graphql/client"
import { PharmacyTable } from "../components/Table/PharmacyTable"
import { PharmacyFilter } from "../components/Filter/PharmacyFilter"
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
import { PdfDocument } from "../components/PDFDocument"

export const Home = () => {
  const [pharmacies, setPharmacies] = React.useState<PharmacyEntity>()

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await gql.GetAllPharmacies()
      // @ts-ignore
      setPharmacies(res.pharmacies.data)
    }

    fetchData()
  }, [])

  return (
    <div className="pdf-iframe">
      <PDFViewer>
        <PdfDocument />
      </PDFViewer>

      <PDFDownloadLink document={<PdfDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink>

      <PharmacyFilter />
      <PharmacyTable pharmacies={pharmacies} />
    </div>
  )
}
