import Link from 'next/link'

import styles from './SocialItem.module.scss'

const SocialItem = () => {
	return (
		<li className={styles.Item}>
			<Link href='#'>
				<a className={styles.Link}></a>
			</Link>
		</li>
	)
}

export default SocialItem
