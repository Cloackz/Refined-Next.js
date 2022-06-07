import classNames from 'classnames'

import styles from './Btn.module.scss'

const Button = ({
	type = '',
	className = '',
	onClick = null,
	children,
	disabled,
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
			disabled={disabled}
		>
			{children}
		</Tag>
	)
}

export default Button
