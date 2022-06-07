import Link from 'next/link'

import Icon from '/components/UI/Icon/Icon'
import Button from '/components/UI/Btn/Btn'

import styles from './SocialItem.module.scss'

const SocialItem = ({ id, width, height }) => {
	return (
		<span className={styles.Wrapper}>
			<Link href='#'>
				<Button className={styles.Link} href>
					<Icon id={id} width={width} height={height} />
				</Button>
			</Link>
		</span>
	)
}

export default SocialItem
