import React, { useState, useEffect } from 'react'
import fetchApi from '/utils/api'

import Container from '/components/UI/Container/Container'
import Heading from '/components/UI/Heading/Heading'
import Button from '/components/UI/Button/Button'

import Item from './testimonialsRewievsItem/TestimonialsRewievsItem'
import styles from './Testimonials.module.scss'

const Testimonials = ({
	testimonialsPage: { title, button, length, offset },
	testimonials,
}) => {
	const [reviews, setReviews] = useState(testimonials)
	const [count, setCount] = useState(6)

	useEffect(() => setCount(reviews.length), [reviews])

	const moreReviews = async () => {
		const newTestimonials = await fetchApi(
			`testimonials?_start=${count}&_end=${count + offset}`
		)
		setReviews([...reviews, ...newTestimonials])
	}

	return (
		<section className={styles.Block}>
			<Container>
				<div className={styles.Content}>
					<Heading tag='span' text='Testimonials' type='sub'></Heading>
					<Heading className={styles.Title} text={title} type='page'></Heading>
					<ul className={styles.List}>
						{reviews.map(item => (
							<Item
								title={item.title}
								text={item.text}
								rating={item.rating}
								key={item.pk}
							/>
						))}
					</ul>

					{count < length && (
						<Button
							className={styles.Button}
							onClick={() => moreReviews()}
							type='secondary'
						>
							{button}
						</Button>
					)}
				</div>
			</Container>
		</section>
	)
}

export default Testimonials
