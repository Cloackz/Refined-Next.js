import Heading from '../UI/Heading/Heading'
import Button from '../UI/Button/Button'
import Text from '../UI/Text/Text'
import Container from '../UI/Container/Container'

import Map from '/components/Map/Map'

import styles from './Contact.module.scss'

const Contact = () => {
	return (
		<section className={styles.Block}>
			<div className={styles.Content}>
				<Heading tag='span' text='Contact Us' type='sub'></Heading>
				<Heading
					className={styles.Title}
					text='reach me today'
					type='page'
				></Heading>
				<div className={styles.Wrapper}>
					<Map></Map>
				</div>
			</div>
		</section>
	)
}

export default Contact
