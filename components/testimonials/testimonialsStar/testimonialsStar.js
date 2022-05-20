import styles from './Testimonials.module.scss'
import Icon from '/components/UI/Icon/Icon'

const testimonialsStar = () => {
	return (
		<li className={styles.Star}>
			<Icon id='star' width='16' height='16' />
		</li>
	)
}

export default testimonialsStar
