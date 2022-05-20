import Image from 'next/image'

import styles from './InstagramItem.module.scss'

const Item = ({ path, alt }) => {
	return (
		<li className={styles.Item}>
			<div className={styles.Wrapper}>
				<Image
					className={styles.Image}
					src={path}
					alt={alt}
					objectFit='center'
					layout='fill'
				/>
			</div>
		</li>
	)
}

export default Item
