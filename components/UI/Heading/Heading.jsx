import classNames from 'classnames'
import styles from './Heading.module.scss'

const Title = ({ text = '', type = '', tag = 'h2', className = '' }) => {
	const Tag = tag
	return (
		<Tag
			className={classNames(
				styles.Heading_main,
				styles[`Heading_${type}`],
				`${className}`
			)}
		>
			{text}
		</Tag>
	)
}

export default Title
