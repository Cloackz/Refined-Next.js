import Image from 'next/image'
import Link from 'next/link'

import styles from './InstagramItem.module.scss'

const Item = ({ path, alt }) => {
	return (
		<li className={styles.Item}>
			<div className={styles.Wrapper}>
				<Link href='#'>
					<a className={styles.Link}>
						<Image
							className={styles.Image}
							src={path}
							alt={alt}
							objectFit='center'
							layout='fill'
						/>
					</a>
				</Link>
			</div>
		</li>
	)
}

export default Item
