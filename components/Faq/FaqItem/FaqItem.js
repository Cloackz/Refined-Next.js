import classNames from 'classnames'
import React, { useState } from 'react'

import styles from './FaqItem.module.scss'

const FaqItem = ({ button, text }) => {
	return (
		<li className={styles.Item}>
			<button className={classNames(styles.Button)}>{button}</button>
			<div className={classNames(styles.Content)}>
				<p className={styles.Text}>{text}</p>
			</div>
		</li>
	)
}

export default FaqItem
