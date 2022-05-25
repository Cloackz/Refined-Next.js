import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({
	type = '',
	className = '',
	onClick = null,
	children,
	...attrs
}) => {
	const Tag = attrs.href ? 'a' : 'button'

	return (
		<Tag
			className={classNames(
				styles.Button,
				styles[`Button_${type}`],
				`${className}`
			)}
			onClick={onClick}
		>
			{children}
		</Tag>
	)
}

export default Button
