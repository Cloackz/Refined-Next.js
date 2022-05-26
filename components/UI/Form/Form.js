import classNames from 'classnames'

import Button from '/components/UI/Btn/Btn'

import styles from './Form.module.scss'

const Form = () => {
	return (
		<form className={styles.Block}>
			<div className={styles.Control}>
				<input className={styles.Input} type='text' id='name' />
				<label className={styles.Label} htmlFor='name'>
					Name
				</label>
			</div>
			<div className={styles.Control}>
				<input className={styles.Input} type='text' id='mail' />
				<label className={styles.Label} htmlFor='mail'>
					E-mail
				</label>
			</div>
			<div className={styles.Control}>
				<input className={styles.Input} type='text' id='phone' />
				<label className={styles.Label} htmlFor='phone'>
					Phone
				</label>
			</div>
			<div className={classNames(styles.Control, styles.Control_message)}>
				<textarea
					className={classNames(styles.Input, styles.Input_message)}
					id='message'
				></textarea>
				<label className={classNames(styles.Label, styles.Label_message)}>
					Message
				</label>
			</div>
			<Button className={styles.Button} type='primary'>
				Submit
			</Button>
		</form>
	)
}

export default Form
