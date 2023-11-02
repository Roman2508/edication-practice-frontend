import React from 'react'
import { AppContext } from '../App'
import { useParams, useNavigate } from 'react-router-dom'
import { Typography, Button, Skeleton } from '@mui/material'

import { getAuthData } from '../utils/getAuthData'
import { GoogleMapComponent } from '../components/GoogleMap'
import { GetFullPharmacyQuery, gql } from '../graphql/client'

export const PharmacyPage = () => {
  const { setAlert, canUserChoosePracticeBase } = React.useContext(AppContext)

  const { id } = useParams()
  const navigate = useNavigate()

  const student = getAuthData()

  const [isLoading, setIsLoading] = React.useState(false)

  const [data, setData] = React.useState<GetFullPharmacyQuery>()

  React.useEffect(() => {
    if (!id) return

    const fetchPharmacy = async () => {
      const data = await gql.GetFullPharmacy({ id })

      setData(data)
    }

    fetchPharmacy()
  }, [id])

  const onSelectBaseOfPractice = async () => {
    if (!data || !id || !student) return

    const { name, address, places } = data?.pharmacies.data[0].attributes

    if (window.confirm(`Ви дійсно хочете вибрати ${name}, що знаходиться за адресою ${address}, як базу практики?`)) {
      try {
        setIsLoading(true)
        await gql.selectBaseOfPractice({ pharmacyId: id, studentId: student.id })
        await gql.changePlacesCountInPharmacy({ id: id, places: places - 1 })
        setAlert({
          isShow: true,
          message: 'Базу практик успішно вибрано :)',
          severity: 'success',
        })
        navigate('/selected')
      } catch (err) {
        console.log(err)
        setAlert({
          isShow: true,
          message: 'Помилка',
          severity: 'error',
        })
      } finally {
        setIsLoading(false)
        setTimeout(() => {
          setAlert((prev) => ({ ...prev, isShow: false }))
        }, 3000)
      }
    }
  }

  return (
    <>
      {data ? (
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
            <Button
              variant="outlined"
              onClick={onSelectBaseOfPractice}
              disabled={!canUserChoosePracticeBase || isLoading}
            >
              Вибрати як базу практики
            </Button>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              кількість місць: {data.pharmacies.data[0].attributes.places}
            </Typography>
          </div>
        </div>
      ) : (
        <div className="test">
          <div>
            <Skeleton variant="rectangular" width={210} height={32} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" width={150} height={20} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" width={300} height={20} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Skeleton variant="rectangular" width={240} height={36} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" width={140} height={28} />
          </div>
        </div>
      )}

      {data && (
        <GoogleMapComponent
          city={data.pharmacies.data[0].attributes.city}
          address={data.pharmacies.data[0].attributes.address}
        />
      )}
    </>
  )
}
