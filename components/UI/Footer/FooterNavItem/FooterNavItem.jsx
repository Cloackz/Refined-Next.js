import Link from 'next/link'
import styles from './FooterNavItem.module.scss'

const FooterNavItem = ({ href = '#', text }) => {
	return (
		<Link href={href}>
			<a className={styles.Link}>{text}</a>
		</Link>
	)
}

export default FooterNavItem
