import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const initialCenter = {
  lat: 50.244395,
  lng: 28.643623,
}

interface IGoogleMapComponentProps {
  city: string
  address: string
}

export const GoogleMapComponent: React.FC<IGoogleMapComponentProps> = ({ city, address }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    libraries: ['places'],
  })

  const [markerCenter, setMarkerCenter] = React.useState(initialCenter)
  const [isMapFinded, setIsMapFinded] = React.useState(true)

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    //
    const request = {
      query: `${city} ${address}`,
      fields: ['name', 'geometry'],
    }

    const placeService = new google.maps.places.PlacesService(map)

    placeService.findPlaceFromQuery(request, (results, status) => {
      if (!results) {
        setIsMapFinded(false)
        return
      }

      if (status === google.maps.places.PlacesServiceStatus.OK) {
        if (!results[0].geometry || !results[0].geometry.location) return

        const marker = new google.maps.Marker({
          map,
          position: results[0].geometry.location,
        })

        // @ts-ignore
        const positionLat = marker.position.lat()
        // @ts-ignore
        const positionLng = marker.position.lng()

        setMarkerCenter({ lat: positionLat, lng: positionLng })

        const bounds = new window.google.maps.LatLngBounds({ lat: positionLat, lng: positionLng })
        map.fitBounds(bounds)
      }
    })
  }, [])

  if (!isMapFinded) {
    return (
      <div
        style={{
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#c6c6c6',
          color: 'white',
          fontSize: '80px',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        404
      </div>
    )
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '350px' }}
      center={markerCenter}
      onLoad={onLoad}
      zoom={15}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      <Marker position={markerCenter} />
    </GoogleMap>
  ) : (
    <Skeleton variant="rectangular" width={'100%'} height={350} />
  )
}
