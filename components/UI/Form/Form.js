import React, { useState } from 'react'

import Button from '/components/UI/Btn/Btn'
import Input from '/components/UI/Form/FormInput/FormInput'
import Area from '/components/UI/Form/FormArea/FormArea'

import styles from './Form.module.scss'

const Form = ({ form }) => {
	const [forms, setForms] = useState(form)

	const [inputs, setInputs] = useState('')
	const [error, setError] = useState({})

	const onSubmit = e => {
		e.preventDefault()
	}

	const checkInput = id => {
		const localForms = [...forms]
		const item = localForms.find(el => el.id === id)

		if (item.checked) {
			item.checked = true
		} else {
			localForms.forEach(el => (el.checked = false))
			item.checked = true
		}

		setForms(localForms)
	}

	return (
		<form className={styles.Block} onSubmit={onSubmit}>
			{form.map(input =>
				input.type === 'textarea' ? (
					<Area data={input} onClick={checkInput} key={input.pk} />
				) : (
					<Input data={input} onClick={checkInput} key={input.pk} />
				)
			)}
			<Button className={styles.Button} type='primary'>
				Submit
			</Button>
		</form>
	)
}

export default Form
