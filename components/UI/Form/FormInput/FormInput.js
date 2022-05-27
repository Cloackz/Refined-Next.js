import classNames from 'classnames'

import styles from './FormInput.module.scss'

const FormInput = ({
	data: { name, type, label, id, checked = false },
	onClick = null,
	onChange = null,
}) => {
	return (
		<div className={styles.Control}>
			<input
				className={styles.Input}
				type={type}
				id={label}
				name={name}
				onClick={() => onClick(id)}
				// onChange={() => onChange()}
			/>
			<label
				className={classNames(styles.Label, checked && styles.Label_active)}
				htmlFor={label}
			>
				{name}
			</label>
		</div>
	)
}

export default FormInput
