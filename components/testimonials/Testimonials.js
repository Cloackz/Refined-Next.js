import React, { useState } from 'react'

import Container from '/components/UI/Container/Container'
import Heading from '/components/UI/Heading/Heading'
import Button from '/components/UI/Button/Button'

import Item from './testimonialsRewievsItem/TestimonialsRewievsItem'
import styles from './Testimonials.module.scss'

const Testimonials = ({ testimonials: { data, title, button } }) => {
	const [reviews, setReviews] = useState(4)
	const moreReviews = () => {
		setReviews(reviews + reviews)
	}

	const slice = data.slice(0, reviews)

	return (
		<section className={styles.Block}>
			<Container>
				<div className={styles.Content}>
					<Heading tag='span' text='Testimonials' type='sub'></Heading>
					<Heading className={styles.Title} text={title} type='page'></Heading>
					<ul className={styles.List}>
						{slice.map(item => (
							<Item
								title={item.title}
								text={item.text}
								rating={item.rating}
								key={item.pk}
							/>
						))}
					</ul>
					<Button
						className={styles.Button}
						onClick={() => moreReviews()}
						text={button}
						type='Primary'
					></Button>
				</div>
			</Container>
		</section>
	)
}

export default Testimonials
