import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import styles from './FaqItem.module.scss'

const FaqItem = ({
	item: { button, text, id, checked = false },
	onClick = null,
}) => {
	return (
		<li className={styles.Item}>
			<button
				className={classNames(styles.Button, checked && styles.Button_active)}
				onClick={() => onClick(id)}
			>
				{button}
			</button>
			<CSSTransition
				classNames='dropdown-animation'
				in={checked}
				timeout={400}
				unmountOnExit
			>
				<div className={classNames(styles.Content)}>
					<p className={styles.Text}>{text}</p>
				</div>
			</CSSTransition>
		</li>
	)
}

export default FaqItem
