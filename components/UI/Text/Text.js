import classNames from 'classnames'

import styles from './Text.module.scss'

const Text = ({ type = '', className = '', children }) => {
	return (
		<p className={classNames(styles.Content, `${type}`, `${className}`)}>
			{children}
		</p>
	)
}

export default Text
