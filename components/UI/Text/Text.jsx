import styles from './Text.module.scss'
import classNames from 'classnames'

const Text = ({ type = '', text = '', className = '' }) => {
	return (
		<p className={classNames(styles.Text, `${type}`, `${className}`)}>{text}</p>
	)
}

export default Text
