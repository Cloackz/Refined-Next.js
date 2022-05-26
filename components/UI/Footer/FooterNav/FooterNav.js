import Item from '../FooterNavItem/FooterNavItem'
import styles from '../FooterNav/FooterNav.module.scss'

const FooterNav = () => {
	return (
		<nav className={styles.List}>
			<Item text='Services'></Item>
			<Item text='Our Gallery'></Item>
			<Item text='About Us'></Item>
			<Item text='Testimonials'></Item>
			<Item text='FAQs'></Item>
			<Item text='Our Location'></Item>
			<Item text='Contact Us'></Item>
		</nav>
	)
}

export default FooterNav
