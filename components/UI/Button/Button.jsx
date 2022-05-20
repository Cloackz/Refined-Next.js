import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ text = '', type = '', className = '' }) => {
	return (
		<button
			type='button'
			className={classNames(
				styles.Button,
				styles[`Button${type}`],
				`${className}`
			)}
		>
			{text}
		</button>
	)
}

export default Button
