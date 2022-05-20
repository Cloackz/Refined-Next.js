import styles from './ServicesItem.module.scss'

const PriceItem = ({ service = ' ', price = '' }) => {
	return (
		<li className={styles.Item}>
			<span className={styles.Text}>{service}</span>
			<span className={styles.Text}>{price}</span>
		</li>
	)
}

export default PriceItem
