import React from 'react'
// @ts-ignore
import * as maptilersdk from '@maptiler/sdk'
import '@maptiler/sdk/dist/maptiler-sdk.css'

import styles from './Map.module.css'

// "https://api.maptiler.com/geocoding/Bern.json?autocomplete=false&fuzzyMatch=true&limit=3&key=YOUR_MAPTILER_API_KEY_HERE"

interface IMapProps {
  city: string
  address: string
}

export const Map: React.FC<IMapProps> = ({ city, address }) => {
  const map = React.useRef(null)
  const mapContainer = React.useRef(null)

  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_KEY

  React.useEffect(() => {
    if (map.current) return // stops map from intializing more than once

    const MAPTILER_BASE_URL = 'https://api.maptiler.com/geocoding/'
    // const placeAddress = "Житомирська область м Житомир вул. Небесної Сотні 10"
    const placeAddress = `${city} ${address}`

    const fetchData = async () => {
      const res = await fetch(
        `${MAPTILER_BASE_URL}${placeAddress}${'.json?autocomplete=false&fuzzyMatch=true&limit=3&key='}${
          import.meta.env.VITE_MAPTILER_KEY
        }`
      )
      const data = await res.json()

      console.log(data)

      const center = data.features[0].center

      if (!center) return

      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.STREETS,
        center: center,
        zoom: 14,
      })

      new maptilersdk.Marker({ color: '#FF0000' }).setLngLat(center).addTo(map.current)
    }

    fetchData()
  }, [14])

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className={styles.map} />
    </div>
  )
}
