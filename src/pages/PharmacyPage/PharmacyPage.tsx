import React from 'react'
import { AppContext } from '../../App'
import { useParams } from 'react-router-dom'
import { Typography, Button, Skeleton } from '@mui/material'

import styles from './PharmacyPage.module.css'
import { getAuthData } from '../../utils/getAuthData'
import { GoogleMapComponent } from '../../components/GoogleMap'
import { PharmacyPageModal } from '../../components/Modal/PharmacyPageModal'
import { GetFullPharmacyQuery, GetSettingsQuery, gql } from '../../graphql/client'

export const PharmacyPage = () => {
  const { canUserChoosePracticeBase, user } = React.useContext(AppContext)

  const { id } = useParams()

  const student = getAuthData()

  // const [placesCount, setPlacesCount] = React.useState(1)
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [data, setData] = React.useState<GetFullPharmacyQuery>()
  const [settings, setSettings] = React.useState<GetSettingsQuery | null>(null)
  const [canStudentsSelectPracticeBase, setCanStudentsSelectPracticeBase] = React.useState(false)

  React.useEffect(() => {
    if (!id) return

    const fetchPharmacy = async () => {
      try {
        const data = await gql.GetFullPharmacy({ id })
        // const pharmacyPlaces = await gql.GetSelectedPracticeCountById({ pharmacyId: id })

        // const allPlacesCount = data.pharmacies.data[0].attributes.places
        // const occupiedPlacesCount = pharmacyPlaces.selectedBasesOfPractices.data.length

        // setPlacesCount(allPlacesCount - occupiedPlacesCount)

        setData(data)
      } catch (err) {
        alert('Помилка')
      }
    }

    fetchPharmacy()
  }, [id])

  React.useEffect(() => {
    const fetchSettings = async () => {
      try {
        const settings = await gql.GetSettings()

        setSettings(settings)
        setCanStudentsSelectPracticeBase(settings.setting.data.attributes.canStudentSelectPracticeBase)
      } catch (error) {
        alert('Error')
      } finally {
      }
    }

    fetchSettings()
  }, [])

  return (
    <>
      <PharmacyPageModal
        pharmacyId={id}
        open={isOpenModal}
        settings={settings}
        studentId={student?.id}
        setOpen={setIsOpenModal}
        title="Терміни проходження практики"
        pharmacyData={{
          places: data?.pharmacies.data[0].attributes.places || 0 /* || placesCount  */,
          name: data?.pharmacies.data[0].attributes.name || '',
          address: data?.pharmacies.data[0].attributes.address || '',
        }}
        canStudentsSelectPracticeBase={canStudentsSelectPracticeBase}
      />

      {data ? (
        <div className={styles.wrapper}>
          <div>
            <Typography variant="h5">{data.pharmacies.data[0].attributes.name}</Typography>
            <Typography variant="h6" sx={{ lineHeight: 1.5, mt: 1 }}>
              {data.pharmacies.data[0].attributes.city}
            </Typography>
            <Typography variant="h6" sx={{ lineHeight: 1 }}>
              {data.pharmacies.data[0].attributes.address}
            </Typography>
          </div>

          <div className={styles.controls}>
            <Button
              variant="outlined"
              onClick={() => setIsOpenModal(true)}
              disabled={!canUserChoosePracticeBase || user?.access === 'owner'}
            >
              Вибрати як базу практики
            </Button>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              кількість місць: {data.pharmacies.data[0].attributes.places}
            </Typography>
          </div>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.skeletonWrapText}>
            <Skeleton variant="rectangular" width={210} height={32} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" width={150} height={20} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" width={300} height={20} />
          </div>
          <div className={styles.skeletonWrapControls}>
            <Skeleton variant="rectangular" width={240} height={36} sx={{ mb: 1 }} />
            <Skeleton variant="rectangular" width={140} height={28} />
          </div>
        </div>
      )}

      {data ? (
        <GoogleMapComponent
          city={data.pharmacies.data[0].attributes.city}
          address={data.pharmacies.data[0].attributes.address}
        />
      ) : (
        <Skeleton variant="rectangular" width={'100%'} height={350} />
      )}
    </>
  )
}
