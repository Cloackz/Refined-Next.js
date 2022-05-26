import classNames from 'classnames'
import styles from './Heading.module.scss'

const Title = ({ type = '', tag = 'h2', className = '', children }) => {
	const Tag = tag
	return (
		<Tag className={classNames(styles[`Title_${type}`], `${className}`)}>
			{children}
		</Tag>
	)
}

export default Title
