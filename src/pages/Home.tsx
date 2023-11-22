import React from 'react'
import { PharmacyEntity, gql } from '../graphql/client'
import { PharmacyTable } from '../components/Table/PharmacyTable/PharmacyTable'
import { PharmacyFilter } from '../components/Filter/PharmacyFilter'

// import { PdfDocument } from "../components/PdfDocument"
// import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"

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
  const [isLoading, setIsLoading] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [pagesCount, setPagesCount] = React.useState(1)
  const [pharmacies, setPharmacies] = React.useState<PharmacyEntity[]>([])
  const [filter, setFilter] = React.useState<IPharmacyFilter>(initialFilterData)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await gql.GetAllPharmacies({ currentPage: currentPage, pageSize: 20 })
        // @ts-ignore
        setPharmacies(res.pharmacies.data)
        setPagesCount(res.pharmacies.meta.pagination.pageCount)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [currentPage])

  return (
    <>
      {/*  <div className="pdf-iframe">
        <PDFViewer>
        <PdfDocument />
        </PDFViewer>
        
        <PDFDownloadLink document={<PdfDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink> 
      </div>*/}

      <PharmacyFilter
        filter={filter}
        setFilter={setFilter}
        isLoading={isLoading}
        pagesCount={pagesCount}
        setIsLoading={setIsLoading}
        setPharmacies={setPharmacies}
        setCurrentPage={setCurrentPage}
      />
      <PharmacyTable pharmacies={pharmacies} isLoading={isLoading} />
    </>
  )
}
