import { Typography, Button } from "@mui/material"
import { Map } from "../components/Map/Map"
import { useParams } from "react-router-dom"
import React from "react"
import { GetFullPharmacyQuery, gql } from "../graphql/client"

export const PharmacyPage = () => {
  const { id } = useParams()

  const [data, setData] = React.useState<GetFullPharmacyQuery>()

  const initialData = {
    name: "ПОДОРОЖНИК мережа аптек",
    sity: "м. Житомир",
    street: "вул. Небесної Сотні 10",
    places: 1,
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.937136466153!2d28.669215376545797!3d50.25575837155564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c653a11c54cf7%3A0x933a8145184dc0bc!2sApteka%20%22Podorozhnyk%22!5e0!3m2!1sru!2sua!4v1697738977245!5m2!1sru!2sua",
  }

  React.useEffect(() => {
    if (!id) return

    const fetchPharmacy = async () => {
      const data = await gql.GetFullPharmacy({ id })

      setData(data)
    }

    fetchPharmacy()
  }, [id])

  if (!data) return <div>Loading...</div>

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <img src="../podoroznik.png" height={50} />
      </div>

      <div className="test">
        <div>
          <Typography variant="h5">{data.pharmacies.data[0].attributes.name}</Typography>
          <Typography variant="h6" sx={{ lineHeight: 1, mt: 1 }}>
            {data.pharmacies.data[0].attributes.city}
          </Typography>
          <Typography variant="h6" sx={{ lineHeight: 1 }}>
            {data.pharmacies.data[0].attributes.address}
          </Typography>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <Button variant="outlined">Вибрати як базу практики</Button>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            кількість місць: {data.pharmacies.data[0].attributes.places}
          </Typography>
        </div>
      </div>

      <Map
        city={data.pharmacies.data[0].attributes.city}
        address={data.pharmacies.data[0].attributes.address}
      />

      {/* <iframe
        width="100%"
        height="350"
        src="https://api.maptiler.com/maps/basic-v2/?key=uohqLsKpSSGOHhrvKaKq#1.0/0.00000/0.00000"
        style={{ border: 0 }}
      ></iframe> */}

      {/* <iframe
        src={initialData.location}
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
      /> */}
    </>
  )
}
