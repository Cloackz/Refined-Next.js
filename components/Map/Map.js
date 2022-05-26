import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import Link from 'next/link'

import Button from '/components/UI/Btn/Btn'

import styles from './Map.module.scss'

// const MapPage = () => {
// 	const { isLoaded } = useJsApiLoader({
// 		id: 'google-map-script',
// 		googleMapsApiKey: 'AIzaSyAgqDdQWdVL-Cd6YK9CX09euJjW_eKHnMQ',
// 	})
// 	return (
// 		<div className={styles.Mapp}>
// 			isLoaded ? (
// 			<GoogleMap
// 				mapContainerStyle={{ width: '100%', height: '100%' }}
// 				center={{
// 					lat: 42.875194,
// 					lng: -100.550796,
// 				}}
// 				zoom={15}
// 			></GoogleMap>
// 			)
// 		</div>
// 	)
// }

// export default MapPage

const center = {
	lat: 42.875194,
	lng: -100.550796,
}

function MapPage() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyAgqDdQWdVL-Cd6YK9CX09euJjW_eKHnMQ',
	})

	// const [map, setMap] = React.useState(null)

	// const onLoad = React.useCallback(function callback(map) {
	// 	const bounds = new window.google.maps.LatLngBounds(center)
	// 	map.fitBounds(bounds)
	// 	setMap(map)
	// }, [])

	// // const onUnmount = React.useCallback(function callback(map) {
	// // 	setMap(null)
	// // }, [])

	return isLoaded ? (
		<div className={styles.map}>
			<GoogleMap
				mapContainerStyle={{ width: '100%', height: '100%' }}
				center={center}
				zoom={15}
			></GoogleMap>
			<Link href='https://www.google.com/maps/@40.67,-73.94,12z?hl=ru-RU'>
				<Button className={styles.Button} type='primary' href='#'>
					Get Directions
				</Button>
			</Link>
		</div>
	) : (
		<></>
	)
}

export default React.memo(MapPage)
