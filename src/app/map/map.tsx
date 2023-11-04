'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from '../../../public/icon'

type TravelDestination = {
  name: string
  position: LatLngTuple
}

function Map() {
  const position: LatLngTuple = [35.6809591, 139.7673068]
  const travelDestinations: TravelDestination[] = [
    {
      name: 'Tokyo',
      position: [35.6809591, 139.7673068],
    },
    {
      name: 'Hokkaido',
      position: [43.0407048, 141.3704818],
    },
    {
      name: 'Ishikawa',
      position: [36.5780443, 136.6455965],
    },
    {
      name: 'Yokohama',
      position: [35.4659811, 139.6194871],
    },
    {
      name: 'Shizuoka',
      position: [35.1038421, 139.0730132],
    },
    {
      name: 'Miyagi',
      position: [38.2601316, 140.8798626],
    },
    {
      name: 'Tochigi',
      position: [36.8304273, 139.6967193],
    },
    {
      name: 'Ibaraki',
      position: [36.5972974, 140.4607449],
    },
  ]

  return (
    <MapContainer
      center={position}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {travelDestinations.map((destination) => {
        return (
          <Marker position={destination.position} icon={Icon} key={destination.name}>
            <Popup>{destination.name}</Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default Map
