import styles from './Social.module.scss'

import Icon from '/components/UI/Icon/Icon'

const Social = () => {
	return (
		<div className={styles.Social}>
			<span className={styles.Wrapper}>
				<Icon className={styles.Ico} id='facebook' width='8' height='14' />
			</span>
			<span className={styles.Wrapper}>
				<Icon id='instagram' width='13' height='13' />
			</span>
		</div>
	)
}

export default Social
