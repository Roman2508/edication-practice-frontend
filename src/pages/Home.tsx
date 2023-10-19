import { PharmacyTable } from "../components/Table/PharmacyTable"
import { PharmacyFilter } from "../components/Filter/PharmacyFilter"

export const Home = () => {
  return (
    <>
      <PharmacyFilter />
      <PharmacyTable />
    </>
  )
}
