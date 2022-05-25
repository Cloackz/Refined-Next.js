import { useMemo } from 'react'
import Link from 'next/link'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

import styles from './Map.module.scss'
import Button from '../UI/Button/Button'

const Map = () => {
	return (
		<div className={styles.Wrapper}>
			<div className={styles.map} id='map'></div>
			{/* <Link href=''>
				<Button href=''></Button>
			</Link> */}
		</div>
	)
}

export default Map
