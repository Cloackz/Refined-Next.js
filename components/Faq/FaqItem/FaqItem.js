import react, { useState } from 'react'

import styles from './FaqItem.module.scss'

const FaqItem = ({ button, text }) => {
	const [selected, setSelected] = useState()

	return (
		<li className={styles.Item}>
			<button className={styles.Button}>{button}</button>
			<div className={styles.Desc}>
				<p className={styles.Text}>{text}</p>
			</div>
		</li>
	)
}

export default FaqItem
