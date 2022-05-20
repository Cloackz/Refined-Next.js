import styles from './ServicesBox.module.scss'

const PriceBox = ({ title, children }) => {
	return (
		<div className={styles.Box}>
			<h3 className={styles.Title}>{title}</h3>
			<ul className={styles.List}>{children}</ul>
		</div>
	)
}

export default PriceBox
