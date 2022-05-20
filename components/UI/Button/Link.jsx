import Link from 'next/link'
import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ text = '', type = '', href, className = '' }) => {
	return (
		<Link href={href}>
			<a
				className={classNames(
					styles.Button,
					styles[`Button${type}`],
					`${className}`
				)}
			>
				{text}
			</a>
		</Link>
	)
}

export default Button
