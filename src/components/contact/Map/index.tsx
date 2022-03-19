import GoogleMapReact from 'google-map-react'

import { ReactComponent as MarkerIcon } from '@/assets/marker.svg'

// eslint-disable-next-line
const Marker = (props: any) => (
  <MarkerIcon width='2rem' height='3rem' />
)

const mapKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const keyProp = {
  ...(mapKey && typeof mapKey === 'string' ? { bootstrapURLKeys: { key: mapKey } } : {}),
}

export const Map = () => (
  <section className='h-[350px] sm:h-[500px] w-full'>
    <GoogleMapReact
      {...keyProp}
      defaultCenter={{
        lat: 42.77,
        lng: 18.94,
      }}
      defaultZoom={12}
    >
      <Marker
        lat={42.77558433388258}
        lng={18.949413983848732}
      />
    </GoogleMapReact>
  </section>
)
