import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Button } from '@mui/material'

// import { Map } from '../components/Map/Map'
import { GoogleMapComponent } from '../components/GoogleMap'
import { GetFullPharmacyQuery, gql } from '../graphql/client'

export const PharmacyPage = () => {
  const { id } = useParams()

  const [data, setData] = React.useState<GetFullPharmacyQuery>()

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
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Button variant="outlined">Вибрати як базу практики</Button>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            кількість місць: {data.pharmacies.data[0].attributes.places}
          </Typography>
        </div>
      </div>

      {/* <Map city={data.pharmacies.data[0].attributes.city} address={data.pharmacies.data[0].attributes.address} /> */}
      <GoogleMapComponent
        city={data.pharmacies.data[0].attributes.city}
        address={data.pharmacies.data[0].attributes.address}
      />
    </>
  )
}
