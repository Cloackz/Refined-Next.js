import React, { useState } from 'react'

import Container from '/components/UI/Container/Container'
import Heading from '/components/UI/Heading/Heading'

import Item from '/components/Faq/FaqItem/FaqItem'

import styles from '/components/Faq/Faq.module.scss'

const Faq = ({ faq: { data, title } }) => {
	const [faqs, setFaqs] = useState()

	return (
		<section className={styles.Block}>
			<Container>
				<div className={styles.Content}>
					<Heading tag='span' text='FAQ' type='sub'></Heading>
					<Heading className={styles.Title} text={title} type='page'></Heading>
					<ul className={styles.List}>
						{data.map(faq => (
							<Item button={faq.button} text={faq.text} key={faq.pk} />
						))}
					</ul>
				</div>
			</Container>
		</section>
	)
}

export default Faq
