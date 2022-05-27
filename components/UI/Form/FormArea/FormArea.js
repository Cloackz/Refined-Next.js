import classNames from 'classnames'
import styles from './FormArea.module.scss'

const FormArea = ({
	data: { name, type, label, id, checked = false },
	onClick = null,
}) => {
	return (
		<div className={styles.Control}>
			<textarea
				className={styles.Input}
				name={name}
				id={label}
				type={type}
				onClick={() => onClick(id)}
			></textarea>
			<label
				className={classNames(styles.Label, checked && styles.Label_active)}
				htmlFor={label}
			>
				{name}
			</label>
		</div>
	)
}

export default FormArea
