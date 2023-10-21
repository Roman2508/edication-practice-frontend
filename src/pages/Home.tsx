import { PharmacyTable } from "../components/Table/PharmacyTable"
import { PharmacyFilter } from "../components/Filter/PharmacyFilter"
import React from "react"
import { PharmacyEntity, gql } from "../graphql/client"

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
    <>
      <PharmacyFilter />
      <PharmacyTable pharmacies={pharmacies} />
    </>
  )
}
